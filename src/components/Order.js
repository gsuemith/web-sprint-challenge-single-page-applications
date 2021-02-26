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
                        <h5 key={item.id}>{item.name + " " + item.id}</h5>
                    ))
                }

                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Order
