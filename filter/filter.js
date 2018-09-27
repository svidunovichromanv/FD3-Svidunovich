const Filter = React.createClass({
    displayName:'Filter',

    propTypes:{
        cbFilterList:React.PropTypes.func.isRequired,
    },

    filterList: function(e) {
        this.props.cbFilterList(e.target.value);
    },

    render: function () {
        return React.DOM.input( {className:'Filter', type:'text', onChange:this.filterList}, null);
    },
});