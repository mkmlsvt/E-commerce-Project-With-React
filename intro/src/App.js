import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import CategoryList from './CategoryList';
import Navi from './Navi';
import Product from './Product';
import { Col } from "reactstrap";
import alertify from "alertifyjs"
import { Route, Switch } from 'react-router';
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';
//import React, { Component } from 'react'

export default class App extends Component {

  state = { currentCategory: "", products: [], cart: [] }

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id);
  }
  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url).then(response => response.json()).then(data => this.setState({ products: data }));
  }
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id)
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      newCart.push({ product: product, quantity: 1 })
      this.setState({ cart: newCart })
      alertify.success(product.productName + " added to cart")
    }
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart })
  }
  render() {
    let productInfo = { tittle: "Product List", nursima: "Nursima" };
    let categroyListInfo = { tittle: "Category List", mehmet: "Mehmet" };
    return (
      <div>
        <Container>

          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categroyListInfo} />
            </Col>
            <Col xs="9">
              <Switch>
                <Route exact path="/" render={props => (
                  <Product {...props} addToCart={this.addToCart} products={this.state.products} currentCategory={this.state.currentCategory} info={productInfo} />
                )
                } />


                <Route exact path="/cart" render={props => (
                  <CartList {...props} removeFromCart={this.removeFromCart} cart={this.state.cart} />
                )} />
                <Route path="/form2" component={FormDemo2}></Route>
                <Route path="/form1" component={FormDemo1}></Route>
                <Route component={NotFound} />
              </Switch>


            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}


//export default App;