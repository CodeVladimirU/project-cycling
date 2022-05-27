const { Route, User, Location, Rating, sequelize } = require('./db/models');

async function getRoutes() {
  const routes = await Route.findAll({  
    include: [User, Location], raw:true})
    return routes}

async function getRatings() {
  const ratings = await Rating.findAll({raw: true})
  return ratings}
 
 //routesFixed.sort(function (b,a) {if (a['Rating']>b['Rating']) { return 1}  return -1}) 

//  console.table(ratings);
//  console.table(routes);



  
 
//routesFixed

function getAverage(route, ratings) {
let avRating = 0 
const routRatings = ratings.filter(a=> a.route_id === route.id)
if (routRatings.length === 0) {return avRating} else {
const ratingsSum  = routRatings.reduce((sum,el) => sum + el.value, 0)
avRating = (ratingsSum/routRatings.length).toFixed(1) }
return avRating
}
async function countAv() {
const ratings = await getRatings()
//console.log(ratings)
const routes = await  getRoutes()
//console.log(routes)

//for (let i=0; i<=routes.length-1; i++) {
//console.log(
  routes.forEach(el => el['AvRating'] = getAverage(el, ratings))
  //)

console.log(routes)
//}
}

countAv()
