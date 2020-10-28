import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../../Redux/Actions/BaiTapDatVePhimAction";
class HangGhe extends Component {
  renderViTriSoGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((viTri, index) => {
      // Xét trường hợp ghế đã được đặt
      let gheDaDat = "";
      let disabled = false;
      if (viTri.daDat) {
        gheDaDat = "gheDuocChon";
        disabled = true;
      }
      //   Xét trường hợp ghế đang chọn
      let gheDangChon = "";
      let indexGheDangChon = this.props.danhSachGheDangChon.findIndex(
        (gheChon) => gheChon.soGhe === viTri.soGhe
      );
      if (indexGheDangChon !== -1) {
        gheDangChon = "gheDangChon";
      }
      return (
        <button
          className={`ghe ${gheDaDat} ${gheDangChon}`}
          key={index}
          disabled={disabled}
          onClick={() => {
            this.props.datVe(viTri);
          }}
        >
          {viTri.soGhe}
        </button>
      );
    });
  };
  renderSoThuTuHangGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((stt, index) => {
      return (
        <button className="rowNumber" key={index}>
          {stt.soGhe}
        </button>
      );
    });
  };
  renderMotHangGhe = () => {
    if (this.props.indexHangGhe === 0) {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderSoThuTuHangGhe()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderViTriSoGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div className="text-warning" style={{ fontSize: 25 }}>
        {this.renderMotHangGhe()}
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
    datVe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
