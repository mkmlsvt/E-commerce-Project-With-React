import React, { Component } from 'react'
import { Table, Badge } from 'reactstrap'
export default class CartList extends Component {
    renderCart() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>category ID</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Unit İn stoc</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(cartitem => (
                            <tr key={cartitem.product.id}>
                                <td>{cartitem.product.id}</td>
                                <td>{cartitem.product.categoryId}</td>
                                <td>{cartitem.product.productName}</td>
                                <td>{cartitem.product.unitPrice}</td>
                                <td>{cartitem.product.unitInStock}</td>
                                <td>{cartitem.quantity}</td>
                                <td>  <Badge color="danger" onClick={() => this.props.removeFromCart(cartitem.product)}>Remove</Badge> </td>
                            </tr>
                        ))
                    }


                </tbody>
            </Table>
        )
    }
    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        )
    }
}
