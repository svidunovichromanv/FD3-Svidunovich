"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';
import RainbowFramea from './components/RainbowFramea';

let text = 'какой-то контент какой-то контент какой-то контент какой-то контент какой-то контент какой-то контент какой-то контент какой-то контент';
const colors = ["red", "green", "blue"];
ReactDOM.render(
    <div>
        <RainbowFrame colors={colors}>
            {text}
        </RainbowFrame>
        <RainbowFramea colors={colors}>
            {text}
        </RainbowFramea>
    </div>
    , document.getElementById('container')
);