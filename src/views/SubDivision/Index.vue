<template>

  <div>
    <div class="container-fluid" id="main">
      <h3 class="text-center">Дочерние организации</h3>
      <br/>
      <a @click="showCreate()" class="btn btn-secondary">Добавить новую организацию</a>
      <p></p>
      <table class="table table-stripped table-hover">
        <tr>
          <td><strong>Наименование</strong></td>
          <td><strong>Головная организация</strong></td>
          <td><strong>Индекс</strong></td>
          <td><strong>Страна</strong></td>
          <td><strong>Регион</strong></td>
          <td><strong>Город</strong></td>
          <td><strong>Улица</strong></td>
          <td><strong>Строение</strong></td>
          <td></td>
        </tr>
        <tr v-for="item in getList" v-bind:key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.leadDivisionName }}</td>
          <td>{{ item.postCode }}</td>
          <td>{{ item.country }}</td>
          <td>{{ item.region }}</td>
          <td>{{ item.city }}</td>
          <td>{{ item.street }}</td>
          <td>{{ item.building }}</td>
          <td>
            <div class="btn-group" role="group">

              <a @click="showDetails(item.id)" class="btn btn-outline-success btn-sm">Подробности</a>
              <router-link
                  :to="{name: 'SubDivisionEdit', params: {id: item.id}}"
                  class="btn btn-outline-warning btn-sm">Редактировать
              </router-link>

            </div>
          </td>
        </tr>
      </table>

      <b-modal
          ref="details"
          size="xl"
          centered
          body-bg-variant="light"
          title="Дочернее подразделение - подробности">
        <template #modal-footer="{  }">
          <b-button variant="warning" v-on:click="edit()">Редактировать</b-button>
        </template>
        <SubDivisionDetails v-bind:id="itemId"/>
      </b-modal>

      <b-modal
          ref="create"
          size="xl"
          centered
          body-bg-variant="light"
          no-close-on-backdrop
          hide-header-close
          title="Дочернее подразделение - создание">
        <template #modal-footer="{  }">
          <b-button variant="danger" v-on:click="confirmCancelCreate()">Отмена</b-button>
          <b-button variant="warning" v-on:click="confirmSubmitCreate()">Сохранить</b-button>
        </template>
        <SubDivisionCreate v-on:close="closeCreate($event)" ref="createModal"/>
      </b-modal>

    </div>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
import SubDivisionDetails from '@/views/SubDivision/Details.vue'
import SubDivisionCreate from '@/views/SubDivision/Create.vue'

export default {
  name: 'SubDivisionsIndex',
  props: {
    successMsg: String
  },
  data() {
    return {
      itemId: String
    }
  },
  computed: mapGetters(["getList"]),
  methods: {
    showDetails(id) {
      this.itemId = id
      this.$refs['details'].show()
    },
    showCreate() {
      this.$refs['create'].show()
    },
    closeCreate(notifyParams) {
      this.$refs['create'].hide();
      this.$store.dispatch("notify", notifyParams)
      this.$store.dispatch("getEntryList", 'http://127.0.0.1:8050/api/v1/SubDivisions')
    },
    confirmCancelCreate() {
      console.error("confirmCancel")
      this.$confirm(
          {
            message: `Изменения не будут сохранены. Уверены, что хотите покинуть страницу?`,
            button: {
              no: 'Отмена',
              yes: 'Да'
            },
            callback: confirm => {
              if (confirm) {
                this.$refs['create'].hide();
                this.$store.dispatch("notify", {
                  style: 'warning',
                  title: 'Внимание',
                  message: 'Сохранение отменено пользователем.'
                })
              }
            }
          }
      )
    },
    confirmSubmitCreate() {
      console.error("confirmSubmit")
      this.$refs.createModal.confirmSubmit();
    }
  },
  async mounted() {
    if (this.successMsg != null) {
      await this.$store.dispatch("notify", {style: 'info', title: 'Информация', message: this.successMsg});
    }
    await this.$store.dispatch("getEntryList", 'http://127.0.0.1:8050/api/v1/SubDivisions')
  },
  components: {
    SubDivisionDetails, SubDivisionCreate
  }
}


</script>
<style scoped>
#main {
  margin-top: 60px
}
</style>
