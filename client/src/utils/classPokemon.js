export default class Pokemon {
    constructor(pokeList, indexPok, id) {
        this.name = pokeList[indexPok].name.english,
            this.hpBase = parseInt(pokeList[indexPok].base.HP),
            this.hp = parseInt(pokeList[indexPok].base.HP),
            this.speed = parseInt(pokeList[indexPok].base.Speed) / 100,
            this.attack = parseInt(pokeList[indexPok].base.Attack),
            this.defense = parseInt(pokeList[indexPok].base.Defense),
            this.aTime = 0,
            this.id = id;

    }
    triggerMark() {
        const mark = document.getElementById(`Mark${this.id}`);

        if (mark.style.opacity == 0) {
            mark.style.opacity = 1;
        } else {
            mark.style.opacity = 0;
        }
    }
    takeDamageFromm(AttkrPkmn) {
        const HPFill = document.getElementById(`HPFill${this.id}`);
        const HPText = document.getElementById(`HPText${this.id}`);

        const defense = Math.floor(Math.random() * (this.defense - (this.defense / 10)) + (this.defense / 10));
        const attack = Math.floor(Math.random() * (AttkrPkmn.attack - (AttkrPkmn.attack / 10)) + (AttkrPkmn.attack / 10));

        let damage = attack - defense;
        if (damage < 0) {
            damage = 0;
        }
        this.hp = this.hp - (damage);

        if (this.hp < 0) {
            this.hp = 0;
        }

        HPFill.style.width = `${this.hp / (this.hpBase / 100)}%`;
        HPText.textContent = `${this.hp} / ${this.hpBase}`;

        const stats = document.getElementById(`stats${this.id}`);
        const time = Date.now() + 2000;
        document.getElementById(`ATT${this.id}`).textContent = `ATT: ${attack}`
        document.getElementById(`DEF${this.id}`).textContent = `DEF: ${defense}`
        document.getElementById(`DMG${this.id}`).textContent = `DMG: ${damage}`

        stats.style.visibility = "visible";
        stats.style.opacity = 0;

        const itvl = setInterval(() => {
            let time2 = Date.now();
            if (time <= time2) {
                clearInterval(itvl)
                stats.style.visibility = "hidden";
                stats.style.opacity = 1;
            }
        }, 1);

        // console.log(HPFill.style.width);
    }
}
