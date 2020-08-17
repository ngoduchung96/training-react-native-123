import { connect } from "react-redux";
import ACTIONS from "../store/actions";

const { getFeaturedProducts } = ACTIONS;

function mapStateToProps(state) {
  const { products } = state;
  return {
    products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFeaturedProducts: (params, callback) =>
      dispatch(getFeaturedProducts(params, callback)),
  };
}

export default function withConnect(com) {
  return connect(mapStateToProps, mapDispatchToProps)(com);
}
