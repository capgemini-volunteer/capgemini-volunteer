import React, { Component } from 'react';
import axios from 'axios';

export default class extends Component{

    constructor(){
        super();
        this.state = {
            lastName: '',
            firstName: '',
            streetAddress: '',
            city: '',
            state: '',
            zipcode: 0,
            phone: 000-000-0000,
            
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('/api/campuses', this.state)
            .then(res => res.data) //The promise returned by axios returns an object that contains the response from server in the data property
            .then(res => {
                console.log(res)
                this.setState({
                    name: '',
                    description: '',
                    location: '',
                    imageUrl: ''
                })
                return res.campus;
            })
            .then(campus => {
                this.props.history.push(`/campuses/${campus.id}`)
            })
            .catch(err => {
                console.error(err)
            })
    }

    render(){
        return(
        )
    }
}