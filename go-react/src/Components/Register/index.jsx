import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// onLoginSuccess is a function that will be called when the user successfully logs in
// Javascript allowed passing functions as arguments to other functions
// It called "callback function"
// Javascript support higher-order functions (HOFs)

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post("http://localhost:5000/users", {
          Name: name,
          Email: email,
          Password: password,
        });
    
        if (response.status === 200) {
          // Registration successful
          toast.success("Registration successful! Welcome aboard!", {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.log("Registration successful");
          // Handle redirection or state update as needed
        } else {
          // Unexpected response status
          toast.error("Unexpected response status. Please try again.", {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.error("Unexpected response status:", response.status);
        }
      }catch (error) {
      // Handle different types of errors
      if (error.response) {
        // The request was made, but the server responded with an error
        toast.error(`Server error: ${error.response.data.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.error("Server error:", error.response.data.message);
      } else if (error.request) {
        // The request was made, but no response was received
        toast.error("No response from the server. Please try again later.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.error("No response from the server");
      } else {
        // Something happened in setting up the request that triggered an error
        toast.error("An unexpected error occurred. Please try again.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.error("Unexpected error:", error.message);
      }
    }
  };

  return (
    <ChakraProvider>
      <Box p={4}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button colorScheme="blue" type="submit">
              Register
            </Button>
          </VStack>
        </form>
      </Box>
    </ChakraProvider>
  );
};

// PropTypes เป็นตัวช่วยในการตรวจสอบค่าที่รับเข้ามาว่ามีค่าตรงตามที่เราต้องการหรือไม่

export default Register;
