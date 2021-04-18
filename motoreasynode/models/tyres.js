import mongoose from 'mongoose';
const tyresSchema = new mongoose.Schema({
  brand: String,
  _brandid: String,
  title: String,
  size: Array,
  price: Array,
  image: String,
},
{collection: 'tyres_collection'});


const brandsSchema = new mongoose.Schema({
  _brandid: String,
  brandTitle: String,
  logo: String
},
{collection: 'brands_collection'})

const Tyre = mongoose.model('tyre', tyresSchema);
export const Brand = mongoose.model('brand', brandsSchema);

export default Tyre;


