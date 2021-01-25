let initialState = {
  loading: true,
  error: false,
  items: [],
};

const asmaulhusna = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_DATA_ASMAULHUSNA":
      return {
        ...state,
        items: action.payload.items,
        loading: false,
      };

    case "INIT_DATA_STARTED_ASMAULHUSNA":
      return {
        ...state,
        loading: true,
      };

    case "INIT_DATA_FAILED_ASMAULHUSNA":
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default asmaulhusna;
