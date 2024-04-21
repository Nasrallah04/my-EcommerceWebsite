import {ItemDetails,ProductName,ProductPrice,CartItemContainer} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ProductName>{name}</ProductName>
        <ProductPrice>
          {`${quantity} x ${price}`}
        </ProductPrice>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;