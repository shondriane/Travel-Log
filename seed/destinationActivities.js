const db = require('./db')
const ActivityDetail = require('./models/activityDetails')
const Destination = require('./models/destination')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const destination1 = await new Destination({
    country: 'Peru',
    image:
      'https://www.planetware.com/wpimages/2019/12/peru-in-pictures-best-places-to-photograph-machu-picchu-llama.jpg'
  })
  destination1.save()

  const destination2 = await new Destination({
    country: 'USA',
    image:
      'https://img-aws.ehowcdn.com/700x/www.onlyinyourstate.com/wp-content/uploads/2016/04/USA_Antelope-Canyon.jpg'
  })
  destination2.save()
  const destination3 = await new Destination({
    country: 'Portugal',
    image:
      'https://media.istockphoto.com/photos/porto-portugal-skyline-picture-id700954448?k=20&m=700954448&s=612x612&w=0&h=LpK9LeBmjascapuw1b7O24XPMpLcBF737-16_ABHh5E='
  })
  destination3.save()
  const destination4 = await new Destination({
    country: 'Seychelles',
    image:
      'https://www.planetware.com/wpimages/2019/09/seychelles-in-pictures-most-beautiful-places-to-visit-anse-source-dargent-la-digue.jpg'
  })
  destination4.save()

  const activitiesDetails = [
    {
      name: 'Inka Trail Trek to Machu Picchu',
      activity: 'hike',
      description:
        'One of the seven wonders of the modern world. Exprience the famous inca trail',
      image:
        'https://cdn.kimkim.com/files/a/content_articles/featured_photos/fe7918e9abc72ff850344ff33792a51c393ceae4/big-10099011f3f84e7bd08a0148d26b13f9.jpg',
      destination: destination1._id
    },
    {
      name: 'Lima Ultimate Peruvian Food Tour',
      activity: 'food',
      description:
        'Half-day tour of lima into the Barranco District. Local guide to local dishes and drinks ',
      image:
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/fa/66/25.jpg',
      destination: destination1._id
    },
    {
      name: 'Maido',
      activity: 'food',
      description:
        'Peruvian Nikkei Cusine. One of the 50 best Restaurants in the world',
      image:
        'https://traveler.marriott.com/wp-content/uploads/2019/07/Maido_Snacks_header.jpg',
      destination:  destination1._id
    },
    {
      name: 'Point Lobos - Big Sur',
      activity: 'hike',
      description: 'Iconic roadtrip meets hike with breathtaking views',
      image:
        'https://cdn-bmalj.nitrocdn.com/uirOOtSrYrqqUksKHkiSCjZGZlPeXsmk/assets/static/optimized/rev-939cb5a/images/Glamping-Big-Sur-California-13.jpg',
      destination: destination2._id
    },
    {
      name: 'Seven Hanging Valleys Trial',
      activity: 'hike',
      description:
        'Levada trail leads to 25 fountains that form a pool, perfect for cooling down after a nice hike',
      image:
        'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/7e/79/d0.jpg',
      destination: destination3._id
    },
    {
      name: 'Bengali Beach',
      activity: 'beach',
      description:
        'Picturesque beaches. With the option to hike the 12km Seven Hanging Valley Trail to explore additional sea caves',
      image:
        'https://cdn.algarvefun.com/wp-content/uploads/2017/06/10194639/classic-benagil-large-1.jpg',
      destination: destination4._id
    },

    {
      name: 'Chapel Bar/ Fotografiska',
      activity: 'art',
      description: 'excuslive membership bar',
      image:
        'https://www.fotografiska.com/app/uploads/sites/3/2021/08/20210903-Chapel_Bar_0045.jpg ',
      destination:  destination2._id
    },
    {
      name: 'Zion National Park',
      activity: 'hike',
      description: 'heaven on earth',
      image:
        'https://i.natgeofe.com/n/58501719-c60c-46a4-b829-55108239deb7/virgin-river-narrows-zion-national-park_4x3.jpg ',
      destination:  destination2._id
    },
    {
      name: 'National Museum of African American History and Culture',
      activity: 'museum',
      description: "A people's journey,a nation story",
      image:
        ' https://nmaahc.si.edu/sites/default/files/styles/scale_crop_1920_1200/public/by_hero_001.png?h=48212d01&itok=8u1e-TKj',
      destination:  destination2._id
    },
    {
      name: 'Oceanario de Lisboa',
      activity: 'aquarium',
      description: 'Centerpiece of the last world fair',
      image:
        ' https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/45/e0/b7/oceano-global-global.jpg?w=1200&h=-1&s=1',
      destination: destination3._id
    },
    {
      name: 'Mesa de Frades',
      activity: 'music',
      description: 'built in a formal chapel, intimate and great ambience.',
      image:
        'https://media.cntraveler.com/photos/5be0644990e25c2d60bee048/1:1/w_1600%2Cc_limit/PedroGuimaraes_1210740.jpg ',
      destination: destination3._id
    },
    {
      name: 'Pena National Palace',
      activity: 'museum',
      description:
        'Most visited monument and one of the seven wonders of portugal',
      image:
        'https://www.historyhit.com/app/uploads/fly-images/5156928/Pena-National-Palace-788x537.jpg ',
      destination:  destination3._id
    },
    {
      name: 'La Digue Island',
      activity: 'beach',
      description: 'granite boulders along the beautiful beaches',
      image:
        ' https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/Granite-rocks-at-beautiful-beach-on-tropical-island-La-Digue-in-Seychelles.jpg',
      destination: destination4._id
    },
    {
      name: 'Curieuse Island',
      activity: 'beach',
      description: 'See huge tortoises and breathtaking beaches',
      image:
        'https://cdn2.civitatis.com/seychelles/praslin/galeria/tortuga-gigante-isla-curieuse.jpg ',
      destination:  destination4._id
    },
    {
      name: 'Rock Climbing at La Digue Island',
      activity: 'Rock Climbing',
      description: 'Rock Climb and take a swim',
      image:
        'https://27crags.s3.amazonaws.com/photos/000/098/98425/size_xl-39caa084c804.jpg ',
      destination:  destination4._id
    }
  ]

  await ActivityDetail.insertMany(activitiesDetails)
  console.log('Created some activities details!')
}
const run = async () => {
  await main()
  db.close()
}

run()
