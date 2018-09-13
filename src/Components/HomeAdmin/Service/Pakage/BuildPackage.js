import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemOrder from './ThucDon/ItemOrder';
import ItemShow from './ThucDon/ItemShow';

class BuildPackage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            package: []
        }
    }

    fetchMonAn() {
        var { dispatch } = this.props;
        fetch(this.props.StateInfoSystem.domain + '/api/service/getsercate/' + 1, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                if (response.status === true) {
                    var data = response.data;

                    this.props.StatePackage.selectedDichVu.forEach(item => {
                        data = data.filter(i => i.id_dichvu !== item.id_dichvu);
                    });

                    dispatch({
                        type: 'ADD_INFO_PACKAGE',
                        item: {
                            ...this.props.StatePackage, allDichVu: data
                        }
                    })
                }
            })
            .catch(error => '');
    }

    fetchDoUong() {
        var { dispatch } = this.props;
        fetch(this.props.StateInfoSystem.domain + '/api/service/getsercate/' + 2, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                if (response.status === true) {
                    var data = response.data;

                    this.props.StatePackage.selectedDoUong.forEach(item => {
                        data = data.filter(i => i.id_dichvu !== item.id_dichvu);
                    });

                    dispatch({
                        type: 'ADD_INFO_PACKAGE',
                        item: {
                            ...this.props.StatePackage, allDoUong: data
                        }
                    })
                }
            })
            .catch(error => '');
    }

    componentDidMount() {
        this.fetchMonAn();
        this.fetchDoUong();
    }

    timKiemMon(key, phanLoai) {
        var { dispatch } = this.props;
        fetch(this.props.StateInfoSystem.domain + '/api/service/search/' + key, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.status === true) {
                    var data = response.data.data;

                    this.props.StatePackage.selectedDichVu.forEach(item => {
                        data = data.filter(i => i.id_dichvu !== item.id_dichvu);
                    });
                    data = data.filter(i => i.id_loaidv === phanLoai);


                    if (phanLoai === 1) {
                        dispatch({
                            type: 'ADD_INFO_PACKAGE',
                            item: {
                                ...this.props.StatePackage, allDichVu: data
                            }
                        })
                    }

                    if (phanLoai === 2) {
                        dispatch({
                            type: 'ADD_INFO_PACKAGE',
                            item: {
                                ...this.props.StatePackage, allDoUong: data
                            }
                        })
                    }
                }
            })
            .catch(error => '');
    }

    handleKeyPress = (event, phanLoai) => {
        if (event.key === 'Enter') {
            this.timKiemMon(event.target.value, phanLoai);
        }
    }

    handleOnchangeSearch(event, phanLoai) {
        if (event.target.value.length === 0) {
            if (phanLoai === 1) this.fetchMonAn();
            if (phanLoai === 2) this.fetchDoUong();
        }
    }

    render() {

        return (
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Build gói dịch vụ</h2>
                            <ul id="tabsJustified" className="nav nav-tabs">
                                <li className="nav-item"><a data-target="#home1" data-toggle="tab" className="nav-link small text-uppercase active">Thưc đơn</a></li>
                                <li className="nav-item"><a data-target="#profile1" data-toggle="tab" className="nav-link small text-uppercase ">Đồ uống</a></li>
                                <li className="nav-item"><a data-target="#messages1" data-toggle="tab" className="nav-link small text-uppercase">Dịch vụ khác</a></li>
                            </ul>
                            <br />
                            <div id="tabsJustifiedContent" className="tab-content">
                                <div id="home1" className="tab-pane fade active show">
                                    <div className="col-md-7">
                                        <div id="custom-search-input">
                                            <div className="input-group col-md-12">
                                                <input onChange={(event) => this.handleOnchangeSearch(event, 1)} onKeyPress={(event) => this.handleKeyPress(event, 1)} type="text" className="form-control input-lg" placeholder="Từ  khóa tìm kiếm" />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-info btn-lg" type="button">
                                                        <i className="glyphicon glyphicon-search" />
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                        {/* ---------------------------------------- */}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="pg_4_list-card">

                                                {
                                                    (this.props.StatePackage.allDichVu.length > 0) ? this.props.StatePackage.allDichVu.map((e, i) => <ItemShow mota={e.mota} key={i} id={e.id_dichvu} giatien={e.giatien} name={e.tendichvu} demo={this.props.StateInfoSystem.domain + '/' + e.demo} phanLoai={e.id_loaidv}></ItemShow>) : ''
                                                }
                                            </div>

                                            {/* ------------------------------------------- */}

                                        </div>
                                        <div className="col-md-5">

                                            <div className="pg_4_list-card">
                                                {
                                                    (this.props.StatePackage.selectedDichVu.length > 0) ? this.props.StatePackage.selectedDichVu.map((e, i) => <ItemOrder mota={e.mota} key={i} id={e.id_dichvu} giatien={e.giatien} name={e.tendichvu} demo={this.props.StateInfoSystem.domain + '/' + e.demo} phanLoai={e.id_loaidv}></ItemOrder>) : ''
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="profile1" className="tab-pane fade">
                                    <div className="col-md-7">
                                        <div id="custom-search-input">
                                            <div className="input-group col-md-12">
                                                <input onChange={(event) => this.handleOnchangeSearch(event, 2)} onKeyPress={(event) => this.handleKeyPress(event, 2)} type="text" className="form-control input-lg" placeholder="Nhập tên một đồ uống" />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-info btn-lg" type="button">
                                                        <i className="glyphicon glyphicon-search" />
                                                    </button>
                                                </span>
                                            </div>
                                        </div>

                                        {/* ---------------------------------------- */}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="pg_4_list-card">
                                                {
                                                    (this.props.StatePackage.allDoUong.length > 0) ? this.props.StatePackage.allDoUong.map((e, i) => <ItemShow mota={e.mota} key={i} phanLoai={e.id_loaidv} id={e.id_dichvu} giatien={e.giatien} name={e.tendichvu} demo={this.props.StateInfoSystem.domain + '/' + e.demo}></ItemShow>) : ''
                                                }
                                            </div>

                                            {/* ------------------------------------------- */}

                                        </div>
                                        <div className="col-md-5">

                                            <div className="pg_4_list-card">
                                                {
                                                    (this.props.StatePackage.selectedDoUong.length > 0) ? this.props.StatePackage.selectedDoUong.map((e, i) => <ItemOrder soluong={e.soluong} phanLoai={e.id_loaidv} mota={e.mota} key={i} id={e.id_dichvu} giatien={e.giatien} name={e.tendichvu} demo={this.props.StateInfoSystem.domain + '/' + e.demo}></ItemOrder>) : ''
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="messages1" className="tab-pane fade">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default connect(function (state) {
    return { StatePackage: state.StatePackage, StateInfoSystem: state.StateInfoSystem, StateInfoUser: state.StateInfoUser }
})(BuildPackage);