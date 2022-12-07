// import {
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputRightElement,
//   VStack,
// } from "@chakra-ui/react";
// import { useToast } from "@chakra-ui/react";
// import React, { useState } from "react";
// import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/toast";
import { VStack } from "@chakra-ui/layout";
import axios from "axios";
import { useHistory } from "react-router-dom";
const SignUp = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpasssword, setConfirmPassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [picloading, setpicLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();
  const handleClick = () => setShow(!show);
  const postDetails = (pics) => {
    setpicLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please select an image",
        status: "Warning ",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dw5fwnppn");
      fetch("https://api.cloudinary.com/v1_1/dw5fwnppn/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setpicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setpicLoading(false);
        });
    } else {
      toast({
        title: "Please select an image",
        status: "Warning ",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setpicLoading(false);
      return;
    }
  };

  const submitHandler = () => {
    setpicLoading(true);
    if (!name || !password || !email || !confirmpasssword) {
      toast({
        title: "Fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setpicLoading(false);
      return;
    }
    if (confirmpasssword !== password) {
      toast({
        title: "Password doesnt match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      const { data } = axios.post(
        "/api/user",
        { name, email, password, pic },
        config
      );
      toast({
        title: "Registration Succesfull",
        status: "Success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));

      setpicLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occurred",
        status: "error",
        description: error.response.data.message,
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setpicLoading(false);
    }
  };
  return (
    <VStack spacing="5px" color="black">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your name"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Input>
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your name"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic" isRequired>
        <FormLabel>Upload your picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          placeholder="Enter your name"
          onChange={(e) => postDetails(e.target.files[0])}
        ></Input>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={picloading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
// import React from "react";
// import { useState } from "react";
// import { Button } from "@chakra-ui/button";
// import { FormControl, FormLabel } from "@chakra-ui/form-control";
// import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
// import { useToast } from "@chakra-ui/toast";
// import { VStack } from "@chakra-ui/layout";
// import axios from "axios";
// import { useHistory } from "react-router";
// const SignUp = () => {
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [confirmpassword, setConfirmPassword] = useState();
//   const [password, setPassword] = useState();
//   const [pic, setPic] = useState();
//   const [show, setshow] = useState(false);
//   const [picloading, setpicLoading] = useState(false);
//   const history = useHistory();
//   const toast = useToast();
//   const handleClick = () => {
//     setshow(!show);
//   };

//   const postDeatils = (pics) => {
//     setpicLoading(true);
//     if (pics === undefined) {
//       toast({
//         title: "Please Select an Image",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       return;
//     }
//     if (pics.type === "image/jpeg" || pics.type === "image/png") {
//       const data = new FormData();
//       data.append("file", pics);
//       data.append("upload_preset", "chat-app");
//       data.append("cloud_name", "dw5fwnppn");
//       fetch("https://api.cloudinary.com/v1_1/dw5fwnppn/image/upload", {
//         method: "post",
//         body: data,
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setPic(data.url.toString());
//           setpicLoading(false);
//         })
//         .catch((err) => {
//           console.log(err);
//           setpicLoading(false);
//         });
//     } else {
//       toast({
//         title: "Please Select an Image",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });

//       setpicLoading(false);
//       return;
//     }
//   };
//   const submitHandler = async () => {
//     setpicLoading(true);
//     if (!name || !email || !password || !confirmpassword) {
//       toast({
//         title: "Please Select an Image",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setpicLoading(false);
//       return;
//     }
//     if (password !== confirmpassword) {
//       toast({
//         title: "Password do not match",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       return;
//     }
//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };
//       const { data } = await axios.post(
//         "/api/user",
//         { name, email, password, pic },
//         config
//       );
//       toast({
//         title: "Registration Successfull",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       localStorage.setItem("userInfo", JSON.stringify(data));
//       setpicLoading(false);
//       history.push("/chats");
//     } catch (err) {
//       toast({
//         title: "Error occured",
//         status: "warning",
//         description: err.response.data.message,
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setpicLoading(false);
//     }
//   };
//   return (
//     <VStack spacing="5px">
//       <FormControl id="first-name" isRequired>
//         <FormLabel>Name</FormLabel>
//         <Input
//           placeholder="Enter Your Name"
//           onChange={(e) => setName(e.target.value)}
//         />
//       </FormControl>

//       <FormControl id="email" isRequired>
//         <FormLabel>Email</FormLabel>
//         <Input
//           placeholder="Enter Your Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </FormControl>

//       <FormControl id="password" isRequired>
//         <FormLabel>Password</FormLabel>
//         <InputGroup>
//           <Input
//             type={show ? "text" : "password"}
//             placeholder="Enter Your Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <InputRightElement width="4.5rem">
//             <Button h="1.75rem" size="sm" onClick={handleClick}>
//               {show ? "Hide" : "Show"}
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>

//       <FormControl id="conpassword" isRequired>
//         <FormLabel>Password</FormLabel>
//         <InputGroup>
//           <Input
//             type={show ? "text" : "password"}
//             placeholder="Enter Your confirm Password"
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <InputRightElement width="4.5rem">
//             <Button h="1.75rem" size="sm" onClick={handleClick}>
//               {show ? "Hide" : "Show"}
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>

//       <FormControl id="pic" isRequired>
//         <FormLabel>Upload your Picture</FormLabel>
//         <Input
//           type="file"
//           p={1.5}
//           accept="image/*"
//           onChange={(e) => postDeatils(e.target.files[0])}
//         />
//       </FormControl>
//       <Button
//         colorScheme="blue"
//         width="100%"
//         style={{ marginTop: 15 }}
//         onClick={submitHandler}
//         isLoading={picloading}
//       >
//         Sign Up
//       </Button>
//     </VStack>
//   );
// };

// export default SignUp;

//cloudenary is used for getting the pic in video 9
//https://api.cloudinary.com/v1_1/dgogmrd4x/image/upload
