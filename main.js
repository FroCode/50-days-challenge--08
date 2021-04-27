document.body.classList.add(localStorage.getItem('pageColor'))
var el = document.querySelectorAll('.color-switcher li');
var classList = [];
for(var i = 0; i < el.length; i++) {
    //Get classes List
    classList.push(el[i].getAttribute('data-color'))
    el[i].addEventListener('click', function(){
        // Remove all old classes
        document.body.classList.remove(...classList)
        // Add current Class from Li data attribute
        document.body.classList.add(this.getAttribute('data-color'))
        // add  data  to local storage
        localStorage.setItem('pageColor', this.getAttribute('data-color'));
        
    }, false);
}