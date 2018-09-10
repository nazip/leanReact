import {connect} from 'react-redux';
import Header from '/src/components/shared/Layout/Header';

const stateToProps = (state) => (
    {
        isBasketEmpty: () => state.basket.items.length == 0 
    }
)

export default connect(stateToProps, null)(Header);