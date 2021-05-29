import React, { FC } from "react";
import NavBar from "../NavBar";
import "../css/layout.css";
import { paths } from "../../routes/paths";
import { Link, useHistory, useLocation } from "react-router-dom";

const links = [
  {
    path: paths.tasks,
    label: "Tasks",
  },
  {
    path: paths.books,
    label: "Books",
  },
  {
    path: paths.poems,
    label: "Poems",
  },
  {
    path: paths.videos,
    label: "Videos",
  },
];

const DashLayout: FC = ({ children }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <div>
      <NavBar />
      <div className="layout">
        <div className="sidebar">
          <ul>
            {links.map(({ label, path }, i) => {
              return (
                <li
                  onClick={() => history.push(path)}
                  className={pathname === path ? "active" : ""}
                  key={i}
                >
                  <Link to={path}>{label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DashLayout;
