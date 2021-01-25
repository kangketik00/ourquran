import axios from "axios";

export const setAsmaulhusna = () => {
  return (dispatch) => {
    dispatch(initDataStarted());
    axios
      .get(`http://api.aladhan.com/asmaAlHusna`)
      .then((res) => {
        dispatch(initData(res.data.data));
      })
      .catch((err) => {
        dispatch(initDataFailed());
      });
  };
};

const initData = (items) => ({
  type: "INIT_DATA_ASMAULHUSNA",
  payload: { items },
});

const initDataStarted = () => ({
  type: "INIT_DATA_STARTED_ASMAULHUSNA",
});

const initDataFailed = () => ({
  type: "INIT_DATA_FAILED_ASMAULHUSNA",
});
