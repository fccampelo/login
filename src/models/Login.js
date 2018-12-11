import Immutable from "seamless-immutable";

//utils
import forcaSenha from "../utils/forca-senha";

const initialState = new Immutable({
  error: "teste",
  email: "",
  password: ""
});

export default {
  state: initialState,
  reducers: {
    validatePassword(state, payload) {
      return forcaSenha(payload);
    }
  },
  effects: dispatch => ({
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    }
  })
};
