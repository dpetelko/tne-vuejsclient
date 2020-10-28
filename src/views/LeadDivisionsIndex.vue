<template>

  <div>
    <div class="container-fluid" id="main">
      <h3 class="text-center">Головные организации</h3>
      <br/>
      <a asp-action="Create" asp-controller="LeadDivisions" class="btn btn-secondary">Добавить новую организацию</a>
      <p></p>
      <Loader v-if="loading"/>
      <table v-else class="table table-stripped table-hover">
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
        <tr v-for="(item, index) in leadDivisions" v-bind:key=index>
          <td>{{ item.name }}</td>
          <td>{{ item.postCode }}</td>
          <td>{{ item.country }}</td>
          <td>{{ item.region }}</td>
          <td>{{ item.city }}</td>
          <td>{{ item.street }}</td>
          <td>{{ item.building }}</td>
          <td>
            <div class="btn-group" role="group">

              <a asp-action="Details" asp-controller="LeadDivisions" asp-route-id="@item.Id"
                 class="btn btn-outline-success btn-sm">Подробности</a>
              <a asp-action="Edit" asp-controller="LeadDivisions" asp-route-id="@item.Id"
                 class="btn btn-outline-warning btn-sm">Редактировать</a>
              <a class="btn btn-outline-danger font-weight-bold btn-sm" id="deleteButton"
                 href="/LeadDivisions/Delete/@item.Id">Удалить</a>

            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>

</template>

<script>
import Loader from '@/components/global/Loader.vue'
export default {
  name: 'LeadDivisionsIndex',
  data() {
    return {
      leadDivisions: [
        // {
        //   id: String,
        //   name: String,
        //   addressId: String,
        //   postCode: Number,
        //   country: String,
        //   region: String,
        //   city: String,
        //   street: String,
        //   building: String,
        //   deleted: Boolean
        // }
      ],
      loading: true
    }
  },
  mounted() {
    fetch('http://127.0.0.1:8050/api/v1/LeadDivisions', {
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
          setTimeout(() => {
            this.leadDivisions = json
            this.loading = false
          }, 3000)

        })
  },
  components: {
    Loader
  }


}


</script>

<style scoped>
#main {
  margin-top: 60px
}
</style>
