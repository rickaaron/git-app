import React from 'react'
import { useState } from 'react'

export const AddCAtegory = ( { setCategorie} ) => {
    const [inputValue, setinputValue] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        setCategorie( cats => [inputValue , ...cats] );
        setinputValue('');
    }
    return (
        <div>
            <h2>{inputValue}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={ (e) => setinputValue(e.target.value) } />
            </form>
        </div>
    )
}
