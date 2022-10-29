import React from "react";
import Hero from "../Component/Elements/Hero";
import Media from "../Component/Elements/Media";
import Introduction from "../Component/Elements/Introduction";
import Tokenprivate from "../Component/Elements/Tokenprivate";
import Tokenallocation from "../Component/Elements/Tokenallocation";
import Token from "../Component/Elements/Token";
import Faqs from "../Component/Utils/Faqs";
function Home() {
  return (
    <div>
      <Hero />
      <Media/>
      <Introduction/>
      <Tokenprivate/>
      <Tokenallocation/>
      <Token/>
      <Faqs/>
    </div>
  );
}

export default Home;
