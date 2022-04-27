import React from "react";
import MangaContainer from "./MangaContainer";
import "../css/MangaContainer.css";
import data from "../data";



export default function MangaList(){
    return(
        <div className="Manga-container">
            {data.map((e)=>{
                return(
                    <MangaContainer mangas = {e}/>
                )
            })}
        </div>
    )
}