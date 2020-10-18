import Header from '../templates/header'
import Home from '../pages/home'
import Character from '../pages/character'
import error404 from '../pages/error'

//Utils
import getHash from '../utils/getHash'
import resolveRoute from '../utils/resolveRoutes'

let nombre = getHash()
const routes = {
    '/': Home,
    '/:id': Character,
    'Naomi1' : Character,
}

const router = async () =>{
    const header = null || document.getElementById('Header')
    const content = null || document.getElementById('content')

    header.innerHTML = await Header();

    let hash = getHash();
    // alert(hash)
    let route = await resolveRoute(hash)
    // route = route.replace('/','')
    //alert(route)
    //alert(hash)
    //alert(routes[route])
    let render = routes[route] ? routes[route] : error404

    content.innerHTML = await render()
}

export default router