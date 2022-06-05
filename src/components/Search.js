import React, {useState, useEffect} from "react";
import axios from "axios";


const Search=()=>{

    const [term, setTerm] = useState('Programming');
    const [result, setResult] = useState([])

    useEffect(() => {

            const search = async() => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
            params: {
            action:'query',
            list:'search',
            origin: '*',
            format: 'json',
            srsearch: term
            }
            });
            setResult(data.query.search);
            }

        if (term && !result.length){
        search();
        } else {

            const timeoutId = setTimeout(()=> { if (term){
                search()
                }
                }, 500 );
        
             return (()=>{
                    clearTimeout(timeoutId);
               });


        }


       

     },[term]   

    );

    const renderedResults = result.map((item)=>{

        return ( 
        <div  key={item.pageid} className="item">
            <div className="right floated content">
                    <a 
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${item.pageid}`}
                    >
                        Go
                </a>

            </div>
            <div className="contents">
                <div className="header">
                    {item.title}
                </div>
                    <span dangerouslySetInnerHTML={{ __html: item.snippet}}></span>
            </div>
        </div>
        );


    });




    return (
        <div >
        <div className="ui form">
            <div className="field">
                <label>Enter your input here</label>
                <input 
                value={term}
                onChange={ (e) => setTerm(e.target.value) }
                className="input">
                </input>
            </div>
        </div>
        <div className="ui celled list">
        {renderedResults}
        </div>
        </div>
 
    );

}

export default Search;