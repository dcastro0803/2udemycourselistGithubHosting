import React from 'react';
import './Card.css';
import image1 from '../images/noAvailable.jpg';

let notimages = true;
// no communicate state 
const Card = ({name, complete, id, area, skillslearned, description, images}) => {
 	if(images === undefined){ notimages = false;}
 	console.log(images);
 	return (
      <div className='bg-lightest-blue cardText gray shadow-3 dib br4 pa3 ma3 grow bw2 '>
        <h2>{name}</h2>
        {notimages ? <img alt='' src={images} />:<img alt='' src={image1}/>}
        
        <p className='fl w-30 fw9' >{complete}</p>
		<p className='fl w-70' >Area: {area}</p>
        <p className='fl w-25'>Skills learned:</p>
        <p className='fl w-75 fw6'>{skillslearned}</p>
        <p className='fl w-100 underline'> Brief Course Description: </p>
        <p className='fl w-100 i'>{description}</p>
      </div>
    );
}

export default Card;
