import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
     // Affichage du film et son poster
     // crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant. ( map)
     // props = une information qui vient de l'exterieur du composant
	return (
		<> 
    
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;