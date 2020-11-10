<template>
  <div>
    <vue-confirm-dialog class="my-class"></vue-confirm-dialog>
    <nav class="navbar navbar-expand-sm bg-info navbar-dark fixed-top">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/">Главная</a>
        </li>
        <li class="nav-item active dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
             aria-expanded="false">
            Разделы
          </a>
          <div class="dropdown-menu bg-info">
            <a class="dropdown-item text-white bg-info" asp-action="Index" asp-controller="LeadDivisions">Головные
              организации</a>
            <a class="dropdown-item text-white bg-info" asp-action="Index" asp-controller="SubDivisions">Дочерние
              организации</a>
            <a class="dropdown-item text-white bg-info" asp-action="Index" asp-controller="Providers">Объекты
              потребления</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-white bg-info" asp-action="Index" asp-controller="ControlPoints">Точки
              измерения</a>
            <a class="dropdown-item text-white bg-info" asp-action="Index" asp-controller="DeliveryPoints">Точки
              поставки</a>
            <a class="dropdown-item text-white bg-info" asp-action="Index" asp-controller="BillingPoints">Расчетные
              приборы учета</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-white bg-info" asp-action="Index" asp-controller="ElectricityMeters">Счетчики
              ЭЭ</a>
            <a class="dropdown-item text-white bg-info" asp-action="Index" asp-controller="CurrentTransformers">Трансформаторы
              тока</a>
            <a class="dropdown-item text-white bg-info" asp-action="Index" asp-controller="VoltageTransformers">Трансформаторы
              напряжения</a>
          </div>
        </li>
        <li class="nav-item active">
          <a class="nav-link" id="refillButton" href="#" @click.prevent="confirmDrop()">Заполнить базу...</a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Navbar.vue",
  components: {},
  computed: mapGetters(["getResponseResult"]),
  methods: {
    async confirmDrop() {
      await this.$confirm(
          {
            message: `Заполнение базы удалит все существующие записи!!!`,
            button: {
              no: 'Отмена',
              yes: 'Продолжить'
            },
            callback: async confirm => {
              if (confirm) {
                await this.$store.dispatch("dropDb")
                switch (this.getResponseResult) {
                  case 200:
                    await this.$store.dispatch("notify", {
                      style: 'info',
                      title: 'Информация',
                      message: 'База данных успешно обновлена.'
                    })
                    break

                  case 500:
                    await this.$store.dispatch("notify", {
                      style: 'danger',
                      title: 'Внимание!',
                      message: 'Ошибка на сервере.'
                    })
                    break

                  case 'Нет связи с сервером. Проверьте соединение.':
                    await this.$store.dispatch("notify", {
                      style: 'danger',
                      title: 'Внимание!',
                      message: this.getResponseResult
                    })
                    break
                }
              } else {
                await this.$store.dispatch("notify", {
                  style: 'warning',
                  title: 'Внимание',
                  message: 'Операция отменена пользователем.'
                })
              }
              await this.$router.push({name: "Home"})
            }
          }
      )
    }
  }
}
</script>

<style scoped>
</style>
