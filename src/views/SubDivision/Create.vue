<template>
  <div class="container">

    <form id="createForm">
      <div class="row">
        <div class="col">
          <div class="form-group row">
            <label class="control-label">Наименование</label>
            <input id="name" type="text" v-model.trim="subDivision.name" class="form-control"/>
            <small v-if="!$v.subDivision.name.required" class="text-danger">Поле не
              может быть пустым</small>
            <small class="text-danger" v-else-if="!$v.subDivision.name.minLength">
              Длина должна быть не меньше {{ $v.subDivision.name.$params.minLength.min }} символов. Сейчас -
              {{ subDivision.name.length }} символов
            </small>
            <small class="text-danger" v-else-if="!$v.subDivision.name.maxLength">
              Длина должна быть не больше {{ $v.subDivision.name.$params.maxLength.max }} символов. Сейчас -
              {{ subDivision.name.length }} символов
            </small>
            <small v-else class="text-success">Поле заполнено корректно</small>
          </div>
        </div>

        <div class="col-md-1"></div>

        <div class="col">
          <div class="form-group row">
            <label class="control-label">Головная организация</label>
            <select v-model="subDivision.leadDivisionId" class="form-control">
              <option v-for="item in leadDivisionList" v-bind:key=item.id v-text="item.name" v-bind:value="item.id"/>
            </select>
            <small v-if="!$v.subDivision.leadDivisionId.required" class="text-danger">Поле не
              может быть пустым</small>
            <small v-else class="text-success">Поле заполнено корректно</small>

          </div>
        </div>


      </div>


      <div class="row">
        <div class="col">
          <div class="form-group row">
            <label class="control-label">Индекс</label>
            <input id="postCode" type="number" v-model.trim="subDivision.postCode" class="form-control"/>
            <small v-if="!$v.subDivision.postCode.required" class="text-danger">Поле
              не может быть пустым</small>
            <small class="text-danger"
                   v-else-if="!$v.subDivision.postCode.minLength">
              Длина должна быть {{ $v.subDivision.postCode.$params.minLength.min }} цифр. Сейчас -
              {{ subDivision.postCode.length }} цифр
            </small>
            <small class="text-danger"
                   v-else-if="!$v.subDivision.postCode.maxLength">
              Длина должна быть {{ $v.subDivision.postCode.$params.maxLength.max }} цифр. Сейчас -
              {{ subDivision.postCode.length }} цифр
            </small>
            <small v-else class="text-success">Поле заполнено корректно</small>
          </div>
        </div>

        <div class="col-md-1"></div>

        <div class="col">
          <div class="form-group row">
            <label class="control-label">Страна</label>
            <input id="country" type="text" v-model.trim="subDivision.country" class="form-control"/>
            <small v-if="!$v.subDivision.country.required" class="text-danger">Поле
              не может быть пустым</small>
            <small class="text-danger"
                   v-else-if="!$v.subDivision.country.minLength">
              Длина должна быть не меньше {{ $v.subDivision.country.$params.minLength.min }} символов. Сейчас -
              {{ subDivision.country.length }} символов
            </small>
            <small class="text-danger"
                   v-else-if="!$v.subDivision.country.maxLength">
              Длина должна быть не больше {{ $v.subDivision.country.$params.maxLength.max }} символов. Сейчас -
              {{ subDivision.country.length }} символов
            </small>
            <small v-else class="text-success">Поле заполнено корректно</small>
          </div>
        </div>
      </div>


      <div class="row">
        <div class="col">
          <div class="form-group row">
            <label class="control-label">Регион</label>
            <input id="region" type="text" v-model.trim="subDivision.region" class="form-control"/>
            <small v-if="!$v.subDivision.region.required" class="text-danger">Поле
              не
              может быть пустым</small>
            <small class="text-danger"
                   v-else-if="!$v.subDivision.region.minLength">
              Длина должна быть не меньше {{ $v.subDivision.region.$params.minLength.min }} символов. Сейчас -
              {{ subDivision.region.length }} символов
            </small>
            <small class="text-danger"
                   v-else-if="!$v.subDivision.region.maxLength">
              Длина должна быть не больше {{ $v.subDivision.region.$params.maxLength.max }} символов. Сейчас -
              {{ subDivision.region.length }} символов
            </small>
            <small v-else class="text-success">Поле заполнено корректно</small>
          </div>
        </div>

        <div class="col-md-1"></div>

        <div class="col">
          <div class="form-group row">
            <label class="control-label">Город</label>
            <input id="city" type="text" v-model.trim="subDivision.city" class="form-control"/>
            <small v-if="!$v.subDivision.city.required" class="text-danger">Поле не
              может быть пустым</small>
            <small class="text-danger" v-else-if="!$v.subDivision.city.minLength">
              Длина должна быть не меньше {{ $v.subDivision.city.$params.minLength.min }} символов. Сейчас -
              {{ subDivision.city.length }} символов
            </small>
            <small class="text-danger" v-else-if="!$v.subDivision.city.maxLength">
              Длина должна быть не больше {{ $v.subDivision.city.$params.maxLength.max }} символов. Сейчас -
              {{ subDivision.city.length }} символов
            </small>
            <small v-else class="text-success">Поле заполнено корректно</small>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="form-group row">
            <label class="control-label">Улица</label>
            <input id="street" type="text" v-model.trim="subDivision.street" class="form-control"/>

            <small class="text-danger" v-if="!$v.subDivision.street.minLength">
              Длина должна быть не меньше {{ $v.subDivision.street.$params.minLength.min }} символов. Сейчас -
              {{ subDivision.street.length }} символов
            </small>
            <small class="text-danger"
                   v-else-if="!$v.subDivision.street.maxLength">
              Длина должна быть не больше {{ $v.subDivision.street.$params.maxLength.max }} символов. Сейчас -
              {{ subDivision.street.length }} символов
            </small>
            <small v-else class="text-success">Поле заполнено корректно</small>
          </div>
        </div>

        <div class="col-md-1"></div>

        <div class="col">
          <div class="form-group row">
            <label class="control-label">Строение</label>
            <input id="building" type="text" v-model.trim="subDivision.building" class="form-control"/>
          </div>
        </div>
      </div>
    </form>

  </div>

</template>

<script>
import {required, minLength, maxLength} from 'vuelidate/lib/validators'
import {mapGetters} from 'vuex'

export default {
  name: "Create",
  props: {
    leadDivisionList: []
  },
  data() {
    return {
      subDivision: {
        id: '00000000-0000-0000-0000-000000000000',
        name: '',
        leadDivisionId: '',
        leadDivisionName: '',
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
    subDivision: {
      name: {required, minLength: minLength(3), maxLength: maxLength(30)},
      leadDivisionId: {required},
      postCode: {required, minLength: minLength(6), maxLength: maxLength(6)},
      country: {required, minLength: minLength(2), maxLength: maxLength(30)},
      region: {required, minLength: minLength(3), maxLength: maxLength(30)},
      city: {required, minLength: minLength(3), maxLength: maxLength(30)},
      street: {minLength: minLength(3), maxLength: maxLength(30)}
    }
  },
  computed: mapGetters(["getResponseResult"]),
  methods: {

    confirmSubmit() {
      console.error("confirmSubmit in child")
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

    async submitForm() {
      await this.$store.dispatch("createEntry", ['/api/v1/SubDivisions/', this.subDivision])


      switch (this.getResponseResult) {
        case 201:
          this.$emit('close', {
            style: 'info',
            title: 'Информация',
            message: 'Запись успешно создана.'
          })
          break

        case 400:
          await this.$store.dispatch("notify", {
            style: 'danger',
            title: 'Внимание! Не удается сохранить запись.',
            message: 'Неверный формат записи.'
          })
          break

        case 500:
          await this.$store.dispatch("notify", {
            style: 'danger',
            title: 'Внимание! Не удается сохранить запись.',
            message: 'Ошибка на сервере.'
          })
          break

        case 'Нет связи с сервером. Проверьте соединение.':
          await this.$store.dispatch("notify", {
            style: 'danger',
            title: 'Внимание! Не удается сохранить запись.',
            message: this.getResponseResult
          })
          break
      }
    }
  }
}
</script>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number'],
input[type="number"]:hover,
input[type="number"]:focus {
  appearance: none;
  -moz-appearance: textfield;
}
</style>
