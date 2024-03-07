import i18n from "./i18n/i18n";

function App() {
  //i18n.changeLanguage("en");
  return <div>{i18n.t("login:nickname")}</div>;
}

export default App;
