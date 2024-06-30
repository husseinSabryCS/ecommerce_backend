const productSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    images: [String]
  });
  
const Product = mongoose.model('Product', productSchema);
module.exports = {Product};