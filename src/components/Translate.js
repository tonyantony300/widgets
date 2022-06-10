import React,{useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";


const options = [
    {label:'Africaans',
     value:'af'
    },
    {label:'Arabic',
    value:'ar'
    },
    {label:'Hindi',
    value:'hi'
     },
     {label:'Malayalam',
     value:'ml'
    }]

const Translate = () => {

const [language, setLanguage] = useState(options[3]);
const [text, setText] = useState('')

return (
<div>
    <div className="ui form">
        <div className="field">
            <label>Please enter text here</label>
    <input value ={text} onChange ={e=> setText(e.target.value)} />
    </div>
    </div>
<Dropdown
label='Select Language'
 options={options}
 selected={language}
 setSelected={setLanguage}
 />
 <hr/>
 <h3 className="ui header">Output</h3>
 <Convert language={language} text={text} />
</div>

)

}

export default Translate;