import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)

//  import React from "react"
//  import {createRoot} from "react-dom/client"

//  const container=document.getElementById("app")
//  const root=creatRoot(container)
//  root.render("con este render , va a renderizar algo")
