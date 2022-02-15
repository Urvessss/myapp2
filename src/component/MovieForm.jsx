import React, { Component } from 'react'
import Joi from 'joi-browser';
import { getGenres } from './../services/genreService';
import Form from './common/Form';

import { withRouter } from './common/withRouter';
import { getMovie } from '../services/movieService';

class MovieForm extends Form {
    constructor() {
        super();
        this.state = {
            data: {
                title: '',
                genreId: '',
                numberInStock: '',
                dailyRentalRate: ''
            },
            errors: {},
            genres: []
        }
    }

    async componentDidMount() {
        try {
            const { data: genres } = await getGenres();
            this.setState({ genres });
        } catch (ex) {
            console.log('something wrong')
        }
        const movieId = this.props.params.id;
        if (movieId === 'new') return;
        const { data: movie } = await getMovie(movieId);
        console.log('backend data', movie)
        this.setState({
            data: {
                _id:movie._id,
                title: movie.title,
                genreId: movie.genre._id,
                numberInStock: movie.numberInStock,
                dailyRentalRate: movie.dailyRentalRate
            }
        })
    }
    schema = {
        title: Joi.string().required(),
        genreId: Joi.string().required(),
        numberInStock: Joi.number().required(),
        dailyRentalRate: Joi.number().required()
    }
    doSubmit = () => {
        console.log('form submitted', this.state.data)
    }
    render() {
        const { data, errors } = this.state;
        return (
            <div>
                <h1>MovieForm</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('Title', 'title', data.title, errors.title)}
                    <div className="col-sm-6 shadow round pb-3" >
                        <div className="row justify-content-sm-center pt-5">
                            <div className="mb-3">
                                <label htmlFor='genreId' className='from-label'>Select Genre</label>
                                <select onChange={this.handaleChange} className='form-control' name='genreId'>
                                    <option value="">Select Genre</option>
                                    {
                                        this.state.genres.map(g => (
                                            <option key={g._id} value={g._id}> {g.name}</option>
                                        ))
                                    }

                                </select>
                            </div>
                        </div>
                    </div>
                    {this.renderInput('Stock', 'numberInStock', data.numberInStock, errors.numberInStock)}
                    {this.renderInput('Rate', 'dailyRentalRate', data.dailyRentalRate, errors.dailyRentalRate)}
                    {this.renderButton('save')}
                </form>
            </div>
        )
    }
}
export default withRouter(MovieForm);