import React from 'react';
import PropTypes from 'prop-types';

import './darfild.css';
/*
import VotesQuestion from './VotesQuestion';
import VotesAnswer from './VotesAnswer';*/
class Main extends  React.Component {

    static propTypes = {
        header: PropTypes.string.isRequired,
        listOfGoods: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                description:PropTypes.string.isRequired,
                price:PropTypes.number.isRequired,
                pictures: PropTypes.string.isRequired,
                packaging:PropTypes.string.isRequired,
                vendorCode:PropTypes.number.isRequired,
                remainder:PropTypes.number.isRequired,
            })
        )
    };

    state = {
        checkedGood: null,
        listOfGoods:this.props.listOfGoods,
    };

    letschecked = (e) => {
        this.setState({checkedGood: e.currentTarget.getAttribute("id")});
    };

    letsdelete = (e) => {
        if (this.state.checkedGood==e.target.getAttribute("id")){
            this.setState({listOfGoods: this.state.listOfGoods.filter(item => this.state.checkedGood!=item.vendorCode)});
        }
    };

    render(){
        const goodsCode = this.state.listOfGoods.map( good =>
            <div
                key={good.vendorCode}
                className={`Good${this.state.checkedGood==good.vendorCode?" Checked":""}`}
                onClick={this.letschecked}
                id={good.vendorCode}
            >
                <button className="DeleteBTN" onClick={this.letsdelete} id={good.vendorCode}>Delete</button>
                <div className="Img">
                    <img src={good.pictures} alt={good.name} title={good.name}/>
                </div>
                <span className="GoodName">{good.name}</span>
                <span className="GoodsDescription">{good.description}</span>
                <div className="PriceRemainder">
                    <span className="Price">{good.price+"p"}</span>
                    <span className="Remainder">{"осталось: "+good.remainder}</span>
                </div>
                <span className="Packaging">{good.packaging}</span>
            </div>
        );
        return (
            <div className="GoodsContainer">
                <h1 className="Header">{this.props.header}</h1>
                <div className="Goods">{goodsCode}</div>
            </div>
        )
    };
}

export default Main;
