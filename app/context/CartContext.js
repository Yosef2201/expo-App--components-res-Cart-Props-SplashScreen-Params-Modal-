import React, { createContext, useState } from 'react';

// إنشاء سياق للسلة
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    // حالة السلة
    const [cart, setCart] = useState([]);

    // دالة لإضافة عنصر إلى السلة
    const addToCart = (item) => {
        setCart(currentCart => {
            // البحث عن العنصر في السلة
            const index = currentCart.findIndex(cartItem => cartItem.id === item.id);

            if (index >= 0) {
                // العنصر موجود في السلة، قم بتحديث الكمية
                const updatedCart = [...currentCart];
                updatedCart[index] = {
                    ...updatedCart[index],
                    quantity: updatedCart[index].quantity + item.quantity,
                };
                return updatedCart;
            } else {
                // العنصر غير موجود في السلة، أضف العنصر الجديد
                return [...currentCart, item];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
