import React from 'react'
import '../App.css'

const Pizza = ({ values, update, submit, disabled }) => {

	const onChange = evt => {
		const { name, value, type, checked } = evt.target
		update(name, type === 'checkbox' ? checked : value)
	}

	const onSubmit = evt => {
		evt.preventDefault();
		submit()
	}

	return (
		<div className="order-form">
			<div className="order-card">
				<h4>Build Your Own Pizza</h4>
				<div className="banner"></div>

				{/* Options begin here */}
				<form className="options" onSubmit={onSubmit}>
					<label>
						<h5>Name</h5>
						<input type="text"
							onChange={onChange}
							name="name"
						/>
					</label>

					<h5>Choice of Size</h5>
					<select name="size" value={values.size} onChange={onChange}>
						<option value="">---Select a Size---</option>
						<option value="S">Small 10 in.</option>
						<option value="M">Medium 12 in.</option>
						<option value="L">Large 14 in.</option>
						<option value="XL">Extra-Large 16 in.</option>
					</select>

					<h5>Add Toppings</h5>
					<div className="toppings">
						<label>
							<input type="checkbox"
								onChange={onChange}
								name="pepperoni"
								checked={values.pepperoni}
								value={"pepperoni"}
							/>
							Pepperoni
						</label>
						<label>
							<input type="checkbox"
								onChange={onChange}
								name="sausage"
								checked={values.sausage}
								value={"sausage"}
							/>
							Italian Sausage
						</label>
						<label>
							<input type="checkbox"
								onChange={onChange}
								name="mushroom"
								checked={values.mushroom}
								value={"mushroom"}
							/>
							Mushrooms
						</label>
						<label>
							<input type="checkbox"
								onChange={onChange}
								name="olive"
								checked={values.olive}
								value={"olive"}
							/>
							Black Olives
						</label>
						<label>
							<input type="checkbox"
								onChange={onChange}
								name="greenPepper"
								checked={values.greenPepper}
								value={"greenPepper"}
							/>
							Green Peppers
						</label>
						<label>
							<input type="checkbox"
								onChange={onChange}
								name="bacon"
								checked={values.bacon}
								value={"bacon"}
							/>
							Bacon
						</label>
						<label>
							<input type="checkbox"
								onChange={onChange}
								name="chicken"
								checked={values.chicken}
								value={"chicken"}
							/>
							Grilled Chicken
						</label>
						<label>
							<input type="checkbox"
								onChange={onChange}
								name="anchovy"
								checked={values.anchovy}
								value={"anchovy"}
							/>
							Anchovies
						</label>
					</div>

					<div className="special-instructions">
						<h5>Special Instructions</h5>
						<input type="text"
							name="instructions"
							onChange={onChange}
							value={values.instructions}
							maxLength="50"
						/>
					</div>

					<div className="submit-order">
						<label>
							How many?
							<input type="number"
							min="1" max="10"
							value={values.quantity}
							onChange={onChange}
							name="quantity"
						/>
						</label>
						
						<button disabled={disabled}>Add to Order</button>
					</div>
				</form>
				

			</div>
		</div>
	)
}

export default Pizza
