import React, { useEffect, useState } from "react";
import { child, get, getDatabase, ref } from "firebase/database";

const MovieTable = () => {
  const [movies, setMovies] = useState([]);
  const userId = JSON.parse(localStorage.getItem("user"))?.uid;
  const dbRef = ref(getDatabase());

  useEffect(() => {
    get(child(dbRef, `${userId}/movies`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let dataArray = Object.entries(snapshot.val()).map(
            ([id, values]) => ({
              id,
              ...values,
            })
          );
          setMovies(dataArray);
        } else {
          console.error("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // eslint-disable-next-line
  }, [movies]);

  return <div>test</div>;
};

export default MovieTable;
