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
              <a @click="showUpdate(item.id)" class="btn btn-warning btn-sm">Редактировать</a>
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
          <a @click="showUpdate(itemId)" class="btn btn-warning">Редактировать</a>
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

      <b-modal
          ref="update"
          size="xl"
          centered
          body-bg-variant="light"
          no-close-on-backdrop
          hide-header-close
          title="Дочернее подразделение - редактирование">
        <template #modal-footer="{  }">
          <b-button variant="danger" v-on:click="confirmCancelUpdate()">Отмена</b-button>
          <b-button variant="warning" v-on:click="confirmSubmitUpdate()">Сохранить</b-button>
        </template>
        <SubDivisionEdit v-bind:id="itemId" v-on:close="closeUpdate($event)" ref="updateModal"/>
      </b-modal>

    </div>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
import SubDivisionDetails from '@/views/SubDivision/Details.vue'
import SubDivisionCreate from '@/views/SubDivision/Create.vue'
import SubDivisionEdit from '@/views/SubDivision/Edit.vue'

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
    showUpdate(id) {
      this.itemId = id
      this.$refs['update'].show()
    },
    closeUpdate(notifyParams) {
      this.$refs['update'].hide();
      this.$store.dispatch("notify", notifyParams)
      this.$refs['details'].hide()
      this.$store.dispatch("getEntryList", '/api/v1/SubDivisions')
    },
    showCreate() {
      this.$refs['create'].show()
    },
    closeCreate(notifyParams) {
      this.$refs['create'].hide();
      this.$store.dispatch("notify", notifyParams)
      this.$store.dispatch("getEntryList", '/api/v1/SubDivisions')
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
                  message: 'Создание отменено пользователем.'
                })
              }
            }
          }
      )
    },
    confirmSubmitCreate() {
      this.$refs.createModal.confirmSubmit();
    },
    confirmCancelUpdate() {
      this.$confirm(
          {
            message: `Изменения не будут сохранены. Уверены, что хотите покинуть страницу?`,
            button: {
              no: 'Отмена',
              yes: 'Да'
            },
            callback: confirm => {
              if (confirm) {
                this.$refs['update'].hide();
                this.$store.dispatch("notify", {
                  style: 'warning',
                  title: 'Внимание',
                  message: 'Редактирование отменено пользователем.'
                })
              }
            }
          }
      )
    },
    confirmSubmitUpdate() {
      this.$refs.updateModal.confirmSubmit();
    }
  },
  async mounted() {
    if (this.successMsg != null) {
      await this.$store.dispatch("notify", {style: 'info', title: 'Информация', message: this.successMsg});
    }
    await this.$store.dispatch("getEntryList", '/api/v1/SubDivisions')
  },
  components: {
    SubDivisionDetails, SubDivisionCreate, SubDivisionEdit
  }
}

</script>
<style scoped>
#main {
  margin-top: 60px
}
</style>
