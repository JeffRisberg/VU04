/* eslint space-before-function-paren:off */

const state = {
  userState: {
    dateRange: 30,
    minScore: 0,
    chartType: 'BAR',
    userId: 1,
    tenantId: 1
  }
}

const mutations = {
  SET_DATERANGE (state, dateRange) {
    state.userState.dateRange = dateRange
  },
  SET_MINSCORE (state, minScore) {
    state.userState.minScore = minScore
  },
  SET_CHARTTYPE (state, chartType) {
    state.userState.chartType = chartType
  },
  SET_USERID (state, userId) {
    state.userState.userId = userId
  },
  SET_TENANTID (state, tenantId) {
    state.userState.tenantId = tenantId
  }
}

const getters = {
  userState: state => state.userState
}

const actions = {
  setDateRange ({ commit }, dateRange) {
    commit('SET_DATERANGE', dateRange)
  },
  setMinScore ({ commit }, minScore) {
    commit('SET_MINSCORE', minScore)
  },
  setChartType ({ commit }, chartType) {
    commit('SET_CHARTTYPE', chartType)
  },
  setUserId ({ commit }, userId) {
    commit('SET_USERID', userId)
  },
  setTenantId ({ commit }, tenantId) {
    commit('SET_TENANTID', tenantId)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
