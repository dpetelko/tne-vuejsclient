<template>
  <div>
          <div class="container-md" id="main">
        <!--      <h3 class="text-center">Дочернее подразделение - подробности</h3>-->
        <!--      <br/>-->

        <div class="row">
          <div class="col-md-1"></div>
          <div class="col">
            <div class="form-group row ">
              <label class="control-label">Наименование</label>
              <div class="col-md-1"></div>
              <span class="control-label"><strong>{{ getEntry.name }}</strong></span>
            </div>
          </div>
          <div class="col">
            <div class="form-group row">
              <label class="control-label">Головная организация</label>
              <div class="col-md-1"></div>
              <span class="control-label"><strong>{{ getEntry.leadDivisionName }}</strong></span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-1"></div>
          <div class="col">
            <div class="form-group row">
              <label class="control-label">Индекс</label>
              <div class="col-md-1"></div>
              <span class="control-label"><strong>{{ getEntry.postCode }}</strong></span>
            </div>
          </div>
          <div class="col">
            <div class="form-group row">
              <label class="control-label">Страна</label>
              <div class="col-md-1"></div>
              <span class="control-label"><strong>{{ getEntry.country }}</strong></span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-1"></div>
          <div class="col">
            <div class="form-group row">
              <label class="control-label">Регион</label>
              <div class="col-md-1"></div>
              <span class="control-label"><strong>{{ getEntry.region }}</strong></span>
            </div>
          </div>
          <div class="col">
            <div class="form-group row">
              <label class="control-label">Населенный пункт</label>
              <div class="col-md-1"></div>
              <span class="control-label"><strong>{{ getEntry.city }}</strong></span>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="col-md-1"></div>
          <div class="col">
            <div class="form-group row">
              <label class="control-label">Улица</label>
              <div class="col-md-1"></div>
              <span class="control-label"><strong>{{ getEntry.street }}</strong></span>
            </div>
          </div>
          <div class="col">
            <div class="form-group row">
              <label class="control-label">Строение</label>
              <div class="col-md-1"></div>
              <span class="control-label"><strong>{{ getEntry.building }}</strong></span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-1"></div>
          <div class="col">
            <div class="form-group row">
              <label class="control-label">Дочерние организации</label>
            </div>
          </div>
        </div>
        <div class="row">

          <div class="col">
            <div v-if="getChildrenList.length != 0">
              <br/>
              <div class="row">
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
                </table>
              </div>
            </div>
            <div v-else class="col-sm-9">
              <input type="text" readonly class="form-control-plaintext" value="Отсутствуют">
            </div>
          </div>
        </div>

        <div class="row">
          <a class="btn btn-secondary mr-2" onclick="history.back()">К списку »</a>
          <router-link
              :to="{name: 'SubDivisionEdit', params: {id: this.id}}" class="btn btn-warning">Редактировать
          </router-link>
        </div>

      </div>
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
    this.myId = this.id
    await this.getChildrenEntryList('http://127.0.0.1:8050/api/v1/Providers/bySubDivision/' + this.id);
    await this.getEntryById('http://127.0.0.1:8050/api/v1/SubDivisions/' + this.id);
  }
}

</script>

<style scoped>
#main {
  /*margin-top: 60px*/
}
</style>
