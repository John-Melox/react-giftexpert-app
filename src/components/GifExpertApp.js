import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {


    const [ categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     setCategories( categoria => [...categoria, 'Nueva'])
    //     //setCategories( [...categories, 'Nueva'] )
    // }



  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories = { setCategories } />
    <hr />

  

    <ol>
        {
            categories.map( categoria => (
               <GifGrid 
                    key = { categoria }
                    categoria = { categoria } 
                />
            ))
        
        }
    </ol>
    </>
  )
}


