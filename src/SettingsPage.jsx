import React from "react";
import PageHeading from "./components/shared/PageHeading";
import Settings from "./components/settings/Settings";

function SettingsPage(){
    return (
      <div className="settings-page">      
        <PageHeading>SETTINGS</PageHeading>
        <Settings />
      </div>
  
    );
  }
  
  export default SettingsPage;