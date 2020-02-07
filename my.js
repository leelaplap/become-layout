function showMenu() {

    var x = document.getElementById('menu');
    if (x.classList.contains('hide_menu')) {
        x.classList.add('show_menu');
        x.classList.remove('hide_menu');
    } else {
        x.classList.add('hide_menu');
        x.classList.remove('show_menu');
    }
}