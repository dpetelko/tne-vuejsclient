export default {
    state: {
        list: [],
        childrenList: [],
        entry: {},
        responseResult: 0,
        loader: false,
        restApiUrl: 'https://tne20201114103841.azurewebsites.net'
    },
    actions: {
        async getEntryList(ctx, endPoint) {
            this._vm.$loading.show({delay: 0})
            await fetch(this.getters.getRestApiUrl + endPoint, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json())
                .then((responseData) => {
                    ctx.commit('updateList', responseData)
                }).catch(function (error) {
                    console.error("MainRepository Vuex module error = ", error)
                    ctx.commit('updateResponseResult', "Нет связи с сервером. Проверьте соединение.")
                }).finally(() => {
                    this._vm.$loading.hide()
                })
        },

        async getChildrenEntryList(ctx, endPoint) {
            await fetch(this.getters.getRestApiUrl + endPoint, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json())
                .then((responseData) => {
                    ctx.commit('updateChildrenList', responseData)
                }).catch(function (error) {
                    console.error("MainRepository Vuex module error = ", error)
                    ctx.commit('updateResponseResult', "Нет связи с сервером. Проверьте соединение.")
                })
        },

        async getEntryById(ctx, endPoint) {
            await fetch(this.getters.getRestApiUrl + endPoint, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json())
                .then((responseData) => {
                    ctx.commit('updateEntry', responseData)
                }).catch(function (error) {
                    console.error("MainRepository Vuex module error = ", error)
                    ctx.commit('updateResponseResult', "Нет связи с сервером. Проверьте соединение.")
                })
        },

        async updateEntry(ctx, [endPoint, entry]) {
            await fetch(this.getters.getRestApiUrl + endPoint, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(entry)
            }).then(response => {
                ctx.commit('updateResponseResult', response.status)
            }).catch(function (error) {
                console.error("MainRepository Vuex module error = ", error)
                ctx.commit('updateResponseResult', "Нет связи с сервером. Проверьте соединение.")
            })
        },

        async createEntry(ctx, [endPoint, entry]) {
            await fetch(this.getters.getRestApiUrl + endPoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(entry)
            }).then(response => {
                ctx.commit('updateResponseResult', response.status)
            }).catch(function (error) {
                console.error("MainRepository Vuex module error = ", error)
                ctx.commit('updateResponseResult', 'Нет связи с сервером. Проверьте соединение.')
            })
        },

        async notify(ctx, {style = 'warning', title = 'Внимание!!!', message = 'Возникла неизвестная ошибка.',}) {
            await this._vm.$bvToast.toast(message, {
                title: title,
                variant: style,
                autoHideDelay: 10000,
                toaster: 'b-toaster-bottom-right',
                solid: true,
                appendToast: true
            })
        },
        async dropDb(ctx) {
            this._vm.$loading.show({delay: 0})
            await fetch(this.getters.getRestApiUrl + '/api/v1/Utils/', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                ctx.commit('updateResponseResult', response.status)
            }).catch(function (error) {
                console.error("MainRepository Vuex module error = ", error)
                ctx.commit('updateResponseResult', 'Нет связи с сервером. Проверьте соединение.')
            }).finally(() => {
                this._vm.$loading.hide()
            })
        }
    },
    mutations: {
        updateList(state, newList) {
            state.list = newList
        },
        updateChildrenList(state, newList) {
            state.childrenList = newList
        },
        updateEntry(state, newEntry) {
            state.entry = newEntry
        },
        updateResponseResult(state, responseResult) {
            state.responseResult = responseResult
        }

    },
    getters: {
        getList(state) {
            return state.list
        },
        getChildrenList(state) {
            return state.childrenList
        },
        getEntry(state) {
            return state.entry
        },
        getResponseResult(state) {
            return state.responseResult
        },
        getRestApiUrl(state) {
            return state.restApiUrl
        }
    }
}
