<template>
  <div>
    <div class="container-sm" id="main">
      <h3 class="text-center">Головное подразделение - подробности</h3>
      <br/>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Наименование</label>
        <div class="col-sm-9">
          <label>
            <input type="text" readonly class="form-control-plaintext" v-bind:value="leadDivision.name">
          </label>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Индекс</label>
        <div class="col-sm-9">
          <input type="text" readonly class="form-control-plaintext" v-bind:value="leadDivision.postCode">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Страна</label>
        <div class="col-sm-9">
          <input type="text" readonly class="form-control-plaintext" v-bind:value="leadDivision.country">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Регион</label>
        <div class="col-sm-9">
          <input type="text" readonly class="form-control-plaintext" v-bind:value="leadDivision.region">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Населенный пункт</label>
        <div class="col-sm-9">
          <input type="text" readonly class="form-control-plaintext" v-bind:value="leadDivision.city">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Улица</label>
        <div class="col-sm-9">
          <input type="text" readonly class="form-control-plaintext" v-bind:value="leadDivision.street">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Строение</label>
        <div class="col-sm-9">
          <input type="text" readonly class="form-control-plaintext" v-bind:value="leadDivision.building">
        </div>
      </div>


      <div class="form-group row">
        <label class="col-sm-3 col-form-label">Дочерние организации</label>

        <div v-if="this.subDivisions != null">
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
            <tr v-for="item in subDivisions" v-bind:key="item.id">
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
export default {
  name: "Details",
  data() {
    return {
      leadDivision: {},
      subDivisions: null,
      loading: true
    }
  },
  props: {
    id: String
  },
  mounted() {
    fetch('http://127.0.0.1:8050/api/v1/LeadDivisions/' + this.id, {
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
        .then(response => response.json())
        .then(json => {
          this.leadDivision = json


          fetch('http://127.0.0.1:8050/api/v1/SubDivisions/byLeadDivision/' + this.id, {
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
              .then(response => response.json())
              .then(json => {
                this.subDivisions = json


              })


        })
  }
}
</script>

<style scoped>

#main{
  margin-top: 60px;
}

</style>
