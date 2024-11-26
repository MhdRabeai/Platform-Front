import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainRoom = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    if (roomId.trim()) {
      navigate(`/room/${roomId}`);
    }
  };

  const handleCreateRoom = () => {
    const newRoomId = Math.random().toString(36).substring(2, 10); // توليد معرف غرفة عشوائي
    navigate(`/room/${newRoomId}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Video Rooms</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button onClick={handleJoinRoom}>Join Room</button>
      </div>
      <p>or</p>
      <button onClick={handleCreateRoom}>Create New Room</button>
    </div>
  );
};

export default MainRoom;
