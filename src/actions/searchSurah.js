export const getSearchField = (searchValue) => {
  return (dispatch) => {
    dispatch(initData(searchValue));
  };
};

const initData = (searchValue) => ({
  type: "SEARCH_DATA_SURAH",
  searchField: searchValue,
});
