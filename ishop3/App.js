"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Goods from './components/Goods';

let headerText = 'Сухой корм для собак и щенков';
const goods = require('./goods.json');

ReactDOM.render(
    <Goods
        header={headerText}
        listOfGoods={goods}
    />
    , document.getElementById('container')
);