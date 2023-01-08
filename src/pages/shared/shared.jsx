import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Searchbar from "../../components/searchbar/searchbar";
import Button from "./../../components/button/button";
import favIcon from "../../assets/images/starred.svg";

import "./shared.css";

function Shared() {
  return (
    <div className="shared">
      <Navbar />
      <div className="shared-func">
        <Searchbar />
        <div className="shared-buttons">
          <Button title="New Product" />
          <Button img={favIcon} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Shared;
