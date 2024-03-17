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
  styled,
  tableCellClasses,
} from "@mui/material";
import moment from "moment";
import i18n from "../../i18n/i18n";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "./actions/DeleteModal";
import EditModal from "./actions/EditModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const MovieTable = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
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
                  <StyledTableCell align="center">
                    {i18n.t("movies:table:name")}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {i18n.t("movies:table:year")}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {i18n.t("movies:table:watch")}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {i18n.t("movies:table:score")}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {i18n.t("movies:table:inserttime")}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {i18n.t("movies:table:transactions")}
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {movies.map((movie) => (
                  <StyledTableRow
                    key={movie.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell align="center">
                      {movie.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {movie.year}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {movie.watch}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {movie.score}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {moment
                        .unix(movie?.inserttime)
                        .format("DD.MM.YYYY, HH:mm")}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Tooltip title={i18n.t("movies:table:edit")}>
                        <Button
                          color="primary"
                          onClick={() => setEditOpen(true)}
                        >
                          <EditIcon fontSize="small" color="action" />
                        </Button>
                      </Tooltip>

                      <Tooltip title={i18n.t("movies:table:delete")}>
                        <Button
                          color="primary"
                          onClick={() => setDeleteOpen(true)}
                        >
                          <DeleteIcon fontSize="small" color="action" />
                        </Button>
                      </Tooltip>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
      <div>
        <EditModal open={editOpen} setOpen={setEditOpen} />
        <DeleteModal open={deleteOpen} setOpen={setDeleteOpen} />
      </div>
    </>
  );
};

export default MovieTable;
