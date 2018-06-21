import React from 'react';

// searchChange: change input,send to parent to start function 
const SearchBox = ({searchfield, searchChange, optionChange}) => {
	return(
		<div className='pa2'>
			<input className='pa3 ba b-green bg-lightest-blue'
			type='search' placeholder='Filter Courses' 
			onChange={searchChange}
			/>
			<p className='dib pa1'></p>
			 <select className='pa3 ba b-green bg-lightest-blue' onChange={optionChange}>
			 	  <option value="All" selected="selected">All</option>
				  <option value="IT">IT</option>
				  <option value="IT-WebDevelopment">IT-WebDevelopment</option>
				  <option value="IT-CyberSecurity">IT-CyberSecurity</option>
				  <option value="IT-General">IT-General</option>
				  <option value="Others">Others</option>
			  </select> 
		</div>
	);
}

export default SearchBox;