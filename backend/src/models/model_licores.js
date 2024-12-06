import mongoose from "mongoose";

const productScheme = new mongoose.Schema({

    Image: {type: String, required: true}, 
    name: {type: String, required: true},
    category: {type:  String, 
        enum: ['aguardiente', 'ron', 'x'],  
        required: false},
    price: {type: Number, required: true},
    description: {type: String}, 
    });

    export const productModel = mongoose.model('product', productScheme);
