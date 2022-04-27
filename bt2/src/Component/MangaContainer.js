import React from "react";
import "../css/MangaContainer.css";

export default function MangaContainer(props){

    return(
        <div className="manga">
            <div className="manga-img">
                <img className="img" src={props.mangas.photo} alt = "ảnh truyện" />
                <div className="count">
                    <p> {props.mangas.view_count} 👁</p>
                    <p> {props.mangas.comment_count} 💬</p>
                </div>
            </div>

            <div>
                <h1 className="title">{props.mangas.name}</h1>
                <div className="chapter">
                    <p>chapter: {props.mangas.lastest_chapter}</p>
                    <p className="date">{props.mangas.date_modified}</p>
                </div>
            </div>
        </div>
    )
}