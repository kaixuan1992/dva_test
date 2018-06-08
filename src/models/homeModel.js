import * as homeServices from '../services/homeServices'
export default {

  namespace: 'home',

  state: {
    user: 1111111
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const result = yield call(homeServices.query, {date: payload.date})
      yield put({ type: 'update', payload: {
        user: result.user
      } });
    },
  },

  reducers: {
    update(state, {payload}) {
      return { ...state, ...payload };
    },
  },

};
