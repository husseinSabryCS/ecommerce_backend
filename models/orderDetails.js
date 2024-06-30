
// 5. موديل تفاصيل الطلب (OrderDetails)
const orderDetailsSchema = new Schema({
    order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
  });
  
  const OrderDetail = mongoose.model('OrderDetail', orderDetailsSchema);
  module.exports = {OrderDetail};