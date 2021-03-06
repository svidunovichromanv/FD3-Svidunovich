﻿import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';

import { ClientStorage } from '../classes/clientStorage';



class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fio: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
  };

  clientsStore = new ClientStorage(this.props.clients);

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };

  setBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };

  setBalance1 = () => {
    this.setBalance(105,230);
  };

  setBalance2 = () => {
    this.setBalance(105,250);
  };

    removeClient=(id)=>{
        this.clientsStore.removeClient(id);
        this.setState({clients: this.clientsStore.clientsView});
    };

    editClient=(id, info)=>{
        this.clientsStore.editClient(id, info);
        this.setState({clients: this.clientsStore.clientsView});
    };

    addNewClient=()=>{
        this.clientsStore.addClient();
        this.setState({clients: this.clientsStore.clientsView});
    };

    filterClient = (e) =>{
        this.clientsStore.filterClient(e.target.value);
        this.setState({clients: this.clientsStore.clientsView});
    };
  
  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map(client =>
      <MobileClient key={client.id} info={client} cbDelete={this.removeClient} cbEdit={this.editClient}/>
    );

    return (
      <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />
            <select id="filter" defaultValue={"all"} onChange={this.filterClient}>
              <option value="all">All</option>
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
        <input type="button" value="Сидоров=230" onClick={this.setBalance1} />
        <input type="button" value="Сидоров=250" onClick={this.setBalance2} />
        <input id="add" type="button" value="add" onClick={this.addNewClient} />
      </div>
    )
    ;

  }

}

export default MobileCompany;
