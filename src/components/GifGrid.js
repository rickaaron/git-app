import React from 'react'
import { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
export const GifGrid = ({title}) => {
    // const [count, setCount] = useState(0);
    // const [Images, setImages] = useState([])

    const { data , loading} = useFetchGifs(title);

    return (
        <div>
           <h3> {title} </h3>
           
           { loading ? 'Cargado...' : ''}
           <div className="container">
               {data.map( gif => <GifGridItem key={gif.id} {...gif} ></GifGridItem> )}
           </div>
        </div>
    )
}
