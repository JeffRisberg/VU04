import fetch from 'isomorphic-fetch';
import {router} from "../../main.js"

const state = {
  items: [],
  item: null
};

const mutations = {
  FETCH_ITEMS(status, items) {
    state.items = items;
  },
  SET_ITEM(state, item) {
    state.item = item;
  }
};

const getters = {
  items: state => state.items,
  item: state => state.item
}

const actions = {
  fetchItems({commit}) {
    fetch('/api/v1/items', {})
      .then(response => response.json())
      .then((json) => {
        commit('FETCH_ITEMS', json.data);
      })
  },
  fetchItem({commit}, id) {
    fetch('/api/v1/items/' + id, {})
      .then(response => response.json())
      .then((json) => {
        commit('SET_ITEM', json.data);
      })
  },
  newItem({commit}, id) {
    commit('SET_ITEM', {name: "", description: "", value: 0, dateUpdated: null, completed: false});
  },
  saveItem({commit}, item) {
    fetch('/api/items/' + item.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({item: item})
    })
      .then(response => response.json())
      .then((json) => {
        router.push({path: '/items'}) // jump to items route
      })
  },
  addItem({commit}, item) {
    fetch('/api/v1/items', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({item: item})
    })
      .then(response => response.json())
      .then((json) => {
        router.push({path: '/items'}) // jump to items route
      })
  },
  deleteItem({commit}, item) {
    fetch('/api/v1/items/' + item.id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({item: item})
    })
  },
}

export default {
  state,
  mutations,
  getters,
  actions
}
