export default function setupformHandler() {
  const form = document.getElementById('suvery-form');
  const messageContainer = document.getElementById('message-container');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('number').value;
    const dropdown = document.getElementById('dropdown').value;
    const radioButtons = document.querySelectorAll(
      'input[type = radio]:checked',
    );
    const checkboxes = document.querySelectorAll(
      'input[type = checkbox]:checked',
    );
    const comments = document.getElementById('comments').value;

    if (
      name
            && email
            && age
            && dropdown
            && radioButtons
            && checkboxes.length > 0
            && comments
    ) {
      messageContainer.textContent = 'FORMULARIO ENVIADO CON EXITO';
      messageContainer.style.color = 'green';
    } else {
      messageContainer.textContent = 'POR FAVOR COMPLETE TODOS LOS CAMPOS REQUERIDOS';
      messageContainer.style.color = 'red';
    }
  });
}