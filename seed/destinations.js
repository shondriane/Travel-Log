const db = require('../db')
const Destination = require('../models/destination')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const destinations = [
        { country: 'Peru',  image: 'https://www.planetware.com/wpimages/2019/12/peru-in-pictures-best-places-to-photograph-machu-picchu-llama.jpg' },
        {country: 'Seychelles', image: 'https://www.planetware.com/wpimages/2019/09/seychelles-in-pictures-most-beautiful-places-to-visit-anse-source-dargent-la-digue.jpg'},
        {country: 'USA', image: 'https://img-aws.ehowcdn.com/700x/www.onlyinyourstate.com/wp-content/uploads/2016/04/USA_Antelope-Canyon.jpg'},
        {country: 'Portugal', image: 'https://media.istockphoto.com/photos/porto-portugal-skyline-picture-id700954448?k=20&m=700954448&s=612x612&w=0&h=LpK9LeBmjascapuw1b7O24XPMpLcBF737-16_ABHh5E='}
    ]

    await Destination.insertMany(destinations)
    console.log("Created some destinations!")
}
const run = async () => {
    await main()
    db.close()
}

run()