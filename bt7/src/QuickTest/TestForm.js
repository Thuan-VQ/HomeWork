import React, { useState } from "react";
import { Container, Row, Form, InputGroup, Button, Col } from "react-bootstrap";
import TestItem from "./TestItem"
import testData from "../data/test_data";


export default function TestForm ({onSearching}){

    const [searching, setSearching] = useState("")

    const filterArray = testData.filter((item) => {
        if(item.name.toLowerCase().includes(searching)){
            return item
        } if (searching == ""){
            return item
        } else {
            for (let e of item.categories){
                if (e.toLowerCase().includes(searching)){
                    return item
                }
            }
        }
    })

 
    return(
        <Container fluid className="main-container">
            <Row>
                <Col>
                    <Form className="test-search">
                        <InputGroup>
                            <Form.Control type="text" placeholder="Nhập từ khóa tìm kiếm" onChange={(event)=> setSearching(event.target.value.toLowerCase())}/> &nbsp;&nbsp;&nbsp;
                            <Button type="submit" varian="primary">Tìm kiếm</Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>

            <Row className="test-list mt-3">
                {filterArray.map(item => <Col lg={12} md={12}>
                    <TestItem 
                        key={"test-container- " + item.id}
                        name = {item.name}
                        time = {item.duration}
                        question = {item.questions.length} 
                        newCategories = {item.categories}                 
                    />
                </Col>
                )}
            </Row>
        </Container>
    );
}