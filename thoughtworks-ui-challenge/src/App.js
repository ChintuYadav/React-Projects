import React, { Component } from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      movielist:[],
      templist:[],
      searchString:"",
      activePage: 15
    }
  }

  componentWillMount(){
    var url= 'https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716';
    //https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716
    axios.get(url).then(response=>{

      var newList = [];
      newList = response.data.results;
      console.log(newList);
      this.setState({movielist: newList});
      this.setState({templist: newList})
    });

  }

  filterList(e) {
    this.setState({ searchString:e.target.value });
    var searchString = this.state.searchString.trim().toLowerCase();
    console.log(searchString);
    var updatedList = this.state.movielist;

    if (searchString.length > 0) {
       updatedList = updatedList.filter(function(i) {
         return i.title.toLowerCase().match( searchString );
       });
     }
    this.setState({ templist: updatedList })
    console.log(updatedList);

  }
  sortbyYear(e){
      /*var newJson = {};

      this.state.templist.forEach(function (item) {
        var date = new Date(item.release_date),
          year = date.getUTCFullYear(),
          month = date.getUTCMonth() + 1;

        newJson[year] = newJson[year] || {};
        newJson[year][month] = newJson[year][month] || [];
        newJson[year][month].push(item);
      });
      console.log(newJson);*/
      //this.setState({ templist: newJson });
  }

/*

<div class="person-box">
					<div class="box-avatar">
						<img src="https://images.unsplash.com/photo-1495791085242-4abf2dcc3be3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=30e718c0d1804c6365c73fc48419505d&auto=format&fit=crop&w=140&q=80" alt="Frederic Levy, Chief Executive Officer">
					</div>

					<div class="box-bio">
						<h2 class="bio-name">Frederic Levy</h2>
						<p class="bio-position">Chief Executive Officer</p>
					</div>

					<div class="box-actions">

					</div>
				</div>

*/
  render() {

    return (
      <div className="App">

<div className="dashboard">
<aside className="search-wrap">
  <div className="search">
    <label htmlFor="search">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/></svg>
      <input type="text" id="search" placeholder="Search Movie" value={this.state.searchString} onChange={this.filterList.bind(this)}/>
    </label>
  </div>

  <div className="user-actions">
  <a href="https://codepen.io/chintuyadav">
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" ><g id="surface1"><path d="M 25 4 L 4 17.34375 L 4 32.652344 L 25 46 L 46 32.65625 L 46 17.34375 Z M 25 29.183594 L 19.066406 25.070313 L 25 21.023438 L 30.933594 25.070313 Z M 27 17.605469 L 27 9.949219 L 40.429688 18.484375 L 34.410156 22.65625 Z M 23 17.605469 L 15.589844 22.65625 L 9.570313 18.484375 L 23 9.949219 Z M 12.09375 25.042969 L 8 27.832031 L 8 22.203125 Z M 15.570313 27.453125 L 23 32.605469 L 23 40.050781 L 9.589844 31.527344 Z M 27 32.605469 L 34.429688 27.453125 L 40.410156 31.527344 L 27 40.050781 Z M 37.90625 25.042969 L 42 22.203125 L 42 27.832031 Z "></path></g></svg>
  </a>
  <a href="https://twitter.com/chintuyadavsara">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="24" height="24"
viewBox="0 0 24 24"
><g id="surface1"><path d="M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781 ">
</path></g></svg>

  </a>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21c4.411 0 8-3.589 8-8 0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z"/><path d="M11 2h2v10h-2z"/></svg>
    </button>
  </div>
</aside>

<header className="menu-wrap">
  <figure className="user">
    <div className="user-avatar">
    <img src="https://d1qb2nb5cznatu.cloudfront.net/users/6753854-large?1504939148" alt="Chintu Yadav Sara" />
    </div>
    <figcaption>
      Chintu Yadav Sara
    </figcaption>
  </figure>

  <nav>
    <section className="dicover">
      <h3>Discover</h3>

      <ul>

        <li>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.353 2.355-6.049-.002-8.416zm-1.412 7.002L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002 1.563 1.571 1.564 4.025.002 5.588z"/></svg>
            Most popular

        </li>

        <li>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.855 14.365l-1.817 6.36a1.001 1.001 0 0 0 1.517 1.106L12 18.202l5.445 3.63a1 1 0 0 0 1.517-1.106l-1.817-6.36 4.48-3.584a1.001 1.001 0 0 0-.461-1.767l-5.497-.916-2.772-5.545c-.34-.678-1.449-.678-1.789 0L8.333 8.098l-5.497.916a1 1 0 0 0-.461 1.767l4.48 3.584zm2.309-4.379c.315-.053.587-.253.73-.539L12 5.236l2.105 4.211c.144.286.415.486.73.539l3.79.632-3.251 2.601a1.003 1.003 0 0 0-.337 1.056l1.253 4.385-3.736-2.491a1 1 0 0 0-1.109-.001l-3.736 2.491 1.253-4.385a1.002 1.002 0 0 0-.337-1.056l-3.251-2.601 3.79-.631z"/></svg>
            Sort By Year

        </li>
      </ul>
    </section>


  </nav>
</header>




<main className="content-wrap">
  <header className="content-head">
    <h1>Movies List</h1>
    <p></p>

  </header>

  <div className="content">

<List items={this.state.templist}/>

  </div>
</main>
</div>

      </div>
    );
  }
}

class List extends Component{
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    //this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    console.log("Hai");
    //this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render(){

    return(
      <div>

            <section className="person-boxes">
            {
                this.props.items.map(function(item){
                  return(
                    <div className="person-box">
                      <div className="box-avatar">
                        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} />
                      </div>
                      <div className="box-bio">
                        <h2 className="bio-name">{item.title}</h2>
                        <p className="bio-position">⭐{item.vote_average}</p>
                      </div>

                      <div className="box-actions">
                        <button >Read More</button>
                      </div>
                    </div>
                  );
                })
            }
            </section>
          <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           className="Modal"
           overlayClassName="Overlay"
           onRequestClose={this.handleCloseModal}>
          <div>dsfknsdkjfskjn</div>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

export default App;
