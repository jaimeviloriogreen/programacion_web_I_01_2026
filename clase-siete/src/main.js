import "./style.css";
import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseURL, supabaseKey);
const button = document.querySelector(".btn-show");
const table = document.querySelector(".data-table");
const tbody = table.querySelector(".tbody");
const thead = table.querySelector(".thead");

// Funciones
button.addEventListener("click", async () => {
  const { data, error } = await supabase.from("students").select("*");
  tbody.innerHTML = "";

  thead.innerHTML = `
     <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Carrera</th>
      </tr>
  `;

  if (data) {
    data.forEach((student) => {
      tbody.innerHTML += /*html*/ `
        <tr>
          <td data-uuid=${student.uuid}> ${student.id} </td>
          <td> ${student.fname} </td>
          <td> ${student.lname} </td>
          <td> ${student.career}</td>
        </tr>
      `;
    });
  }
});
