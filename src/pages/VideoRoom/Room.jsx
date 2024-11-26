import { useEffect, useRef, useState } from "react";
import {
  FaVideo,
  FaMicrophone,
  FaVideoSlash,
  FaMicrophoneSlash,
} from "react-icons/fa"; // استيراد الأيقونات
import AgoraRTC from "agora-rtc-sdk-ng";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomId } = useParams();
  const userName = "my";
  const client = useRef(null);
  const localVideoRef = useRef(null);
  const socket = useRef(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const [localAudioTrack, setLocalAudioTrack] = useState(null); // لتخزين الصوت المحلي
  const [localVideoTrack, setLocalVideoTrack] = useState(null); // لتخزين الفيديو المحلي
  const [isMuted, setIsMuted] = useState(false); // حالة لتحديد ما إذا كان الصوت مفصولًا
  const [isVideoOff, setIsVideoOff] = useState(false); // حالة لتحديد ما إذا كان الفيديو مفصولًا

  useEffect(() => {
    const initAgora = async () => {
      client.current = AgoraRTC.createClient({
        mode: "rtc", // وضع الاتصال (يمكن أن يكون "rtc" أو "live")
        codec: "vp8",
        audioProfile: "high_quality", // تعديل إعدادات الصوت لزيادة الجودة
      });
      socket.current = io("http://localhost:4000", {
        transports: ["websocket"], // استخدام WebSocket فقط
        reconnectionAttempts: 3, // عدد المحاولات لإعادة الاتصال
        timeout: 5000, // الوقت المسموح به للاتصال
      });
      // انضمام إلى الغرفة باستخدام Socket.IO
      socket.current.emit("join-room", { roomId: roomId, userName });

      socket.current.on("user-joined", ({ userName }) => {
        console.log(`${userName} joined the room.`);
      });

      socket.current.on("receive-message", ({ message, userName }) => {
        setMessages((prev) => [...prev, { userName, message }]);
      });

      const response = await fetch(
        `http://localhost:4000/generate-token?channelName=${roomId}`
      );
      const { token, uid } = await response.json();

      await client.current.join(
        "c06e1aedb32c4f39871657647da1c157",
        roomId,
        token,
        uid
      );

      const localTracks = await AgoraRTC.createMicrophoneAndCameraTracks(
        { audioBitrate: 320 }, // زيادة معدل البت للصوت (مثال 320 kbps)
        { videoBitrate: 1000 } // يمكنك تعديل معدل بت الفيديو أيضًا
      );
      localTracks[1].play(localVideoRef.current);
      setLocalAudioTrack(localTracks[0]);
      setLocalVideoTrack(localTracks[1]); // تخزين الفيديو المحلي
      await client.current.publish(localTracks);
      client.current.on("user-published", async (user, mediaType) => {
        console.log("User published:", user);

        // الاشتراك في تدفق المستخدم
        await client.current.subscribe(user, mediaType);

        if (mediaType === "video") {
          // إنشاء عنصر فيديو جديد لعرض الفيديو البعيد
          const remoteVideo = document.createElement("video");
          remoteVideo.autoplay = true;
          remoteVideo.playsInline = true;
          remoteVideo.style.width = "100%";
          remoteVideo.style.transform = "rotateY(180deg)";
          remoteVideo.style.objectFit = "cover";

          if (user.videoTrack) {
            user.videoTrack.play(remoteVideo);
            document.getElementById("remote-videos").append(remoteVideo);
          } else {
            console.error("No video track available for this user.");
          }
        }
        if (mediaType === "audio") {
          client.current.subscribe(user, "audio").then(() => {
            const audioTrack = user.audioTrack;

            audioTrack.play(); // تشغيل الصوت
          });
        }
      });
      client.current.on("user-unpublished", (user) => {
        const videoElement = document.querySelector(
          `video[data-uid="${user.uid}"]`
        );
        if (videoElement) {
          videoElement.remove();
        }
      });
    };

    initAgora();

    return () => {
      if (client.current) {
        client.current.leave();
      }
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [roomId]);

  const handleSendMessage = () => {
    socket.current.emit("send-message", {
      roomId: roomId,
      message,
      userName,
    });
    setMessages((prev) => [...prev, { userName: "You", message }]);
    setMessage("");
  };

  const toggleAudio = async () => {
    if (isMuted) {
      await localAudioTrack.setMuted(false);
    } else {
      await localAudioTrack.setMuted(true);
    }
    setIsMuted(!isMuted);
  };

  const toggleVideo = async () => {
    if (isVideoOff) {
      await localVideoTrack.setEnabled(true);
    } else {
      await localVideoTrack.setEnabled(false);
    }
    setIsVideoOff(!isVideoOff);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 space-y-6">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-shrink-0 w-full md:w-2/5">
            <video
              ref={localVideoRef}
              autoPlay
              muted
              className="w-full h-full object-cover rounded-lg border-4 border-indigo-600 shadow-lg"
            ></video>
          </div>

          <div
            id="remote-videos"
            className="flex flex-wrap gap-4 justify-center w-full md:w-3/5"
          ></div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <h3 className="text-xl font-semibold text-center text-gray-700">
            Chat
          </h3>
          <div
            style={{ height: "150px", overflowY: "auto" }}
            className="bg-white p-2 rounded-lg shadow-sm mb-4"
          >
            {messages.map((msg, idx) => (
              <p key={idx} className="text-sm text-gray-700">
                <strong>{msg.userName}:</strong> {msg.message}
              </p>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              className="w-full p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </div>
        </div>

        {/* الأزرار الخاصة بتفعيل وتعطيل الفيديو والصوت */}
        <div className="flex space-x-4 mt-4">
          <button
            onClick={toggleAudio}
            className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            {isMuted ? <FaMicrophoneSlash /> : <FaMicrophone />}
          </button>
          <button
            onClick={toggleVideo}
            className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            {isVideoOff ? <FaVideoSlash /> : <FaVideo />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Room;
