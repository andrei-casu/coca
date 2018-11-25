
//trebuie scrise niste functii de selectare, getClass, getId, setClass, set...etc

const getByClass = (className) => {
    return [...document.getElementsByClassName(className)];
}

const getById = (id) => {
    return document.getElementById(id);
}

const isCurrentDay = (day, month, year) => {
    if (new Date(year, month - 1, day).toDateString() === new Date().toDateString()) {
        return true;
    }
    return false;
}

const renderCalendarDays = (days, dateInfo) => { //array de obiecte de tipul {numberOfDay: 31, numberOfAlerts: 4, }
    const calendarElement = getByClass('calendar-days')[0];
    const numberOfDays = new Date(dateInfo.year, dateInfo.month, 0).getDate();
    let toAppend = '';

    days.map((dayItem, key) => {
        const { day, month, year, numberOfAlerts } = dayItem;
        const currentDay = isCurrentDay(day, month, year);

        toAppend =
            `<div 
                id="calendar-item-${key + 1}" 
                class="calendar-item text-center ${currentDay && "selected-day"}" //${'another-month'}
            >
                ${day}
                ${numberOfAlerts > 0 ?
                `<span class="p-absolute"> ${numberOfAlerts} </span>`
                : ''
            }   
                ${currentDay ?
                '<i class="far fa-calendar-alt"></i>'
                :
                ''
            }
            </div>`;
        calendarElement.innerHTML += toAppend;
    });
}

const mainSettings = {
    maxWidthMobile: 800,
    currentLayout: 'desktop'
};


const fillWithDummyData = (month, year) => {
    let days = [];
    days.push({
        day: 30,
        month: 10,
        year: 2018,
        numberOfAlerts: 5
    }, {
            day: 31,
            month: 10,
            year: 2018,
            numberOfAlerts: 6
    });
    for (let i = 1; i <= 30; i++) {
        days.push({
            day: i % 31,
            month: 11,
            year: 2018,
            numberOfAlerts: 0
        });
    }
    days.push({
        day: 1,
        month: 12,
        year: 2018,
        numberOfAlerts: 1
    }, {
            day: 2,
            month: 12,
            year: 2018,
            numberOfAlerts: 3
        }, {
            day: 3,
            month: 12,
            year: 2018,
            numberOfAlerts: 5
    });
    const dateInfo = {
        month,
        year
    };
    renderCalendarDays(days, dateInfo); //zilele de randat si date despre luna de randat
}

const initApp = () => {
    var prefDiv = document.getElementsByClassName('preferences')[0];
    var exportDiv = document.getElementsByClassName('export')[0];
    var importDiv = document.getElementsByClassName('import')[0];
    var aboutDateDiv = document.getElementsByClassName('about-date')[0];

    fillWithDummyData(11, 2018);

    const isMobile = () => window.innerWidth <= mainSettings.maxWidthMobile;

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

        if (isMobile()) {
            getByClass('calendar')[0].classList.add('d-none');
        }


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



    function closeSection() {
        prefDiv.classList.remove('d-block');
        prefDiv.classList.add('d-none');

        exportDiv.classList.remove('d-block');
        exportDiv.classList.add('d-none');

        importDiv.classList.remove('d-block');
        importDiv.classList.add('d-none');

        if (!isMobile()) {
            aboutDateDiv.classList.remove('d-none');
            aboutDateDiv.classList.add('d-block');
        }

        if (isMobile()) {
            getByClass('calendar')[0].classList.remove('d-none');
        }
    }

    function openAboutDate() {
        if (isMobile()) {
            getByClass('about-date')[0].classList.remove('d-none');
            getByClass('calendar')[0].classList.add('d-none');
        }
    }

    function closeAboutDate() {
        if (isMobile()) {
            getByClass('about-date')[0].classList.add('d-none');
            getByClass('calendar')[0].classList.remove('d-none');
        }
    }

    getByClass('header-left')[0].addEventListener('click', handleHeaderLeftClick);
    getByClass('close-popup').map((element) => {
        element.addEventListener('click', closeSection);
    });

    getByClass('close-about-date').map((element) => {
        element.addEventListener('click', closeAboutDate);
    })


    getByClass('calendar-item').map((element) => {
        element.addEventListener('click', openAboutDate);
    })

    window.onresize = function (event) {
        if (isMobile() && mainSettings.currentLayout === 'desktop') {
            mainSettings.currentLayout = 'mobile';
            getByClass('about-date')[0].classList.add('d-none');
        }
        else if (!isMobile() && mainSettings.currentLayout === 'mobile') {
            mainSettings.currentLayout = 'desktop';
            getByClass('about-date')[0].classList.remove('d-none');
            getByClass('calendar')[0].classList.remove('d-none');
            getByClass('export')[0].classList.add('d-none');
            getByClass('preferences')[0].classList.add('d-none');
            getByClass('import')[0].classList.add('d-none');
        }
    }
}

window.onload = initApp;