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
        }
    },
    actions: {
        async getLeadDivisionsList(ctx) {
            const result = await fetch('http://127.0.0.1:8050/api/v1/LeadDivisions', {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    //'Origin' : 'http://localhost:8080'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                //redirect: 'follow', // manual, *follow, error
                //referrerPolicy: 'no-referrer', // no-referrer, *client
                //body: JSON.stringify(data) // body data type must match "Content-Type" header
            })
            const list = await result.json()
            ctx.commit('updateList', list)
        },

        async getLeadDivisionById(ctx, id) {
            const result = await fetch('http://127.0.0.1:8050/api/v1/LeadDivisions/' + id, {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    //'Origin' : 'http://localhost:8080'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                //redirect: 'follow', // manual, *follow, error
                //referrerPolicy: 'no-referrer', // no-referrer, *client
                //body: JSON.stringify(data) // body data type must match "Content-Type" header
            })
            const entry = await result.json()
            ctx.commit('updateLeadDivision', entry)
        }
    },
    mutations: {
        updateList(state, newList) {
            state.leadDivisions = newList
        },
        updateLeadDivision(state, newEntry) {
            state.leadDivision = newEntry
        }
    },
    getters: {
        getAllLeadDivisions(state) {
            return state.leadDivisions
        },
        getLeadDivision(state) {
            return state.leadDivision
        }

    }
}
