import React, {useState, useEffect} from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ( {category} ) => {

     // const [count, setcount] = useState(0);
     const [images, setimages] = useState([])

     useEffect( () => {
          getGifs();
     }, [] )

     const getGifs = async() => {
          const url = 'https://api.giphy.com/v1/gifs/search?q=pokeon&limit=10&api_key=C4JbEi66m6MiNtf98vfacDlrB4RgEeq6'
          const resp = await fetch(url);
          const {data} = await resp.json();

          const gifs = data.map(img => {
               return{
                    id: img.id,
                    title: img.title,
                    url: img.images.downsized_medium.url
               }
          })

          console.log(gifs);
          setimages(gifs);
     }



     // return(
     //      <>
     //           <h3>{ category }</h3>
     //           <ol>
     //                {
     //                     images.map( ({ id, title }) => (
     //                          <li key={id}>{title}</li>
     //                     ))
     //                }
     //           </ol>
     //      </>
     // )

     return(
          <>
               <h3>{ category }</h3>
                    {
                         images.map( img => (
                              <GifGridItem key={img.id} {...img}/>
                         ))
                    }
          </>
     )
}

export default GifGrid;