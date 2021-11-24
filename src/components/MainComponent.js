import React from "react";
import Tabs from "./TabsComponent";
// import MapComponent from "./MapComponent";
import MapExp from "./MapExp";
import MenuComponent from "./MenuComponent";
import TicketsComponent from "./TicketsComponent";
import ContactComponent from "./ContactComponent";

function MainComponent() {
  return (
    <div>
      <div>
        <MenuComponent />
      </div>
      <div>
        <Tabs />
      </div>
      <div>
        {/* <MapComponent /> */}
        <MapExp />
      </div>
      <div>
        <TicketsComponent />
      </div>
      <div>
        <ContactComponent />
      </div>
    </div>
  );
}

export default MainComponent;
