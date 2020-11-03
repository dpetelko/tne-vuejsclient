<template>
  <div id="main" class="container-sm">
    <vue-confirm-dialog></vue-confirm-dialog>
    <br>
    <h3 class="text-center">Создание новой головной организации</h3>
    <br>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <form id="createForm">
          <div class="row">
            <div class="col">
              <div class="form-group row">
                <label class="control-label">Наименование</label>
                <input id="name" type="text" v-model.trim="leadDivision.name" class="form-control"/>
                <small v-if="$v.leadDivision.name.$dirty && !$v.leadDivision.name.required" class="text-danger">Поле не
                  может быть пустым</small>
                <small class="text-danger" v-else-if="$v.leadDivision.name.$dirty && !$v.leadDivision.name.minLength">
                  Длина должна быть не меньше {{ $v.leadDivision.name.$params.minLength.min }} символов. Сейчас -
                  {{ leadDivision.name.length }} символов
                </small>
                <small class="text-danger" v-else-if="$v.leadDivision.name.$dirty && !$v.leadDivision.name.maxLength">
                  Длина должна быть не больше {{ $v.leadDivision.name.$params.maxLength.max }} символов. Сейчас -
                  {{ leadDivision.name.length }} символов
                </small>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="form-group row">
                <label class="control-label">Индекс</label>
                <input id="postCode" type="text" v-model.trim="leadDivision.postCode" class="form-control"/>
                <small v-if="$v.leadDivision.postCode.$dirty && !$v.leadDivision.postCode.required" class="text-danger">Поле
                  не может быть пустым</small>
                <small class="text-danger"
                       v-else-if="$v.leadDivision.postCode.$dirty && !$v.leadDivision.postCode.minLength">
                  Длина должна быть не меньше {{ $v.leadDivision.postCode.$params.minLength.min }} символов. Сейчас -
                  {{ leadDivision.postCode.length }} символов
                </small>
                <small class="text-danger"
                       v-else-if="$v.leadDivision.postCode.$dirty && !$v.leadDivision.postCode.maxLength">
                  Длина должна быть не больше {{ $v.leadDivision.postCode.$params.maxLength.max }} символов. Сейчас -
                  {{ leadDivision.postCode.length }} символов
                </small>
              </div>
            </div>

            <div class="col-md-1"></div>

            <div class="col">
              <div class="form-group row">
                <label class="control-label">Страна</label>
                <input id="country" type="text" v-model.trim="leadDivision.country" class="form-control"/>
                <small v-if="$v.leadDivision.country.$dirty && !$v.leadDivision.country.required" class="text-danger">Поле
                  не может быть пустым</small>
                <small class="text-danger"
                       v-else-if="$v.leadDivision.country.$dirty && !$v.leadDivision.country.minLength">
                  Длина должна быть не меньше {{ $v.leadDivision.country.$params.minLength.min }} символов. Сейчас -
                  {{ leadDivision.country.length }} символов
                </small>
                <small class="text-danger"
                       v-else-if="$v.leadDivision.country.$dirty && !$v.leadDivision.country.maxLength">
                  Длина должна быть не больше {{ $v.leadDivision.country.$params.maxLength.max }} символов. Сейчас -
                  {{ leadDivision.country.length }} символов
                </small>
              </div>
            </div>
          </div>


          <div class="row">
            <div class="col">
              <div class="form-group row">
                <label class="control-label">Регион</label>
                <input id="region" type="text" v-model.trim="leadDivision.region" class="form-control"/>
                <small v-if="$v.leadDivision.region.$dirty && !$v.leadDivision.region.required" class="text-danger">Поле
                  не
                  может быть пустым</small>
                <small class="text-danger"
                       v-else-if="$v.leadDivision.region.$dirty && !$v.leadDivision.region.minLength">
                  Длина должна быть не меньше {{ $v.leadDivision.region.$params.minLength.min }} символов. Сейчас -
                  {{ leadDivision.region.length }} символов
                </small>
                <small class="text-danger"
                       v-else-if="$v.leadDivision.region.$dirty && !$v.leadDivision.region.maxLength">
                  Длина должна быть не больше {{ $v.leadDivision.region.$params.maxLength.max }} символов. Сейчас -
                  {{ leadDivision.region.length }} символов
                </small>
              </div>
            </div>

            <div class="col-md-1"></div>

            <div class="col">
              <div class="form-group row">
                <label class="control-label">Город</label>
                <input id="city" type="text" v-model.trim="leadDivision.city" class="form-control"/>
                <small v-if="$v.leadDivision.city.$dirty && !$v.leadDivision.city.required" class="text-danger">Поле не
                  может быть пустым</small>
                <small class="text-danger" v-else-if="$v.leadDivision.city.$dirty && !$v.leadDivision.city.minLength">
                  Длина должна быть не меньше {{ $v.leadDivision.city.$params.minLength.min }} символов. Сейчас -
                  {{ leadDivision.city.length }} символов
                </small>
                <small class="text-danger" v-else-if="$v.leadDivision.city.$dirty && !$v.leadDivision.city.maxLength">
                  Длина должна быть не больше {{ $v.leadDivision.city.$params.maxLength.max }} символов. Сейчас -
                  {{ leadDivision.city.length }} символов
                </small>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="form-group row">
                <label class="control-label">Улица</label>
                <input id="street" type="text" v-model.trim="leadDivision.street" class="form-control"/>

                <small class="text-danger" v-if="$v.leadDivision.street.$dirty && !$v.leadDivision.street.minLength">
                  Длина должна быть не меньше {{ $v.leadDivision.street.$params.minLength.min }} символов. Сейчас -
                  {{ leadDivision.street.length }} символов
                </small>
                <small class="text-danger"
                       v-else-if="$v.leadDivision.street.$dirty && !$v.leadDivision.street.maxLength">
                  Длина должна быть не больше {{ $v.leadDivision.street.$params.maxLength.max }} символов. Сейчас -
                  {{ leadDivision.street.length }} символов
                </small>
              </div>
            </div>

            <div class="col-md-1"></div>

            <div class="col">
              <div class="form-group row">
                <label class="control-label">Строение</label>
                <input id="building" type="text" v-model.trim="leadDivision.building" class="form-control"/>
                <small class="text-danger"
                       v-if="$v.leadDivision.building.$dirty && !$v.leadDivision.building.minLength">
                  Длина должна быть не меньше {{ $v.leadDivision.building.$params.minLength.min }} символов. Сейчас -
                  {{ leadDivision.building.length }} символов
                </small>
                <small class="text-danger"
                       v-else-if="$v.leadDivision.building.$dirty && !$v.leadDivision.building.maxLength">
                  Длина должна быть не больше {{ $v.leadDivision.building.$params.maxLength.max }} символов. Сейчас -
                  {{ leadDivision.building.length }} символов
                </small>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="form-group row">
                <a class="btn btn-danger mr-2" @click.prevent="confirmCancel()">К списку »</a>
                <input type="submit" value="Сохранить" id="confirmSaveButton" @click.prevent="confirmSubmit()"
                       class="btn btn-warning"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import {required, minLength, maxLength} from 'vuelidate/lib/validators'
import {mapGetters} from 'vuex'

export default {
  name: "Create",
  data() {
    return {
      leadDivision: {
        id: '00000000-0000-0000-0000-000000000000',
        name: '',
        addressId: '00000000-0000-0000-0000-000000000000',
        postCode: '',
        country: '',
        region: '',
        city: '',
        street: '',
        building: '',
        deleted: false
      }
    }
  },
  validations: {
    leadDivision: {
      name: {required, minLength: minLength(3), maxLength: maxLength(30)},
      postCode: {required, minLength: minLength(6), maxLength: maxLength(6)},
      country: {required, minLength: minLength(2), maxLength: maxLength(30)},
      region: {required, minLength: minLength(3), maxLength: maxLength(30)},
      city: {required, minLength: minLength(3), maxLength: maxLength(30)},
      street: {minLength: minLength(3), maxLength: maxLength(30)},
      building: {minLength: minLength(3), maxLength: maxLength(30)}
    }
  },
  computed: mapGetters(["getResponseResult"]),
  methods: {
    confirmSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.$confirm(
          {
            message: `Вы уверены, что хотите сохранить изменения?`,
            button: {
              no: 'Отмена',
              yes: 'Сохранить'
            },
            callback: confirm => {
              if (confirm) {
                this.submitForm()
              }
            }
          }
      )
    },
    confirmCancel() {
      this.$confirm(
          {
            message: `Изменения не будут сохранены. Уверены, что хотите покинуть страницу?`,
            button: {
              no: 'Отмена',
              yes: 'Да'
            },
            callback: confirm => {
              if (confirm) {
                this.$router.push({name: "LeadDivisionsIndex"})
              }
            }
          }
      )
    },
    async submitForm() {
      await this.$store.dispatch("createLeadDivision", this.leadDivision)
      console.error(this.getResponseResult)
      if (this.getResponseResult == 201) {
        await this.$router.push({name: "LeadDivisionsIndex"})
      } else {
        this.makeToast(this.getResponseResult.toString())
      }
    },
    makeToast(message = 'Ошибка при добавлении записи') {
      this.$bvToast.toast(message, {
        title: 'Внимание!!!',
        variant: 'danger',
        autoHideDelay: 5000,
        toaster: 'b-toaster-bottom-right',
        solid: true,
        appendToast: true
      })
    }
  }
}
</script>

<style scoped>
#main {
  margin-top: 60px;
}
</style>
