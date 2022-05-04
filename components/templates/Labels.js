import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Labels = ({labels}) => {
  return (
    <View style={styles.labelContaineer}>
      <Text>{labels}</Text>
    </View>
  )
}

export default Labels

const styles = StyleSheet.create({
    labelContaineer:{
        borderColor:'black',
        borderWidth:1,
        height:30
    }
})