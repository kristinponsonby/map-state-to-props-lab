import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.usernames}
          {/* In addition, display the total number of users curently in the store */}
          {/* {this.props.usernames.length} */}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.username };
};

export default connect(mapStateToProps)(Users);

