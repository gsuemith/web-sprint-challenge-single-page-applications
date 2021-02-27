import React from 'react'
import '../App.css'

const Order = ({ order }) => {
    return (
        <div className="order-form">
			<div className="order-card">
				<h4>Order Summary</h4>
				{/* <div className="banner"></div> */}
                {
                    order.map(item => (
                        <div key={item.id}>
                        <h5>
                            {`$${item.price} ${item.size} pizza x${item.quantity} for ${item.name} `}
                        </h5>
                        <button>Delete Item</button>
                        <hr/>
                        </div>
                    ))
                }
                <br/><br/>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Order
