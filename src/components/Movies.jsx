import React, { Component } from 'react';

import Pagination from './common/Pagination';
import { paginate } from './../utils/paginate';
import ListGroup from './common/ListGroup';
import {toast} from 'react-toastify';

import { deleteMovie, getMovies } from '../service/moviesService';
import { getGenres } from '../service/genreService';
import { withRouter } from './common/withRouter';
import { NavLink } from 'react-router-dom';

class Movies extends Component {

    constructor(){
        super()
        this.state = {
            movies : [],
            genres : [],
            pageSize : 4, 
            currentPage : 1,
            selectedGenre : null
        }
    }

    async componentDidMount(){
        //make http calls to backend, and get data

        try{

            const { data } = await getGenres();
            const genres =  [ { name : 'All Geners'}, ...data ]

            const { data : movies } =  await getMovies();
            this.setState({movies, genres})

        }catch(exception){
            console.log('something went wrong', exception)
        }
        
        // getMovies()
        //     .then((response)=>{
        //         // console.log('received data form backend')
        //         // console.log(response)
        //         const movies  = response.data;
        //         this.setState({movies})
        //     }).catch((error)=>{
        //         console.log('something went wrong...')
        //     })

        // const genres = [ { name : 'All Geners'}, ...getGenres() ] 
        // this.setState({movies, genres})
    }

    handleDelete = async (movie) => {

        const originalMovies = this.state.movies;
        
        const movies = this.state.movies.filter( m => m._id != movie._id)
        this.setState({movies})

        try{
            const { data } =  await deleteMovie(movie._id)
        }catch(ex){
           if(ex.response && ex.response.status === 404)
                toast.error('The movie has already been deleted')
                //alert('This movie not found or has already been deleted')

            this.setState({movies : originalMovies})
        }
    }

    handlePageChange = (pageNo) => {
        this.setState({currentPage : pageNo})
    }
    
    handleGenreSelect = (genre) => {
        this.setState({selectedGenre : genre, currentPage : 1})
    }

    handleAddMovie = () => {
        this.props.navigate('/movies/new')
    }

    render() {

        const { movies:allMovies, currentPage, selectedGenre, genres, pageSize } = this.state;

        const { length:count } = allMovies

        if(count === 0)
            return <p>There are no movies in the database </p>

        const filteredMovies =  selectedGenre && selectedGenre._id
                                    ? allMovies.filter(m=> m.genre._id === selectedGenre._id)
                                    : allMovies

        const paginatedMovies = paginate(filteredMovies, currentPage, pageSize )

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={genres}
                        selectedItem={selectedGenre}
                        onItemSelect={this.handleGenreSelect} />
                </div>

                <div className="col-9">
                    <div>
                        <h1>Movies</h1>
                        <p>Showing { filteredMovies.length } movies from the database</p>

                         <button onClick={this.handleAddMovie} className="btn btn-primary">
                             Add Movie
                         </button>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Genre</th>
                                    <th>Stock</th>
                                    <th>Rate</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    paginatedMovies.map(movie => (
                                        <tr key={movie._id}>
                                            <td>
                                                <NavLink to={ `/movies/${movie._id}` } >
                                                    {movie.title}
                                                </NavLink>
                                            </td>
                                            <td>{movie.genre.name}</td>
                                            <td>{movie.numberInStock}</td>
                                            <td>{movie.dailyRentalRate}</td>
                                            <td>
                                                <button onClick={()=> this.handleDelete(movie) } className="btn btn-danger btn-sm">
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                
                            </tbody>
                        </table>

                        <Pagination
                            pageSize={pageSize}
                            itemsCount={filteredMovies.length}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange} />

                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Movies);