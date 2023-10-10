import React from "react";
import css from "./css/Sidebar.module.css"


function Sidebar() {
    return (
        <div className={css.sidebar} >
            <a href="/"> MyPhotos</a>
            <a href="/"> My Illustrations</a>
            <a href="/"> My Paintings</a>
        </div>
    )
}

export default Sidebar;
