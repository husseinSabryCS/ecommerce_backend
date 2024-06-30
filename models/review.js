// 8. موديل المراجعات والتقييمات (Reviews)
const reviewSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: String,
    reviewDate: { type: Date, default: Date.now }
  });
  
  const Review = mongoose.model('Review', reviewSchema);
  module.exports = {Review};