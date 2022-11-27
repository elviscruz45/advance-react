import React, {useEffect,useRef,useState,Fragment} from 'react'
import { ImgWrapper, Img, Button,Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show,setShow]=useState(false)

  useEffect(function(){
    Promise.resolve(
      typeof window.IntersectionObserver !=='undefined'
      ? window.IntersectionObserver
      : import('intersection-observer')
      ).then(()=>{
      const observer=new window.IntersectionObserver(
      function (entries){
        const {isIntersecting}= entries[0]
        
        console.log(isIntersecting)

        if(isIntersecting){
          setShow(true)
          observer.disconnect()
        }
      })
    observer.observe(element.current)
    })

    
  },[element])


  return (
    <Article ref={element}>
    {show && <Fragment>

      <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32px' />{likes} Likes!
          </Button>

    </Fragment>
    }

    </Article>
  )
}
