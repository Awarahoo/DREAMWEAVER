import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <div>
        hello from frontend
      </div>
      <div>
        {data} from backend
      </div>
    </div>
  );
}

export default App;
