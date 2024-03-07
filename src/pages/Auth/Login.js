import {
  Button,
  CssBaseline,
  FormControl,
  FormLabel,
  Input,
  Link,
  Option,
  Select,
  Sheet,
  Typography,
} from "@mui/joy";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import app from "../../firebase";
import i18n from "../../i18n/i18n";

const Login = ({ onLogin }) => {
  const history = useHistory();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        onLogin();
        history.push("/");
        console.log(user);
        // ...
      })
      .catch((err) => {
        setError(i18n.t("login:error"));
        console.error(err);
      });
  };

  const handleLanguage = (event, lang) => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
    window.location.reload(false);
  };
  return (
    <main className="grid place-items-center h-screen">
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
            <b>{i18n.t("login:welcome")}</b>
          </Typography>
          <Typography level="body-sm">{i18n.t("login:sign_in")}</Typography>
        </div>
        <FormControl>
          <FormLabel>{i18n.t("login:email")}</FormLabel>
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
          <FormLabel>{i18n.t("login:password")}</FormLabel>
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
            {error}
          </Typography>
        )}
        <Button sx={{ mt: 1 /* margin top */ }} onClick={handleLogin}>
          {i18n.t("login:login")}
        </Button>
        <Typography
          endDecorator={<Link href="/sign-up">{i18n.t("login:sign_up")}</Link>}
          fontSize="sm"
          sx={{ alignSelf: "center" }}
        >
          {i18n.t("login:no_account")}
        </Typography>
        <Select
          onChange={handleLanguage}
          defaultValue={localStorage.getItem("lang") ?? "tr"}
          size="sm"
          variant="soft"
        >
          <Option value="tr">TR</Option>
          <Option value="en">EN</Option>
        </Select>
      </Sheet>
    </main>
  );
};
export default Login;
