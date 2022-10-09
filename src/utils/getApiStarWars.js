import axios from "axios";

export async function getApiStarWars(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error('Ошибка:' + res.message);
            return false;
        }
        return res.json();
    } catch (err) {
        console.log('Ошибка:' + err.message);
        return false;
    }
}

// export async function getApiStarWars(url) {
//     const result = await axios.get(url).then((resp) => {
//         const allPersons = resp.data;
//         return allPersons;
//     });
//     return result;
// }