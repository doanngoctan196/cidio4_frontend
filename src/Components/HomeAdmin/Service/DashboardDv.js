import React, { Component } from 'react';
import CreateServiceGroup from './CreateServiceGroup';
import ListGroup from './ListGroup';
import { connect } from 'react-redux';

class DashboardDv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lstPhanLoai: []
        }
    }


    componentDidMount() {
        fetch(this.props.StateInfoSystem.domain + '/api/all/sercate', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.status === true) {
                    this.setState({
                        lstPhanLoai: response.data
                    })
                } else {

                }
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <div style={{ marginBottom: '10px' }} className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <button data-toggle="modal" data-target="#createnewPhanLoai" type="button" class="btn btn-primary"><i class="mdi mdi-upload"></i>Thêm nhóm mới</button>
                                {/* <span style={{ margin: 0, marginLeft: '10px' }}>Hiển thị danh sách các nhóm dịch vụ cung cấp</span> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {(this.state.lstPhanLoai.length > 0) ? this.state.lstPhanLoai.map((e, i) => <ListGroup id={e.id_loaidv} sodv={e.sodv} tenphanloai={e.tenloaidv}></ListGroup>) : ''}
                </div>
                <CreateServiceGroup></CreateServiceGroup>
            </div>
        );
    }
}

export default connect(function (state) {
    return { StateInfoUser: state.StateInfoUser, StateInfoSystem: state.StateInfoSystem }
})(DashboardDv);
