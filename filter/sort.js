const Sort = React.createClass({
    displayName:'Sort',

    propTypes:{
        cbSortList:React.PropTypes.func.isRequired,
    },

    sortList: function (e) {
        this.props.cbSortList(e.target.checked);
    },

    render: function () {
        return React.DOM.input( {className:'Sort', type:'Checkbox', defaultChecked:false, onChange:this.sortList}, null);
    },
});