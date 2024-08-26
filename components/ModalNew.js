import { StyleSheet, Text, View, Modal, Image, TouchableOpacity } from 'react-native';

const ModalNew = ({ modalVisible, setModalVisible,item  }) => {
    const { name, address, phone, description, img } = item ;

    return (
        <Modal
            // animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}>
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Image style={styles.pic} source={img} />
                    <Text>{name}</Text>
                    <Text>{phone}</Text>
                    <Text>{address}</Text>
                    <Text>{description}</Text>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={styles.closeText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ModalNew;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    pic: {
        width: 100,
        height: 100,
        marginBottom: 15,
    },
    closeText: {
        color: 'blue',
        marginTop: 15,
        fontSize: 18,
    },
});
