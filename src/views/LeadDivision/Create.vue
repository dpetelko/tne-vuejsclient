<template>
  <div id="main" class="container-sm">
    <br>
    <h3 class="text-center">Создание новой головной организации</h3>
    <br>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form id="createForm" asp-action="Create" @submit.prevent="submitHandler">

          <div class="form-group">
            <label class="control-label">Наименование</label>
            <input id="name" type="text" v-model.trim="name" class="form-control"/>
            <small v-if="$v.name.$dirty && !$v.name.required" class="text-danger">Поле не может быть пустым</small>
          </div>
          <div class="form-group">
            <label class="control-label">Индекс</label>
            <input id="postCode" type="number" v-model="postCode" class="form-control"/>
            <small v-if="$v.postCode.$dirty && !$v.postCode.required" class="text-danger">Поле не может быть пустым</small>
          </div>
          <div class="form-group">
            <label class="control-label">Страна</label>
            <input id="country" type="text" v-model.trim="country" class="form-control"/>
            <small v-if="$v.country.$dirty && !$v.country.required" class="text-danger">Поле не может быть пустым</small>
          </div>
          <div class="form-group">
            <label class="control-label">Регион</label>
            <input id="region" type="text" v-model.trim="region" class="form-control"/>
            <small v-if="$v.region.$dirty && !$v.region.required" class="text-danger">Поле не может быть пустым</small>
          </div>
          <div class="form-group">
            <label class="control-label">Город</label>
            <input id="city" type="text" v-model.trim="city" class="form-control"/>
            <small v-if="$v.city.$dirty && !$v.city.required" class="text-danger">Поле не может быть пустым</small>
          </div>
          <div class="form-group">
            <label class="control-label">Улица</label>
            <input id="street" type="text" v-model.trim="street" class="form-control"/>
          </div>
          <div class="form-group">
            <label class="control-label">Строение</label>
            <input id="building" type="text" v-model.trim="building" class="form-control"/>
          </div>
          <div class="form-group">
            <a asp-action="Index" id="confirmCancelButton" class="btn btn-danger">К списку »</a>
            <input type="submit" value="Сохранить" id="confirmSaveButton" class="btn btn-warning"/>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import {required} from 'vuelidate/lib/validators'

export default {
  name: "Create",
  data: () => ({
    id: '00000000-0000-0000-0000-000000000000',
    name: '',
    addressId: '00000000-0000-0000-0000-000000000000',
    postCode: null,
    country: '',
    region: '',
    city: '',
    street: '',
    building: '',
    deleted: false
  }),
  validations: {
    name: {required},
    postCode: {required},
    country: {required},
    region: {required},
    city: {required}
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
    }
  }
}
</script>

<style scoped>
#main {
  margin-top: 60px;
}
</style>
