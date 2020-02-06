export default function(state = {}, action) {
  switch (action.type) {
    case "LOAD_NEWSFEED":
      return {
        ...state,
        Newsfeed: action.payload
      };
    case "LOAD_POST":
      return {
        ...state,
        post: action.payload
      };
    default:
      return state;
  }
}
