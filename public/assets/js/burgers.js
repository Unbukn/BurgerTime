$(function () {
  $(".create-form").on("submit", function (event) {
      event.preventDefault();
      console.log("works")
      let newBurger = {
          name: $("#newBurger").val().trim()
      }
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(function () {
          location.reload();
      })

  })
  $(".devour-burger").on("click", function (e) {
      let id = $(this).data("id")
      let newDevour = $(this).data("newburger")
      console.log(newDevour)

      let eat = {
          devoured: newDevour
      };
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: eat
      }).then(function () {

          location.reload()
      })

  })


})