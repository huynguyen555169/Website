import React from 'react';
import './index.css';
import logo from './../../assets/img/logo.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DichVu from '../dichvu';
import Home from '../home';
import HinhAnh from '../hinhanh';

function Header() {
    return (
        <Router>
            <div>
                <div className="header__navbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-3">
                                <img src={logo} alt="Logo" className="logo" />
                            </div>
                            <div className="col-xl-7 col-lg-9 .col-sm-12">
                                <ul className="header__list">
                                    <li className="header__list-item"><Link className="link" to="/">TRANG CHỦ</Link></li>
                                    <li className="header__list-item"><Link className="link" to="/dichvu">DỊCH VỤ</Link>
                                        <ul className="header__list-dichvu">
                                            <li className="header__dichvu-item">Sách</li>
                                            <li className="header__dichvu-item">Phim</li>
                                            <li className="header__dichvu-item">Anime</li>
                                            <li className="header__dichvu-item">KuKu</li>
                                        </ul>
                                    </li>
                                    <li className="header__list-item"><Link className="link" to="/hinhanh">HÌNH ẢNH</Link></li>
                                    <li className="header__list-item">BLOG</li>
                                    <li className="header__list-item">HƯỚNG DẪN</li>
                                    <li className="header__list-item">NGÔN NGỮ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/dichvu">
                        <DichVu />
                    </Route>
                    <Route path="/hinhanh">
                        <HinhAnh />
                    </Route>
                </Switch>
            </div>
        </Router>


    );
}

export default Header;
