    //находим коробку под карточки
let content = document.getElementById('content');

//получаем текст шаблона каталога
let templateCatalog = document.getElementById('tmpl-catalog').innerHTML;

//получаем текст шаблона карточки
let templateCard = document.getElementById('tmpl-card').innerHTML;

//получаем текст шаблона aboutme
let templateAboutMe = document.getElementById('aboutus').innerHTML;

//получаем текст шаблона contacts
let templateContacts = document.getElementById('contacts').innerHTML;


/* ------------------------------------------------------------ */


//вызываем функцию при загрузке страницы
renderCatalog();

//функция отрисовки каталога
function renderCatalog() {

    //очищаем страницу
    clearPage();

    //получаем данные каталога
    let json = sendRequestGet("https://kitsu.io/api/edge/anime" );

    //раскодируем данные
    let data = JSON.parse(json);

    //рисуем данные на экран
    for (let i = 0; i < data['data'].length; i++ ) {

        //заполняем шаблон и выводим на экран
        content.innerHTML += templateCatalog.replace('${title}',data['data'][i]['attributes']['titles']['en_jp'])
                                            .replace('${id}',data['data'][i]['id'])
                                            .replace('${photo}',data['data'][i]['attributes']['posterImage']['large'])
                                            .replace('${rating}',data['data'][i]['attributes']['averageRating'])
                                            .replace('${count}', data['data'][i]['attributes']['episodeCount']) ;
    }
}

//Функция отрисовки карточки
function renderCard(id) {

    //Очищаем страницу
    clearPage();

    //Получаем данные каталога
    let json = sendRequestGet('https://kitsu.io/api/edge/anime/' + id);

    //Раскодируем данные
    let data = JSON.parse(json);

    content.innerHTML += templateCard.replace('${title}', data['data']['attributes']['titles']['en_jp'])
                            .replace('${photo}', data['data']['attributes']['posterImage']['large'])
                            .replace('${rating}', data['data']['attributes']['averageRating'])
                            .replace('${count}', data['data']['attributes']['episodeCount'])
                            .replace('${year}', data['data']['attributes']['startDate'])
                            .replace('${end}', data['data']['attributes']['endDate'])
                            .replace('${ratingRank}', data['data']['attributes']['ratingRank'])
                            .replace('${views}', data['data']['attributes']['userCount'])
                            .replace('${description}', data['data']['attributes']['description'])
                            ;
}


/* ------------------------------------------------------------ */


//функция для отображения категории About me
function renderAboutMe() {
    //очищаем страницу
    clearPage();
    //находим коробку для отправки данных
    content.innerHTML += templateAboutMe;
}

//функция для отображения категории contacts
function renderContacts() {
    //очищаем страницу
    clearPage();
    //находим коробку и отправляем данные
    content.innerHTML += templateContacts;
}

//функция очистки страницы
function clearPage(){
    document.getElementById('content').innerHTML = '';
}

/* ------------------------------------------------------------ */


//функция для отправки запросов
function sendRequestGet(url) {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send()

    return xhr.responseText;
}