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

    render: function () {
        /*this.props.listOfGoods this.props.header данные созданые для отрисовки*/
        const goodsCode = this.props.listOfGoods.map( good =>
            React.DOM.div( {key:good.vendorCode, className:'Good'},
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