const initialState = {
  filters: {
    status: 'all',
    colors: [],
  }
}

function filterReducer(state = initialState, action)
{
  switch(action.type) {
    case 'filters/statusFilterChanged': {
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload
        }
      }
    }
    default:
      return state;
  }
}

export default filterReducer;