import { connect } from 'react-redux';
import { getProducts } from 'redux/productsRedux';
import ProductsList from './ProductsList';

const mapStateToProps = state => ({
  products: getProducts(state),
});

export default connect(mapStateToProps)(ProductsList);
