import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import moment from "moment";

const MovieTable = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = JSON.parse(localStorage.getItem("user"))?.uid;
  const dbRef = ref(getDatabase(), `${userId}/movies`);

  useEffect(() => {
    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const dataArray = Object.entries(snapshot.val()).map(
          ([id, values]) => ({
            id,
            ...values,
          })
        );
        setMovies(dataArray);
      } else {
        console.error("No data available");
      }
      setLoading(false);
      console.log(movies);
    });

    return () => unsubscribe();
    // eslint-disable-next-line
  }, [userId]);

  return (
    <div className="mt-2 flex items-center justify-center">
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1500 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "rgb(209 213 219)" }}>
                <TableCell align="center">isim</TableCell>
                <TableCell align="center">yıl</TableCell>
                <TableCell align="center">izledim</TableCell>
                <TableCell align="center">skor</TableCell>
                <TableCell align="center">eklenme tarihi</TableCell>
                <TableCell align="center">işlemler</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies.map((movie) => (
                <TableRow
                  key={movie.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{movie.name}</TableCell>
                  <TableCell align="center">{movie.year}</TableCell>
                  <TableCell align="center">{movie.watch}</TableCell>
                  <TableCell align="center">{movie.score}</TableCell>
                  <TableCell align="center">
                    {moment.unix(movie?.inserttime).format("DD.MM.YYYY, HH:mm")}
                  </TableCell>
                  <TableCell align="center">edit,sil</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default MovieTable;
