
"use client"
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux';
import {store} from "@/toolkit/store"
import FirebaseProvider from './FirebaseProvider';

const ToolkitProvider = ({children}:{children:JSX.Element}) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default ToolkitProvider