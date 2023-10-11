import React from 'react';


// Fonction pour la searchbar
const SearchBox = (props) => {
	return (
         
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Chercher un film...'
			></input>
		</div>
	);
};

export default SearchBox;


