import React, {Component} from 'react'
import axios from 'axios';

export default class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            price: '',
            image: '',
            inventory: ''
        }
    }

    createProduct =() => {
        const {name,price,image} = this.state
        axios.post('/api/product', {name,price,image}).then(res => {
            this.setState({
                inventory: res.data
            })
            this.props.getInventory()
        })
    }

    render(){
        return(
            <div>Form</div>
        )
    }
}