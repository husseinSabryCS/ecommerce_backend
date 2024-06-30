// 9. موديل الشحن (Shipping)
const shippingSchema = new Schema({
    order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    shippingAddress: { type: String, required: true },
    shippingCompany: String,
    trackingNumber: String,
    shippingDate: Date,
    estimatedDeliveryDate: Date
  });
  
  const Shipping = mongoose.model('Shipping', shippingSchema);
  module.exports = {Shipping};