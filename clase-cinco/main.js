const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fname = form.fname;
  const lname = form.lname;

  // Aquí ejecuto mi código
  console.log(fname.value, lname.value);
});
