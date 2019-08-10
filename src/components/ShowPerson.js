import React, { Component } from 'react';

import { connect } from 'react-redux';

import { deletePerson, updatePerson} from '../actions';



class ShowPerson extends Component {



    render() {
     const data =  this.props.person ? (
         this.props.person.person.map(p => (
            <div className="card mb-4 shadow-sm" key={p.id}>
                <div className="card-body">
                    <h3>{p.name}</h3>
                    <h5>Title : {p.title}</h5>
                    <button 
                    className="btn btn-danger my-2"
                    onClick={()=>
                        this.props.dispatch(deletePerson(p.id))
                    }
                    >Delete</button>
                    {/* <button 
                    className="btn btn-primary my-2"
                    onClick={()=>
                        this.props.dispatch(updatePerson(p.id))
                    }
                    >Update</button> */}
                </div>
            </div>
         ))
       
      ) : 'loading...';
        return (
            <div className="col-md-6">
                   { data.length <= 0 ? (<h5 className="text-info text-center">Please add a person</h5>): data }
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
  //  console.log(state.person);
    return state;
}


export default connect(mapStateToProps)(ShowPerson)