import React, { Component } from "react";
import "../Product/Product.css";
import Logo from "../../assets/etanee.png";
import Troley from "../../assets/keranjang-px-removebg-preview.png";
import Ayam from "../../assets/Ayam.jpg"

class CardProduct extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    // Menggunakan Arrow Function
    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if(this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }

    // Menggunakan Methode
    // handleMinus () {
    //     this.setState({
    //         order: this.state.order - 1
    //     })
    // }

    
    render() {
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src={Ayam} alt="product_image" />
                    </div>
                    <p className="product-title">Daging Ayam Berbumbu</p>
                    <p className="product-price">Rp 410,000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order} />
                        <button className="plus" onClick={this.handlePlus}>plus</button>
                    </div>
                </div>
        )
    }
}

export default CardProduct;