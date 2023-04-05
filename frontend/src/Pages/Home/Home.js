// import React, { useContext } from "react";
// import { store } from "../../Utility/Details";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
//   const [details, setDetails] = useContext(store);

const [data, setData] = useState([]);

useEffect(() => {
  fetch("http://localhost:3400/")
  .then(res => res.json())
  .then(data => { setData(data); console.log(data)})
 
},[])
  return (
    <div className="main_common">
      <div className="TopPoster__div">
        <div className="TopPoster__big">
          <img
            src={"https://wallpapercave.com/wp/wp8544430.jpg"}
            width={500}
            height={450}
            alt={"image not found"}
          />
          <p>
            <span>Fort - </span>
            <span>Raigad...</span>
          </p>
        </div>
        <div className="TopPoster__small">
          <img
            src={
              "https://assets.cntraveller.in/photos/61266a6bce6a07f2ba18d750/master/w_1600,c_limit/Lohagad.jpg"
            }
            width={250}
            height={220}
            alt={"image not found"}
          />
          <p>
            <span>Fort - </span>
            <span>Lohgad...</span>
          </p>

          <img
            src={
              "https://assets.cntraveller.in/photos/61266e7f15e6c3223c8901cc/master/w_1600,c_limit/T4P740.jpg"
            }
            width={250}
            height={220}
            alt={"image not found"}
          />
          <p>
            <span>Fort - </span>
            <span>Sindhudurg...</span>
          </p>
        </div>
      </div>
      <h2 className="home_h1">Latest Travel stories...</h2>

      <div className="common_latest">
        {data
          .filter((val) => {
            return val.category === "Fort";
          })
          .map((value,index) => (
            <div key={index}>
              <div >
              <Link to={`/article/${value.id}`}>
                <img src={value.Image} width={200} height={200} alt={"image not found"}/></Link>
                <p>{value.title}</p>
              </div>
            </div>
          ))}
      </div>

      <h2 className="home_h1">Latest Bollywood stories...</h2>

      <div className="common_latest">
        {data
          .filter((val) => {
            return val.subcat === "Bollywood";
          })
          .map((value,index) => (
            <div key={index}>
              <div >
              <Link to={`/article/${value.id}`}>
              <img src={value.Image} width={200} height={200} alt={"image not found"}/></Link>
                <p>{value.title}</p>    
                         </div>
            </div>
          ))}
      </div>

      <h2 className="home_h1">Latest Hollywood stories...</h2>

      <div className="Hollywood-div-latest-add">
        <div>
          {data
            .filter((val) => {
              return val.subcat === "Hollywood";
            })
            .map((value,index) => (
              <div key={index}>
                <div className="Hollywood_latest" >
                <Link to={`/article/${value.id}`}>
                <img src={value.Image} width={200} height={200} alt={"image not found"}/></Link>
                <p className="Hollywood_latest_p"> <span>{value.title}:</span>
                  &nbsp; &nbsp;&nbsp;
                <span>{value.description.slice(0,60)}</span> </p> 
                  {/* <p>{value.description.slice(1,150)}</p> */}
                </div>
              </div>
            ))}
        </div>

        <div>
          <div className="home_add">Add</div>
          <div className="home_add">Add</div>
        </div>
      </div>

      <h2 className="home_h1">Latest Fitness stories...</h2>

      <div className="common_latest">
        {data
          .filter((val) => {
            return val.subcat === "Fitness";
          })
          .map((value,index) => (
            <div key={index}>
              <div >
              <Link to={`/article/${value.id}`} >

              <img src={value.Image} width={200} height={200} alt={"image not found"}/></Link>
                <p>{value.title}</p>
              </div>
            </div>
          ))}
      </div >

      <h2 className="home_h1">Latest Food stories...</h2>

      <div className="common_latest">
        {data
          .filter((val) => {
            return val.subcat === "Food";
          })
          .map((value,index) => (
            <div key={index}>
              <div >
              <Link to={`/article/${value.id}`}>
              <img src={value.Image} width={200} height={200} alt={"image not found"} /></Link>

                <p>{value.title}</p>
              </div>
            </div>
          ))}
      </div>

      <h2 className="home_h1">Latest Technology stories...</h2>

      <div className="common_latest">
        {data
          .filter((val) => {
            return val.subcat === "Technology";
          })
          .map((value, index) => (
            <div  key={index}>
              <div>
                <Link to={`/article/${value.id}`}>
                <img src={value.Image} width={200} height={200} alt={"image not found"}/></Link>

                <p>{value.title}</p>
              </div>
            </div>
          ))}
      </div>


    </div>
  );
}

export default Home;



