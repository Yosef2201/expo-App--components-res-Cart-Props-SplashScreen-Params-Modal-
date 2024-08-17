import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const Icon = ({ item}) => {
    return (
        <View>
            <TouchableOpacity >
                <Image style={styles.image} source={item.img} />
            </TouchableOpacity>
        </View>
    );
};

export default Icon;

const styles = StyleSheet.create({
    image: {
        marginHorizontal: 15,
        width: 70,
        height: 70,
        borderRadius:35
    }
});
