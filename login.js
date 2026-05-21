function loginUser() {

  const username =
    document.getElementById("username").value;

  const password =
    document.getElementById("password").value;


  if (username === "" || password === "") {

    alert("Please fill all fields");

    return;
  }


  localStorage.setItem("username", username);


  window.location.href = "structure.html";
}