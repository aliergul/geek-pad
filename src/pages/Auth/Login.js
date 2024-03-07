import {
  Button,
  CssBaseline,
  FormControl,
  FormLabel,
  Input,
  Link,
  Sheet,
  Typography,
} from "@mui/joy";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import app from "../../firebase";

const Login = ({ onLogin }) => {
  const history = useHistory();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          onLogin();
          history.push("/");
          console.log(user);
          // ...
        }
      );
    } catch (err) {
      console.error(err);
    }
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
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm">Sign in to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>Email</FormLabel>
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
          <FormLabel>Password</FormLabel>
          <Input
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button sx={{ mt: 1 /* margin top */ }} onClick={handleLogin}>
          Log in
        </Button>
        <Typography
          endDecorator={<Link href="/sign-up">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: "center" }}
        >
          Don&apos;t have an account?
        </Typography>
      </Sheet>
    </main>
  );
};
export default Login;
