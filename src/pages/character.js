import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
  const id = getHash();
  //alert(id)
  //console.log(id)
  const character = await getData(id)
  
  // https://api.habboapi.net/habbos/it/sore90
  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${character.figure_large}" alt="${character.name}">
        <h2>${character.name}</h2>
      </article>
      <article class="Characters-card">
      <h3>Motto: <span>${character.motto}</span></h3>
      
      <h3>Hotel: <span>${character.hotel}</span></h3>
      <h3>Member since: <span>${character.member_since}</span></h3>
      <h3>Main room <span>${character.rooms[0].name}</span></h3>
      <h3>Main room date creation <span>${character.rooms[0].creation_date}</span></h3>
      <h3>Main room max visitors <span>${character.rooms[0].max_visitors}</span></h3>
      </article>
    </div>
  `;
  return view;
};

export default Character;