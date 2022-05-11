import React, { useState } from "react";
import "../../css/Content.css";

export default function Content( { title, date, content, count, id, onLike, onEditItem } ) {

    const [isEditing , setIsEditing] = useState(false);
    const [newTitle , setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("")

    const edit = () => {
        onEditItem(id, newTitle, newContent)
        setIsEditing(false)
        setNewTitle("")
        setNewContent("")
    }

    const enableEdit = () => {
        setIsEditing(true);
    }

    return (
        <div className="post-content">

            <div className="info">
                <h3> 
                    {
                    isEditing
                    ? <div> <input  className="post-title" type = "text" defaultValue = {title} onChange= {(event) => setNewTitle(event.target.value)}  /> </div> 
                    : <h3> {title} </h3>
                    }  
                </h3>
                <p> {date} </p>
            </div>

            <div className="content" >
                {
                    isEditing
                    ? <div> <input className="post-content" type = "text-area" defaultValue = {content} onChange= {(event) => setNewContent(event.target.value)}  /> </div>
                    : <p> {content} </p>
                }
                
            </div>

            <div className="count"> 
                <p> {count} </p> &nbsp;
                <span> Likes </span>
            </div>

            <div className="button">
                <button onClick={(event) => {onLike(id)}} className="like"> Like </button>  &nbsp;&nbsp;&nbsp;

                <div> 
                    {isEditing
                    ? <button className="edit" onClick={edit}> save </button>
                    : <button  className="edit" onClick={enableEdit} > Edit </button>
                    }
                </div>
            </div>


        </div>
    );
};