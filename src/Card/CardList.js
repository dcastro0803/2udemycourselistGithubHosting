import React from 'react';
import Card from './Card';

// no communicate state PURE FUNCTIONS
const CardList = ({courses}) => {
	
  const cardArray = courses.map((user, i) => {
      return <Card 
      	id={courses[i].id} 
      	name={courses[i].name} 
      	complete={courses[i].complete}
      	area={courses[i].area}
  	    skillslearned={courses[i].skillslearned}
  	    description={courses[i].description}
        images={courses[i].images}
      />
    })
 return (
      <div >
      	{cardArray}
      </div>
    );
}

export default CardList;