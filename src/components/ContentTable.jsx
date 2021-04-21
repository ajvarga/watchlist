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
        hideAdd: true,
        hideEdit: true,
        docId: ''
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
     renderEditForm = (e) =>{
        //  I want to set the state to the docID, the EditForm component can grab it through props, and then we can show the editForm
        this.setState({
            hideEdit: !this.state.hideEdit,
            docId: e
        })
     }

    showForm = () =>{
        console.log('abra kadabra')
        this.setState({
            hideAdd: !this.state.hideAdd
        })
        console.log(this.state)
    }

    render() { 
        
        return ( 
            <>

            <div>
               {!this.state.hideAdd && <MovieForm className='movieForm'/>}
               {!this.state.hideEdit && <EditForm docId={ this.state.docId } />}
            </div>
            
            <Container >
                {this.state.hideAdd 
                    ? <Button variant='primary' onClick={this.showForm}>+</Button>
                    : <Button variant='danger' onClick={this.showForm}>X</Button>}
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
                                                onClick={ () => this.renderEditForm( movie.key ) } 
                                                variant='warning'>
                                                    Edit
                                            </Button>
                                            {/* <EditForm docId={ movie.key } /> */}
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