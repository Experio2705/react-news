import { useState } from "react";
import "./Search.css";

const Search = ({setname,setlanguage,setoption,setclick}) => {
    const [fname,getname]=useState([]);
    let name;
    let optionn;
    let lang;
    let clicke=false;
    const handlename=(value)=>{
        getname(value)
    }
    const calculateoption=(e)=>{
        optionn=e;
        setoption(optionn);
        // console.log(optionn);
    }
    const clicked=()=>{
        name=changename(fname);
        lang=langua(fname);
        setname(name);
        setlanguage(lang);
        clicke=true;
        console.log(clicke)
        setclick(clicke);
        // console.log(name);
        // console.log(lang);
    }
    console.log(clicke);
    const changename = (count) => {
         name = count.trim().toLowerCase();

        if (name === "australia" || name === "Australia") {
            return "au";
        } else if (name === "brazil" || name === "Brazil") {
            return "br";
        } else if (name === "canada" || name === "Canada") {
            return "ca";
        } else if (name === "china" || name === "China") {
            return "cn";
        } else if (name === "egypt" || name === "Egypt") {
            return "eg";
        } else if (name === "france" || name === "France") {
            return "fr";
        } else if (name === "germany" || name === "Germany") {
            return "de";
        } else if (name === "greece" || name === "Greece") {
            return "gr";
        } else if (name === "hong kong" || name === "Hong Kong") {
            return "hk";
        } else if (name === "india" || name === "India") {
            return "in";
        } else if (name === "ireland" || name === "Ireland") {
            return "ie";
        } else if (name === "israel" || name === "Israel") {
            return "il";
        } else if (name === "italy" || name === "Italy") {
            return "it";
        } else if (name === "japan" || name === "Japan") {
            return "jp";
        } else if (name === "netherlands" || name === "Netherlands") {
            return "nl";
        } else if (name === "norway" || name === "Norway") {
            return "no";
        } else if (name === "pakistan" || name === "Pakistan") {
            return "pk";
        } else if (name === "peru" || name === "Peru") {
            return "pe";
        } else if (name === "philippines" || name === "Philippines") {
            return "ph";
        } else if (name === "portugal" || name === "Portugal") {
            return "pt";
        } else if (name === "romania" || name === "Romania") {
            return "ro";
        } else if (name === "russian federation" || name === "Russia" || name==="russia") {
            return "ru";
        } else if (name === "singapore" || name === "Singapore") {
            return "sg";
        } else if (name === "spain" || name === "Spain") {
            return "es";
        } else if (name === "sweden" || name === "Sweden") {
            return "se";
        } else if (name === "switzerland" || name === "Switzerland") {
            return "ch";
        } else if (name === "taiwan" || name === "Taiwan") {
            return "tw";
        } else if (name === "ukraine" || name === "Ukraine") {
            return "ua";
        } else if (name === "united kingdom" || name === "United Kingdom" || name==="England" || name==="england") {
            return "gb";
        } else if (name === "united states" || name === "United States" || name === "USA" || name === "usa") {
            return "us";
        } else if (name === "afghanistan" || name === "Afghanistan") {
            return "af";
        } else if (name === "austria" || name === "Austria") {
            return "at";
        } else if (name === "bangladesh" || name === "Bangladesh") {
            return "bd";
        } else {
            console.log( "Country not found");
        }
        console.log(name)
    };

    const langua=(count)=>{
        let name = count.trim().toLowerCase();

        if (name === "australia" || name === "Australia") {
            return "en";
        } else if (name === "brazil" || name === "Brazil") {
            return "pt";
        } else if (name === "canada" || name === "Canada") {
            return "en";
        } else if (name === "china" || name === "China") {
            return "zh";
        } else if (name === "egypt" || name === "Egypt") {
            return "ar";
        } else if (name === "france" || name === "France") {
            return "fr";
        } else if (name === "germany" || name === "Germany") {
            return "de";
        } else if (name === "greece" || name === "Greece") {
            return "el";
        } else if (name === "hong kong" || name === "Hong Kong") {
            return "zh";
        } else if (name === "india" || name === "India") {
            return "en";
        } else if (name === "ireland" || name === "Ireland") {
            return "en";
        } else if (name === "israel" || name === "Israel") {
            return "he";
        } else if (name === "italy" || name === "Italy") {
            return "it";
        } else if (name === "japan" || name === "Japan") {
            return "ja";
        } else if (name === "netherlands" || name === "Netherlands") {
            return "nl";
        } else if (name === "norway" || name === "Norway") {
            return "no";
        } else if (name === "pakistan" || name === "Pakistan") {
            return "en";
        } else if (name === "peru" || name === "Peru") {
            return "es";
        } else if (name === "philippines" || name === "Philippines") {
            return "en";
        } else if (name === "portugal" || name === "Portugal") {
            return "pt";
        } else if (name === "romania" || name === "Romania") {
            return "ro";
        } else if (name === "russian federation" || name === "Russia" || name==="russia") {
            return "ru";
        } else if (name === "singapore" || name === "Singapore") {
            return "en";
        } else if (name === "spain" || name === "Spain") {
            return "es";
        } else if (name === "sweden" || name === "Sweden") {
            return "sv";
        } else if (name === "switzerland" || name === "Switzerland") {
            return "de";
        } else if (name === "taiwan" || name === "Taiwan") {
            return "zh";
        } else if (name === "ukraine" || name === "Ukraine") {
            return "uk";
        } else if (name === "united kingdom" || name === "United Kingdom"|| name==="England" || name==="england") {
            return "en";
        } else if (name === "united states" || name === "United States" || name === "USA" || name === "usa") {
            return "en";
        } else if (name === "afghanistan" || name === "Afghanistan") {
            return "en";
        } else if (name === "austria" || name === "Austria") {
            return "en";
        } else if (name === "bangladesh" || name === "Bangladesh") {
            return "en";
        } else {
            console.log( "Country not found");
        }
    }
  return (
    <div className="search-main">
        <div className="search-in">
            <div className="upper-two">
                <div className="search-box">
                    <input type="text" id="enter" placeholder="Enter Country Name"
                        onChange={(e)=>handlename(e.target.value)}
                    ></input>
                </div>
                <div className="checkbox">
                    <label htmlFor="genre" className="genre">Genre</label>
                    <select id="genre-select" className="drop-down" onChange={(e)=>calculateoption(e.target.value)}>
                        <option value="none">None</option>
                        <option value="politics">Politics News</option>
                        <option value="business">Business News</option>
                        <option value="sports">Sports News</option>
                        <option value="technology">Technology News</option>
                        <option value="entertainment">Entertainment News</option>
                        <option value="health">Health News</option>
                        <option value="science">Science News</option>
                        <option value="world">World News</option>
                        <option value="local">Local News</option>
                    </select>
                </div>
            </div>
            <div className="button-click">
                <button id="button-click" onClick={()=>clicked()} >Get News</button>
            </div>
        </div>
    </div>
  )
}

export default Search