"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';

let headerText = 'Сухой корм для собак и щенков';
const goods = require('./goods.json');

ReactDOM.render(
    <Main
        header={headerText}
        listOfGoods={goods}
    />
    , document.getElementById('container')
);