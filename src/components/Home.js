import React from "react";
import '../css/Home.css'
import { TableComponent } from "./Table";

export const Home = ({data}) => {

    return(
        <div className="home">
            <TableComponent data={data} />
        </div>
        
    )
}