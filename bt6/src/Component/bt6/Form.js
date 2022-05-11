import React, { useState } from "react";
import "../../css/Content.css";

export default function Form( {onAddItem} ) {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const handleCreateForm = (event) => {

        event.preventDefault();

        if (!title && !content) {
            alert("Nhập đầy đủ thông tin")
            return
        }
        onAddItem(title,content);
    }
    return (

        <form className="post-form" onSubmit={handleCreateForm}>

            <div>
                <input className="post-title" type="Text" placeholder="Input Post's Title" onChange={(event) => setTitle(event.target.value)} /> <br/>

                <input className="post-content" type="Text-area" placeholder="Input Post's Content" onChange={(event) => setContent(event.target.value)} />
            </div>
            <button className="post"> Post </button>
        </form>
    )
}