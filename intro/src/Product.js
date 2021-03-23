import React, { Component } from 'react'
import { Table } from 'reactstrap';
import { Button} from 'reactstrap';
export default class Product extends Component {
    
    render() {
        return (
            <div>
                <h2>{this.props.info.tittle}</h2>
                {/* <h1>{this.props.info.nursima}</h1> */}
                {/* <h1>{this.props.currentCategory}</h1> */}
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantitiy Per Unit</th>
                            <th>Unit İn stock</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.props.products.map(product => (
                                <tr key={product.id}>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitsInStock}</td>
                                   <td><Button onClick={()=>this.props.addToCart(product)} color="info">Add To Card</Button></td>
                                </tr>
                            ))
                        }                      
                    </tbody>
                </Table>
            </div>
        )
    }
}
