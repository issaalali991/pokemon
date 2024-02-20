const getTypeIcon = (type) => {
    const typeIcons = {
        normal: "👊",
        fire: "🔥",
        water: "💧",
        electric: "⚡",
        grass: "🌱",
        ice: "❄️",
        fighting: "🥊",
        poison: "☠️",
        ground: "🏜️",
        flying: "🕊️",
        psychic: "🔮",
        bug: "🐞",
        rock: "🪨",
        ghost: "👻",
        dragon: "🐉",
        dark: "🌑",
        steel: "🛡️",
        fairy: "🧚",
    };

    return typeIcons[type] || "❓";
};

function wait(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}
export { getTypeIcon, wait, reloadPage };


function reloadPage(){
 window.location.assign('/');
}