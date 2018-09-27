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
        };
    },

    sortList: function() {
        if(this.filterStr.length===0){
            this.filterStr=this.props.str;
        }
        let result;
        if (this.sortState){
            result = this.filterStr;
        }else{

            result =  this.filterStr.map((el)=>el.toLowerCase()).sort();
        };
        this.sortState=!this.sortState;
        this.setState({str: result});
    },

    sortState:false,

    filterStr: [],

    filterList: function (e) {
        if (e){
            this.filterStr=this.props.str.filter((nstr)=>{
                e.toLowerCase();
                nstr.toLowerCase();
                if (nstr.slice(0,(e.length))===e){
                    return true;
                };
                return false;
            });
        }else{
            this.filterStr=this.props.str;
        };
        if (this.sortState){
            this.sortState=!this.sortState;
            this.sortList();
        }else{
            this.setState({str:this.filterStr});
        }
    },

    render: function () {
        return React.createElement(ViewFilter, {
            str:this.state.str,
            cbSortList:this.sortList,
            cbFilterList:this.filterList
        });
    },
});