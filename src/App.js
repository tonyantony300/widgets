import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';



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

const options = [
    {
    label:'The color Red',
    value:'Red'
    },
    {
    label:'The color Green',
    value:'Green'
    },
    {
    label:'A shade of Blue',
    value:'Blue'
    },
]



export default (() => {

    const[selected, setSelected]=useState(options[0]);

return (
    <div>
    <Header/>
  <Route path='/'>
      <Accordion items={items} />
  </Route>
 <Route path='/dropdown'>
     <Dropdown 
     label='select a color'
     options={options}
     selected={selected}
     setSelected={setSelected}
     />
 </Route>
<Route path='/list'>
    <Search />
</Route>
<Route path='/translate'>
    <Translate />
</Route>
    </div> 
 ) 
});