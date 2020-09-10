let menuIcon = document.getElementById('menu-icon'); 
let leftView = document.getElementById('view');

menuIcon.onclick = function () {
    if (leftView.style.display == 'none') {
        leftView.style.display = 'block';
        document.getElementById('black').style.backgroundColor = 'black'
        document.getElementById('black').style.borderRight = '1px solid white';
    }
    else {
        leftView.style.display = 'none';
		document.getElementById('black').style.backgroundColor = 'white'
    }
}