document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  const mustWriteFields = document.querySelectorAll('.must-write');
  
  form.addEventListener('submit', (event) => {
      let isValid = true;
      const Toatw = document.getElementById('liveToastwrong');
      const Toata = document.getElementById('liveToastaccept');
      Toata.classList.remove("show");
      Toatw.classList.remove("show");
      mustWriteFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('is-invalid');
        }   
        else {
          field.classList.remove('is-invalid');
        }
      });
      if (!isValid) {
        event.preventDefault();
        Toatw.classList.add("show");
      }
      else {
        event.preventDefault()
        Toata.classList.add("show");
      }
  });
});
