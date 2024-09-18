import { useEffect, useState } from "react";

export default function Properties() {
 const [dataList, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error when fetching properties");
      }
      return response.json();
    })
    .then(data => setData(data))
    .catch(error => console.error("Error when fetching properties :", error));
  }, []);

  return dataList;
}