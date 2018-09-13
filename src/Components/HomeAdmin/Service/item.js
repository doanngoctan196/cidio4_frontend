import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextTruncate from 'react-text-truncate';

class Item extends Component {
    render() {
        return (
            <li className="pg_content_card">
                <div className="pg_content_card_head">
                    <Link className="pg_content_card_link_images" to={"/post/test.html"} style={{ backgroundImage: 'url("' + this.props.StateInfoSystem.domain + '/' + this.props.demo + '")' }} />
                </div>
                <div className="pg_content_card_infomation">
                    <Link to={"/post/test.html"}>
                        <h3 className="pg_content_card_title">{this.props.tendichvu}</h3>
                    </Link>

                    <p className="pg_content_card_description">
                        <TextTruncate
                            line={2}
                            truncateText="…"
                            text={this.props.mota}
                            textTruncateChild={<a href="/">Read on</a>}
                        />
                    </p>

                </div>
            </li>
        );
    }
}

export default connect(function (state) {
    return { StateInfoSystem: state.StateInfoSystem }
})(Item);
