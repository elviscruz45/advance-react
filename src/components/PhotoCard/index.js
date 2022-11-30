import React, {useEffect,useRef,useState,Fragment} from 'react'
import { ImgWrapper, Img, Button,Article } from './styles'
import { MdFavoriteBorder,MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg'



export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key =`like-${id}`
  const [liked,setLiked]=useLocalStorage(key,false)
  const [show,element]=useNearScreen()

  const Icon=liked? MdFavorite:MdFavoriteBorder

  return (
    <Article ref={element}>
    {show && <Fragment>

      <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={()=>setLiked(!liked)}>
            <Icon size='32px' />{likes} Likes!
          </Button>

    </Fragment>
    }

    </Article>
  )
}