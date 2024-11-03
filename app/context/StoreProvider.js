import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import StoreContext from './StoreContext';

const StoreProvider = (props) => {
    const [cart,setCart]=useState([])
    const ProviderValue={
        cart,
        setCart
    }
  return (
    <StoreContext.Provider value={ProviderValue}>
      {props.children}
    </StoreContext.Provider>
    
  )
}

export default StoreProvider

const styles = StyleSheet.create({})