const resolveRoutes = (route) =>{
    if(route){
        let validRoute = route === '/' ? route : '/:id'
        return validRoute
    }
    return `/${route}`
}
export default resolveRoutes