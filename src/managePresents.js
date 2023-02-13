export function managePresents(state, action) {
  // your code here
  switch (action.type) {
    case "presents/increase":
      return {
        ...state,
        numberOfPresents: state.numberOfPresents + 1,
      };
    default:
      return state;
  }
}