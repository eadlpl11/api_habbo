const API = 'https://api.habboapi.net/habbos'
// condicion ? resultado true : resultado false
const getData = async(id) =>{
    //alert("Esta wea esta rara"+id)
    const apiURL = id ? `https://api.habboapi.net/habbos/it/${id}` : API;
    try{
        //alert(apiURL)
        const response = await fetch(apiURL);
        const data = await response.json();

       

        //alert(data.hotel)
        //alert(data.name)
        return data;
    }catch (error){


        console.log('fetch error', error)
    }
}

export default getData