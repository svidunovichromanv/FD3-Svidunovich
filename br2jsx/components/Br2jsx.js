import React from 'react';
import PropTypes from 'prop-types';




class Br2jsx extends  React.Component {

    static propTypes = {
        children: PropTypes.string.isRequired,
    };

    render(){
        const textContent = this.props.children.split("<br/>");
        const arr = [];
        textContent.forEach((content, i)=>{
            if(i){arr.push(<br/>)};
            arr.push(content);
        });
        return (
            <div>
                {arr}
            </div>
        )
    };
}

export default Br2jsx;

