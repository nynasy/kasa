import { useEffect, useState } from "react";

export default function Property(id) {
  console.log(id);

 const [json, setData] = useState("");

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
        throw new Error("Error when fetching properties");
      }
      return response.json();
    })
    .then(json => setData(json))
    .catch(error => console.error("Error when fetching properties :", error));
  }, [id]);

  return json;
}