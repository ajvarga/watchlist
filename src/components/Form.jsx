import React, { Component } from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import firebase from '../firebase';

const ref = firebase.firestore().collection('movies')

class Form extends Component {
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
         event.preventDefault();

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
        this.setState({
            movieTitle : '',
            watchYear : '',
            status : '',
            rating : ''
        });
     }
    render() { 
        return ( 
            <div>
                <section className='card'>
                    <form onSubmit={this.submissionHandler}>
                        <label>
                            Title:
                            <input type="text" name="movieTitle" placeholder="Back to the Future" onChange={this.myChangeHandler}/>
                        </label>
                        <label>
                            Year:
                            <input type="text" name="watchYear" placeholder="2017" onChange={this.myChangeHandler}/>
                        </label>
                        <label>
                            Status:
                            <select name="status" onChange={this.myChangeHandler}>
                                <option value="watching">Watching</option>
                                <option value="onHold">On Hold</option>
                                <option value="dropped">Dropped</option>
                                <option value="finished">Finished</option>
                                <option value="plantToWatch">Plan to Watch</option>
                            </select>
                        </label>
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
                        <button type='submit' onSubmit={ this.submissionHandler }>submit</button>
                    </form>
                </section>
            </div>
         );
    }
}
 
export default Form;