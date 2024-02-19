let imgBox = document.getElementById('imgbox');
let qrText = document.getElementById('qrText');
let qrImg = document.getElementById('qrImg');

function generateQr(){
 qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
}
