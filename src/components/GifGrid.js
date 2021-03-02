import React from 'react';
import GifGridItem from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs';

const GifGrid = ( {category} ) => {

     const {data: images, loading} = useFetchGifs( category );

     return(
          <>
               <h3 className="animated_animated animate__flash">{ category }</h3>
               { loading && <p>Loading</p> }
               <div className="cardGrid">
               
               {
                    images.map( img => (
                    <GifGridItem 
                         key ={ img.id } 
                         { ...img } 
                    />
               ))   
               }
               </div>
          </>
          
     )
}

export default GifGrid;