import React, { useState } from "react";
import CreateForm from "./CreateForm";
import JAVItem from "./JAVItem";

export default function JAVTutorial (){

    const [data, setData] = useState([
        {id: 1, name: "JAV001", date: "2022/05/06", watched: true, },
        {id: 2, name: "JAV002", date: "2022/05/07", watched: false, },
        {id: 3, name: "JAV003", date: "2022/05/08", watched: false, },
    ]);

    const addItem = (name) => {
        const newItem ={
            id: Date.now(),
            name: name,
            date: new Date().toISOString(),
            watched: false
        }

        const newData = [...data, newItem];


        setData(newData)
    };

    const deleteItem = (Itemid) => {
        console.log("xóa 1 item có id là " + Itemid);
        
        const newDelete = [...data].filter((jav)=> {
            return jav.id !== Itemid;
        })

        setData(newDelete);
    };

    const watchedItem = (Itemid) =>{
        console.log("đã xem item có id là " + Itemid);
        
        const newWatch= [...data].map((jav) => {
            if(jav.id === Itemid){
                jav.watched = true;
            }
            return jav
        })

        setData(newWatch);
    };

    return(
        <div className="jav-tutorial">
            <h1>Japanses Anti Virus</h1>
            <CreateForm onAddItem = {addItem}/>

            <div className="Jav-list">
                {data.map(jav => {
                    // return <JAVItem {...jav}/>
                    return <JAVItem id={jav.id}  name={jav.name} date={jav.date} watched={jav.watched} onDeleteItem = {deleteItem} onWatched={watchedItem}/>
                })}
            </div>

        </div>
    )
}