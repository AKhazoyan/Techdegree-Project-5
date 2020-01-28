var typedInput = document.getElementById('mySearch');

typedInput.addEventListener('keyup', myFunction);

function myFunction(){
    var endInput = typedInput.value.toLowerCase();
    var links = document.getElementsByClassName('gallery')[0].getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute('data-title').toLowerCase().includes(endInput)) {
            links[i].style.display = 'block';
        } else {
            links[i].style.display = 'none';
        }
    }
}