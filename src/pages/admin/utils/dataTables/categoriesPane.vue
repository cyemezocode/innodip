<template>
  <div>
    <table id="myTable" class="table table-bordered mt-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";

export default {
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          $("#myTable").DataTable({
            dom: "Bfrtip",
            // "colvis", 
            buttons: ["excel", "print", "csv"],
            data: response.data,
            columns: [
              { data: "id" },
              { data: "userId" },
              { data: "title" },
              { data: "body" },
            ],
          });
          $(".dt-buttons").css("display", "flex");
          $(".dt-buttons").css("gap", "10px");
          $(".table td").css("padding", "10px");
          $(".table td,.table").css("border", "1px solid #c3c3c3");
          $(".even").css("background", "#f1f1f1");
          $('#myTable_filter').css({'background':'#009879','border-radius':'10px','display':'flex','align-items':'center','padding':'1px 5px','color':'#fff'})
          $('#myTable_filter input').css({'border-radius':'0px 10px 10px 0','padding':'5px','color':'#000','outline':'none'})
          $('#myTable').before('<div class="filter"></div>');
          $(".dt-buttons, .dataTables_filter").appendTo(".filter");
          $(".filter").css({
                             "display": "flex", 
                             "justify-content":"space-between" 
                            });
          $('#myTable').after('<div class="tableFooter"></div>');
          $(".dataTables_paginate, .dataTables_info").appendTo(".tableFooter");
          
          $(".tableFooter").css({
                             "display": "flex", 
                             "justify-content":"space-between" 
                            });
          $(".pagination").css({
                             "display": "flex", 
                             "border":"1px solid #009879"
                            });

          

        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>

<style scoped>
.table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    overflow: hidden;
}
.table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}
.table th,
.td {
    padding: 10px 15px;
    white-space: nowrap;
}
/* @import '@/assets/css/bootstrap.css'; */

</style>