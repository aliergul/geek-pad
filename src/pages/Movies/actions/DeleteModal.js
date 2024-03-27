import { Box, Button, Modal, Snackbar, Typography } from "@mui/material";
import React, { useState } from "react";
import i18n from "../../../i18n/i18n";
import { ref, remove } from "firebase/database";
import { database } from "../../../firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DeleteModal = ({ open, setOpen, movie }) => {
  const userId = JSON.parse(localStorage.getItem("user"))?.uid;
  const handleClose = () => setOpen(false);
  const [snackbar, setSnackbar] = useState(false);

  const handleDelete = () => {
    console.log(userId);
    const movieRef = ref(database, `${userId}/movies/${movie.id}`);
    remove(movieRef)
      .then(() => {
        setSnackbar(true);
        setOpen(false);
      })
      .catch((error) => {
        alert("Veri silinirken hata oluştu: ", error);
      });
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {i18n.t("movies:delete_title")}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span
              dangerouslySetInnerHTML={{
                __html: i18n.t("movies:delete_description", {
                  movie: movie?.name,
                }),
              }}
            />
          </Typography>

          <div className="flex justify-end gap-x-2 mt-10">
            <Button
              variant="contained"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              {i18n.t("movies:cancel")}
            </Button>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={handleDelete}
            >
              {i18n.t("movies:table:delete")}
            </Button>
          </div>
        </Box>
      </Modal>
      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={snackbar}
          autoHideDuration={3000}
          message={i18n.t("signup:success")}
        />
      </Box>
    </>
  );
};

export default DeleteModal;
