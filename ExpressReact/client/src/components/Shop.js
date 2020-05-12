import React from 'react';
import Navbar from './Navbar'
import ItemGrid from './ItemGrid'

class Shop extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/products')
            .then(res => res.json())
            .then(products => this.setState({products}, () => console.log("Products fetched",products)))
    }

    render(){
        return (
            <div className="shop">
                <Navbar/>
                <ItemGrid itemList={this.state.products} onAdd={this.props.onAdd}/>
            </div>
        )
    }
    
}

export default Shop;