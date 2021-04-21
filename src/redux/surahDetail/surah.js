let initialState = {
  loading: true,
  error: false,
  items: [],
};

const surah = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_DATA_SURAH":
      return {
        ...state,
        items: action.payload.items,
        loading: false,
      };

    case "INIT_DATA_STARTED_SURAH":
      return {
        ...state,
        loading: true,
      };

    case "INIT_DATA_FAILED_SURAH":
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default surah;
