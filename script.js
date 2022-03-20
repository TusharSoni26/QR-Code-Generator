const wrapper = document.querySelector(".wrapper"),
formInput = wrapper.querySelector(".form input"),
btn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-codes img");

btn.addEventListener("click",() => {
    wrapper.classList.add("active");
    let inputVal = formInput.value;
    if(inputVal == "") return;
    btn.innerHTML = "Generating QR Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputVal}`
    
    qrImg.addEventListener("load",() => {
        wrapper.classList.add("active");
        btn.innerHTML = "Generate QR Code";
    });
});

formInput.addEventListener("keyup",()=>{
    wrapper.classList.remove("active");
});
