import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Post extends Component {
    timeSince(date) {

        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " năm rồi";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " tháng rồi";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " ngày rồi";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " giờ rồi";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " phút rồi";
        }
        return Math.floor(seconds) + " giây rồi";
    }

    handleDelete(id, title) {
        var result = window.confirm("Bạn có muốn xóa chủ đề  \"" + title + "\"");
        if (result === true) {
            var formData = new FormData();
            formData.append('token', this.props.StateInfoUser.token);
            formData.append('_method', 'DELETE');

            fetch(this.props.StateInfoSystem.domain + '/api/posts/' + id, {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    if (response.status === true) {
                        alert(response.message);
                    } else {
                        alert(response.message);
                    }
                })
                .then(error => console.log(error));
        }
    }

    render() {
        return (
            <div className="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3">
                <div className="col-md-1">
                    <img className="img-sm rounded-circle mb-4 mb-md-0" src="images/faces/face1.jpg" alt="profile" />
                </div>
                <div className="ticket-details col-md-9">
                    <div className="d-flex">
                        <p className="text-dark font-weight-semibold mr-2 mb-0 no-wrap">{this.props.user} :</p>
                        <p className="text-primary mr-1 mb-0">[#{this.props.id}]</p>
                        <p className="mb-0 ellipsis">{this.props.title}</p>
                    </div>
                    <p className="text-gray ellipsis mb-2">
                        {this.props.noidung}
                    </p>
                    <div className="row text-gray d-md-flex d-none">
                        <div className="col-4 d-flex">
                            <small className="mb-0 mr-2 text-muted text-muted">Đăng:</small>
                            <small className="Last-responded mr-2 mb-0 text-muted text-muted">{this.timeSince(new Date(this.props.datepost))}</small>
                        </div>
                        {/* <div className="col-4 d-flex">
                            <small className="mb-0 mr-2 text-muted text-muted">Chỉnh sửa:</small>
                            <small className="Last-responded mr-2 mb-0 text-muted text-muted">{this.timeSince(new Date(this.props.dateupdate))}</small>
                        </div> */}
                    </div>
                </div>
                <div className="ticket-actions col-md-2">
                    <div className="btn-group dropdown">
                        <button type="button" className="btn btn-success dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Điều khiển</button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/admin">
                                <i className="fa fa-reply fa-fw" />Đi tới bài viết</a>
                            <Link className="dropdown-item" to={"/admin/post/editor/update/" + this.props.id}>
                                <i className="fa fa-history fa-fw" />Chỉnh sửa</Link>
                            <a className="dropdown-item" href="/admin">
                                <i className="fa fa-times text-danger fa-fw" />Trả lời nhanh</a>
                            <div className="dropdown-divider" />
                            <button onClick={() => this.handleDelete(this.props.id, this.props.title)} style={{ color: 'red', cursor: 'pointer' }} className="dropdown-item" href="/admin">
                                <i className="fa fa-check text-success fa-fw" />Xóa bài</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default connect(function (state) {
    return { StateInfoSystem: state.StateInfoSystem, StateInfoUser: state.StateInfoUser }
})(Post);
