import React from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logout from '../actions/logout';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(){
    this.props.logout();
  }
  render() {
    return (
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container">
          <img className="logo" src="/assets/images/grandiose-potatoe.gif" height="100%"/>
          <a id="logo-container" href="/" className="brand-logo"> Vime </a>
          <a href="#" data-activates="mobile-demo" className="right button-collapse"><i className="material-icons">menu</i></a>
            {this.props.user ? 
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/user" className="btn-large waves-effect waves-light blue darken-1">User Profile</Link></li> 
                <li><button onClick={this.handleLogout}>Log Out</button></li>
              </ul>
              :
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/login" className="btn-large waves-effect waves-light blue darken-1">Login/Signup</Link></li>
              </ul>
            }
          <ul className="side-nav" id="mobile-demo">
            <li><Link to="/login" className="btn-large waves-effect waves-light blue darken-1">Login/Signup</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}
function mapDispatchToProps(dispatch){
  return {
    logout: bindActionCreators(logout, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);