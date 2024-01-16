// eslint-disable-next-line no-unused-vars
import React, {
    useState,
    useEffect,
  } from "react";
  import axios from "axios";
  
  // coba terapin API BE yang di vercel
  const TestAPI = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://bank-modern-react-be.vercel.app/test"
          );
          setData(response.data);
        } catch (error) {
          console.error(
            "Error fetching data:",
            error
          );
        }
      };
  
      fetchData();
    }, []);
  
    return <div>{data}</div>;
  };
  
  export default TestAPI;
  