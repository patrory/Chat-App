import { Box } from "@chakra-ui/react";
import React from "react";
import SideDrawer from "../component/miscellaneous/SideDrawer";
import { ChatState } from "../context/ChatProvider";

function Chatpage() {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box>
        {/* {user && <MyChats/> }
        {user && <ChatBox/>} */}
      </Box>
    </div>
  );
}

export default Chatpage;
