const newRouteButton =  document.getElementById('newRoute');

newRouteButton.addEventListener('click', async (event) => {
    event.preventDefault();
console.log('poimal')
    if(document.querySelector('.formNewRoute').style.visibility == 'hidden') {
        document.querySelector('.formNewRoute').style.visibility = 'visible'
        document.querySelector('.formNewRoute').style.position = 'static'
    }
    const responce = await fetch('/route', {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });
    const htmlForm = await responce.text();
    document.querySelector('.formNewRoute').innerHTML = htmlForm;

    const createRoute = document.querySelector('.newRouteForm');
    createRoute.addEventListener('submit', async (event) => {
        event.preventDefault();
        const {title, location, length_km, pointA, pointB } = event.target;
        const body = JSON.stringify({
            title: title.value,
            location: location.value,
            length_km: length_km.value,
            pointA: pointA.value,
            pointB: pointB.value,
        })
        const response = await fetch('/route', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body,
        })
        let html = await response.text();

        //const sda = document.createElement('div');
        // const liList = document.querySelector('#routeList').innerHTML
        // const liListAdd = html + liList;
        // document.querySelector('#routeList').innerHTML = liListAdd; 
        // sda.innerHTML = html
        // document.querySelector('.entries-list').prepend(sda);
        document.querySelector('#routeList').innerHTML += html;
        document.querySelector('.formNewRoute').style.visibility = 'hidden';
        document.querySelector('.formNewRoute').style.position = 'absolute';


    })
})


const deleteRouteButton = document.querySelector('#routeList')

deleteRouteButton.addEventListener('click', async (event) => {
  if(event.target.classList.contains('deleteRoute')){
    event.preventDefault();
    // console.log(event.target.id)

    const id = event.target.getAttribute('id');
    // console.log(event.target.getAttribute('id'))
    const response = await fetch(`/route/${id}`, {
        method: 'DELETE',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ id: id })
    })
    const data = await response.json()
    if (data.message === "ok") {
    document.querySelector(`#li${id}`).remove();

    } else if (data.message === "no") alert("???????????? ?????????????? ?????????? ??????????????!")
}})



