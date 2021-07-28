import { useState, useEffect } from 'react'
import { getPhotes } from 'statusManagement/unplash'

const useImageSearch = () => {
  const [ images, setImages ] = useState(null)
  const [ query, setQuery] = useState('gato')
  useEffect(() => {
    
    if( query && query.length >0 ){
      getPhotes({query})
        .then(res => {
          setImages(res)
        })
    }
  }, [query])

  const searchImg = () =>{
    if( query && query.length >0 ){
      getPhotes({query})
        .then(res => {
          setImages(res)
        })
    }
  }
  return {
    query,
    images,
    searchImg,
    setQuery
  }
}

export default useImageSearch
