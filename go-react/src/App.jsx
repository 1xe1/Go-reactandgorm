import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import ItemFormFind from "./Components/ItemFormFind";
import SignIn from "./Components/SignIn";
import Register from "./Components/Register";
import ItemsList from "./Components/ItemsList";
import 'react-toastify/dist/ReactToastify.css';
import { ChakraProvider, Box } from "@chakra-ui/react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <ChakraProvider>
      <Router>
        <Box p={4} maxW="md" mx="auto" mt={20}>
          <h3 className="text-2xl font-bold mb-4 p-4 bg-blue-500 text-white text-center">My Project</h3>
          <nav className="bg-gray-200 p-4 text-center">
            <Link to="/" className="mr-4">หน้าหลัก</Link>
            <Link to="/signin" className="mr-4">เข้าสู่ระบบ</Link>
            <Link to="/register" className="mr-4">สมัคร</Link>
          </nav>

          <Routes>
            <Route path="/signin" element={<SignIn onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={
              <div className="p-4">
                <div className="card bg-white p-4">
                  {isLoggedIn ? (
                    <>
                      <h2 className="text-green-500">ยินดีต้อนรับ</h2>
                      <div className="card"><ItemsList /></div>
                      <hr className="my-2" />
                      <div className="card w-auto h-auto"><ItemFormFind /></div>
                    </>
                  ) : (
                    <p className="text-red-500">กรุณา Login</p>
                  )}
                </div>
              </div>
            } />
          </Routes>
          <ToastContainer />
        </Box>
      </Router>
    </ChakraProvider>
  );
  
}

export default App;
