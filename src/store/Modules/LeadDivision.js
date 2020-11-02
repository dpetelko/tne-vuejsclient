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
        createResult: false
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
            ctx.commit('updateLeadDivision', entry)
        },
        async createLeadDivision(ctx, leadDivision) {
            await fetch('http://127.0.0.1:8050/api/v1/LeadDivisions/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(leadDivision)
            }).then(response => {
                ctx.commit('updateCreateResult', response.ok)
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
        updateCreateResult(state, createResult) {
            state.createResult = createResult
        }
    },
    getters: {
        getAllLeadDivisions(state) {
            return state.leadDivisions
        },
        getLeadDivision(state) {
            return state.leadDivision
        },
        getCreateResult(state) {
            return state.createResult
        }

    }
}
