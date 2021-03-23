import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
import { useForm } from './useForm';
import { Button, Form, Card, Container,Row, Col, Dropdown } from 'react-bootstrap';
import firebase from '../firebase';


const EditForm = (props) => {
    const [movie, setMovie] = useState({})
    const [value, handleChange] = useForm({
        watchYear : '',
        status : '',
        rating : ''
    });

    const ref = firebase.firestore().collection('movies').doc(props.docId);
    // useEffect hook, upon render it will grab data from the firestore, ONLY ONCE
    // if bracket isnt in the argument it will continuously fetch
    useEffect(() =>{
            ref.get().then((doc) => {
                if (doc.exists){
                    // console.log('document data: ', doc.data());
                    setMovie(doc.data())
                    // console.log(movie)
                }else {
                    console.log('document does not exist!');
                }
            }).catch((error) => {
                console.log("error fetch: ", error)
            });
    },[]);

    

    function submissionHandler(event){
        // null checks, if the field does not change, fill it with the default
        if(value.watchYear === ''){value.watchYear = movie.watchYear}
        if(value.status === ''){value.status = movie.status}
        if(value.rating === ''){value.rating = movie.rating}

        return ref.update({
            watchYear: value.watchYear,
            status: value.status,
            rating: value.rating
        })
        .then(() => {
            console.log("Document written with ID: ");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
     }

    return ( 
        <>
        <Container className='d-flex justify-content-center'>
                <Row>
                    <Card className='text-center' border='warning' >
                        <Card.Header>Edit { movie.movieTitle } entry?</Card.Header>
                        <Card.Body>
                        <Form >
                            <Col>
                            <label>
                                Year: 
                                <input type="text" name='watchYear' defaultValue={ movie.watchYear } onChange={ handleChange }/>
                            </label>
                            </Col>
                            <Col>
                            <label>
                                Status: 
                                <select name="status" defaultValue={ movie.status } onChange={ handleChange }>
                                    <option value="Watching">Watching</option>
                                    <option value="On Hold">On Hold</option>
                                    <option value="Dropped">Dropped</option>
                                    <option value="Finished">Finished</option>
                                    <option value="Plan To Watch">Plan to Watch</option>
                                </select>
                            </label>
                            </Col>
                            <Col>
                            <label>
                                Rating: 
                                <select name="rating" defaultValue={ movie.rating } onChange={ handleChange }>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </label>
                            </Col>
                            <Col>
                            <Button variant="info"type='button' onClick={ submissionHandler }>Done</Button>
                            </Col>
                        </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
     );
}
 
export default EditForm;