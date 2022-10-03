import React, {useEffect, useState} from 'react';
import {getApiStarWars} from "../../utils/getApiStarWars";
import "./peoplecomponent.style.css";
import {Link} from "react-router-dom";


const PeoplesComponent = () => {
    const [peoples, setPeoples] = useState();
    const [page, setPage] = useState(1);


    function getIdICharacters(url) {
        return url.replace("https://swapi.dev/api/people", "").replace(/[^0-9]/g, "");
    }


    function getNextPage(count) {
        localStorage.setItem('page', count);
        setPage(count += 1);
    }

    function getPrevPage(count) {
        localStorage.setItem('page', count);
        setPage(count -= 1);
    }

    useEffect(() => {
        const getPeoples = async (url) => {
            const res = await getApiStarWars(url);
            const getPeople = res.results.map(({name, url}) => {
                return {
                    name, url
                }
            });
            setPeoples(getPeople);
        }

        getPeoples(`https://swapi.dev/api/people/?page=${localStorage.getItem("page")}`);
    }, [page]);


    let urlImage = "https://starwars-visualguide.com/assets/img/characters/";

    return (<div className="characters">
        <div className="character">
            {peoples && peoples.map(({name, url}) => {
                let idCharacter = getIdICharacters(url);
                return (
                    <Link to={`/person-character/${idCharacter}`}>
                        <ul className="character__lists">
                            <li className="character__lists-list">{name}</li>
                            <li className="character__lists-list"><img className="character__lists-img" src={urlImage + `${idCharacter}` + ".jpg"} alt=""/>
                            </li>
                        </ul>
                    </Link>
                )
            })}
        </div>
        <button onClick={() => getPrevPage(page)}>Prev</button>
        <button onClick={() => getNextPage(page)}>Next</button>
    </div>);
};

export default PeoplesComponent;