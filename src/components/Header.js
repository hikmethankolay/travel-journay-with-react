import React from "react";
import {ReactComponent as Worldicon} from "../images/world-icon.svg";

export default function Header() {
    return(
        <div className="header">
            <Worldicon/>
            <p className="page-title">My Travel Journal</p>
        </div>
    );
}