import React from 'react'

class UserDetail extends React.Component {
    
    render() { 
        return ( 
            <li>Contact {this.props.myname} at {this.props.myemail}</li>
         );
    }
}
 
export default UserDetail;