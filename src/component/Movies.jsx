import React, { Component } from 'react';
import Pagination from './common/Pagination';
import { paginate } from './../utils/paginate';
import ListGroup from './common/ListGroup';
import {  toast } from 'react-toastify';
import { deleteMovies, getMovies } from '../services/movieService';
import { getGenres } from '../services/genreService';
import { NavLink } from 'react-router-dom';
import { withRouter } from './common/withRouter';

class Movies extends Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            genres: [],
            pageSize: 4,
            currentPage: 1,
            selectedGenre: null
        }
    }
    async componentDidMount() {
        try{

const {data } =await getGenres();
const genres=[{name:'All Generes'},...data]


      const {data:movies}= await getMovies();
      this.setState({movies,genres})
        }catch(exception){
            console.log('something wrong',exception)
        }
//   getMovies()
//       .then((response)=>{
//        const movies=   response.data;
//        this.setState({movies})
//       }).catch((error)=>{
// console.log('something wrong')
//       })
        // const genres = [{name :'All Geners'},...getGenres()]
        // this.setState({ movies, genres })
    }

    handleDelete = async(movie) => {
        const originalMovies=this.state.movies;
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({ movies })
        try{
      const {data} =await deleteMovies(movie._id)
       
        }catch(ex){
        if(ex.responce && ex.responce.status==404)
        toast.error('The movies has already deleted')
        this.setState({movies:originalMovies})
        }

    }
    handlePageChange = (pageNo) => {
        this.setState({ currentPage: pageNo })

    }
    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre: genre, currentPage : 1})
    }
    handleAddMovie=()=>{
this.props.navigate('/movies/new')
    }


    render() {
        const { movies : allMovies, currentPage, genres,selectedGenre, pageSize } = this.state;
        const { length: count } = allMovies;

        if (count === 0)
            <p>There is no movie in the database.</p>

        const filterMovies = selectedGenre && selectedGenre._id ? allMovies.filter(m=>m.genre._id===selectedGenre._id):allMovies

        

        const paginatedMovies = paginate(filterMovies, currentPage, pageSize)
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={genres}
                        selectedItem = {selectedGenre}
                        onItemSelect = {this.handleGenreSelect}
                         />
                </div>
                <div className="col-9">
                    <div>
                        <h3>Movies</h3>
                        <p>Showing {filterMovies.length} movies from the database</p>
<button onClick={this.handleAddMovie} className='btn btn-primary'>Add Movie</button>

                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Stock</th>
                                    <th>Rate</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    paginatedMovies.map(movie => (

                                        <tr key={movie._id}>
                                            <td><NavLink to={`/movies/${movie._id}`}>
                                                {movie.title}</NavLink></td>
                                            <td>{movie.genre.name}</td>
                                            <td>{movie.numberInStock}</td>
                                            <td>{movie.dailyRentalRate}</td>
                                            <td>
                                                <button onClick={() => this.handleDelete(movie)} className='btn btn-danger btn-small'>Remove</button>
                                            </td>
                                        </tr>

                                    ))
                                }

                            </tbody>
                        </table>
                        <Pagination
                            pageSize={pageSize}
                            itemCount={filterMovies.length}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange} />
                    </div>

                </div>
            </div>

        );
    }
}

export default withRouter(Movies);