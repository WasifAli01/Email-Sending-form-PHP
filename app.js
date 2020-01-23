function validateForm() {
  var firstName = document.getElementById("firstName").value;
  var recieverName = document.getElementById("recieverName").value;
  var recieverEmail = document.getElementById("recieverEmail").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (firstName == null || firstName == "") {
    alert("First Name is required!");
    return false;
  }
  if (firstName < 3) {
    alert("First Name must be at least 3 characters");
  }
  if (recieverName == null || recieverName == "") {
    alert("Reciever Name is required!");
    return false;
  }
  if (recieverEmail == null || recieverEmail == "") {
    alert("Reciever Email is required!");
    return false;
  }
  if (message == null || message == "") {
    alert("Reciever Name is required!");
    return false;
  }
  if (subject == null || subject == "") {
    alert("Subject is required!");
    return false;
  }
  if (message.length > 1200) {
    alert(
      "Message can't be more than 1200 characters. Currently message have " +
        message.length +
        " characters."
    );
  } else {
    return true;
  }
}
