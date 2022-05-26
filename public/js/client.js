const newRouteButton =  document.getElementById('newRoute');

newRouteButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const responce = await fetch('/route', {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });
    const htmlForm = await responce.text();
    document.querySelector('.formNewRoute').innerHTML = htmlForm;

    const createRoute = document.querySelector('.newRouteForm');
    createRoute.addEventListener('submit', (event) => {
        // event.preventDefault();
        const {title, location, length } = event.target;
    })
})
