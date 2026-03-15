const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fname = form.fname;
  const lname = form.lname;
  const skills = form.skills;
  const gender = form.gender;

  // Aquí ejecuto mi código

  const person = {
    fname: fname.value,
    lname: lname.value,
    skills: skills.value,
    gender: gender.value,
  };
  title.classList.add("rojo");
  title.textContent = `${person.fname} ${person.lname}`;
  console.log(person);
});
