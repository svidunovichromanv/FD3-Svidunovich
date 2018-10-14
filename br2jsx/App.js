"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Br2jsx from './components/Br2jsx';

let text = "какой-то контент <br/> какой-то контент <br/> какой-то контент <br/> какой-то контент <br/> какой-то контент <br/> какой-то контент <br/> какой-то контент <br/> какой-то контент";
ReactDOM.render(
    <div>
        <Br2jsx>
            {text}
        </Br2jsx>
    </div>
    , document.getElementById('container')
);