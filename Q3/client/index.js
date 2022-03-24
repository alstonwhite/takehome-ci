import axios from "axios";

const API_ENDPOINT = "http://localhost:3000/";

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSubmit();
});

const handleSubmit = async () => {
  const formData = [...form.elements]
    .filter((element) => element.type !== "submit")
    .map((element) => element.value);
  const includesCalculus = formData.find((element) => {
    if (element.toLowerCase().includes("calculus")) return true;
  });
  if (!includesCalculus) {
    console.error("One choice must include Calculus!");
    return;
  }
  try {
    const response = await axios.post(API_ENDPOINT, { choices: formData });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};
