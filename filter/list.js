const List = React.createClass({
    displayName:'List',

    propTypes:{
        str: React.PropTypes.arrayOf(
            React.PropTypes.string.isRequired,
        )
    },

    render: function () {
        let txt = this.props.str.join("\n");
        return React.DOM.textarea( {className:'List',value:txt, readOnly:"readonly"});
    },
});