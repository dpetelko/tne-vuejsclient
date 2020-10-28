<template>
  <div id="main" class="container-sm">
    <br>
    <h3 class="text-center">Создание новой головной организации</h3>
    <br>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form id="createForm" asp-action="Create" @submit.prevent="submitHandler">
          <div asp-validation-summary="ModelOnly" class="text-danger"></div>
          <div class="form-group">
            <label asp-for="Name" class="control-label"></label>
            <input asp-for="Name" class="form-control"/>
            <span asp-validation-for="Name" class="text-danger"></span>
          </div>
          <div class="form-group">
            <label asp-for="PostCode" class="control-label"></label>
            <input asp-for="PostCode" class="form-control"/>
            <span asp-validation-for="PostCode" class="text-danger"></span>
          </div>
          <div class="form-group">
            <label asp-for="Country" class="control-label"></label>
            <input asp-for="Country" class="form-control"/>
            <span asp-validation-for="Country" class="text-danger"></span>
          </div>
          <div class="form-group">
            <label asp-for="Region" class="control-label"></label>
            <input asp-for="Region" class="form-control"/>
            <span asp-validation-for="Region" class="text-danger"></span>
          </div>
          <div class="form-group">
            <label asp-for="City" class="control-label"></label>
            <input asp-for="City" class="form-control"/>
            <span asp-validation-for="City" class="text-danger"></span>
          </div>
          <div class="form-group">
            <label asp-for="Street" class="control-label"></label>
            <input asp-for="Street" class="form-control"/>
            <span asp-validation-for="Street" class="text-danger"></span>
          </div>
          <div class="form-group">
            <label asp-for="Building" class="control-label"></label>
            <input asp-for="Building" class="form-control"/>
            <span asp-validation-for="Building" class="text-danger"></span>
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
import {required, minLength} from 'vuelidate/lib/validators'
export default {
  name: "Create",
  data: () => ({
      id: '00000000-0000-0000-0000-000000000000',
      name: '',
      addressId: '00000000-0000-0000-0000-000000000000',
      postCode: 0,
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

    }
  }
}
</script>

<style scoped>
#main {
  margin-top: 60px;
}
</style>
