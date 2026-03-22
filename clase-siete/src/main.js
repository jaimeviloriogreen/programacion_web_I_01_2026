import "./style.css";
import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseURL, supabaseKey);
const button = document.querySelector(".btn-show");
const table = document.querySelector(".data-table");
const tbody = table.querySelector(".tbody");
const thead = table.querySelector(".thead");

const form = document.querySelector(".form-data");
let showTable = false;

// Funciones
async function submitForm(e) {
  e.preventDefault();
  const fname = form.fname.value;
  const lname = form.lname.value;
  const career = form.career.value;

  const { error } = await supabase.from("students").insert({ fname, lname, career });

  if (!error) {
    console.log({ error });
    console.log({ fname, lname, career });
    if (showTable) renderTable();
  }

  // Limpia el formulario
  form.reset();
  // Envía el focus al input fname
  form.fname.focus();
}
async function renderTable() {
  const { data, error } = await supabase.from("students").select("*");
  tbody.innerHTML = "";

  thead.innerHTML = `
     <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Carrera</th>
        <th>Acción</th>
      </tr>
  `;

  if (data) {
    data.forEach((student) => {
      tbody.innerHTML += /*html*/ `
        <tr>
          <td> ${student.id} </td>
          <td> ${student.fname} </td>
          <td> ${student.lname} </td>
          <td> ${student.career}</td>
          <td>
              <button class="action delete" data-uuid=${student.uuid}>Delete</button>
              <button class="action update" data-uuid=${student.uuid}>Update</button>
          </td>
        </tr>
      `;
    });

    showTable = true;
  }
}

async function deleteStudent(e) {
  // const button = e.target;

  // El botón tiene dos clases, action y delete, por lo que delete tiene el ìndice 1
  if (e.target.classList[1] === "delete") {
    const uuid = e.target.dataset.uuid;
    if (uuid) {
      const { data, error } = await supabase.from("students").delete().eq("uuid", uuid);

      // button.textContent = "Loading...";

      if (!error) {
        renderTable();
        console.info(`Usuario con el uuid: ${uuid} ha sido eliminado.`);
      }
    }
  }
}

// Event lister
button.addEventListener("click", renderTable);
form.addEventListener("submit", submitForm);
tbody.addEventListener("click", deleteStudent);
