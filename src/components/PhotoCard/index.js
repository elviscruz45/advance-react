import React, {useEffect,useRef,useState,Fragment} from 'react'
import { ImgWrapper, Img, Button,Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutations'
import {Link} from "@reach/router"

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg'



export const PhotoCard = ({ id, likes= 0,liked, src = DEFAULT_IMAGE }) => {
  const [show,element]=useNearScreen()


  return (
    <Article ref={element}>
    {show && <Fragment>

      <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
      </Link>
      <ToggleLikeMutation>
        {
          (toggleLike)=>{
            const handleFavClick=()=>{
              toggleLike({variables:{
                input:{id}
              }})
            }
            return <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
          }
        }
      </ToggleLikeMutation>
    </Fragment>
    }
    </Article>
  )
}
