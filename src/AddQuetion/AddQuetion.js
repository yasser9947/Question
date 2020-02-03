import React, { useState } from 'react'
import { InputGroup, FormControl, Container, Row, Col, Button } from 'react-bootstrap'
import { AddOneQuetion } from './AddOneQuetion'

export const AddQuetion = () => {
    const [qc, setQc] = useState([])
    const [open, setOpen] = useState(false)
    const AddTheQuetstionFunc = () => {
        setOpen(!open)
        console.log(open)
    }
    return (
        <div>
            <Container className="Exam">
                <Row >
                    <Col md={{ span: 4, offset: 4 }} >
                        <InputGroup.Text id="inputGroup-sizing-sm">Name Of Your Exam</InputGroup.Text>

                    </Col>
                    <Col md={{ span: 4, offset: 0 }}>
                        <h5>Number of Your Question {qc.length}</h5>

                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg={4} >
                        <InputGroup size="sm" className="mb-3">
                            <InputGroup.Prepend>
                                <br />
                            </InputGroup.Prepend>
                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                    </Col>
                </Row>

                {open && <AddOneQuetion AddTheQuetstionFunc ={AddTheQuetstionFunc} />}
                <Row className="justify-content-md-right" >
                    <Col md={{ span: 2, offset: 10 }}> <Button onClick={AddTheQuetstionFunc}>Add Question</Button></Col>
                </Row>
            </Container>
        </div >
    )
}
