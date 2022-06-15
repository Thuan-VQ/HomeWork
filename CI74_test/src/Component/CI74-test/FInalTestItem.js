import React, { useState } from "react";
import { Button, Col, Container, Form, FormCheck, ListGroup, Row } from "react-bootstrap";
import { getWrongAnswer } from "../../data/TestData";



export default function FinalTestItem({ data }) {

    const id = [];
    const score = [];


    const handleClick = (event) => {

        if (!id.includes(event.target.id)) {
            event.target.value === "true" ? score.push(2) : score.push(0);
            id.push(event.target.id);
        } else {
            for (let i = 0; i < id.length; i++) {
                if (id[i] === event.target.id) {
                    event.target.value === "true" ? score[i] = 2 : score[i] = 0;
                }
            }
        }
    
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let sum = 0;
        for (let i =0; i<score.length; i++){
            sum= sum+ score[i];
        }
        alert("Bạn được " + sum + " điểm")
    }
    return (
        <Container className="Test-item m-3">
            <ListGroup>

                {data.map(item => <ListGroup.Item  className="mt-3">
                    <h3>{item.question}</h3>

                    <Form>
                        {['radio'].map((type) => (
                            <Container className="test-answer m-3">

                                <Form.Check className="correct"
                                    id={item.question}

                                    type={type}
                                    label={item.correct_answer}
                                    name="Test"
                                    value="true"
                                    onClick={handleClick}
                                />

                                <FormCheck
                                    id={item.question}

                                    type={type}
                                    label={item.incorrect_answers[0]}
                                    name="Test"
                                    value="false"
                                    onClick={handleClick}
                                />

                                <FormCheck
                                    id={item.question}
                                    type={type}
                                    correct="false"
                                    label={item.incorrect_answers[1]}
                                    name="Test"
                                    value="false"
                                    onClick={handleClick}
                                />

                                <FormCheck
                                    id={item.question}
                                    type={type}

                                    label={item.incorrect_answers[2]}
                                    name="Test"
                                    value="false"
                                    onClick={handleClick}
                                />

                            </Container>
                        ))}

                    </Form>
                </ListGroup.Item>)}
            </ListGroup>

            <Form onSubmit={handleSubmit}>
                <Col>
                    <Button className="mt-3" type="submit">Nộp bài</Button>
                </Col>
            </Form>

        </Container>

    )
}