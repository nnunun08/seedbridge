const appendFile = document.querySelector('.input--file2')
const thumbImg = document.querySelector('.thumbImg img')
const delFile2 = document.querySelector('#delFile2');
console.log(delFile2)

function loadFile(e) {
    let file = e.files[0];
    thumbImg.src = URL.createObjectURL(file);
    appendFile.classList.add('add')
}
function removeFile() {
    appendFile.classList.remove('add')
}