let initialState = {
  loading: true,
  error: false,
  items: [],
};

const surahs = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_DATA_SURAHS":
      return {
        ...state,
        items: action.payload.items,
        loading: false,
      };

    case "INIT_DATA_STARTED_SURAHS":
      return {
        ...state,
        loading: true,
      };

    case "INIT_DATA_FAILED_SURAHS":
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default surahs;
