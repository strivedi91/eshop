import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.component.scss";

export const DirectoryMenu = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem key={section.id} section={section}></MenuItem>
      ))}
    </div>
  );
};
