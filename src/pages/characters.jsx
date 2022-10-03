import React from 'react';
import Starships from "./starships";
import PeoplesComponent from "../components/PeoplesComponent";
// import {useMediaQuery} from "usehooks-ts";

const Characters = () => {
    // const matches = useMediaQuery('(min-width: 768px)');
    return (
        <>
            <PeoplesComponent/>
            {/*{matches ? (<div>Characters</div>) : (<div>Characters 2</div>)}*/}
        </>
    );
};

export default Characters;