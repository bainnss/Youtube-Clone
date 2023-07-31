import React from "react";
import Navbar from "./Navbar.jsx";
import Cards from "./Cards.jsx";
import { YData } from "./YData.jsx";


let App = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        {
          YData.map((el) => {
            return <Cards
              key={el.id}
              link={el.link}
              imgsrc={el.imgsrc}
              channelImgsrc={el.channelImgsrc} videoTitle={el.videoTitle}
              channelName={el.channelName}
              views={el.views}
              time={el.time} />

          })
        }



      </div>
    </>
  )
}

export default App;
