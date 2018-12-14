import React, {Component} from 'react'
import Product from '../Product/Product';

export default class Dashboard extends Component{
    constructor(props){
        super(props)
    }

    render(props){
        let inventoryList = this.props.inventory.map(item => {
            return(
                <div>
                    <Product name={item.name}
                    price={item.price}
                    image={item.image} />
                    <Product name={item.name}
                    price={item.price}
                    image={item.image} />
                    <Product name={item.name}
                    price={item.price}
                    image={item.image} />
                </div>
            )
        })
        return(
            <div>Dashboard
                <Product />
            </div>
        )
    }
}