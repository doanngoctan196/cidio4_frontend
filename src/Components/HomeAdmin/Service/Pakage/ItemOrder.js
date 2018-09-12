import React, { Component } from 'react';

class ItemOrder extends Component {
    render() {
        return (
            <div className="deli-box-menu-detail clearfix">
                <div className="img-food-detail pull-left">
                    <a href="#cb_0" className="inline cboxElement">
                        <img src={this.props.demo} alt="Bánh ép cầu hai" width={60} height={60} />
                    </a>
                </div>
                <div className="deli-name-food-detail pull-left">
                    <a className="deli-title-name-food" href="javascript:void(0);">
                        <h3 style={{ fontSize: 16, margin: 0, padding: 0, lineHeight: '1.3em', fontWeight: 'bold' }}>
                            {this.props.name}
                        </h3>
                    </a>
                    <span className="deli-desc" />
                    <div className="deli-rating-food">
                    </div>
                    <p style={{ margin: 0, color: '#a1a1a1', fontSize: 11 }}>
                        Đã được đặt&nbsp;<span style={{ color: '#464646', fontWeight: 'bold' }}>42</span>&nbsp;lần
    </p>
                </div>
                <div className="deli-more-info">
                    <div className="adding-food-cart" ng-show="!IsClosed">
                        <span className="btn-adding" ng-click="addToCartFromMenu(882272, currentDishPrice, currentDishPrice, 1, $event)">+</span>
                    </div>
                    <div className="product-price">
                        <p className="current-price">
                            <span className="txt-blue font16 bold">
                                {this.props.giatien}
                            </span>
                            <span className="unit">đ</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemOrder;
