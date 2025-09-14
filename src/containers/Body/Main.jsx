import "./Main.css"
import { useState,useEffect } from "react"

const Main = ({name,language,option,click,setclick}) => {
    const api_key= "119aa7a94d77bb14001fb539a76d3b76";
    //1f7253b5a30c3f6a6fb06f6dbffb3c18
    //119aa7a94d77bb14001fb539a76d3b76
    const[data,setdata]=useState([]);
    const[loader,setloader]=useState(true);
    let apiUrl = null;
  
    if (option !== "") {
      apiUrl = `https://gnews.io/api/v4/top-headlines?country=${name}&lang=${language}&category=${option}&apikey=${api_key}`;
    } else {
      apiUrl = `https://gnews.io/api/v4/top-headlines?country=${name}&lang=${language}&apikey=${api_key}`;
    }
  
 
    // console.log(name);
    // console.log(language);
    // console.log(option);
    console.log("APP:",click);
    useEffect(()=>{
       if (!click || !apiUrl) return;
       setloader(true);
        fetch(apiUrl)
          .then(res=>res.json())
          .then((json)=>{
            setdata(json);
            setclick(false);
                console.log(json);
            
        })
          .catch((error)=>console.error("Error:",error));
          
    },[click, apiUrl]);
    useEffect(() => {
  console.log("Current data state:", data); 
  setloader(false);
  }, [data]);
  

return (
  <div className="outer">
    <div className="inside">
      {loader ? ( 
        <p className="loader"></p> 
      ) : (
        <>
          <div className="left-side"> 
            <div className="line"></div>
            {data?.articles?.map((articles, index) => {
              if (index % 2 === 0) {
                return (
                  <>
                    <div className="headline" key={index}>
                      <p
                        id="head-line"
                        style={{
                          backgroundImage: `url(${articles.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          color: "white",
                          backgroundRepeat:"no-repeat"
                        }}
                      >
                        {articles.title}
                      </p>
                    </div>
                    <div className="line"></div>
                    <div className="news">
                      <p id="news">{articles.content}</p>
                    </div>
                    <div className="line"></div>
                    <a href={articles.url} id="link" target="_blank">
                      Read more...
                    </a>
                    <div className="line"></div>
                  </>
                );
              }
              return null;
            })}
          </div>

          <div className="right-side">
            <div className="line"></div>
            {data?.articles?.map((articles, index) => {
              if (index % 2 !== 0) {
                return (
                  <>
                    <div className="headline" key={index}>
                      <p
                        id="head-line"
                        style={{
                          backgroundImage: `url(${articles.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          color: "white",
                          backgroundRepeat:"no-repeat"
                        }}
                      >
                        {articles.title}
                      </p>
                    </div>
                    <div className="line"></div>
                    <div className="news">
                      <p id="news">{articles.content}</p>
                    </div>
                    <div className="line"></div>
                    <a href={articles.url} id="link" target="_blank">
                      Read more...
                    </a>
                    <div className="line"></div>
                  </>
                );
              }
              return null;
            })}
          </div>
        </>
      )}
    </div>
  </div>
);
}

export default Main