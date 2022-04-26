import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem'


export const GifGrid = ({ categoria }) => {


const { data: images, loading } = useFetchGifs( categoria )




  //getGifs()

  return (
    <>  
        <h3 className='animate__animated animate__heartBeat'>{ categoria }</h3>

        { loading && <p>Loading</p> }

        { <div className='card-grid'>
            {
                images.map ( img => (
                  <GifGridItem 
                      key = { img.id }
                      { ...img }
                  />
                ))
            }
          </div> 
        }
    </>
  )
}