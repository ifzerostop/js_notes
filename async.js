//
//
// const btnRef = document.querySelector('#click');
//
// btnRef.addEventListener('click', () => {
//     console.log('click');
// })
// let counter = 0;
// setTimeout(() => {
//     console.log('callback')
//     counter++
//     setTimeout(() => {
//         console.log('callback2')
//         counter++
//     }, 1000)
// }, 1000)
//
// console.log(counter);

// const recipe = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Your kebab maj friend!')
//     }, 1000);
//
//     setTimeout(() => {
//         reject('I do not have jur kebab!')
//     }, 900);                                // jak ma czas krótszy to wywoła się ta funckja ( nie liczy się kolejność)
// });
//
// recipe
//     .then((value) => {console.log(value)})
//     .catch((err) => {console.log(err)});

const url = 'https://api.nbp.pl/api/exchangerates/rates/a/rub/?format=json';

// promised based

// const response = fetch(url);
// console.log(response);
//
// response
//     .then((data) => {console.log(data.json())})
//     .then((data) => {console.log(data)})
//     .catch((err) => console.log(err));

// XMLHttp
//
// const myFetch = (url) => {
//     return new Promise((resolve, reject) => {
//         const req = new XMLHttpRequest();
//         req.open('GET', url, false);
//         req.send(null);      // wysyła request ktory zsetapowaliśmy, jeżeli wysyłamy dane to nie bedzie null tylko
//
//         if(req.status === 200) {
//             resolve(req.responseText);
//         }else{
//             reject('Failed to get data, try again later.');
//         }
//     })
// }
//
// const response = myFetch(url);
// response
//     .then((data) => { console.log(data)})
//     .catch((data) => { console.log(data)})

function getData(url){
    const response = fetch(url);

    response
        .then((data) => data.json())
        .then((data) => console.log(data));
}

getData(url);

// drugi sposób

async function getData2(url){
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);
}
getData2(url);