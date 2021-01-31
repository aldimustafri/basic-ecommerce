const InitialState = {
  LoginData: [],
};

const LoginReducer = (state = InitialState, action) => {
  switch (action.type) {
  case "LOGIN_ACTION":
    return {
      LoginData: [
        {
          name: action.name,
          password: action.password,
        },
      ],
    };
  default:
    return state;
  }
};
export default LoginReducer;
