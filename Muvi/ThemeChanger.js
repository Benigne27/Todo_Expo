import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'

const DarkMode= createContext()

export default function ThemeChanger({children}) {
    const [darkMode, setDarkMode]=useState(true)

    const handleMode=()=>{
        setDarkMode((prop)=>!prop)
    }
  return (
    <View>
      <DarkMode.Provider value={{darkMode, handleMode}}>
        {children}
      </DarkMode.Provider>
    </View>
  )
}

const styles = StyleSheet.create({})