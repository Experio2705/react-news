import Header from "./containers/Header/Header"
import Main from "./containers/Body/Main";
import Search from "./containers/search/Search";
import Footer from "./containers/Footer/Footer";
import { useState } from "react";

const App = () => {
  const [name,setname]=useState("");
  const[language,setlanguage]=useState("");
  const[option,setoption]=useState("");
  const[click,setclick]=useState("");

  return (
    <div className="App-main">
      <div><Header/></div>
      <div><Search setname={setname} setlanguage={setlanguage} setoption={setoption} setclick={setclick}/></div>
      <div><Main name={name} language={language} option={option} click={click} setclick={setclick}/></div>
      <div><Footer/></div>
      </div>
  )
}

export default App;