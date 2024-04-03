function validateForm() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var desc = document.getElementById("desc").value;

  if (
    name === "" ||
    age === "" ||
    gender === "" ||
    email === "" ||
    phone === ""
  ) {
    document.getElementById("error").innerHTML = "Please fill in all fields.";
    return false;
  }

  // Name validation
  if (name.length > 30) {
    document.getElementById("error").innerHTML =
      "Name must not exceed 30 characters.";
    return false;
  }
  // Desc validation
  if (desc.length > 300) {
    document.getElementById("error").innerHTML =
      "Name must not exceed 30 characters.";
    return false;
  }

  // Email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("error").innerHTML = "Invalid email address.";
    return false;
  }

  // Phone validation
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("error").innerHTML =
      "Invalid phone number. Please enter a 10-digit number.";
    return false;
  }

  return true;
}
