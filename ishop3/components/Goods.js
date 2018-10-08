import React from 'react';
import PropTypes from 'prop-types';

import './Goods.css';
import ModalWindow from './ModalWindow';
import Good from './Good';


class Goods extends  React.Component {

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
        editGood:null,
        editState:0,
        checkedGood: "",
        listOfGoods:this.props.listOfGoods,
    };

    letschecked = (id) => {
        this.setState({checkedGood: id});
    };

    letsdelete = (id) => {
        if (this.state.checkedGood===id){
            this.setState({listOfGoods: this.state.listOfGoods.filter(item => this.state.checkedGood!==item.vendorCode)});
        }
    };

    letsedit = (id)=>{
        if (this.state.checkedGood===id){
            let good  = this.state.listOfGoods.filter(item=>(item.vendorCode+"")===id)[0];
            this.setState({editState:1, editGood:good});
        }else if(typeof id === "object"){
            let good={
                name:"",
                description:"",
                price:"",
                pictures: "",
                packaging:"",
                vendorCode:"",
                remainder:""
            };
            this.setState({editState:1, editGood:good});
        }
    };

    closeModal=()=>{
        this.setState({editState:0, editGood:null});
    };

    updateGoods=(newGood)=>{
        let tmpList = this.state.listOfGoods.slice();
        for (let i = 0; i<tmpList.length; i++){
            if (+tmpList[i].vendorCode===+this.state.editGood.vendorCode){
                tmpList[i]=newGood || this.props.listOfGoods[i];
            }
        }
        this.setState({listOfGoods:tmpList}, this.closeModal);
    };

    render(){
        const GOODSCode = this.state.listOfGoods.map( good =>
            <Good key={good.vendorCode}
                  name={good.name} description={good.description}
                  price={good.price} pictures={good.pictures}
                  packaging={good.packaging}
                  vendorCode={good.vendorCode}
                  remainder={good.remainder}
                  cbLetsChecked={this.letschecked}
                  cbLetsDelete={this.letsdelete}
                  cbLetsEdit={this.letsedit}
                  checkedGood={this.state.checkedGood}
            />
        );
        let modalStyle = {display:"none"};
        let modalCode=null;
        if (this.state.editState===1){
            modalCode = <ModalWindow
                editGood={this.state.editGood}
                cbcloseModal={this.closeModal}
                cbAddNew={this.updateGoods}
            />;
            modalStyle = {display:"block"};
        }

        return (
            <div className="GoodsContainer">
                <h1 className="Header">{this.props.header}</h1>
                <button onClick={this.letsedit}>Add</button>
                <div className="Goods">{GOODSCode}</div>
                <div style={modalStyle} className="ModalWindow">{modalCode}</div>
            </div>
        )
    };
}

export default Goods;

