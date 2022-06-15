import React, { useEffect, useState } from "react";
import { Container, ListGroup, Row } from "react-bootstrap";
import { getAllData } from "../../data/TestData";
import FinalTestItem from "./FInalTestItem";


export default function FinalTestApp () {

    const [quizs, setQuizs] = useState([]);
    

    useEffect(() => {
        let data= getAllData();
        setQuizs(data)
    }, [])


    return(
        <Container>
            <Row className="text-center"> <h2>Quiz App</h2></Row>
            <ListGroup>
                <FinalTestItem data={quizs} />

            </ListGroup>
        </Container>
    )
}