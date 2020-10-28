import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../../Redux/Actions/BaiTapDatVePhimAction";
class ThongTinHangGhe extends Component {
  renderDanhSachGheDangChon = () => {
    return this.props.danhSachGheDangChon.map((ghe, index) => {
      return (
        <tr key={index}>
          <td>{ghe.soGhe}</td>
          <td>{ghe.gia.toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger rounded-circle"
              onClick={() => {
                this.props.huyGhe(ghe.soGhe);
              }}
            >
              Hủy
            </button>
          </td>
        </tr>
      );
    });
  };
  renderTongTien = () => {
    return this.props.danhSachGheDangChon.reduce((tongTien, ghe, index) => {
      return (tongTien += ghe.gia);
    }, 0);
  };
  render() {
    return (
      <div className="text-left mt-5">
        <button className="gheDuocChon"></button>
        <span className="ml-2">Ghế đã đặt</span>
        <br />
        <button className="gheDangChon"></button>
        <span className="ml-2">Ghế đang chọn</span>
        <br />
        <button className="ghe m-0"></button>
        <span className="ml-2">Ghế chưa đặt</span>
        <table
          className="fixed_header table text-light mt-5 text-center"
          style={{ border: "3px solid white", margin: "auto" }}
        >
          <thead>
            <tr
              style={{
                fontSize: 20,
                color: "yellow",
              }}
            >
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>{this.renderDanhSachGheDangChon()}</tbody>
          <tfoot style={{ fontSize: 20 }}>
            <th>
              <th style={{ border: "none", color: "yellow", fontSize: 20 }}>
                Tổng tiền
              </th>
              <th style={{ border: "none", color: "yellow", fontSize: 20 }}>
                {this.renderTongTien().toLocaleString()} VNĐ
              </th>
            </th>
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangChon: state.stateDatVePhim.danhSachGheDangChon,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    huyGhe: (soGhe) => {
      dispatch(huyGheAction(soGhe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinHangGhe);
