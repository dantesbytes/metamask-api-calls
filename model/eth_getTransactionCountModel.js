import mongoose from 'mongoose';


const TransactionCountSchema = new mongoose.Schema({
  
  transactionCount: String
})

export default mongoose.model("TransactionCount", TransactionCountSchema);