

import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { ApolloProvider,ApolloClient,InMemoryCache } from '@apollo/client'

import Context from './Context'


const client=new ApolloClient({
    uri:"https://petgram-server-elviscruz45.vercel.app/graphql",
    cache: new InMemoryCache(),
    request:operation=>{
        const token=window.sessionStorage.getItem("token")
        const authorization=token?`Bearer ${token}`: ""
        operation.setContext({
            headers:{
                authorization
            }
        })
    },
    onError:error=>{
    const {networkError}=error
    if (networkError && networkError.result.code==="invalid_token"){
        window.sessionStorage.removeItem("token")
        window.location.href="/"
    }
    }
})



const container = document.getElementById('app')
const root = createRoot(container)
root.render(
    <Context.Provider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Context.Provider>
    )








//  import React from "react"
//  import {createRoot} from "react-dom/client"

//  const container=document.getElementById("app")
//  const root=creatRoot(container)
//  root.render("con este render , va a renderizar algo")
