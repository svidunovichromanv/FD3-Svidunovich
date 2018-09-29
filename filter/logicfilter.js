const LogicFilter = React.createClass({
    displayName:'Filter',

    propTypes:{
        str: React.PropTypes.arrayOf(
            React.PropTypes.string.isRequired,
        )
    },
    getInitialState: function() {
        return {
            str: this.props.str,
            userInput: "",
            stateOfSort:false
        };
    },

    changeView:function (boolORstr) {
        if (typeof boolORstr === "string"){
            this.setState({userInput: boolORstr}, this.filterList);
        }
        if (typeof boolORstr === "boolean"){
            this.setState({stateOfSort: boolORstr}, this.filterList);
        }
    },

    sortList: function(){
        const arr= this.state.str.slice();
        if (this.state.stateOfSort){
            arr.sort();
        }
        this.setState({str: arr});
    },

    filterList: function () {//chenge string
        if (this.state.userInput){
            this.setState({str: this.props.str.filter((nstr)=>{
                this.state.userInput.toLowerCase();
                nstr.toLowerCase();
                if (nstr.slice(0,(this.state.userInput.length))===this.state.userInput){
                    return true;
                };
                return false;
            })},
                this.sortList)
        } else {
            this.setState({str: this.props.str}, this.sortList);
        }
    },

    render: function () {
        return React.createElement(ViewFilter, {
            str:this.state.str,
            cbSortList:this.changeView,
            cbFilterList:this.changeView
        });
    },
});