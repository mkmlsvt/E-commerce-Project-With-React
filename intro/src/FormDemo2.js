import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import alertify from "alertifyjs"

export default class FormDemo2 extends Component {
    state = { email: '', password: '', city: '', description: '' }
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }
    handleSubmit = event => {
        event.preventDefault();
        alertify.success(this.state.email + 'addd to db!')
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">email</Label>
                        <Input type="email" name="email" id="email" placeholder="enter email" onChange={this.handleChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">password</Label>
                        <Input type="password" name="password" id="password" placeholder="enter password" onChange={this.handleChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="description">description</Label>
                        <Input type="textarea" name="description" id="description" placeholder="enter description" onChange={this.handleChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="select" name="city" ıd="city" onChange={this.handleChange}>
                            <option>Ankara</option>
                            <option>İstanbul</option>
                            <option>izmir</option>
                            <option>Bursa</option>
                            <option>Çanakkale</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Save</Button>
                </Form>
            </div>
        )
    }
}
