import React from "react";
import "../../css/JAVItem.css";

export default function JAVItem ({name, date, watched, id, onDeleteItem, onWatched, }) {
    return(
        <div className="jav-item">
            <div className="item-info">
                <b className="item-name"> {name} </b>
                <i className="item-date"> {date} </i> &nbsp;&nbsp;&nbsp;
                <p> {watched ? 'watched' : ''} </p>
            </div>

            <div className="item-action">
                <button onClick={(event => {onWatched(id)})}> Xem </button> &nbsp;&nbsp;&nbsp;
                <button onClick={(event => {onDeleteItem(id)})}> Xóa </button>
            </div>
        </div>
    );
}