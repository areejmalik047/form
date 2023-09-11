//EventListener function
document.getElementById("form").addEventListener("submit", (a) => {
  a.preventDefault();
  let Name = document.getElementById("name").value;
  let Password = document.getElementById("password").value;
  let Email = document.getElementById("email").value;
  let Address = document.getElementById("addr").value;
  let PhoneNo = document.getElementById("number").value;
  if (Name.length < 2) {
    alert(" Please Enter valid name");
  } else if (PhoneNo.length != 11) {
    alert(" enter valid number");
  } else {
    let data = {
      Name,
      Password,
      Email,
      Address,
      PhoneNo,
    };
    // to convert string into json
    let datjson = JSON.stringify(data, null, 2);
    document.getElementById("showdata").textContent = datjson;
  }
});
