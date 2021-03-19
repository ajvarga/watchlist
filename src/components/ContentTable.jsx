import React, { Component } from 'react'
import firebase from '../firebase';
import { db } from '../firebase';
import { Table, Container, Button } from 'react-bootstrap';

import MovieForm from './MovieForm';
import EditForm from './EditForm';
const ref = firebase.firestore().collection('movies')

class ContentTable extends Component {
    state = { 
        movies: null,
        hide: true
     };

     componentDidMount  = async() => {
        //  console.log('table mounted')
         ref.get()
         .then( snapshot => {
             const movies = []
             snapshot.forEach( doc => {
                 const data = doc.data()
                 data.key = doc.id
                 movies.push(data)
                //  console.log(doc.id)
                //  console.log(data)
             })

            //  console.log(movies)
             this.setState({ movies: movies });

         }).catch( error => console.log(error))

        //  console.log(this.state);
     }

    showForm = () =>{
        console.log('abra kadabra')
        this.setState({
            hide: !this.state.hide
        })
        console.log(this.state)
    }

    render() { 
        
        return ( 
            <>
            <div>
               {!this.state.hide && <MovieForm className='movieForm'/>}
            </div>
            
            <Container >
                <Button variant='primary' onClick={this.showForm}>+</Button>
                <Table striped bordered hover size='md'>
                    {/* Table Heading */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Watch Year</th>
                            <th>Status</th>
                            <th>Rating</th>
                            <th></th>
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
                                        <Button value={ movie.key } 
                                            // onClick={ () => this.updateRow( movie.key ) } 
                                            variant='warning'>
                                            <EditForm docId={ movie.key } />
                                        </Button>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
            </>
         );
    }
}
 
export default ContentTable;