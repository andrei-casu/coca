
//trebuie scrise niste functii de selectare, getClass, getId, setClass, set...etc

var prefDiv = document.getElementsByClassName('preferences')[0];
var exportDiv = document.getElementsByClassName('export')[0];
var importDiv = document.getElementsByClassName('import')[0];
var aboutDateDiv = document.getElementsByClassName('about-date')[0];

function handleHeaderLeftClick(event) {
    var buttonId = event.target.id


    prefDiv.classList.remove('d-block');
    prefDiv.classList.add('d-none');

    exportDiv.classList.remove('d-block');
    exportDiv.classList.add('d-none');

    importDiv.classList.remove('d-block');
    importDiv.classList.add('d-none');

    aboutDateDiv.classList.remove('d-block');
    aboutDateDiv.classList.add('d-none');


    switch (buttonId) {
        case 'preferences': {
            prefDiv.classList.remove('d-none');
            prefDiv.classList.add('d-block');
            break;
        }
        case 'export': {
            exportDiv.classList.remove('d-none');
            exportDiv.classList.add('d-block');

            break;
        }
        case 'import': {
            importDiv.classList.remove('d-none');
            importDiv.classList.add('d-block');
            break;
        }
        default: {
            aboutDateDiv.classList.remove('d-none');
            aboutDateDiv.classList.add('d-block');
            break;
        }
    }
}


function closeSection(){
    prefDiv.classList.remove('d-block');
    prefDiv.classList.add('d-none');

    exportDiv.classList.remove('d-block');
    exportDiv.classList.add('d-none');

    importDiv.classList.remove('d-block');
    importDiv.classList.add('d-none');

    aboutDateDiv.classList.remove('d-none');
    aboutDateDiv.classList.add('d-block');
}
