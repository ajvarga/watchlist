import React, { Component } from 'react'
// import * as ReactBootStrap from 'react-bootstrap';
import { Button, Form, Card, Container,Row, Col, Dropdown } from 'react-bootstrap';
import firebase from '../firebase';


const ref = firebase.firestore().collection('movies')

class MovieForm extends Component {
    //store data in state
    
    state = { 
        movieTitle : '',
        watchYear : '',
        status : '',
        rating : ''
     };

     myChangeHandler = (event) =>{
         let nam = event.target.name;
         let val = event.target.value;

         this.setState({[nam] : val});
     };

     submissionHandler = (event) =>{
        //  yeet this for now, so the page will auto refresh when form submits, thus updating the table
        //  event.preventDefault();

        // console.log(this.state)
        // post the state to the firestore and clear out the entries
        ref.add(this.state)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

        // clear fields after submission
        event.target.reset();
     }
    render() { 
        return ( 
            <Container className='d-flex justify-content-center'>
                <Row>
                    <Card className='text-center' border='primary'>
                        <Card.Header>What Have You Watched?</Card.Header>
                        <Card.Body>

                        <Form onSubmit={this.submissionHandler}>
                            <Col>
                                <label>
                                    Title: 
                                    <input type="text" name="movieTitle" placeholder="Back to the Future" onChange={this.myChangeHandler}/>
                                </label>
                            </Col>
                            <Col>
                            <label>
                                Year: 
                                <input type="text" name="watchYear" placeholder="2017" onChange={this.myChangeHandler}/>
                            </label>
                            </Col>
                            <Col>
                            <label>
                                Status: 
                                <select name="status" onChange={this.myChangeHandler}>
                                    <option value="Watching">Watching</option>
                                    <option value="On Hold">On Hold</option>
                                    <option value="Fropped">Dropped</option>
                                    <option value="Finished">Finished</option>
                                    <option value="Plan To Watch">Plan to Watch</option>
                                </select>
                            </label>
                            </Col>
                            <Col>
                            <label>
                                Rating: 
                                <select name="rating" onChange={this.myChangeHandler}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </label>
                            </Col>
                            <Col>
                            <Button variant="info"type='submit' onSubmit={ this.submissionHandler }>submit</Button>
                            </Col>
                        </Form>


                        </Card.Body>
                    </Card>
                </Row>
            </Container>
         );
    }
}
 
export default MovieForm;