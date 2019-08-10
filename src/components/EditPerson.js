import React, { Component } from 'react'
import { connect } from 'react-redux';

class EditPerson extends Component {

    state ={
        // name:null,
        // title: null,
        // id:null
            name:this.props.name,
            title: this.props.title,
            id:this.props.id
    }
    submitHandler = (e) => {
        e.preventDefault();
        //this.props.dispatch(savePerson(this.state))

    }

    changeHandler = (e) => {
        const { name, value } = e.target;
        this.setState ({ [name]: value , id: this.state.id })
    }
    componentWillReceiveProps (nextProps) {
        if(nextProps !== this.props){
            this.setState({
                name:this.props.name,
                title: this.props.title,
                id:this.props.id
            })
        }
        
        console.log(this.props);
        
    }
    
    render() {
       
        return (
            <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h3>Edit Person</h3>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            name="name" 
                            value={this.state.name}
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
                            value={this.state.title}
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


const mapStateToProps = state =>  {
    const {toupdate} = state.person;
    console.log(toupdate[0])
    return toupdate[0];
}

export default  connect(mapStateToProps)(EditPerson);