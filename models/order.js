import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const orderSchema = Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    message:  { 
        type: String, 
        required: true 
    },
})

const Order = model("orders", orderSchema);

export default Order;