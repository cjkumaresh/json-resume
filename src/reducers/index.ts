export interface action {
  type: string;
}

function rootReducer(state = {}, action: action) {
  switch (action.type) {
    case "ADD_ARTICLE":
      return { ...{ name: "Resume" }, ...state };
  }
  return state;
}

export default rootReducer;
