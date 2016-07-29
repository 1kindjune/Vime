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
    this.context.router.push('/');
  }
  componentDidMount(){
    console.log('MOUNTING');
    $('.dropdown-content').html('\
      <li><a href="#!">asdf</a></li>\
      <li><a href="#!">yay</a></li>\
      <li className="divider"></li>\
      <li><a href="#!">three</a></li>\
      ');
    $('.dropdown-button').dropdown('open');
  }
  showDrop(){
    $('.dropdown-button').dropdown('open');
  }
  render() {
    return (
      <div>
        {/*NOTIFICATION - DROPDOWN MENU*/}
        <ul id="notifications" className="dropdown-content">
        <li><a href="#!">one</a></li>\
        <li><a href="#!">two</a></li>\
        <li className="divider"></li>\
        <li><a href="#!">three</a></li>\
        </ul>
        <nav className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper container">
            {this.props.location === '/login' ? '' : this.props.user ? 
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><button onClick={this.handleLogout} className="btn-large waves-effect waves-light blue darken-1">Log Out</button></li>
                <li><Link to="/profile" className="btn-large waves-effect waves-light blue darken-1"><i className="material-icons">perm_identity</i></Link></li> 
              </ul>
              :
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/login" className="btn-large waves-effect waves-light blue darken-1">Login/Signup</Link></li>
              </ul>
            }    
            <a href='javascript:;' onClick={this.showDrop} id='db1' className="dropdown-button" data-activates="notifications"><i className="material-icons">new_releases</i></a>
          </div>
        </nav>
      </div>
    );
  }
}

Navigation.contextTypes = {
  router:React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user,
    //loc: ownProps,
    location: state.routing.locationBeforeTransitions.pathname
  }
}
function mapDispatchToProps(dispatch){
  return {
    logout: bindActionCreators(logout, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
