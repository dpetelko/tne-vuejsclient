<template>
  <div class="container-fluid">
    <h3 class="text-center">Дочерние организации</h3>
    <br />
    <a asp-action="Create" asp-controller="SubDivisions" class="btn btn-secondary">Добавить новую организацию</a>
    <p></p>
    <table class="table table-stripped table-hover">
      <tr>
        <td><strong>Наименование</strong></td>
        <td><strong>Головная организация</strong></td>
        <td><strong>Индекс</strong></td>
        <td><strong>Страна</strong></td>
        <td><strong>Регион</strong></td>
        <td><strong>Город</strong></td>
        <td><strong>Улица</strong></td>
        <td><strong>Строение</strong></td>
        <td></td>
      </tr>
      @foreach (var item in Model)
      {
      <tr>
        <td>@item.Name</td>
        <td>@item.LeadDivisionName</td>
        <td>@item.PostCode</td>
        <td>@item.Country</td>
        <td>@item.Region</td>
        <td>@item.City</td>
        <td>@item.Street</td>
        <td>@item.Building</td>
        <td>
          <div class="btn-group" role="group">

            <a asp-action="Details" asp-controller="SubDivisions" asp-route-id="@item.Id" class="btn btn-outline-success btn-sm">Подробности</a>
            <a asp-action="Edit" asp-controller="SubDivisions" asp-route-id="@item.Id" class="btn btn-outline-warning btn-sm">Редактировать</a>
            <a class="btn btn-outline-danger font-weight-bold btn-sm" id="deleteButton" href="/SubDivisions/Delete/@item.Id">Удалить</a>

          </div>
        </td>
      </tr>
      }
    </table>
  </div>
</template>

<script>
export default {
  name: "SubDivisionIndex"
}
</script>

<style scoped>

</style>
