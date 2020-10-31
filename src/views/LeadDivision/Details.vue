<template>
  <div>
    <div class="container-sm" id="main">
      <h3 class="text-center">Головное подразделение - подробности</h3>
      <br/>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Наименование</label>
        <div class="col-sm-9">
          <label>
            <input type="text" readonly class="form-control-plaintext" v-bind:value="getLeadDivision.name">
          </label>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Индекс</label>
        <div class="col-sm-9">
          <input type="text" readonly class="form-control-plaintext" v-bind:value="getLeadDivision.postCode">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Страна</label>
        <div class="col-sm-9">
          <input type="text" readonly class="form-control-plaintext" v-bind:value="getLeadDivision.country">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Регион</label>
        <div class="col-sm-9">
          <input type="text" readonly class="form-control-plaintext" v-bind:value="getLeadDivision.region">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Населенный пункт</label>
        <div class="col-sm-9">
          <input type="text" readonly class="form-control-plaintext" v-bind:value="getLeadDivision.city">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Улица</label>
        <div class="col-sm-9">
          <input type="text" readonly class="form-control-plaintext" v-bind:value="getLeadDivision.street">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Строение</label>
        <div class="col-sm-9">
          <input type="text" readonly class="form-control-plaintext" v-bind:value="getLeadDivision.building">
        </div>
      </div>


      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Дочерние организации</label>

        <div v-if="this.getAllSubDivisionsByLeadDivisionId != null">
          <br/>
          <table class="table table-stripped table-hover">
            <tr>
              <td><strong>Наименование</strong></td>
              <td>Индекс</td>
              <td>Страна</td>
              <td>Регион</td>
              <td>Город</td>
              <td>Улица</td>
              <td>Строение</td>
              <td></td>
            </tr>
            <tr v-for="item in getAllSubDivisionsByLeadDivisionId" v-bind:key="item.id">
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
                  <a asp-action="Delete" asp-controller="SubDivisions" asp-route-id="@item.Id"
                     class="btn btn-outline-danger font-weight-bold btn-sm" id="deleteButton">Удалить</a>

                </div>
              </td>
            </tr>
          </table>
        </div>
        <div v-else class="col-sm-9">
          <input type="text" readonly class="form-control-plaintext" value="Отсутствуют">
        </div>
      </div>
      <a asp-action="Index" asp-controller="LeadDivisions" class="btn btn-secondary">К списку »</a>
      <a asp-action="Edit" asp-controller="LeadDivisions" asp-route-id="@Model.Id"
         class="btn btn-warning">Редактировать</a>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "Details",
  computed: mapGetters(["getLeadDivision", "getAllSubDivisionsByLeadDivisionId"]),
  methods: mapActions(["getLeadDivisionById", "getSubDivisionsListByLeadDivisionId"]),
  props: {
    id: String
  },
  async mounted() {
    await this.getLeadDivisionById(this.id);
    await this.getSubDivisionsListByLeadDivisionId(this.id);

  }
}
</script>

<style scoped>

#main{
  margin-top: 60px;
}

</style>
