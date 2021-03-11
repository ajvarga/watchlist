import React, { Component } from 'react'
import firebase from '../firebase';
import { db } from '../firebase'
const ref = firebase.firestore().collection('movies')

class Table extends Component {
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
             console.log(movies)
             this.setState({ movies: movies });

         }).catch( error => console.log(error))
     }

    render() { 
        
        return ( 
            <>
            <table>
                {/* Table Heading */}
                <tr>
                    <th>Title</th>
                    <th>Watch Year</th>
                    <th>Status</th>
                    <th>Rating</th>
                </tr>
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
            </table>
            </>
         );
    }
}
 
export default Table;