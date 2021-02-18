import React,{useState} from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

class Personal extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            validated:false,
            page:"Personal",
            fName:"",
            lName:"",
            email:"",
            num:"",
            city:"",
            state:"",
            zip:"",
        }
    }
  
    handleSubmit = (event) => {
        const form = event.currentTarget;
        const is_valid = form.checkValidity()
        this.setState({validated:true});
        event.preventDefault();
        event.stopPropagation();

        if(is_valid === true){
            console.log("pers",this.state)
            this.props.onChangePage(this.state)
        }
    };

    handleChange = (event) => {
        const {name,value} = event.currentTarget
        this.setState({
            [name]:value
        })
    }

    render(){
        return (
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit} className="p-3">
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <InputGroup hasValidation>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="firstNamePrepend">First Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control 
                            name="fName"
                            onChange={this.handleChange}
                            required
                            type="text"
                            aria-describedby="firstNamePrepend"
                            placeholder="First Name"
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <InputGroup hasValidation>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="lastNamePrepend">Last Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                            name="lName"
                            onChange={this.handleChange}
                            required
                            type="text"
                            aria-describedby="lastNamePrepend"
                            placeholder="Last name"
                            />
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustomEmail">
                        <InputGroup hasValidation>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="emailPrepend">Email</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            name="email"
                            onChange={this.handleChange}
                            type="email"
                            placeholder="Email"
                            aria-describedby="emailPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter Valid Email.
                        </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustomNumber">
                        <InputGroup hasValidation>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="numberPrepend">Number</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            name="num"
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Number"
                            aria-describedby="numberPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Enter Valid Number.
                        </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustomCity">
                        <InputGroup hasValidation>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="cityPrepend">City</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control 
                                name="city"
                                onChange={this.handleChange}
                                type="text" 
                                placeholder="City" 
                                aria-describedby="cityPrepend"
                                required  
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomState">
                        <InputGroup hasValidation>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="statePrepend">State</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control 
                                name="state"
                                onChange={this.handleChange}
                                type="text" 
                                placeholder="State" 
                                aria-describedby="statePrepend"
                                required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomZip">
                        <InputGroup hasValidation>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="zipPrepend">Zip</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control 
                                name="zip"
                                onChange={this.handleChange}
                                type="text" 
                                placeholder="Zip" 
                                aria-describedby="zipPrepend"
                                required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="10"></Form.Group>
                    <Form.Group as={Col} md="2">
                        <Button block type="submit">Next</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        );
    }
    
  }

  export default Personal