import React, { useState } from "react";
import Form from "./Form";
import Content from "./Content";
import "../../css/Content.css";

export default function Home () {

    const [data, setData] = useState([
        { id: 1, title: "Title 1", date: "2022/05/10", content: "Write something here", count: 1300 },
        { id: 2, title: "Title 2", date: "2022/05/11", content: "Write something", count: 1400 },
        { id: 3, title: "Title 3", date: "2022/05/12", content: "Write something", count: 1500 },
    ]);

    let today = new Date()

    const addItem = (title, content) => {
        const newItem ={
            id: Date.now(),
            title: title,
            date: today.getFullYear() + '/'  + parseInt(today.getMonth() + 1) + '/' + today.getDate(),
            content: content,
            count: 0,
        }

        const newData = [newItem, ...data];


        setData(newData);
    };

    const like = (itemId) => {
        const newLiked = [...data];

        for (let item of data) {
            if (item.id == itemId) item.count++
        }
        setData(newLiked)
    }

    const editItem = (itemId, newTitle, newContent) => {

        const newEdit = [...data]

        for (let item of data){
            if (item.id == itemId){
                item.title = newTitle;
                item.content= newContent;
            }
        }
        setData(newEdit)
    }

    return (
        <div className="home">
            <h1 className="header"> Hello Post</h1>
            <Form onAddItem = {addItem}/>

            <div className="content-list">
                {data.map(item => {
                    return < Content
                        key={item.id}
                        id={item.id} 
                        title={item.title}
                        content={item.content}
                        date={item.date}
                        count={item.count}
                        onLike = {like}
                        onEditItem = {editItem}

                     />
                })}
            </div>

        </div>
         
    );
};