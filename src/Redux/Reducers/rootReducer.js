import { combineReducers } from "redux";
import BaiTapDatVePhimReducer from "./BaiTapDatVePhimReducer";
// state(store) tổng của ứng dụng
export const rootReducer = combineReducers({
  stateDatVePhim: BaiTapDatVePhimReducer,
});
