window.onload = init;

function init(){
    const mymap = L.map('mapid', {
        center: [20, 78],
        zoom: 5,
        layers: [
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            })
        ]
    })

}