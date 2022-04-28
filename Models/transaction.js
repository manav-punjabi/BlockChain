const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema= new Schema({
    to:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }

},{timestamps: true});

const Transaction= mongoose.model('Transactions',transactionSchema);
module.exports = Transaction;