let initialState = {
  searchField: "",
};

const searchSurah = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_DATA_SURAH":
      return {
        searchField: action.searchField,
      };

    default:
      return state;
  }
};

export default searchSurah;
