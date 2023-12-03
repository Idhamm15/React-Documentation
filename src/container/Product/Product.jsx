import React, { Component, Fragment } from "react";
import "./Product.css";
import Logo from "../../assets/etanee.png";
import Troley from "../../assets/keranjang-px-removebg-preview.png";
import Ayam from "../../assets/Ayam.jpg"
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }
    
    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="" alt="" />
                    </div>
                    <div className="troley">
                        <img src={Troley} alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)} />
            </Fragment>
        )
    }
}

export default Product;