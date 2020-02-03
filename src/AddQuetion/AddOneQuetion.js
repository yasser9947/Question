import React from 'react'
import { InputGroup, FormControl, Row, Col, Form, Button } from 'react-bootstrap'

export const AddOneQuetion = ({ AddTheQuetstionFunc }) => {
    return (

        <div className="QC">
            <Row className="justify-content-md-center qc">
                <Col md="4" >
                    <label htmlFor="basic-url">Your question</label>
                    <Form.Control type="name" placeholder="Your question" />
                </Col>
            </Row>
            <Row >
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>
                        <FormControl aria-label="Text input with checkbox" />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>
                        <FormControl aria-label="Text input with checkbox" />
                    </InputGroup>
                </Col>
            </Row>
            <Row >
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>
                        <FormControl aria-label="Text input with checkbox" />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        </InputGroup.Prepend>
                        <FormControl aria-label="Text input with checkbox" />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Button onClick ={AddTheQuetstionFunc} >Submit </Button>
                </Col>
            </Row>


        </div>
    )
}
