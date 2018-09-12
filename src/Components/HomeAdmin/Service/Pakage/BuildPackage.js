import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemOrder from './ItemOrder';

class BuildPackage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allDichVu: [],
            package: []
        }
    }

    componentDidMount() {
        fetch(this.props.StateInfoSystem.domain + '/api/service/getsercate/' + 1, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                if (response.status === true) {
                    this.setState({
                        allDichVu: response.data
                    })
                }
            })
            .catch(error => console.log(error));
    }

    timKiem(key) {
        fetch(this.props.StateInfoSystem.domain + '/api/service/search/' + key, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                if (response.state === true) {
                    this.setState({
                        allDichVu: response.data
                    })
                } else {

                }
            })
            .catch(error => console.log(error));
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {

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
                                <li className="nav-item"><a href data-target="#home1" data-toggle="tab" className="nav-link small text-uppercase active">Home</a></li>
                                <li className="nav-item"><a href data-target="#profile1" data-toggle="tab" className="nav-link small text-uppercase ">Profile</a></li>
                                <li className="nav-item"><a href data-target="#messages1" data-toggle="tab" className="nav-link small text-uppercase">Messages</a></li>
                            </ul>
                            <br />
                            <div id="tabsJustifiedContent" className="tab-content">
                                <div id="home1" className="tab-pane fade active show">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div id="custom-search-input">
                                                <div className="input-group col-md-12">
                                                    <input onKeyPress={(event) => this.handleKeyPress(event)} type="text" className="form-control input-lg" placeholder="Từ  khóa tìm kiếm" />
                                                    <span className="input-group-btn">
                                                        <button className="btn btn-info btn-lg" type="button">
                                                            <i className="glyphicon glyphicon-search" />
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>

                                            {/* ---------------------------------------- */}



                                            <div className="pg_4_list-card">
                                                {
                                                    (this.state.allDichVu.length > 0) ? this.state.allDichVu.map((e, i) => <ItemOrder id={e.id} giatien={e.giatien} name={e.tendichvu} demo={this.props.StateInfoSystem.domain + '/' + e.demo}></ItemOrder>) : ''
                                                }
                                            </div>

                                            {/* ------------------------------------------- */}

                                        </div>
                                        <div className="col-md-5">

                                        </div>
                                    </div>
                                </div>
                                <div id="profile1" className="tab-pane fade">

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
    return { StateInfoSystem: state.StateInfoSystem, StateInfoUser: state.StateInfoUser }
})(BuildPackage);