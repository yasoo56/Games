import { addDetails } from "./details.module.js"
$(document).ready(function () {
    $('.bg').fadeOut(2000, function () {
        $('.bg').removeClass('d-flex')
    })
})
export async function getGames(category = 'mmorpg') {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '47dc09eaefmshb765af13b9c155cp18502fjsnc91afab93891',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    let url = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
    let data = await url.json()
    console.log(data);
    showData(data)

}
export function showData(element) {
    let temp = ''
    for (let i = 0; i < element.length; i++) {
        temp += ` 
        <div class="col" >
                    <div id="${element[i].id}" class="card h-100 bg-transparent">
                            <img src="${element[i].thumbnail}" class="card-img-top p-2 rounded-top-4" alt="images/thumbnail.jpg">
                            <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h6 class="text-white">${element[i].title}</h6>
                                <span class="text-white rounded-2 free">Free</span>
                            </div>
                            <p class="card-text text-white-50">${element[i].short_description}</p>
                            </div>
                            <footer class="card-footer d-flex justify-content-between">

                                <span class="spanFooter rounded-3">${element[i].genre}</span>
                                <span class="spanFooter rounded-3">${element[i].platform}</span>

                            </footer>
                    </div>
        </div>
        
       `
    }
    document.querySelector('#data').innerHTML = temp
    startShow()

}
let details = document.querySelector('.details')
let home = document.querySelector('.home')
export function startShow() {
    document.querySelectorAll('.card').forEach((element) => {
        element.addEventListener('click', function () {
            home.classList.add('d-none')
            details.classList.remove('d-none')
            addDetails(element.id)
        })
    })
}
let navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach((element) => {
    element.addEventListener('click', function (event) {
        let type = event.target.getAttribute('data-type')
        getGames(type)
    })
})
$('.nav-link').on('click', function (event) {
    $(event.target).addClass('active').parent().siblings().children().removeClass('active')
})
let close = document.querySelector('#btnClose')
close.addEventListener('click', function () {
    home.classList.remove('d-none')
    details.classList.add('d-none')
})

