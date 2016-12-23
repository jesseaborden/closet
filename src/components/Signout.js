import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';

class Signout extends Component {
    
    componentDidMount(){
        this.props.signoutUser();
    }

    render(){
        return <div> <h1> Login to use app! </h1> </div>
    }
}



export default connect(null, { signoutUser })(Signout);