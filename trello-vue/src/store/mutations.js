import * as api from '../api';

const mutations = {
  SET_IS_ADD_BOARD (state, toggle) {
    state.isAddBoard = toggle;
  },

  SET_BOARDS (state, boards) {
    state.boards = boards;
  },

  SET_BOARD (state, board) {
    state.board = board;
  },

  SET_CARD (state, card) {
    state.card = card;
  },

  LOGIN (state, token) {
    if (!token) return;
    state.token = token;
    localStorage.setItem('token', token);
    api.setAuthInHeader(token);
  },

  LOGOUT (state) {
    state.token = null;
    delete localStorage.token;
    api.setAuthInHeader(null);
  }
}

export default mutations;
