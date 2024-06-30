// 4. موديل الطلبات (Orders)
const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    orderDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['pending', 'confirmed', 'shipped', 'completed', 'cancelled'], default: 'pending' }
  });
  
  const Order = mongoose.model('Order', orderSchema);
  module.exports = {Order};