import React, { useState } from "react";

export default function CreateForm ({ onAddItem }) {


    const [name, setName] = useState()

    const handleCreateItem = (event) => {
        event.preventDefault();

        if(!name){
            alert("Nhập thông tin");
            return;
        }
      onAddItem(name);
    }
    return(
        <form onSubmit={handleCreateItem}>
            <input type="text" onChange={(event)=> setName(event.target.value)}/>
            <button>Thêm</button>
        </form>
    );
}