import React from 'react';
import Accordion from './components/Accordion';


const items = [
{ title: 'what is React',
  content: 'React is a frontend Library'
},
{ title:'Why react?',
  content: 'It is favoured by many Engineers in the industry'
},
{ title:'Best feature in React?',
  content: 'Ability to build as components'
}

]


export default (() => {
return (
<div>
 <Accordion items={items}/>
</div> ) 
});