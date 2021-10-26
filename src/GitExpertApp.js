import React from 'react'
import { useState } from 'react'
import { AddCAtegory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GitExpertApp = () => {
    const [categories, setcategories] = useState(['One punsh man'])
    return (
        <div>
            <h2>GIF Expert APP</h2>
            <hr></hr>
            <AddCAtegory setCategorie={setcategories} ></AddCAtegory>
            <div >
                {
                    categories.map( category => ( <GifGrid title={category} key={category} ></GifGrid>) )
                }
            </div>
        </div>
    )
}
