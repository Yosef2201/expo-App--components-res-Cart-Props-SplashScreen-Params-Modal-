import { StyleSheet, View, Image, TouchableOpacity ,Text} from 'react-native';
import ModalNew from './ModalNew';

const Icon = ({ item}) => {
    return (
        <View style={styles.container}> 
            <TouchableOpacity >
                <Image style={styles.image} source={item.img} />
                <Text style={styles.txt}>{item.name}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Icon;

const styles = StyleSheet.create({
    image: {
        marginHorizontal: 20,
        width: 55,
        height: 55,
        borderRadius:20,
        right:3
    },
    txt:{
        textAlign:'center',
        fontSize:16
    },
    container:{
        marginTop:20
    }
});
