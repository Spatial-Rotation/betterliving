export function controlled(state, action) {
  const { field, value } = action;
  console.log(typeof field);

  switch (action.type) {
    case "onChange":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "clearall":
      return {};
    case "multiple_select":
      console.log(action.field);
      return {
        ...state,
      };
  }
}
