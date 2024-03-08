import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'

const ThemeContext= createContext()

export default function ThemeProvider({children}) {
    const [darkMode, setDarkMode]=useState(false)

    const handleMode=()=>{
        setDarkMode(!darkMode)
    }
  return (
    <View>
      <ThemeContext.Provider value={{darkMode, handleMode}}>
        {children}
      </ThemeContext.Provider>
    </View>
  )
}

const styles = StyleSheet.create({})