const ürünInput = document.getElementById("ürün-input");
const ekleBtn = document.getElementById("ekle-btn");
const silBtn = document.getElementById("sil-btn");
const liste = document.getElementById("liste");


ürünInput.focus();

const Yönet = () =>{

if (ürünInput.value==="") {
  alert("bos bırakılamaz");
  return;
}

let eleman = document.createElement("li");
eleman.classList.add("ürün");
liste.appendChild(eleman);

let p = document.createElement("p");
p.innerText = "-"+ürünInput.value;
p.classList.add("ürün");
eleman.appendChild(p);

let checkBtn = document.createElement("i");
checkBtn.classList.add("fa-solid"); 
checkBtn.classList.add("fa-check"); 
checkBtn.classList.add("check-btn"); 
eleman.appendChild(checkBtn);

checkBtn.addEventListener("click",()=>{
  p.classList.toggle("çiz");
})

silBtn.addEventListener("click",()=>{
  liste.innerHTML = "";
});

ürünInput.value = "";


}

ekleBtn.addEventListener("click",Yönet);

ürünInput.addEventListener("keyup",(event)=>{
  if (event.key==="Enter") {
    Yönet();
  }
});