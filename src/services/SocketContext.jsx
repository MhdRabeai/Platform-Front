// /* eslint-disable react/prop-types */
// import { createContext, useState, useRef, useEffect } from "react";
// import { io } from "socket.io-client";
// import Peer from "peerjs";

// const SocketContext = createContext();

// const socket = io("http://localhost:4000", {
//   transports: ["websocket"],
// });

// const ContextProvider = ({ children }) => {
//   const [stream, setStream] = useState(null);
//   const [me, setMe] = useState("");
//   const [call, setCall] = useState({});
//   const [callAccepted, setCallAccepted] = useState(false);
//   const [callEnded, setCallEnded] = useState(false);
//   const [Name, setName] = useState("");
//   const myVideo = useRef();
//   const userVideo = useRef();
//   const connectionRef = useRef();
//   const peerInstance = useRef(null);
//   useEffect(() => {
//     // الحصول على فيديو وصوت المستخدم
//     navigator.mediaDevices
//       .getUserMedia({
//         video: true,
//         audio: true,
//       })
//       .then((currentStream) => {
//         setStream(currentStream);
//         if (myVideo.current) {
//           myVideo.current.srcObject = currentStream;
//         }
//       });

//     // إنشاء معرف Peer
//     const peer = new Peer("localhost", {
//       iceServers: [
//         {
//           urls: ["stun:stun.l.google.com:19302"],
//         },
//       ],
//     });

//     peer.on("open", (id) => {
//       console.log("PeerJS connected with ID: " + id);
//     });

//     peer.on("error", (err) => {
//       console.error("PeerJS error:", err);
//     });
//     peer.on("call", (incomingCall) => {
//       setCall({ isReceivedCall: true, from: incomingCall.peer });

//       incomingCall.answer(stream);

//       incomingCall.on("stream", (currentStream) => {
//         if (userVideo.current) {
//           userVideo.current.srcObject = currentStream;
//         }
//       });

//       connectionRef.current = incomingCall;
//     });

//     peerInstance.current = peer;

//     // الاستماع إلى الحدث `calluser` من الخادم
//     socket.on("calluser", ({ from }) => {
//       setCall({ isReceivedCall: true, from });
//     });

//     return () => {
//       peer.destroy();
//     };
//   }, [stream]);

//   const answerCall = () => {
//     setCallAccepted(true);

//     const call = peerInstance.current.call(call.from, stream);

//     call.on("stream", (currentStream) => {
//       if (userVideo.current) {
//         userVideo.current.srcObject = currentStream;
//       }
//     });

//     connectionRef.current = call;
//   };

//   const callUser = (id) => {
//     const call = peerInstance.current.call(id, stream);

//     call.on("stream", (currentStream) => {
//       if (userVideo.current) {
//         userVideo.current.srcObject = currentStream;
//       }
//     });

//     connectionRef.current = call;
//   };

//   const leaveCall = () => {
//     setCallEnded(true);

//     if (connectionRef.current) {
//       connectionRef.current.close();
//     }

//     window.location.reload();
//   };

//   return (
//     <SocketContext.Provider
//       value={{
//         call,
//         callAccepted,
//         callEnded,
//         stream,
//         myVideo,
//         userVideo,
//         Name,
//         setName,
//         me,
//         callUser,
//         leaveCall,
//         answerCall,
//       }}
//     >
//       {children}
//     </SocketContext.Provider>
//   );
// };

// export { ContextProvider, SocketContext };
