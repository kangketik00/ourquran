import axios from "axios";
import { baseUrl } from "../assets/API/baseUrl";

export const setSurahs = () => {
  return (dispatch) => {
    dispatch(initDataStarted());
    axios
      .get(`${baseUrl}quran/ar.abdulbasitmurattal`)
      .then((res) => {
        dispatch(initData(res.data.data.surahs));
      })
      .catch((err) => {
        dispatch(initDataFailed());
      });
  };
};

const initData = (items) => ({
  type: "INIT_DATA_SURAHS",
  payload: { items },
});

const initDataStarted = () => ({
  type: "INIT_DATA_STARTED_SURAHS",
});

const initDataFailed = () => ({
  type: "INIT_DATA_FAILED_SURAHS",
});
