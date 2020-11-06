export default {
    state: {
        leadDivisions: [],
        leadDivision: {
            id: '00000000-0000-0000-0000-000000000000',
            name: '',
            addressId: '00000000-0000-0000-0000-000000000000',
            postCode: '',
            country: '',
            region: '',
            city: '',
            street: '',
            building: '',
            deleted: false
        },
        responseResult: 0
    },
    actions: {
        async getLeadDivisionsList(ctx) {
            await fetch('http://127.0.0.1:8050/api/v1/LeadDivisions', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json())
                .then((responseData) => {
                    ctx.commit('updateList', responseData)
                }).catch(function (error) {
                    console.error("LeadDivision Vuex module error = ", error)
                    ctx.commit('updateResponseResult', "Нет связи с сервером. Проверьте соединение.")
                })
        },

        async getLeadDivisionById(ctx, id) {
            await  fetch('http://127.0.0.1:8050/api/v1/LeadDivisions/' + id, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => response.json())
                .then((responseData) => {
                ctx.commit('updateLeadDivision', responseData)
            }).catch(function (error) {
                console.error("LeadDivision Vuex module error = ", error)
                ctx.commit('updateResponseResult', "Нет связи с сервером. Проверьте соединение.")
            })
        },

        async updateLeadDivision(ctx, leadDivision) {
            await fetch('http://127.0.0.1:8050/api/v1/LeadDivisions/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(leadDivision)
            }).then(response => {
                ctx.commit('updateResponseResult', response.status)
            }).catch(function (error) {
                console.error("LeadDivision Vuex module error = ", error)
                ctx.commit('updateResponseResult', "Нет связи с сервером. Проверьте соединение.")
            })
        },

        async createLeadDivision(ctx, leadDivision) {
            await fetch('http://127.0.0.1:8050/api/v1/LeadDivisions/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(leadDivision)
            }).then(response => {
                ctx.commit('updateResponseResult', response.status)
            }).catch(function (error) {
                console.error("LeadDivision Vuex module error = ", error)
                ctx.commit('updateResponseResult', 'Нет связи с сервером. Проверьте соединение.')
            })
        },

        // async notify(ctx, {style = 'warning', title = 'Внимание!!!', message = 'Возникла неизвестная ошибка.',}) {
        //     await this._vm.$bvToast.toast(message, {
        //         title: title,
        //         variant: style,
        //         autoHideDelay: 10000,
        //         toaster: 'b-toaster-bottom-right',
        //         solid: true,
        //         appendToast: true
        //     })
        // }
    },
    mutations: {
        updateList(state, newList) {
            state.leadDivisions = newList
        },
        updateLeadDivision(state, newEntry) {
            state.leadDivision = newEntry
        },
        updateResponseResult(state, responseResult) {
            state.responseResult = responseResult
        }
    },
    getters: {
        getAllLeadDivisions(state) {
            return state.leadDivisions
        },
        getLeadDivision(state) {
            return state.leadDivision
        },
        getResponseResult(state) {
            return state.responseResult
        }

    }
}
