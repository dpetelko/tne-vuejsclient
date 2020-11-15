<template>
  <div>
    <table class="table" id="subDivisionTable">
      <tr>
        <td>Наименование</td>
        <td>
          <strong>{{ this.subDivision.name }}</strong>
        </td>
        <td>Головная организация</td>
        <td>
          <strong>{{ this.subDivision.leadDivisionName }}</strong>
        </td>
      </tr>
      <tr>
        <td>Страна</td>
        <td>
          <strong>{{ this.subDivision.country }}</strong>
        </td>
        <td>Индекс</td>
        <td>
          <strong>{{ this.subDivision.postCode }}</strong>
        </td>
      </tr>
      <tr>
        <td>Регион</td>
        <td>
          <strong>{{ this.subDivision.region }}</strong>
        </td>
        <td>Населенный пункт</td>
        <td>
          <strong>{{ this.subDivision.city }}</strong>
        </td>
      </tr>
      <tr>
        <td>Улица</td>
        <td>
          <strong>{{ this.subDivision.street }}</strong>
        </td>
        <td>Строение</td>
        <td>
          <strong>{{ this.subDivision.building }}</strong>
        </td>
      </tr>
    </table>

    <div v-if="this.providersList.length != 0">
      <table class="table">
        <caption class="text-dark">
          <h5>Связанные объекты потребления</h5>
        </caption>

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
        <tr v-for="item in this.providersList" v-bind:key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.postCode }}</td>
          <td>{{ item.country }}</td>
          <td>{{ item.region }}</td>
          <td>{{ item.city }}</td>
          <td>{{ item.street }}</td>
          <td>{{ item.building }}</td>
          <td>
            <div class="btn-group" role="group">
              <b-button href="" variant="outline-success">
                <b-icon
                  icon="info-circle"
                  scale="1"
                  aria-hidden="true"
                ></b-icon>
              </b-button>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      <p class="text-dark">
        <strong>Связанные объекты потребления отсутствуют</strong>
      </p>
    </div>
  </div>
</template>

<script>
//import { mapActions, mapGetters } from "vuex";

export default {
  name: "Details",
  // data() {
  //   return {
  //     subDivision: {},
  //     providersList: [],
  //   };
  // },
  // computed: mapGetters(["getEntry", "getChildrenList"]),
  // methods: mapActions(["getEntryById", "getChildrenEntryList"]),
  props: {
    id: String,
    subDivision: {},
    providersList: [],
  },
  // async created() {
  //   const response = await fetch(
  //     "https://tne20201114103841.azurewebsites.net" +
  //       "/api/v1/SubDivisions/" +
  //       this.id,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   this.subDivision = await response.json();
  //   console.log("subDivision", this.subDivision);
  //   // await this.getEntryById("/api/v1/SubDivisions/" + this.id);
  //   // await this.getChildrenEntryList(
  //   //   "/api/v1/Providers/bySubDivision/" + this.id
  //   // );

  //   const response2 = await fetch(
  //     "https://tne20201114103841.azurewebsites.net" +
  //       "/api/v1/Providers/bySubDivision/" +
  //       this.id,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   this.providersList = await response2.json();
  //   console.log("providersList", this.providersList);
  // },
};
</script>

<style scoped>
.table caption {
  caption-side: top;
}
</style>
