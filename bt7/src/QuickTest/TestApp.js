import React, { useState } from "react";
import { Container } from "react-bootstrap";
import testData from "../../src/data/test_data";
import TestForm from "./TestForm";

export default function TestApp (){
    
    const [data, setData] = useState(testData)
    
    const search = (e) =>{
         e.target.value.toLowerCase();
        }

    return(
        <div>
            <Container fluid className="container border">
                <TestForm data={data} onSearching={search}/>
            </Container>
        </div>
    )
}