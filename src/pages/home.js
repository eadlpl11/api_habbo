//template base del home

import getData from '../utils/getData'

const Home = async () =>{
    const characters = await getData()
    const view = `
    <div class = "Characters">
        ${characters.data.map(character =>`

            <article class="Character-item">
                <a href="#/${character.name}">
                    <img src="${character.figure_medium}" alt="${character.name}">
                    <h3>${character.name}</h3>
                </a>
            </article>
            `
        ).join('')}
    </div>
    `;

    return view;

};


export default Home;