import React, { Component } from 'react'
import {connect} from 'react-redux';
import { savePerson } from '../actions';

class NewPerson extends Component {

    state = {
        name: '',
        title:''
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.props.dispatch(savePerson(this.state))

    }

    changeHandler = (e) => {
        const { name, value } = e.target;
        this.setState ({ [name]: value , id: Math.random() })
    }
    isEdit() {
        console.log(this.props);
        if(this.props){
            console.log(this.props);
            
            this.setState({name: this.props.name, title: this.props.title})
        }
    }
  
     
    render() {
       
        return (
             <div className="col-md-6">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h3>Add Person</h3>
                            <form onSubmit={this.submitHandler}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    name="name" 
                                    
                                    placeholder="Enter Name"
                                    onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    name="title" 
                                    placeholder="Enter Title"
                                    
                                    onChange={this.changeHandler}
                                    />
                                </div>
                                <button 
                                type="submit" 
                                className="btn btn-primary"
                                onClick={this.submitHandler}
                                >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }
}




export default connect ()(NewPerson);