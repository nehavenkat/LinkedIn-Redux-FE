export default function(state = {}, action) {
  switch (action.type) {
    case "LOAD_PROFILES":
      return {
        ...state,
        profile: action.payload
      };
    case "LOAD_EXPERIENCES":
      return {
        ...state,
        experiences: action.payload
      };
    case "ADD_EXPERIENCE":
      return {
        ...state,
        experiences: state.experiences.concat(action.payload)
      };
    default:
      return state;
  }
}
