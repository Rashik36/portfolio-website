/*External javaScript for the website*/

/*funtion to scroll to the top of the page*/
function topScreen() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*function to validate the form regidtration*/
function validateForm() {
    var fname = document.forms["messageForm"]["fname"].value;
    var lname = document.forms["messageForm"]["lname"].value;
    var email = document.forms["messageForm"]["email"].value;
    var phoneNumber = document.forms["messageForm"]["phoneNumber"].value;
    var message = document.forms["messageForm"]["message"].value;

    /*checking if all the forms have been filled or not*/
    if(fname == "" || lname == "" || email == "" || phoneNumber == "" || message == "") {
        alert("All forms should be filled before submition.")
    }

    else {
        alert("Thank you for submitting!")
    }
}
