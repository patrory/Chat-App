import axios from "axios";
import React, { useEffect } from "react";

function ChatPage() {
  const fetchChat = async () => {
    const data = await axios.get("/");
    console.log(data);
  };

  useEffect(() => {
    fetchChat();
  }, []);
  return <div>Chatpage - </div>;
}

export default ChatPage;
