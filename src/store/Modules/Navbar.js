export default {
    state: {
        notification: {
            style: '',
            title: '',
            message: '',
            active: true
        }
    },
    actions: {
        showNotification(ctx, notification) {
            ctx.commit('updateNotification', notification)
        }
    },
    mutations: {
        updateNotification(state, notification) {
            state.notification = notification
        }
    },
    getters: {
        getNotification(state) {
            return state.notification
        }
    }
}
