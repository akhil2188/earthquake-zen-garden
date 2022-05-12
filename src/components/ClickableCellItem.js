import React from "react";
import { Link } from "react-router-dom";



export const ClickableItem = (props) => {
    return(
        
        <Link to={`/details/${props.row.id}`}>{props.children}</Link>
      
    );
}