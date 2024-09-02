import { useEffect, useState } from "react";

export default function Fetcher() {
 const [dataList, setDataList] = useState([]);

  useEffect(() => {   
    const data = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/properties");
        const data = await response.json();
        setDataList(data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    data();
  }, []);

  return dataList;
}