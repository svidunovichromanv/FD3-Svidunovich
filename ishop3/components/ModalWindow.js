import React from 'react';
import PropTypes from 'prop-types';

import './ModalWindow.css';


class ModalWindow extends React.Component{
    static propTypes = {
        cbAddNew:PropTypes.func.isRequired,
        editGood: PropTypes.shape({
            name: PropTypes.string.isRequired,
            description:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            pictures: PropTypes.string.isRequired,
            packaging:PropTypes.string.isRequired,
            vendorCode:PropTypes.number.isRequired,
            remainder:PropTypes.number.isRequired,
        })
    };

    state = {
        editGood:this.props.editGood,
        validName:true,
        validDescription:true,
        validPrice:true,
        validPackaging:true,
        validVendorCode:true,
        validRemainder:true,
        valid:true,

    };

    closeModal=()=>{
        this.props.cbAddNew();
    };

    validAll = ()=>{
        this.setState({valid:(
            this.state.validName &&
            this.state.validDescription &&
            this.state.validPrice &&
            this.state.validPackaging &&
            this.state.validVendorCode &&
            this.state.validRemainder
        )});
    };

    setChanges =(e)=>{
        let elID = e.target.getAttribute("id");
        let val = e.target.value;
        switch (elID) {
            case "name":

                this.setState({validName:!!val && typeof val === "string"}, this.validAll);
                break;
            case "description":
                this.setState({validDescription:!!val && typeof val === "string"}, this.validAll);
                break;
            case "price":
                this.setState({validPrice:!!val && typeof +val === "number"}, this.validAll);
                break;
            case "pictures":
                this.setState({validPictures:!!val && typeof val === "string"}, this.validAll);
                break;
            case "packaging":
                this.setState({validPackaging:!!val && typeof val === "string"}, this.validAll);
                break;
            case "remainder":
                this.setState({validRemainder:!!val && typeof +val === "number"}, this.validAll);
                break;
            case "vendorCode":
                this.setState({validVendorCode:!!val && typeof +val === "number"}, this.validAll);
                break;
        };
        +val?
            this.state.editGood[elID]=+val:
            this.state.editGood[elID]=val;
        this.setState({editGood:this.state.editGood});
    };

    addNew=()=>{
        this.props.cbAddNew(this.state.editGood);
    };

    render(){
        return(
            <div className="Modal">
                <form className="ModalForm">
                    <label htmlFor="name">Название:</label>
                    <input id="name" onChange={this.setChanges} defaultValue={this.props.editGood.name}/><span !!!!!!>{Введите корректное название}</span><br/>

                    <label htmlFor="description">Описвние:</label>
                    <input id="description" onChange={this.setChanges} defaultValue={this.props.editGood.description}/><br/>

                    <label htmlFor="price">Цена:</label>
                    <input id="price" type="number" onChange={this.setChanges} defaultValue={this.props.editGood.price}/><br/>

                    <label htmlFor="pictures">Ссылка на картинку:</label>
                    <input id="pictures" onChange={this.setChanges} defaultValue={this.props.editGood.pictures}/><br/>

                    <label htmlFor="packaging">Фасовка:</label>
                    <input id="packaging" onChange={this.setChanges} defaultValue={this.props.editGood.packaging}/><br/>

                    <label htmlFor="vendorCode">ID:</label>
                    <input id="vendorCode" onChange={this.setChanges} defaultValue={this.props.editGood.vendorCode}/><br/>

                    <label htmlFor="remainder">Остаток:</label>
                    <input id="remainder" onChange={this.setChanges} defaultValue={this.props.editGood.remainder}/><br/>

                </form>
                <button onClick={this.addNew} disabled={!this.state.valid}>Сохранить</button><button onClick={this.closeModal}>Выйти</button>
            </div>
        )
    };
}
export default ModalWindow;