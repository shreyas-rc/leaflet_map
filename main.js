window.onload = init;

function init(){
    
    const mymap = L.map('mapid', {
        center: [20, 78],
        zoom: 5,
        layers: [
            L.tileLayer('http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}',{
                attribution: '<a href="https://www.google.com/maps">Google Maps Hybrid</a>'
            })
        ]
    })

}