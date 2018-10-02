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

    filtAndSort: function (){
        let arr = this.props.str.slice();
        console.log("fd");
        if (this.state.userInput){
            arr = arr.filter((nstr)=>{
                this.state.userInput.toLowerCase();
                nstr.toLowerCase();
                if (nstr.slice(0,(this.state.userInput.length))===this.state.userInput){
                    return true;
                };
                return false;
            });
        }
        if (this.state.sortState){
            arr.sort();
        }
        this.setState({str:arr});
    },

    sortList: function(bool) {
        this.setState({sortState:bool}, this.filtAndSort);
    },

    filterList: function (stri) {
        this.setState({userInput:stri}, this.filtAndSort)
    },

    render: function () {
        return React.createElement(ViewFilter, {
            str:this.state.str,
            cbSortList:this.sortList,
            cbFilterList:this.filterList
        });
    },
});