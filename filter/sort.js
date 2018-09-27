const Sort = React.createClass({
    displayName:'Sort',

    propTypes:{
        cbSortList:React.PropTypes.func.isRequired,
    },

    sortList: function () {
        this.props.cbSortList();
    },

    render: function () {
        return React.DOM.input( {className:'Sort', type:'Checkbox', onClick:this.sortList}, null);
    },
});