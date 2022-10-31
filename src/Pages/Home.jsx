import React from "react";
import Hero from "../Component/Elements/Hero";
import Media from "../Component/Elements/Media";
import Introduction from "../Component/Elements/Introduction";
import Gateway from "../Component/Elements/Gateway";
import Tokenprivate from "../Component/Elements/Tokenprivate";
import Tokenallocation from "../Component/Elements/Tokenallocation";
import Token from "../Component/Elements/Token";
import Roadmap from "../Component/Elements/Roadmap";
import Faqs from "../Component/Utils/Faqs";
function Home() {
  return (
    <div>
      <Hero />
      <Media/>
      <Introduction/>
      <Gateway/>
      <Tokenprivate/>
      <Tokenallocation/>
      <Token/>
      <Roadmap/>
      <Faqs/>
    </div>
  );
}

export default Home;
