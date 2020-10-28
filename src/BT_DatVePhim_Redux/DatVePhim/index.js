import React, { Component } from "react";
import HangGhe from "./HangGhe";
import ThongTinHangGhe from "./ThongTinHangGhe";
import "./BaiTapBookingTicket.css";
import DataDanhSachGhe from "../Data/danhSachGhe.json";
export default class BaiTapDatVePhim extends Component {
  renderDanhSachGhe = () => {
    return DataDanhSachGhe.map((ghe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={ghe} indexHangGhe={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="bookingMovie">
        <div className="overlayBG">
          <div className="row text-light">
            <div className="col-8">
              <h1 className="display-4">Đặt vé xem phim Online.vn</h1>
              <span>Màn hình</span>
              <div className="screen"></div>
              {this.renderDanhSachGhe()}
            </div>
            <div className="col-4">
              <h1>Danh sách ghế bạn chọn</h1>
              <ThongTinHangGhe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
