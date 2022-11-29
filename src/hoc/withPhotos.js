import { graphql } from '@apollo/client/react/hoc';
import { gql } from '@apollo/client';

export const withPhotos=graphql(gql`
query getPhotos($categoryId:ID){
  photos(categoryId:$categoryId){
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`)