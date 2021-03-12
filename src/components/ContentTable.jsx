import React, { Component } from 'react'
import firebase from '../firebase';
import { db } from '../firebase';
import { Table, Container } from 'react-bootstrap';
const ref = firebase.firestore().collection('movies')

class ContentTable extends Component {
    state = { 
        movies: null
     };

     componentDidMount(){
         console.log('table mounted')
         ref.get()
         .then( snapshot => {
             const movies = []
             snapshot.forEach( doc => {
                 const data = doc.data()
                 movies.push(data)
             })
             this.setState({ movies: movies });

         }).catch( error => console.log(error))

         console.log(this.state);
     }

    render() { 
        
        return ( 
            <Container >
                <Table striped bordered hover size='md'>
                    {/* Table Heading */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Watch Year</th>
                            <th>Status</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* map out the data to fill the table */}
                        {
                            this.state.movies &&
                            this.state.movies.map( movie => {
                                return (
                                    <tr>
                                        <td>{ movie.movieTitle } </td>
                                        <td>{ movie.watchYear }</td>
                                        <td>{ movie.status }</td>
                                        <td>{ movie.rating} </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
         );
    }
}
 
export default ContentTable;