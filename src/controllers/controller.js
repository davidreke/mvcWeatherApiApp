const axios = require('axios')
const API_KEY= "8d130a4fe5369b01d1fe629bccbe0926";

const Weather = require("../model/Weather")

exports.renderHomePAge = (req, res) => {
    res.render("index")
}

exports.getWeather = (req, res, ) => {
    const city = req.body.city

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`

    const weather = new Weather(city)

    weather.validateUserInput()
    console.log(weather.errors)
    if(weather.errors.length){
        res.render("index", {error: weather.errors.toString()})
    } else {
        axios.get(url)
        .then((response)=>{
            console.log(response.data)
            const temp = response.data.main.temp
            const city = response.data.name
            console.log(temp, city)
            res.render("index", {
                weather: `It is currently ${temp} °F in ${city}.`
            })
        })
        .catch((err) =>{
            console.log(err)
             res.render("index", {
                weather: `That city is not avaible`
            })
        })
    }

    
} 

exports.renderAboutPAge = (req, res) => {
    res.render("About")
}