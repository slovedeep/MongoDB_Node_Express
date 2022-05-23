// import movie from './movies/movies.js';
// import actor from './actors/actors.js';
// import moviePojo from '../models/movies/moviePojo.js';
// import actorPojo from '../models/actors/actorPojo.js';
import movie from '../managers/managerMongoDB.js';


class MoviesModel {



    async getMovies() {

        console.log("---> moviesModel::getMovies");

        const movies = await movie.getMovies();
        return movies;
    }
    async getMovieById(id) {

        console.log(`---> moviesModel::getMovieById = ${id}`);
        const movies = await movie.getMoviesById(id);
        return movies;
    }

    async removeMovie(id) {

        console.log(`---> moviesModel::removeMovie = ${id}`);

        const movies = await movie.RemoveMovieById(id);
        return ((movies.acknowledged == false)? -1:1);
    }


    // getMovieBy(elem) {
    //     console.log(`---> moviesModel::getMovieBy = ${elem.value}`);


    //     const _movies = movie.getMovieBy(elem);

    //     _movies.forEach(element => {
    //         element.actors = actor.getActorsById(element.id).actors;

    //     });
    //     return _movies;
    // }


    async createMovie(req) {

        console.log(`---> moviesModel::createMovie = ${req.id}`);
        await movie.addMovie(req);
    }

    async updateMovie(req) {
        console.log(`---> moviesModel::updateMovie = ${req.id}`);
        await movie.UpdateMovie(req);


    }

    // getMoviesFromActor(req) {
    //     console.log(`---> moviesModel::getMoviesFromActor = ${req.id}`);

    //     let _movies = [];

    //     const movies_id = actor.getIDFromActor(req)
    //     movies_id.forEach(element => {
    //         _movies.push(movie.getMovieById(element.id));
    //     });

    //     return _movies;
    // }

    // addActors(req) {
    //     console.log(`---> moviesModel::addActors = ${req.id}`);

    //     actor.addActorToMovie(req)
    //     return this.getMovieById(req.id);

    // }

}

export default new MoviesModel()