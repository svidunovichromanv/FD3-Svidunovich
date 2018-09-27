const ViewFilter = React.createClass({
    displayName:'ViewFilter',

    propTypes:{
        str: React.PropTypes.arrayOf(
            React.PropTypes.string.isRequired,
        ),
        cbSortList:React.PropTypes.func.isRequired,
        cbFilterList:React.PropTypes.func.isRequired,
    },

    render: function () {
        return React.DOM.div( {className:'FilterBox'},
            React.createElement(Sort, {cbSortList:this.props.cbSortList}),
            React.createElement(Filter, {cbFilterList:this.props.cbFilterList}),
            React.createElement(List, {str:this.props.str}),
        );
    },
});