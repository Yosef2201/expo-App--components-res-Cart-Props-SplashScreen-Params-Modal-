import { StyleSheet, Text, View,Modal,Pressable } from 'react-native'

const ModalNew = ({modalVisible,setModalVisible}) => {
   

  return (
     <View style={styles.container}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
 
  </View>
  )
}

export default ModalNew

const styles = StyleSheet.create({
    centeredView:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        height:100,
        width:200,
        alignSelf:'center',
        margin:'auto'
        
    }
})