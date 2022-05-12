import React from "react";
import { getEarthQuakeDataById } from '../data/EarthQuakeData';
import '../css/Details.css'

export const Detail = (props) => {

    const data = getEarthQuakeDataById(props.dataId);
    if(data === null){
        return (<div>Data not found.</div>);
    }
    
    const fullDateTime = (date) => {
        let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        var d = new Date(date);
        var newDate = d.toLocaleString([], options);
        return newDate;
    }

    return (
        <div>
            <div className="profileData">
                 <h3>{data.properties.title}</h3>
                <div className="detail-content">
                    <table>
                        <tbody>
                            <tr>
                                <td className="item-label">Title</td>
                                <td className="item-data">{data.properties.title}</td>
                            </tr>
                            <tr>
                                <td className="item-label">Magnitude</td>
                                <td className="item-data">{data.properties.mag}</td>
                            </tr>
                            <tr>
                                <td className="item-label">Time</td>
                                <td className="item-data">{fullDateTime(data.properties.time)}</td>
                            </tr>
                            <tr>
                                <td className="item-label">Status</td>
                                <td className="item-data">{data.properties.status}</td>
                            </tr>
                            <tr>
                                <td className="item-label">Tsunami</td>
                                <td className="item-data">{data.properties.tsunami}</td>
                            </tr>
                            <tr>
                                <td className="item-label">Type</td>
                                <td className="item-data">{data.properties.type}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    )
}