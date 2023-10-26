import { useSelector } from 'react-redux';
import '../style2.css';

function CartPage() {
    const appState = useSelector((state) => state).AppState;
    const cartList = appState.AppChosenItems.filter((item) => item.count > 0);

    return (
        <div className='cartSection'>
            <h1>Your cart list</h1>
            <div className="cart-mainContainer">
                <div className='itemList-section'>
                    {cartList.map((item) => {
                        return (
                            <div className='singleCartItem'>
                                <div>
                                    <img alt='item name' src={item.image} />
                                </div>
                                <div>
                                    <p className='itemTitle'>{item.title}</p>
                                    <p className='itemPrice'>₹ {item.price}</p>
                                    <p className='itemCount'><span>Qty:</span> {item.count}</p>
                                    <div className='cartBtns'>
                                        <button className='outlinedBtn'>Remove</button>
                                        <button className='filledBtn'>Move to Wishlist</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <ul className='price-section'>
                    <li className='textBold'>PRICE DETAILS</li>
                    <li><div>Total MRP</div><div>₹ 500</div></li>
                    <li><div>Shipping Charge</div><div>FREE</div></li>
                    <li><div>Discount</div><div>-₹ 100</div></li>
                    <hr></hr>
                    <li className='textBold'><div>Total Amount</div><div>₹ 400</div></li>
                    <li className='placeOrder'><button className='filledBtn'>PLACE ORDER</button></li>
                </ul>
            </div>
        </div>
    )
}

export default CartPage;