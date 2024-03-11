import {
  Alert,
  Box,
  Button,
  Checkbox,
  Modal,
  Rating,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import i18n from "../../i18n/i18n";

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

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const MovieAdd = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const [watched, setWatched] = useState(false);

  const methods = useForm({
    defaultValues: {
      name: "",
      year: "",
      watch: false,
      score: 0,
    },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div>
        <FormProvider {...methods}>
          <form id="movie-form" onSubmit={methods.handleSubmit(onSubmit)}>
            <Box sx={style}>
              <Typography>{i18n.t("movies:name")}</Typography>
              <Controller
                name="name"
                control={methods.control}
                render={({ field }) => (
                  <TextField size="small" className="w-full" {...field} />
                )}
              />
              <div className="mt-4">
                <Typography>{i18n.t("movies:year")}</Typography>
                <Controller
                  name="year"
                  control={methods.control}
                  render={({ field }) => (
                    <TextField size="small" className="w-full" {...field} />
                  )}
                />
              </div>

              <div className="flex mt-4">
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {i18n.t("movies:watch")}
                </Typography>
                <Controller
                  name="watch"
                  control={methods.control}
                  render={({ field }) => (
                    <Checkbox
                      {...field}
                      onChange={(e) => {
                        setWatched(e.target.checked);
                        field.onChange(e);
                      }}
                    />
                  )}
                />
              </div>
              <div className="grid">
                <Typography>{i18n.t("movies:score")}</Typography>
                <Controller
                  name="score"
                  control={methods.control}
                  render={({ field }) => (
                    <StyledRating
                      {...field}
                      defaultValue={2}
                      max={10}
                      getLabelText={(value) =>
                        `${value} Heart${value !== 1 ? "s" : ""}`
                      }
                      precision={0.5}
                      icon={<FavoriteIcon fontSize="inherit" />}
                      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                      disabled={!watched}
                    />
                  )}
                />
                <Button
                  type="submit"
                  className="w-fit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#A495E7",
                    color: "black",
                    marginTop: "0.5rem",
                    ":hover": {
                      backgroundColor: "#A495E7",
                      color: "#white",
                    },
                  }}
                >
                  {i18n.t("movies:add")}
                </Button>
              </div>
              <Alert
                variant="filled"
                severity="info"
                className="mt-4"
                sx={{ backgroundColor: "#DDD9F0", color: "black" }}
              >
                {i18n.t("movies:modal_description")}
              </Alert>
            </Box>
          </form>
        </FormProvider>
      </div>
    </Modal>
  );
};

export default MovieAdd;
