import React, { FC } from "react";
import NavBar from "../NavBar";

const DashLayout: FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div>
        <div className="sidebar">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DashLayout;
