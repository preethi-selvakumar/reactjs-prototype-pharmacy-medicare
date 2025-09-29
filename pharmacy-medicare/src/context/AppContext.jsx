import React, { createContext, useState, useMemo, useContext, useEffect } from 'react';

// 1. Cart Context Logic
const CartContext = createContext();

// Get initial cart from localStorage
const getInitialCart = () => {
    const savedCart = localStorage.getItem('ecomCart');
    return savedCart ? JSON.parse(savedCart) : [];
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(getInitialCart);

    // Persist cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('ecomCart', JSON.stringify(cart));
    }, [cart]);

    // Add item to cart
    const addToCart = (product, quantity) => {
        const newItemBase = {
            id: product.id,
            title: product.title,
            price: parseFloat(product.price.replace('$', '').replace(',', '')),
            image: product.image,
        };
        const existingItemIndex = cart.findIndex(item => item.id === product.id);

        if (existingItemIndex > -1) {
            setCart(prevCart => prevCart.map((item, index) =>
                index === existingItemIndex
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            ));
        } else {
            setCart(prevCart => [...prevCart, { ...newItemBase, quantity: quantity }]);
        }
    };

    // Update item quantity
    const updateItemQuantity = (itemId, newQuantity) => {
        setCart(prevCart => prevCart.map(item =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        ));
    };

    // Remove item from cart
    const removeItem = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    // Clear entire cart
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('ecomCart');
    };

    // Calculate total items in cart
    const totalCartItems = useMemo(() => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }, [cart]);

    // Memoized context value
    const contextValue = useMemo(() => ({
        cart,
        addToCart,
        clearCart,
        updateItemQuantity,
        removeItem,
        totalCartItems,
    }), [cart, totalCartItems]);

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to access Cart Context
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

// Auth Context Logic (First-Time User & Local Storage)
const AuthContext = createContext();

// Get first-time user status from localStorage
const getInitialFirstTimeStatus = () => {
    // If 'ecomFirstVisit' does not exist in localStorage, user is first-time
    const savedStatus = localStorage.getItem('ecomFirstVisit');
    return savedStatus === null;
};

// Get initial authentication status from localStorage
const getInitialAuthStatus = () => {
    const savedAuth = localStorage.getItem('ecomAuth');
    return savedAuth === 'true';
};

export const AuthProvider = ({ children }) => {
    // Initialize state from localStorage
    const [isFirstTimeUser, setIsFirstTimeUser] = useState(getInitialFirstTimeStatus);
    const [isAuthenticated, setIsAuthenticated] = useState(getInitialAuthStatus);

    // Persist authentication state to localStorage
    useEffect(() => {
        localStorage.setItem('ecomAuth', isAuthenticated);
    }, [isAuthenticated]);

    // Mark first-time visit as completed
    const finishFirstTimeVisit = () => {
        setIsFirstTimeUser(false);
        localStorage.setItem('ecomFirstVisit', 'completed');
    };

    // Logout user
    const logout = () => {
        setIsAuthenticated(false);
    };

    // Memoized context value
    const contextValue = useMemo(() => ({
        isFirstTimeUser,
        finishFirstTimeVisit,
        isAuthenticated,
        setIsAuthenticated,
        logout,
    }), [isFirstTimeUser, isAuthenticated]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to access Auth Context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

// 3. All Providers Wrapper
export const AppProviders = ({ children }) => {
    return (
        <AuthProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </AuthProvider>
    );
};
