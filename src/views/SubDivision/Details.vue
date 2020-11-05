<template>
  <div>

    <table class="table table-stripped table-hover" id="subDivisionTable">
      <tr>
        <td>Наименование</td>
        <td><strong>{{ getEntry.name }}</strong></td>
        <td>Головная организация</td>
        <td><strong>{{ getEntry.leadDivisionName }}</strong></td>
      </tr>
      <tr>
        <td>Страна</td>
        <td><strong>{{ getEntry.country }}</strong></td>
        <td>Индекс</td>
        <td><strong>{{ getEntry.postCode }}</strong></td>
      </tr>
      <tr>
        <td>Регион</td>
        <td><strong>{{ getEntry.region }}</strong></td>
        <td>Населенный пункт</td>
        <td><strong>{{ getEntry.city }}</strong></td>
      </tr>
      <tr>
        <td>Улица</td>
        <td><strong>{{ getEntry.street }}</strong></td>
        <td>Строение</td>
        <td><strong>{{ getEntry.building }}</strong></td>
      </tr>
    </table>

    <table class="table table-stripped table-hover table-sm" id="providerTable">
      <caption class="text-dark"><h5>Связанные объекты потребления</h5></caption>
      <div v-if="getChildrenList.length != 0">
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
        <tr v-for="item in getChildrenList" v-bind:key=item.id>
          <td>{{ item.name }}</td>
          <td>{{ item.postCode }}</td>
          <td>{{ item.country }}</td>
          <td>{{ item.region }}</td>
          <td>{{ item.city }}</td>
          <td>{{ item.street }}</td>
          <td>{{ item.building }}</td>
          <td>
            <div class="btn-group" role="group">
              <a asp-action="Details" asp-controller="SubDivisions" asp-route-id="@item.Id"
                 class="btn btn-outline-success btn-sm">Подробности</a>
            </div>
          </td>
        </tr>
      </div>
      <div v-else>
        <tr>
          <td>Объекты потребления отсутствуют</td>
        </tr>
      </div>
    </table>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
  name: "Details",
  computed: mapGetters(["getEntry", "getChildrenList"]),
  methods: mapActions(["getEntryById", "getChildrenEntryList"]),
  props: {
    id: String
  },
  async mounted() {
    await this.getChildrenEntryList('http://127.0.0.1:8050/api/v1/Providers/bySubDivision/' + this.id);
    await this.getEntryById('http://127.0.0.1:8050/api/v1/SubDivisions/' + this.id);
  }
}
</script>

<style scoped>
.table caption {
  caption-side: top;
}
.table td {
  padding: 1.00rem;
}
</style>
