<template>
  <div>
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

          <a class="nav-link" id="refillButton" href="/Home/DropAndRefillDb">Заполнить базу...</a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: "Navbar.vue",
}
</script>

<style scoped>

</style>
