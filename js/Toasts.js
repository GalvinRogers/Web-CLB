function ThuNhanVe() {
  emailjs.send("service_clj6q7w", "template_esvp5tv", { 
      emailCLB : 'bopdepca123321@gmail.com' , // dien gmail cua m dc
      email : document.getElementById("email").value ,
      name: document.getElementById("name").value,
      khoa: document.getElementById("khoa").value,
      gioitinh: document.getElementById("gioitinh").value,  
      diemnmlt: document.getElementById("diemnmlt").value,
      diemktlt: document.getElementById("diemktlt").value
    })
}
function ThuCamOn(){
  emailjs.send("service_jjxkuxo","template_34fz9qm",{
    email : document.getElementById("email").value ,
    name: document.getElementById("name").value
    });
}

function submitForm() {
  const gioitinh = document.getElementById('gioitinh');
  const form = document.getElementById('myForm');
  const mustWriteFields = document.querySelectorAll('.must-write');
  
  let isValid = true;
  const Toatw = document.getElementById('liveToastwrong');
  const Toata = document.getElementById('liveToastaccept');
  Toatw.classList.remove("show");
  Toata.classList.remove("show");
  mustWriteFields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add('is-invalid');
    } else {
      field.classList.remove('is-invalid');
    }
  });
  if (gioitinh.value === 'Giới Tính') { 
    isValid = false;
    gioitinh.classList.add('is-invalid'); 
  } else {
    gioitinh.classList.remove('is-invalid'); 
  }
  if (!isValid) {
    Toatw.classList.add("show");
  } else {
    Toata.classList.add("show");
    ThuNhanVe();
    ThuCamOn();
    form.reset(); 
  }
  
}
