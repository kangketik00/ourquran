import axios from "axios";
import { baseUrl } from "../assets/API/baseUrl";

export const setSurah = (surahId) => {
  return (dispatch) => {
    dispatch(initDataStarted());
    axios
      .get(
        `${baseUrl}surah/${surahId}/editions/ar.abdulbasitmurattal,en.ahmedali,en.transliteration`
      )
      .then((res) => {
        dispatch(initData(res.data.data));
      })
      .catch((err) => {
        dispatch(initDataFailed());
      });
  };
};

const initData = (items) => ({
  type: "INIT_DATA_SURAH",
  payload: { items },
});

const initDataStarted = () => ({
  type: "INIT_DATA_STARTED_SURAH",
});

const initDataFailed = () => ({
  type: "INIT_DATA_FAILED_SURAH",
});
