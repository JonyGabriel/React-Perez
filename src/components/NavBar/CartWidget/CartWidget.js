import cart from './assets/cart.svg'
import '../../../styles/style.css'
const CartWidget = () =>  {
  return (
    <div className='container-cart' >
      <br></br>
      <button type="button" class="btn btn-outline-light"><img src={cart} alt='cart-widget'width={30} className='cart-logo' />0</button>
    </div>
  )
}
export default CartWidget