import {
  Button,
  CssBaseline,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography,
} from "@mui/joy";
import React, { useState } from "react";
import i18n from "../../i18n/i18n";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase";
import { Box, Snackbar } from "@mui/material";
import { motion } from "framer-motion";

const SignUp = () => {
  const history = useHistory();
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [snackbar, setSnackbar] = useState(false);

  const handleBack = () => {
    history.goBack();
  };

  const handleSignup = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSnackbar(true);
        setTimeout(() => {
          setSnackbar(false);
          history.push("/login");
        }, 1000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid place-items-center h-screen"
    >
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: "auto", // margin left & right
          my: 4, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>{i18n.t("signup:title")}</b>
          </Typography>
        </div>
        <FormControl>
          <FormLabel>{i18n.t("signup:email")}</FormLabel>
          <Input
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>{i18n.t("signup:password")}</FormLabel>
          <Input
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        {error && (
          <Typography color="danger" sx={{ mt: 1 }}>
            {i18n.t("signup:error")}
          </Typography>
        )}
        <div className="flex justify-center gap-x-10">
          <Button
            variant="soft"
            sx={{ mt: 1 /* margin top */ }}
            onClick={handleBack}
          >
            {i18n.t("signup:back")}
          </Button>
          <Button
            variant="solid"
            sx={{ mt: 1 /* margin top */ }}
            onClick={handleSignup}
          >
            {i18n.t("signup:title")}
          </Button>
        </div>
      </Sheet>
      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={snackbar}
          autoHideDuration={3000}
          message={i18n.t("signup:success")}
        />
      </Box>
    </motion.main>
  );
};

export default SignUp;
