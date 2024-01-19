export async function addDetails(idGame = '452') {
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '47dc09eaefmshb765af13b9c155cp18502fjsnc91afab93891',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }      
        $('.bg').addClass('d-flex')
    let urlDetails = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`, options)
    let response = await urlDetails.json()
    console.log(response)
    $('.bg').removeClass('d-flex')
    showDetailes(response)

}
export function showDetailes(element) {
    let   temp = `<div class="col-md-4">
                       <img src="${element.thumbnail}" class="w-100" alt="gameImage" id=${element.id}>
                       </div>
                       <div class="col-md-8">
                       <h3 class="text-white">Title: ${element.title}</h3>
                       <p class="text-white">Category: <span class="badge text-bg-info">${element.genre} </span> </p>
                       <p class="text-white">PlatForm: <span class="badge text-bg-info">${element.platform}</span> </p>
                       <p class="text-white">Status: <span class="badge text-bg-info"> ${element.status}</span> </p>
                       <p class="pDetails text-white">${element.description} </p>
                       <a class="btn btn-outline-warning" target="_blank" href="${element.game_url}">Show Game</a>
               </div>`
       document.querySelector('#detailes').innerHTML = temp
}
