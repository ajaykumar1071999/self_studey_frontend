export const fieldValidation = (name, value) => {
  switch (name) {
    case "userName":
      if (!value) {
        return "Username is required.";
      }
      break;
    case "age":
      if (!value) {
        return "age is required.";
      }
      break;
    case "email":
      if (!value) {
        return "Email is required.";
      }
      break;
    default:
      break;
  }
};
