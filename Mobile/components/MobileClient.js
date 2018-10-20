import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    cbDelete: PropTypes.func.isRequired,
    //cbEdit: PropTypes.func.isRequired,
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fio: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    info: this.props.info,
      editState:false,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id="+this.props.info.id+" componentWillReceiveProps");
    this.setState({info:newProps.info});//смушает эта строка
  };

  deleteCl=()=>{
    this.props.cbDelete(this.props.info.id);
  };

    balance=this.state.info.balance;

    fio=this.state.info.fio;

  editCl = () =>{
    if (this.state.editState && (this.balance!==this.state.info.balance || this.fio!==this.state.info.fio)){
      let info = {...this.state.info, fio:this.fio, balance:+this.balance};
      this.setState({info:info});
      //this.props.cbEdit(info);
    }
      this.setState( (prevState) => { return {editState:!prevState.editState}; } );//рендер при любом нажатии, так и должно быть, вроде....
  };

    recordBalance=(e)=>{
        this.balance = e.target.value;
    };

    recordFIO=(e)=>{
      this.fio= e.target.value;
    };

  render() {

    console.log("MobileClient id="+this.state.info.id+" render");

    let data;
    if (!this.state.editState){
      data = (
          <div className='MobileClient'>
        <button className="MobileClientBtn" onClick={this.deleteCl}>
          del
        </button>
        <button className="MobileClientBtn" onClick={this.editCl}>
          edit
        </button>
        <span className='MobileClientBalance'>{this.state.info.balance}</span>
        <span className='MobileClientFIO'>{this.state.info.fio}</span>
        </div>
      );
    }else{
        data = (
            <div className='MobileClient'>
              <button className="MobileClientBtn" onClick={this.deleteCl}>
                del
              </button>
              <button className="MobileClientBtn" onClick={this.editCl}>
                edit
              </button>
              <input defaultValue={this.state.info.balance} onChange={this.recordBalance}/>
              <input defaultValue={this.state.info.fio} onChange={this.recordFIO}/>
            </div>
        );
    }

    return data;

  }

}

export default MobileClient;
