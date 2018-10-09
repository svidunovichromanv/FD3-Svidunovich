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
        validName:!!this.props.editGood.name,
        validDescription:!!this.props.editGood.description,
        validPrice:!!this.props.editGood.price,
        validPackaging:!!this.props.editGood.packaging,
        validVendorCode:!!this.props.editGood.vendorCode,
        validRemainder:!!this.props.editGood.remainder,
        valid:!!this.props.editGood.name,

    };

    closeModal=()=>{
        this.props.cbcloseModal();
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
                val=+val;
                this.setState({validPrice:!!val && typeof val === "number"}, this.validAll);
                break;
            case "pictures":
                this.setState({validPictures:!!val && typeof val === "string"}, this.validAll);
                break;
            case "packaging":
                this.setState({validPackaging:!!val && typeof val === "string"}, this.validAll);
                break;
            case "remainder":
                val=+val;
                this.setState({validRemainder:!!val && typeof val === "number"}, this.validAll);
                break;
            case "vendorCode":
                val=+val;
                this.setState({validVendorCode:!!val && typeof val === "number"}, this.validAll);
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
                    <input id="name" onChange={this.setChanges} defaultValue={this.props.editGood.name}/>
                    <span style={{display:(this.state.validName?"none":"inline")}}>Введите корректное название</span>
                    <br/>

                    <label htmlFor="description">Описвние:</label>
                    <input id="description" onChange={this.setChanges} defaultValue={this.props.editGood.description}/>
                    <span style={{display:(this.state.validDescription?"none":"inline")}}>Введите корректное описание</span>
                    <br/>

                    <label htmlFor="price">Цена:</label>
                    <input id="price" type="number" onChange={this.setChanges} defaultValue={this.props.editGood.price}/>
                    <span style={{display:(this.state.validPrice?"none":"inline")}}>Введите корректую цену в рублях</span>
                    <br/>

                    <label htmlFor="pictures">Ссылка на картинку:</label>
                    <input id="pictures" onChange={this.setChanges} defaultValue={this.props.editGood.pictures}/>
                    <span style={{display:(this.state.validPictures?"none":"inline")}}>Введите ссыдку на картинку</span>
                    <br/>

                    <label htmlFor="packaging">Фасовка:</label>
                    <input id="packaging" onChange={this.setChanges} defaultValue={this.props.editGood.packaging}/>
                    <span style={{display:(this.state.validPackaging?"none":"inline")}}>Введите корректную фасовку с единицами измерения</span>
                    <br/>

                    <label htmlFor="vendorCode">ID:</label>
                    <input id="vendorCode" onChange={this.setChanges} defaultValue={this.props.editGood.vendorCode}/>
                    <span style={{display:(this.state.validVendorCode?"none":"inline")}}>Введите корректный ID товара</span>
                    <br/>

                    <label htmlFor="remainder">Остаток:</label>
                    <input id="remainder" onChange={this.setChanges} defaultValue={this.props.editGood.remainder}/>
                    <span style={{display:(this.state.validRemainder?"none":"inline")}}>Введите корректный остаток</span>
                    <br/>

                </form>
                <button onClick={this.addNew} disabled={!this.state.valid}>Сохранить</button><button onClick={this.closeModal}>Выйти</button>
            </div>
        )
    };
}
export default ModalWindow;