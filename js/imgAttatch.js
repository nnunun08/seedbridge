function loadFile(e) {
    let appendFile = e.closest('.input--file2');
    let thumbImg = e.parentNode.nextSibling.nextSibling.children[0]
    let file = e.files[0];
    thumbImg.src = URL.createObjectURL(file);
    console.log(e.parentNode.nextSibling.nextSibling.children[0])
    appendFile.classList.add('add')
}
function removeFile(e) {
    e.closest('.input--file2').classList.remove('add')
}