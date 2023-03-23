var text = document.querySelector("input");
var button = document.querySelector(".btn-form");
var designval = document.getElementsByClassName(".inputvalidation");
var form = document.querySelector(".form");
var inputone = document.querySelector("#text");
var anotherinputone = document.querySelector("#texttwo");
var inputtwo = document.querySelector("#email");
var inputonethree = document.querySelector("#password");
var errortext = document.querySelectorAll("small");

//.form-body.error input (colors)(div form)
//show input error message
// function showerror(input, message) {
//   const formbody = input.parentElement;
//   formbody.classname = "form-body.error";
//   const small = formControl.querySelector("small");
//   small.innerText = message;
// }






//first trial
//.form-control small .error

button.onclick = function () {
  if (inputone.value == null || inputone.value == "") { var form = form-AbortController.classname=("form-control small error")
    inputone.style.borderColor = "red";

  }
  if (anotherinputone.value == null || anotherinputone.value == "") {
    anotherinputone.style.borderColor = "red";
    errortext.style.color = "red";
  }
  if (inputtwo.value == null || inputtwo.value == "") {
    inputtwo.style.borderColor = "red";
    errortext.style.color = "red";
  }
  if (inputonethree.value == null || inputonethree.value == "") {
    inputonethree.style.borderColor = "red";
    errortext.style.color = "red";
  }
};

//first trial
