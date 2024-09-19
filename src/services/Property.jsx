import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Property(id) {

 const [json, setData] = useState(id);
 const navigate = useNavigate();


  useEffect(() => {
    fetch("http://localhost:8080/api/properties/" + id, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      }
    )
    .then(response => {
      if (!response.ok) {
        throw new Error("Error when fetching property");
      }
      return response.json();
    })
    .then(json => setData(json))
    .catch(error => {
       console.error("Error when fetching property :", error);
       navigate("/error");
    });
  });

  return json;
}