document.addEventListener("DOMContentLoaded", function() {
    var selectedCountry = localStorage.getItem("selectedCountry")
    if (selectedCountry) {
        alert("Bienvenido de nuevo! Has seleccionado: " + selectedCountry)
    }
})

function selectCountry(country) {
    localStorage.setItem("selectedCountry", country)
    alert("Has seleccionado: " + country)

    switch (country) {
        case 'Bolivia':
            window.location.href = 'https://pency.app/paradizestore'
            break
        case 'Mexico':
            window.location.href = 'https://pency.app/paradizestore'
            break
        case 'Chile':
            window.location.href = 'https://pency.app/paradizestore'
            break
        case 'Argentina':
            window.location.href = 'https://example.com/argentina' // Reemplazar con la URL correcta
            break
        case 'Peru':
            window.location.href = 'https://example.com/peru' // Reemplazar con la URL correcta
            break
        case 'Republica Dominicana':
            window.location.href = 'https://example.com/republica-dominicana' // Reemplazar con la URL correcta
            break
        default:
            alert("País no reconocido")
            break
    }
}
