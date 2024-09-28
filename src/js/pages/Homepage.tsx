import React, { useState } from "react";
import NotesCard from "../components/NotesCard";
import NavBar from "../components/NavBar";
import { topbarMenuItems } from "../common";
import CollectionContainer from "../containers/Collection/CollectionContainer";
import ChartContainer from "../containers/Chat/ChatContainer";

const HomePage = () => {
  const [selectedMenu, setSelectedMenu] = useState<any>(topbarMenuItems[1]);

  const renderBody = () => {
    switch (selectedMenu.id) {
      case "Collection":
        return <CollectionContainer />
      case "Chat":
        return <ChartContainer />;
    }
  };

  return (
    <div>
      <NavBar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      {renderBody()}
    </div>
  );
};

export default HomePage;
