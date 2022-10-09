import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getApiStarWars } from '../utils/getApiStarWars';
import PeopleComponent from '../components/PeopleComponent';

const PersonCharacter = () => {
  const [people, setPeople] = useState([]);
  const idCharacter = useParams();
  const urlCharacter = `https://swapi.dev/api/people/${idCharacter.id}/`;
  const urlImage =
    `https://starwars-visualguide.com/assets/img/characters/${idCharacter.id}` +
    '.jpg';

  useEffect(() => {
    const getPeople = async (url) => {
      const res = await getApiStarWars(urlCharacter);
      setPeople(res);
    };
    getPeople(urlCharacter);
  }, []);

  return (
    <>
      <PeopleComponent people={people} img={urlImage} urlPeople={people.url} />
    </>
  );
};

export default PersonCharacter;
