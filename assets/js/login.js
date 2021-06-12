const formLogin = document.getElementById("form-login");
const username = document.getElementById("username");
const password = document.getElementById("password");

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();
  loginForm();
});

function loginForm() {
  const usernameVal = username.value.trim();
  const passwordVal = password.value.trim();
  const userData = getUserFromLocalStorage();
  console.log(userData);
  for (let i = 0; i < userData.length; i++) {
    if (
      userData[i].name === usernameVal ||
      userData[i].password === passwordVal
    ) {
      swal("Đăng nhập thành công");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
      showUser(usernameVal);
    } else {
      swal("Đăng nhập thất bại, vui lòng kiểm tra lại thông tin");
    }
  }
}

function showUser(usernameVal) {
  var html = `
  <span>Xin chào ${usernameVal}, <a href="javascript: void (0)">đăng xuất</a></span>
  `;
}

var keyUser = "userData";

function getUserFromLocalStorage() {
  var userData = new Array();
  var jsonUserData = localStorage.getItem(keyUser);
  if (jsonUserData != null) {
    userData = JSON.parse(jsonUserData);
  }
  return userData;
}
