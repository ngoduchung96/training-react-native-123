import { fakeData } from "../constants/fakeData";

export default {
  getFeaturedProductsAPI: (params) => {
    console.log("transmitted params in API: ",params);
    return fakeData.featuredProducts;
  },
};
