import React,{useState} from 'react';

function Search({cb=Function.prototype}) {
    const [value,setValue] = useState('')
    const handleKey=(e)=>{
        if(e.key === 'Enter'){
            handleSubmit()
        }
    }
    const handleSubmit=()=>{
        cb(value)
    }
    return (
        <div className="row" id='search-panel'>
            <div className="input-field col s12 "  id='search'>
                <input
                    type="text"
                    placeholder='search here...'
                    onKeyDown={handleKey}
                    onChange={(e)=>setValue(e.target.value)}
                    value={value}
                />
                <button className="btn "
                        style={{
                            position:'absolute',
                            top:0,
                            right:0
                        }}
                        onClick={handleSubmit}>search</button>
            </div>
        </div>

    );
}

export default Search;