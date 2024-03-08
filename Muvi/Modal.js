import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { useState } from 'react'

export default function Modal() {
    const [visible, setVisible]= useState(false)
    
  return (
    <View style={styles.modal}>
      <Modal>
        <Text>You do not have any Notification as of now. {'\n'}
        Check back later!</Text>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    modal:{
        height:200,
        width:300
    }
})