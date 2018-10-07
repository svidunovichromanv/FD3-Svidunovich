import React from 'react';
import PropTypes from 'prop-types';

import './ModalWindow.css';


class ModalWindow extends React.Component{
    static propTypes = {
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

    };

    closeModal=()=>{
        this.props.cbcloseModal();
    };

    setChanges =(e)=>{
        +e.target.value?
            this.state.editGood[e.target.getAttribute("id")]=+e.target.value:
            this.state.editGood[e.target.getAttribute("id")]=e.target.value;
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
                    <input id="name" onChange={this.setChanges} defaultValue={this.props.editGood.name}/><br/>

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
                <button onClick={this.addNew}>Сохранить</button><button onClick={this.closeModal}>Выйти</button>
            </div>
        )
    };
}
export default ModalWindow;