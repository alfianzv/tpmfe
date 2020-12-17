$(document).ready(function () {
  $("#input-form").validate({
    // initialize the plugin
    rules: {
      name: {
        required: true,
        minlength: 4,
      },
      email: {
        required: true,
        email: true,
        minlength: 7,
      },
      phonenumber: {
        required: true,
        minlength: 9,
      },
      message: {
        required: true,
        minlength: 15,
      },
    },
  });
});

function alertFunction() {
  alert("Form Submitted");
}

function validasi() {
  var nama = document.getElementById("form-name").value;
  var email = document.getElementById("form-email").value;
  var alamat = document.getElementById("form-phone-number").value;
  if (form - name != "" && form - email != "" && form - phone - number != "") {
    alert("Form Submitted");
  } else {
    alert("Please fill in the required forms");
  }
}
