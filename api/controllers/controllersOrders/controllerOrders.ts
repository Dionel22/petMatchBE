const { Order } = require("../../models/Order") ;

//crear
export const postOrder = async (taxes: number, price: number, totalPrice: number, purchaseDate: string) => {
        
        if(!taxes || !price || !totalPrice || !purchaseDate)throw new Error('Mandatory data missing');  
        console.log("purchaseDate",purchaseDate)
        const createOrder = await Order.create({taxes, price, totalPrice, purchaseDate}); 
        return createOrder;
} 

// mostrar
export const getAllOrder = async () => { 
        const allOrder = await Order.findAll() 
        
        return allOrder       
}