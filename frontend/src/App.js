import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Track from "./pages/Track";

function App() {
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getData");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/track" element={<Track />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
