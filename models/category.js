// 3. موديل الفئات (Categories)
const categorySchema = new Schema({
    name: { type: String, required: true },
    description: String
  });
  
const Category = mongoose.model('Category', categorySchema);
module.exports = {Category};