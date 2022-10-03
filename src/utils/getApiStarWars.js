export async function getApiStarWars(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error("Ошибка:" + res.message);
            return false;
        }
        return await res.json();
    } catch (err) {
        console.log("Ошибка:" + err.message);
        return false;
    }
}




