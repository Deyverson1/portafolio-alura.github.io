//Haz tú validación en javascript acá
const BtnSubmit = document.querySelector("[data-submit]")
const Textarea = document.querySelector("[data-textarea]")

BtnSubmit.addEventListener("click", (e) => {
  e.preventDefault()
  const Nombre = document.getElementById('nombre').value;
  const Email = document.getElementById('email').value;
  const Asunto = document.getElementById('asunto').value;
  const Message = Textarea.value;
  console.log({ Nombre }, { Email }, { Asunto }, { Message })
  fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: { Nombre },
      email: { Email },
      asunto: { Asunto },
      message: { Message },
    }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
    })
    .catch(error => {
      console.error('Error:', error);
    });
})


