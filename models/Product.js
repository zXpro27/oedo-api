import mongoose from "mongoose";

const ProductBanner = mongoose.Schema({
  titleBanner: {
    type: String,
    required: true
  },
  bannerImg: {
    type: String,
    required: true
  }
});

export default mongoose.model('Banner', ProductBanner);
