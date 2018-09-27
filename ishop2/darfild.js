const Goods = React.createClass({
    displayName:'Goods',

    propTypes:{
        header: React.PropTypes.string.isRequired,
        listOfGoods: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                name: React.PropTypes.string.isRequired,
                description:React.PropTypes.string.isRequired,
                price:React.PropTypes.number.isRequired,
                pictures: React.PropTypes.string.isRequired,
                packaging:React.PropTypes.string.isRequired,
                vendorCode:React.PropTypes.number.isRequired,
                remainder:React.PropTypes.number.isRequired,
            })
        )
    },

    getInitialState: function() {
        return {
            checkedGood: null,
            listOfGoods:this.props.listOfGoods,
        };
    },

    letschecked: function (e) {
        this.setState({checkedGood: e.target.getAttribute("id")});
    },

    letsdelete: function (e) {
        if (this.state.checkedGood==e.target.getAttribute("id")){
            this.setState({listOfGoods: this.state.listOfGoods.filter(item => this.state.checkedGood!=item.vendorCode)});
        }
    },

    render: function () {
        /*this.props.listOfGoods this.props.header данные созданые для отрисовки*/
        const goodsCode = this.state.listOfGoods.map( good =>
            React.DOM.div( {key:good.vendorCode, className:`Good${this.state.checkedGood==good.vendorCode?" Checked":""}`, onClick:this.letschecked, id:good.vendorCode},
                React.DOM.button( {className:'DeleteBTN', onClick:this.letsdelete, id:good.vendorCode}, "Delete"),
                React.DOM.div( {className:'Img'},
                    React.DOM.img( {src:good.pictures, alt:good.name, title:good.name} )
                ),
                React.DOM.span( {className:"GoodName"}, good.name),
                React.DOM.span( {className:'GoodsDescription'}, good.description),
                React.DOM.div( {className:'PriceRemainder'},
                    React.DOM.span( {className:"Price"}, good.price+"p"),
                    React.DOM.span( {className:"Remainder"}, ("осталось: "+good.remainder)),
                ),
                React.DOM.span( {className:"Packaging"}, good.packaging),
            )
        );
        return React.DOM.div({className:'GoodsContainer'},
            React.DOM.h1( {className:'Header'}, this.props.header),
            React.DOM.div( {className:'Goods'}, goodsCode),
        );
    },
});