import React from 'react';
import PropTypes from 'prop-types';



class RainbowFramea extends  React.Component {

    static propTypes = {
        children: PropTypes.string.isRequired,
        colors: PropTypes.arrayOf(PropTypes.string.isRequired),
    };

    render(){
        let framea=this.props.children;
        this.props.colors.forEach((color)=>{
            framea=
                <div style={{border:"dashed 2px "+color,padding:"10px"}}>
                    {framea}
                </div>;
        });
        return framea;
    };
}

export default RainbowFramea;

