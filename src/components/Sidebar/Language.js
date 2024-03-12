import { Option, Select } from "@mui/joy";
import React from "react";
import i18n from "../../i18n/i18n";

const Language = () => {
  const handleLanguage = (event, lang) => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
    window.location.reload(false);
  };

  return (
    <div>
      <Select
        onChange={handleLanguage}
        defaultValue={localStorage.getItem("lang") ?? "tr"}
        size="sm"
        variant="soft"
      >
        <Option value="tr">TR</Option>
        <Option value="en">EN</Option>
      </Select>
    </div>
  );
};

export default Language;
