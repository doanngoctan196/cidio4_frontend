import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextTruncate from 'react-text-truncate';

class ItemOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soLuong : 1
        }
    }
    

    handleAdd(phanLoai, id) {
        var { dispatch } = this.props;
        if (phanLoai === 1) {
            dispatch({
                type: 'REMOVE_ITEM_TO_ORDER',
                item: id
            })
        } else if (phanLoai === 2) {
            dispatch({
                type: 'REMOVE_ITEM_TO_DOUONG',
                item: id
            })
        } else {

        }
    }

    handleOnChanSoLuong(event, id){
        if(event.target.value > 0 && event.target.value < 500){
            var data = {
                id: id, 
                soluong: event.target.value
            }
            var { dispatch } = this.props;
            dispatch({
                type: 'UPDATE_SOLUONG', 
                item: data
            })
        } else {
            if(event.target.value < 0){
                this.setState({
                    soLuong : 1
                })
            }
            if(event.target.value > 500){
                this.setState({
                    soLuong : 500
                })
            }
        }
    }

    render() {
        return (
            <div className="pg_4_card">
                <div style={{ backgroundImage: 'url(\'' + this.props.demo + '\')' }} className="pg_4_img">

                </div>
                <div className="pg_4_info">
                    <span>{this.props.name}</span>
                    <span>
                        <TextTruncate
                            line={2}
                            truncateText="…"
                            text={this.props.mota}
                        />
                    </span>
                    <span>{this.props.giatien} <font style={{ color: "#000" }}> đ</font></span>
                </div>

                {
                    this.props.phanLoai === 2 ? <div className="pg_4_soluong">
                        {this.props.soluong} <input onChange={(event) => this.handleOnChanSoLuong(event, this.props.id)} type="number" className="form-control" placeholder="Nhập số lượng(mặt định: 1)" aria-label="Username" aria-describedby="colored-addon2" />
                    </div> : ''
                }

                <button onClick={() => this.handleAdd(this.props.phanLoai, this.props.id)} type="button" className="btn btn-outline-danger btn-fw">
                    <i className="mdi mdi-refresh"></i>
                </button>
            </div>
        );
    }
}

export default connect(function (state) {
    return { StatePackage: state.StatePackage }
})(ItemOrder);
