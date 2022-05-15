import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TestCategories from "./TestCategories";


export default function TestItem({name, time, question, newCategories}){

    return(
        <Container className="item-container border mb-3 ">
            <Row>
                <Col sm={12} md={12}>
                    <b>{name}</b>
                </Col>
            </Row>

            <Row>
                <Col sm={6} md={6}>
                    <p>Thời lượng: {time}</p>
                </Col>
                <Col sm={6} md={6}>
                    <p>Số câu hỏi: {question}</p>
                </Col>
            </Row>

            <Row className="categories border mb-3 bg-gray">
                 <TestCategories  array={newCategories}/>
            </Row>

        </Container>
    )
}