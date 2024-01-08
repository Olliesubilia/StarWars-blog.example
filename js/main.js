//STUFF I DIDN'T USE
// document.addEventListener('scroll', ()=>{
//     let bg = document.querySelector('.header')

//     bg.style.backgroundSize = `${45% - window.pageYOffset / 2.3}%`
// })


// laser audio
document.querySelectorAll('.btn-accent').forEach(el=> {
    el.addEventListener('click', ()=> {
        document.querySelector('#laser').play()
    })
})
// slide audio
document.querySelectorAll('.btn-slide').forEach(el=> {
    el.addEventListener('click', ()=> {
        document.querySelector('#slide').play()
    })
})
// charge menu audio
document.querySelectorAll('#wrapper').forEach(el=> {
    el.addEventListener('click', ()=> {
        document.querySelector('#charge').play()
    })
})

//OLD MENU
// document.querySelector('.wrapperMenu').addEventListener('click', ()=>{
//     document.querySelector('.leftSide').classList.toggle('activeLeft')
//     document.querySelector('.rightSide').classList.toggle('activeRight')
// })


//NEW MENU
document.querySelector('#wrapper').addEventListener('click', ()=>{
    
    let user = document.querySelector('#user')
    let list = document.querySelector('#list')
    let settings = document.querySelector('#settings')
    let envelope = document.querySelector('#envelope')
    let geo = document.querySelector('#geo')
    let overlay = document.querySelector('.overlay')
    
    user.classList.toggle('active')
    list.classList.toggle('active')
    settings.classList.toggle('active')
    envelope.classList.toggle('active')
    geo.classList.toggle('active')
    overlay.classList.toggle('active')
})








//ALL ARTICLES WITH SWAPI
const articlesWrapper = document.getElementById('articlesWrapper');
const div = document.getElementById('div');

let request = "https://swapi.dev/api/people/1/"

fetch(request).then((response) => {
    return response.json();
}).then((data) => {
    let h1 = document.getElementById("h1");
    console.log(data);
    h1.innerHTML = JSON.stringify(data.name);

    let p = document.getElementById("p");
    console.log(data);
    p.innerHTML = JSON.stringify(data.height);

    articlesWrapper.appendChild(div);
})