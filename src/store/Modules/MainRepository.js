export default {
    state: {
        list: [],
        childrenList: [],
        entry: {},
        responseResult: 0
    },
    actions: {
        async getEntryList(ctx, url) {
            await fetch(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json())
                .then((responseData) => {
                    ctx.commit('updateList', responseData)
                }).catch(function (error) {
                    console.error("MainRepository Vuex module error = ", error)
                    ctx.commit('updateResponseResult', "Нет связи с сервером. Проверьте соединение.")
                })
        },

        async getChildrenEntryList(ctx, url) {
            await fetch(url, {
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

        async getEntryById(ctx, url) {
            await  fetch(url, {
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

        async updateEntry(ctx, url, entry) {
            await fetch(url, {
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

        async createEntry(ctx, url, entry) {
            await fetch(url, {
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
        getResult(state) {
            return state.responseResult
        }

    }
}
