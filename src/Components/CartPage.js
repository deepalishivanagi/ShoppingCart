import { useDispatch, useSelector } from 'react-redux';
import AdderSubtractor from '../AdderSubtractor';
import '../style2.css';

function CartPage() {
    const appState = useSelector((state) => state).AppState;
    const dispatch = useDispatch();

    let sum = 0;
    let cartList = [];
    if (appState.CartListItems.length > 0) {
        for (let i = 0; i < appState.CartListItems.length; i++) {
            let addData = appState.DataArray.find((item) => item.id == appState.CartListItems[i].id);
            let count = appState.CartListItems[i].count;
            if (count == 0) {
                continue;
            }
            else {
                let newData = { ...addData, count: count };
                sum = sum + (count * addData.price)
                cartList.push(newData);
            }
        }
    }
    else {
        return (
            <div>
                <h1 style={{ marginTop: "10rem" }}>No items added to cart</h1>
            </div>)
    }

    function addToWishlistHandler(selectedId) {
        dispatch({ type: "AddToWishlist", id: selectedId });
    }

    function removeItemHandler(data) {
        dispatch({ type: "AddSubCountHandler", temp: 0, id: data.id });
    }

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
                                    {/* <p className='itemCount'><span>Qty:</span> {item.count}</p> */}
                                    <p><AdderSubtractor item={item} /></p>
                                    {/* <p className='itemCount'><button className='quantityBtn'>+</button><span>{item.count}</span><button className='quantityBtn'>-</button></p> */}
                                    <div className='cartBtns'>
                                        <button className='outlinedBtn' onClick={() => { removeItemHandler(item) }}>Remove</button>
                                        <button className='filledBtn' onClick={() => { addToWishlistHandler(item.id) }}>Move to Wishlist</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <ul className='price-section'>
                    <li className='textBold'>PRICE DETAILS</li>
                    <li><div>Total MRP</div><div>₹ {sum.toFixed(2)}</div></li>
                    <li><div>Shipping Charge</div><div>FREE</div></li>
                    <li><div>Discount</div><div>-₹ {(sum*appState.Discount).toFixed(2)}</div></li>
                    <hr></hr>
                    <li className='textBold'><div>Total Amount</div><div>₹ {(sum.toFixed(2) - (sum*appState.Discount).toFixed(2))}</div></li>
                    <li className='placeOrder'><button className='filledBtn'>PLACE ORDER</button></li>
                </ul>
            </div>
        </div>
    )
}

export default CartPage;