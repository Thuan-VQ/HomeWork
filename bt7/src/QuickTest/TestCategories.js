import React from "react";
import { Button } from "react-bootstrap";

export default function TestCategories ({array}){
    return(
        <div>
            {array.map(item => <Button className="Btn ms-2" >
                {item} 
            </Button> )}
        </div>
    );
}