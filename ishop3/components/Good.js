
import React from 'react';
import PropTypes from 'prop-types';

import './Good.css';

class Good extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        pictures: PropTypes.string.isRequired,
        packaging:PropTypes.string.isRequired,
        vendorCode:PropTypes.number.isRequired,
        remainder:PropTypes.number.isRequired,
        cbLetsChecked: PropTypes.func.isRequired,
        cbLetsDelete: PropTypes.func.isRequired,
        checkedGood: PropTypes.string.isRequired,
    };

    toCheck = (e)=>{
        let id = e.currentTarget.getAttribute("id");
        this.props.cbLetsChecked(id);
    };

    toDelete = (e)=>{
        let id = e.target.getAttribute("id");
        this.props.cbLetsDelete(id);
    };

    toEdit = (e)=>{
        let id = e.target.getAttribute("id");
        this.props.cbLetsEdit(id);
    };

    render(){
        return(
            <div className={`Good${this.props.checkedGood===(this.props.vendorCode+"")?" Checked":""}`}
                onClick={this.toCheck}
                id={this.props.vendorCode}
            >
                <button className="EditBTN" onClick={this.toEdit} id={this.props.vendorCode}>Edit</button>
                <button className="DeleteBTN" onClick={this.toDelete} id={this.props.vendorCode}>Delete</button>
                    <div className="Img">
                    <img src={this.props.pictures} alt={this.props.name} title={this.props.name}/>
                </div>
                <span className="GoodName">{this.props.name}</span>
                <span className="GoodsDescription">{this.props.description}</span>
                <div className="PriceRemainder">
                    <span className="Price">{this.props.price+"p"}</span>
                    <span className="Remainder">{"осталось: "+this.props.remainder}</span>
                </div>
                <span className="Packaging">{this.props.packaging}</span>
            </div>
        );
    };
}
export default Good;