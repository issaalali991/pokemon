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
    setMark(mark) {
        this.mark = mark;
    }
    setHPFill(HPFill) {
        this.HP = HPFill;
    }
    triggerMark() {
        const mark = document.getElementById(`Mark${this.id}`);

        if (mark.style.opacity == 0) {
            mark.style.opacity = 1;
        } else {
            mark.style.opacity = 0;
        }
    }
    takeDamage(attack) {

        const defense = Math.floor(Math.random() * (this.defense - (this.defense / 10)) + (this.defense / 10));
        attack = Math.floor(Math.random() * (attack- (attack/ 10)) + (attack/ 10));
        const damage = attack - defense;

        const HPFill = document.getElementById(`HPFill${this.id}`);
        const HPText = document.getElementById(`HPText${this.id}`);
        // console.log("id", this.id, "takes Damage:");
        // console.log("hpBase", this.hpBase);
        // console.log("hp", this.hp);
        // console.log("attack", attack);
        // console.log("defense", defense);
        // console.log("damage", damage);
        this.hp = this.hp - (damage);
        // console.log("hp", this.hp);
        // console.log("hp %", this.hp / (this.hpBase / 100));

        if (this.hp < 0) {
            this.hp = 0;
            HPFill.style.width = `${this.hp / (this.hpBase / 100)}%`;
            HPText.textContent = "HP: " + this.hp;
        } else {
            HPFill.style.width = `${this.hp / (this.hpBase / 100)}%`;
            HPText.textContent = "HP: " + this.hp;
        }

        // console.log(HPFill.style.width);
    }
    attack(target) {

    }
}
