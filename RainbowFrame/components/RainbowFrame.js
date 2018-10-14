import React from 'react';
import PropTypes from 'prop-types';




class RainbowFrame extends  React.Component {

    static propTypes = {
        children: PropTypes.string.isRequired,
        colors: PropTypes.arrayOf(PropTypes.string.isRequired),
    };

    render(){
        if (this.props.colors.length===0){
            return(
                this.props.children
            )
        }
        return (
            <div style={{border:"dashed 2px "+this.props.colors[0],padding:"10px"}}>
                <RainbowFrame colors={this.props.colors.slice(1)}>
                    {this.props.children}
                </RainbowFrame>
            </div>
        )
    };
}

export default RainbowFrame;

