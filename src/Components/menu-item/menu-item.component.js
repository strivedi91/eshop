import React from "react";
import "./menu-item.component.scss";

export default function MenuItem({ section }) {
  return (
    <div className={`${section.size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${section.imageUrl})`,
        }}
      />
      <div className="content">
        <div className="title">{section.title}</div>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </div>
  );
}
