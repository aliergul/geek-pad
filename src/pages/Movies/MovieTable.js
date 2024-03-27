import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import {
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import moment from "moment";
import i18n from "../../i18n/i18n";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "./actions/DeleteModal";
import EditModal from "./actions/EditModal";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const MovieTable = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selected, setSelected] = useState(null);

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
    });

    return () => unsubscribe();
    // eslint-disable-next-line
  }, [userId]);

  return (
    <>
      <div className="mt-2 flex items-center justify-center">
        {loading ? (
          <CircularProgress color="secondary" />
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1500 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "rgb(209 213 219)" }}>
                  <TableCell align="center">
                    {i18n.t("movies:table:name")}
                  </TableCell>
                  <TableCell align="center">
                    {i18n.t("movies:table:year")}
                  </TableCell>
                  <TableCell align="center">
                    {i18n.t("movies:table:watch")}
                  </TableCell>
                  <TableCell align="center">
                    {i18n.t("movies:table:score")}
                  </TableCell>
                  <TableCell align="center">
                    {i18n.t("movies:table:inserttime")}
                  </TableCell>
                  <TableCell align="center">
                    {i18n.t("movies:table:transactions")}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {movies.map((movie) => (
                  <TableRow key={movie.id} hover="true">
                    <TableCell align="center">{movie.name}</TableCell>
                    <TableCell align="center">{movie.year}</TableCell>
                    <TableCell align="center">
                      {movie.watch === true ? (
                        <CheckCircleOutlineIcon color="success" />
                      ) : (
                        <HighlightOffIcon color="error" />
                      )}
                    </TableCell>
                    <TableCell align="center">{movie.score}/10</TableCell>
                    <TableCell align="center">
                      {moment
                        .unix(movie?.inserttime)
                        .format("DD.MM.YYYY, HH:mm")}
                    </TableCell>
                    <TableCell align="center">
                      <Tooltip title={i18n.t("movies:table:edit")}>
                        <Button
                          color="primary"
                          onClick={() => {
                            setEditOpen(true);
                            setSelected(movie);
                          }}
                        >
                          <EditIcon fontSize="small" color="action" />
                        </Button>
                      </Tooltip>

                      <Tooltip title={i18n.t("movies:table:delete")}>
                        <Button
                          color="primary"
                          onClick={() => {
                            setDeleteOpen(true);
                            setSelected(movie);
                          }}
                        >
                          <DeleteIcon fontSize="small" color="action" />
                        </Button>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
      <div>
        <EditModal open={editOpen} setOpen={setEditOpen} movie={selected} />
        <DeleteModal
          open={deleteOpen}
          setOpen={setDeleteOpen}
          movie={selected}
        />
      </div>
    </>
  );
};

export default MovieTable;
