<template>

  <div>
    <div class="container-fluid" id="main">
      <h3 class="text-center">Головные организации</h3>
      <br/>
      <router-link :to="{name: 'LeadDivisionCreate'}" class="btn btn-secondary">Добавить новую организацию</router-link>
      <p></p>
      <table class="table table-stripped table-hover">
        <tr>
          <td><strong>Наименование</strong></td>
          <td><strong>Индекс</strong></td>
          <td><strong>Страна</strong></td>
          <td><strong>Регион</strong></td>
          <td><strong>Город</strong></td>
          <td><strong>Улица</strong></td>
          <td><strong>Строение</strong></td>
          <td></td>
        </tr>
        <tr v-for="item in getAllLeadDivisions" v-bind:key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.postCode }}</td>
          <td>{{ item.country }}</td>
          <td>{{ item.region }}</td>
          <td>{{ item.city }}</td>
          <td>{{ item.street }}</td>
          <td>{{ item.building }}</td>
          <td>
            <div class="btn-group" role="group">

              <router-link
                  :to="{name: 'LeadDivisionDetails', params: {id: item.id}}"
                  class="btn btn-outline-success btn-sm">Подробности
              </router-link>
              <router-link
                  :to="{name: 'LeadDivisionEdit', params: {id: item.id}}"
                  class="btn btn-outline-warning btn-sm">Редактировать
              </router-link>

            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'LeadDivisionsIndex',
  props: {
    successMsg: String
  },
  computed: mapGetters(["getAllLeadDivisions"]),
  methods: mapActions(["getLeadDivisionsList", "notify"]),
  async mounted() {
    if (this.successMsg != null) {
      await this.notify({style: 'info', title: 'Информация', message: this.successMsg});
    }
    await this.getLeadDivisionsList();

  }
}


</script>

<style scoped>
#main {
  margin-top: 60px
}
</style>
