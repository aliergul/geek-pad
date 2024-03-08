import { Avatar, AvatarGroup, Button, Typography } from "@mui/joy";
import React, { useEffect, useState } from "react";
import i18n from "../../i18n/i18n";
import app from "../../firebase";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

const User = () => {
  const auth = getAuth(app);
  const history = useHistory();
  const [email, setEmail] = useState(null);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.setItem("isLoggedIn", false);
        history.push("/login");
        window.location.reload(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    let userObject = JSON.parse(localStorage.getItem("user"));
    setEmail(userObject?.email);
  }, [email]);

  return (
    <div className="grid justify-center h-40">
      <div className="flex justify-center">
        <AvatarGroup>
          <Avatar src="/broken-image.jpg" size="lg" />
        </AvatarGroup>
      </div>
      <div className="text-center m-3">
        <Typography>{email}</Typography>
      </div>
      <div className="mb-10 flex justify-center">
        <Button
          variant="solid"
          size="sm"
          color="neutral"
          onClick={handleLogout}
          sx={{ color: "#f0f4f8" }}
        >
          {i18n.t("user:logout")}
        </Button>
      </div>
    </div>
  );
};

export default User;
