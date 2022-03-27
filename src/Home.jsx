import React from "react";
import Header from "./Header";
import "./Home.css"
import Footer from "./Footer";
import complain from "./image/complaints.jpg"


function Home (){
    return(
     <><Header />
      <img src={complain}></img>
      <h3>Welcome to our complaint portal.<br />
      Steps to submit your complain :- <br />
      1) Click on the Submit a complain button <br />
      2) Answer the basic question<br />
      3) Submit your proofs<br />
      4) Done your complain will be recorded without any personal information being shared</h3>
      <Footer /></>
          );
                   
}
export default Home;