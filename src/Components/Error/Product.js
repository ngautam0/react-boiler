import React from 'react';


const Product = (props) => (
	<React.Fragment>
		<ul>
			<div className="col-sm-6">
				{props.product.name.toUpperCase()}
			</div>
			<div className="col-sm-6">
				{props.product.price}
			</div>
	</ul>
	</React.Fragment>

);

export default Product;
