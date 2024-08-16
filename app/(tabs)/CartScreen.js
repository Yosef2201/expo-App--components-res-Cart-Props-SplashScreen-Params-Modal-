import { StyleSheet, Text, View, FlatList,Image } from 'react-native';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartScreen = () => {
    const { cart } = useContext(CartContext);

    if (!cart) {
        return <Text>There was an error loading the cart</Text>;
    }

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>Quantity: {item.c}</Text>
            <Text style={styles.itemText}>Price: {item.price * item.c}$</Text>
            <Image style={styles.pic} source={item.img}/>
        </View>
    );

    return (
        <View style={styles.container}>
            {cart.length > 0 ? (
                <FlatList
                    data={cart}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id} // השתמש ב-ID כ-Key
                />
            ) : (
                <Text style={styles.emptyText}>The cart is empty</Text>
            )}
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    itemContainer: {
        marginBottom: 15,
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 16,
    },
    emptyText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
    pic:{
        width:70,
        height:70
    }
});
