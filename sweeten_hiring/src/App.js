import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

class NavComponent extends React.Component{
  constructor(props){
    super(props);
    localStorage.setItem("mode", "light-mode");
    this.state={
      mode:'light-mode',
    };
  }
	render() {
		return (
			<nav className={'nav'+this.state.mode}>
        
        <img className="logo" src="https://he-s3.s3.amazonaws.com/media/cache/99/74/9974f86dd4954e4b65dbd378b98c78c6.png"></img>
				<h3 className={'h3'+this.state.mode}>Sweeten Movie Search</h3>
        <div className="navWide">
					<div className="wideDiv">
            <a href="https://codepen.io/chintuyadav">
            <svg title="Codepen" className={'svg'+this.state.mode} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" ><g id="surface1"><path d="M 25 4 L 4 17.34375 L 4 32.652344 L 25 46 L 46 32.65625 L 46 17.34375 Z M 25 29.183594 L 19.066406 25.070313 L 25 21.023438 L 30.933594 25.070313 Z M 27 17.605469 L 27 9.949219 L 40.429688 18.484375 L 34.410156 22.65625 Z M 23 17.605469 L 15.589844 22.65625 L 9.570313 18.484375 L 23 9.949219 Z M 12.09375 25.042969 L 8 27.832031 L 8 22.203125 Z M 15.570313 27.453125 L 23 32.605469 L 23 40.050781 L 9.589844 31.527344 Z M 27 32.605469 L 34.429688 27.453125 L 40.410156 31.527344 L 27 40.050781 Z M 37.90625 25.042969 L 42 22.203125 L 42 27.832031 Z "></path></g></svg>
            </a>
            <a href="https://twitter.com/chintuyadavsara" onClick={this.burgerToggle}>
            <svg title="twitter" className={'svg'+this.state.mode} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="24" height="24"
            viewBox="0 0 24 24"
            ><g id="surface1"><path d="M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781 ">
            </path></g></svg>
            </a>

          <button className="toggle" type="submit" name="dark_light" onClick={this.toggleDarkLight.bind(this)} title="Toggle dark/light mode"></button>
				</div>
				</div>
				<div className="navNarrow">
					<i className="fa" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
            <a href="https://codepen.io/chintuyadav">
            <svg className={'svg'+this.state.mode} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" ><g id="surface1"><path d="M 25 4 L 4 17.34375 L 4 32.652344 L 25 46 L 46 32.65625 L 46 17.34375 Z M 25 29.183594 L 19.066406 25.070313 L 25 21.023438 L 30.933594 25.070313 Z M 27 17.605469 L 27 9.949219 L 40.429688 18.484375 L 34.410156 22.65625 Z M 23 17.605469 L 15.589844 22.65625 L 9.570313 18.484375 L 23 9.949219 Z M 12.09375 25.042969 L 8 27.832031 L 8 22.203125 Z M 15.570313 27.453125 L 23 32.605469 L 23 40.050781 L 9.589844 31.527344 Z M 27 32.605469 L 34.429688 27.453125 L 40.410156 31.527344 L 27 40.050781 Z M 37.90625 25.042969 L 42 22.203125 L 42 27.832031 Z "></path></g></svg>
            </a>

            <a href="https://twitter.com/chintuyadavsara" onClick={this.burgerToggle}>
            <svg className={'svg'+this.state.mode} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="24" height="24"
            viewBox="0 0 24 24"
            ><g id="surface1"><path d="M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781 ">
            </path></g></svg>
            </a>

            <button className="toggle" type="submit" name="dark_light" onClick={this.toggleDarkLight.bind(this)} title="Toggle dark/light mode"></button>

					</div>
          
				</div>
			</nav>
		);
  }
  toggleDarkLight(){
    var mode = localStorage.getItem("mode");
    if(mode==="light-mode"){
      localStorage.setItem("mode", "dark-mode");
      document.body.style.backgroundColor=" #3a4f5b";
      document.body.style.color="white";
      console.log(document.body);
      this.setState({
        mode: "dark-mode",
      });
    }
    else{
      localStorage.setItem("mode", "light-mode");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      this.setState({
        mode: "light-mode",
      });
    }
    //alert(mode);

  }
	burgerToggle() {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
}


const Movie = props => (
  <div className="movie">
    <figure className="movie__figure">
      <img alt= {props.title} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`} className="movie__poster" />
      <figcaption>
        <span className="movie__vote">{props.vote_average}</span>
      </figcaption>
      <h2 className="movie__title">{props.title}</h2>
    </figure>
  </div>
);

Movie.propTypes = {
  id         : PropTypes.number.isRequired,
  title      : PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
};

const Movies = props => (
  <ul className="movies">
    {props.movies.map(movie => (
      <li key={movie.id}>
        <Movie {...movie} />
      </li>
    ))}
  </ul>
);

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
};


const Search = props => (
  <form className={'search'+localStorage.getItem("mode")} onInput={event => props.onInput(event.target.value)}>
   <input type="search" value={props.query} placeholder={props.placeholder} />   
  </form>
);

Search.propTypes = {
  query      : PropTypes.string.isRequired,
  onInput    : PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movies: [],
      query: ''
    };
    
    this.onInput = this.onInput.bind(this);
  }
  
  onInput(query) {
    this.setState({
      query
    });
    
    this.searchMovie(query);
  }
  
  getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`;
    
    fetch (url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results
        })
      });
  }
  
  searchMovie(query) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;
    
    fetch (url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results
        })
      });
  }
  
  componentDidMount() {
    this.getPopularMovies();
  }
  
  render() {
    const { movies, query } = this.state;
    const isSearched = query => item => !query || item.title.toLowerCase().includes(query.toLowerCase());
    
    return (
      <div className="App">
        <NavComponent/>
        <Search query={query} onInput={this.onInput} placeholder="Search for Movie Title …" />
        <Movies movies={movies.filter(isSearched(query))} />
      </div>
    );
  }
}

export default App;
