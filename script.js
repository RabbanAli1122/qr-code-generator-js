const qrText= document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

let size = sizes.value
// we can also use height:sizes.value but we stored its value in separate var to handle the empty input 

const qrContainer = document.querySelector(".qr-body")

generateBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    //the "event" or "e" prevents the form from submiting and refereshing when ever the generate button is clicked, event is passed as an argument to this arrow functoin whenever the button is clicked and event is here wrote as a parameter for this function 
    isinputempty(); 
});

sizes.addEventListener("change",(e)=>{
    // e.target says: element where the event happened
    if(qrText.value.length > 0){
        size=e.target.value;
    }
    else{
        alert("Enter the text or URL to generate your QR code.")
    }
});

downloadBtn.addEventListener("click", (e)=>{
    let img = document.querySelector(".qr-body img");
    if(img!== null){
        let imgAtrr = img.getAttribute("src");
        downloadBtn.setAttribute("href",imgAtrr);
        // value(imgAtrr) of the attribute in downloadBtn named href will be set
    }
    else{
        alert("Enter the text or URL and click generate to download your QR code.")
        e.preventDefault();
    }
});

function isinputempty(){
    if(qrText.value.length > 0){
        generateQRCode();
    }
    else{
        alert("Enter the text or URL to generate your QR code.")
    }
}

function generateQRCode(){
    // let size = sizes.value
    qrContainer.innerHTML=""
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}
