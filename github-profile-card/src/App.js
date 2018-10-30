import React, { Component } from 'react';
import './App.css';

const API = 'https://api.github.com/users';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: 'chintuyadav',
      name:'',
      avatar:'',
      location:'',
      repos:'',
      followers: '',
      following:'',
      homeUrl:'',
      notFound:''
    }
  }
  fetchProfile(username) {
    let url = `${API}/${username}`;
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message
        })
      })
      .catch((error) => console.log('Oops! . There Is A Problem') )
  }
  componentDidMount() {
    this.fetchProfile(this.state.username);
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header fetchProfile={this.fetchProfile.bind(this)} profileimage={this.state.avatar}/>
          <GitHub githubData={this.state}/>
        </div>
      </div>
    );
  }
}
class GitHub extends Component{
  render(){

    return(
      <div className="Data">
        <h1><a href={this.props.githubData.homeUrl} target="_blank">{this.props.githubData.name}</a></h1>
        <p className="location">{this.props.githubData.location}</p>
        <div className="ReposData">
        <ul>
             <li>
                <i>{this.props.githubData.followers}</i><span>Followers</span>
             </li>
             <li>
                <i>{this.props.githubData.repos}</i><span>Repositoriy</span>
             </li>
             <li>
                <i>{this.props.githubData.following}</i><span>Following</span>
             </li>
          </ul>
        </div>
      </div>

    )
  }
}
class Header extends Component{
    render(){
      return(
        <div className="Header" style={{ backgroundImage:"url("+this.props.profileimage+")", backgroundSize:"cover" }}>

          <form onSubmit={this.handleForm.bind(this)}>
           <label><input type="search" className="search-bar" ref="username" placeholder="Type Username + Enter"/></label>
         </form>
        </div>

      )
    }
    handleForm(e) {
      e.preventDefault();
      let username = this.refs.username.value;
      this.props.fetchProfile(username);
      //console.log(this.props.fetchProfile(username));

      this.refs.username.value = '';
    }
}

export default App;
