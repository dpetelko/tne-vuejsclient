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
        responseResult: false
    },
    actions: {
        async getLeadDivisionsList(ctx) {
            const result = await fetch('http://127.0.0.1:8050/api/v1/LeadDivisions', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const list = await result.json()
            ctx.commit('updateList', list)
        },

        async getLeadDivisionById(ctx, id) {
            const result = await fetch('http://127.0.0.1:8050/api/v1/LeadDivisions/' + id, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const entry = await result.json()
            if (result.ok) {
            ctx.commit('updateResponseResult', result.ok)
            ctx.commit('updateLeadDivision', entry)}
        },

        async updateLeadDivision(ctx, leadDivision) {
            await fetch('http://127.0.0.1:8050/api/v1/LeadDivisions/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(leadDivision)
            }).then(response => {
                ctx.commit('updateResponseResult', response.ok)
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
                ctx.commit('updateResponseResult', response.ok)
            })

        }
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
