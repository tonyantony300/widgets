import React,{ useState} from "react";


const Accordion = ({items}) =>{
    const [ActiveIndex, setActiveIndex] = useState(null);


    const onTitleClick= (index)=>{
        setActiveIndex(index);
    } 


    const renderedItems= items.map((item, index)=>{

        const active = index === ActiveIndex ? 'active': '' ;

        return (
                <React.Fragment key={item.title}>
                    <div onClick={()=>onTitleClick(index)} className={`title ${active}`}>
                      <i className="dropdown icon"></i>
                      {item.title} 
                    </div>
                    <div className={`content ${active}`}>
                        <p> {item.content} </p>
                    </div>
                </React.Fragment>)
    });

 return <div className="ui styled Accordion">
     {renderedItems}
     </div>


};

export default Accordion; 