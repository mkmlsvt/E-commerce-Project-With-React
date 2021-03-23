import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
            
        };
    }
    componentDidMount(){
        this.getCategories();
    }
    changeCategory=(category)=>{
        this.setState({currentCategory:category.categoryName})

    }

    getCategories=()=>{
        fetch("http://localhost:3000/categories").then(response=>response.json()).then(data=>this.setState({categories:data}));

    }
    render() {
        return (
            <div>
                <h3>{this.props.info.tittle}</h3>
                <h3>{this.state.counter}</h3>
                <ListGroup >
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem active={category.categoryName===this.props.currentCategory?true:false} onClick={()=>this.props.changeCategory(category)} key={category.id} tag="a" href="#">{category.categoryName}</ListGroupItem>
                        ))
                    }
                    <ListGroupItem disabled tag="a" href="#">{this.props.info.mehmet} ♥ Nursima</ListGroupItem>               
                </ListGroup>
                {/* <h4>{this.props.currentCategory}</h4> */}
            </div>
        )
    }
}
