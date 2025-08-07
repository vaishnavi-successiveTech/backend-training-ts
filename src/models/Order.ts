import { required } from "joi";
import mongoose from "mongoose";

export const OrderSchema=new mongoose.Schema({
    orderId:{
        type:String,
        required:true,
        unique:true
    },
    customerName:{
        type:String,
        required:true,

    },
    orderDate:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:["Pending","Shipped","Delivered"]
    },
    items: [
    {
      productName: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      },
      price: {
        type: Number,
        required: true,
        min: 0
      }
    }
  ],
    totalAmount:{
        type:Number,
        required:true
    }
})

export const Order=mongoose.model("Order",OrderSchema);

