<template>
  <div id="menu" class="container-sm">
    <br/>
    <div class="row">
      <div class="col-xs-12 col-md-4">
        <div @mouseenter="card1Class=activeClass" @mouseleave="card1Class=notActiveClass"  :class="card1Class">
          <div class="card-header">
            <h3>Головные</h3>
            <h3>организации</h3>
            <p class="card-text">Раздел предоставляет инструменты для работы с головными организациями</p>
            <br/>
            <a href="/lead-divisions/index" class="btn btn-outline-info btn-sm">Перейти к разделу
              »</a>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-md-4">
        <div @mouseenter="card2Class=activeClass" @mouseleave="card2Class=notActiveClass"  :class="card2Class">
          <div class="card-header">
            <h3>Дочерние</h3>
            <h3>организации</h3>
            <p class="card-text">Раздел предоставляет инструменты для работы с дочерними организациями</p>
            <br/>
            <a asp-action="Index" asp-controller="SubDivisions" class="btn btn-outline-info btn-sm">Перейти к разделу
              »</a>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-md-4">
        <div @mouseenter="card3Class=activeClass" @mouseleave="card3Class=notActiveClass"  :class="card3Class">
          <div class="card-header">
            <h3>Объекты</h3>
            <h3>потребления</h3>
            <p class="card-text">Раздел предоставляет инструменты для работы с объектами потребления</p>
            <br/>
            <a asp-action="Index" asp-controller="Providers" class="btn btn-outline-info btn-sm">Перейти к разделу »</a>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-12">
        <hr style="width:100%;"/>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-4">
        <div @mouseenter="card4Class=activeClass" @mouseleave="card4Class=notActiveClass"  :class="card4Class">
          <div class="card-header">
            <h3>Точки измерения</h3>
            <h3>электроэнергии</h3>
            <p class="card-text">Раздел предоставляет инструменты для работы с точками учета электроэнергии</p>
            <br/>
            <a asp-action="Index" asp-controller="ControlPoints" class="btn btn-outline-info btn-sm">Перейти к разделу
              »</a>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-md-4">
        <div @mouseenter="card5Class=activeClass" @mouseleave="card5Class=notActiveClass"  :class="card5Class">
          <div class="card-header">
            <h3>Точки поставки</h3>
            <h3>электроэнергии</h3>
            <p class="card-text">Раздел предоставляет инструменты для работы с точками поставки электроэнергии</p>
            <a asp-action="Index" asp-controller="DeliveryPoints" class="btn btn-outline-info btn-sm">Перейти к разделу
              »</a>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-md-4">
        <div @mouseenter="card6Class=activeClass" @mouseleave="card6Class=notActiveClass"  :class="card6Class">
          <div class="card-header">
            <h3>Расчетные</h3>
            <h3>приборы учета</h3>
            <p class="card-text">Раздел предоставляет инструменты для работы с расчетными приборами учета</p>
            <br/>
            <a asp-action="Index" asp-controller="BillingPoints" class="btn btn-outline-info btn-sm">Перейти к разделу
              »</a>
          </div>
        </div>
      </div>

    </div>

    <div class="row">
      <div class="col-xs-12 col-md-12">
        <hr style="width:100%;"/>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-4">
        <div @mouseenter="card7Class=activeClass" @mouseleave="card7Class=notActiveClass"  :class="card7Class">
          <div class="card-header">
            <h3>Счетчики</h3>
            <h3>электроэнергии</h3>
            <p class="card-text">Раздел предоставляет инструменты для работы со счетчиками электроэнергии</p>
            <br/>
            <a asp-action="Index" asp-controller="ElectricityMeters" class="btn btn-outline-info btn-sm">Перейти к
              разделу »</a>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-4">
        <div @mouseenter="card8Class=activeClass" @mouseleave="card8Class=notActiveClass"  :class="card8Class">
          <div class="card-header">
            <h3>Трансформаторы</h3>
            <h3>тока</h3>
            <p class="card-text">Раздел предоставляет инструменты для работы с трансформаторами тока</p>
            <br/>
            <a asp-action="Index" asp-controller="CurrentTransformers" class="btn btn-outline-info btn-sm">Перейти к
              разделу »</a>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-4">
        <div @mouseenter="card9Class=activeClass" @mouseleave="card9Class=notActiveClass"  :class="card9Class">
          <div class="card-header">
            <h3>Трансформаторы</h3>
            <h3>напряжения</h3>
            <p class="card-text">Раздел предоставляет инструменты для работы с трансформаторами напряжения</p>
            <a asp-action="Index" asp-controller="VoltageTransformers" class="btn btn-outline-info btn-sm">Перейти к
              разделу »</a>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data: function() {
return {
    activeClass:  'card border-info',
    notActiveClass: 'card',
    card1Class: 'card',
    card2Class: 'card',
    card3Class: 'card',
    card4Class: 'card',
    card5Class: 'card',
    card6Class: 'card',
    card7Class: 'card',
    card8Class: 'card',
    card9Class: 'card'
    };
}
  }



</script>

<style scoped>
#menu{
  margin-top: 60px
}

</style>
