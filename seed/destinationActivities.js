const db = require('../db')
const ActivityDetail= require ('../models/activityDetails')
const Destination = require('../models/destination')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const destination1 = await new Destination({
        country: 'Peru',
        image: 'https://www.planetware.com/wpimages/2019/12/peru-in-pictures-best-places-to-photograph-machu-picchu-llama.jpg'
      })
      destination1.save()
    
      const destination2 = await new Destination({
        country: 'USA',
        image: 'https://img-aws.ehowcdn.com/700x/www.onlyinyourstate.com/wp-content/uploads/2016/04/USA_Antelope-Canyon.jpg'
      })
      destination2.save()
      const destination3 = await new Destination({
        country: 'Portugal',
        image: 'https://media.istockphoto.com/photos/porto-portugal-skyline-picture-id700954448?k=20&m=700954448&s=612x612&w=0&h=LpK9LeBmjascapuw1b7O24XPMpLcBF737-16_ABHh5E='
      })
      destination3.save()
      const destination4 = await new Destination({
        country: 'Seychelles',
        image: 'https://www.planetware.com/wpimages/2019/09/seychelles-in-pictures-most-beautiful-places-to-visit-anse-source-dargent-la-digue.jpg'
      })
      destination4.save()

    const activitiesDetails = [
        { name: 'Inka Trail Trek to Machu Picchu', activity: 'hike', description: 'One of the seven wonders of the modern world. Exprience the famous inca trail', image:'https://cdn.kimkim.com/files/a/content_articles/featured_photos/fe7918e9abc72ff850344ff33792a51c393ceae4/big-10099011f3f84e7bd08a0148d26b13f9.jpg', destination:destination1._id},
        { name: 'Lima Ultimate Peruvian Food Tour', activity: 'food', description: 'Half-day tour of lima into the Barranco District. Local guide to local dishes and drinks ', image:'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/fa/66/25.jpg', destination:destination1._id},
        {name: 'Maido', activity: 'food', description: 'Peruvian Nikkei Cusine. One of the 50 best Restaurants in the world', image:'https://traveler.marriott.com/wp-content/uploads/2019/07/Maido_Snacks_header.jpg', destination:destination1._id},
        { name: 'Point Lobos - Big Sur', activity: 'hike', description: 'Iconic roadtrip meets hike with breathtaking views', image: 'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/Glamping-Big-Sur-California-13.jpg',destination:destination2._id},
        { name: 'Seven Hanging Valleys Trial', activity: 'hike', description: 'Levada trail leads to 25 fountains that form a pool, perfect for cooling down after a nice hike', image:'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/7e/79/d0.jpg', destination:destination3._id},
        {name: 'Bengali Beach', activity: 'beach', description: 'Picturesque beaches. With the option to hike the 12km Seven Hanging Valley Trail to explore additional sea caves', image: 'https://cdn.algarvefun.com/wp-content/uploads/2017/06/10194639/classic-benagil-large-1.jpg',destination: destination3.id},
        {name: 'Tasco', activity: 'food', description: '#1 Restaurant in Porto, it\'s not just food, it\'s an experience', image: 'https://www.instagram.com/p/Cj0ug6Ms547/', destination: destination3.id}, 
    ]

    await ActivityDetail.insertMany(activitiesDetails)
    console.log("Created some activities details!")
}
const run = async () => {
    await main()
    db.close()
}

run()