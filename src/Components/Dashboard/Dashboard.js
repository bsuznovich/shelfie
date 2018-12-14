import React, {Component} from 'react'
import Product from '../Product/Product';

export default class Dashboard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let inventoryList = this.props.inventory.map(item => {
            return(
                <div>
                    <Product key={item.id}
                    id={item.id}
                    description={item.description}
                    name={item.name}
                    price={item.price}
                    image={item.image} />
                    <Product key={item.id}
                    id={item.id}
                    description={item.description}
                    name={item.name}
                    price={item.price}
                    image={item.image} />
                    <Product key={item.id}
                    id={item.id}
                    description={item.description}
                    name={item.name}
                    price={item.price}
                    image={item.image} />
                </div>
            )
        })
        return(
            <div>Dashboard
                <Product />
                {inventoryList}
            </div>
        )
    }
}