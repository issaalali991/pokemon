const pokemon = [
    {
        "id": 1,
        "name": {
            "english": "Bulbasaur"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 45,
            "Attack": 49,
            "Defense": 49,
            "Sp. Attack": 65,
            "Sp. Defense": 65,
            "Speed": 45
        }
    },
    {
        "id": 2,
        "name": {
            "english": "Ivysaur"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 60,
            "Attack": 62,
            "Defense": 63,
            "Sp. Attack": 80,
            "Sp. Defense": 80,
            "Speed": 60
        }
    },
    {
        "id": 3,
        "name": {
            "english": "Venusaur"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 80,
            "Attack": 82,
            "Defense": 83,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            "Speed": 80
        }
    },
    {
        "id": 4,
        "name": {
            "english": "Charmander"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 39,
            "Attack": 52,
            "Defense": 43,
            "Sp. Attack": 60,
            "Sp. Defense": 50,
            "Speed": 65
        }
    },
    {
        "id": 5,
        "name": {
            "english": "Charmeleon"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 58,
            "Attack": 64,
            "Defense": 58,
            "Sp. Attack": 80,
            "Sp. Defense": 65,
            "Speed": 80
        }
    },
    {
        "id": 6,
        "name": {
            "english": "Charizard"
        },
        "type": [
            "Fire",
            "Flying"
        ],
        "base": {
            "HP": 78,
            "Attack": 84,
            "Defense": 78,
            "Sp. Attack": 109,
            "Sp. Defense": 85,
            "Speed": 100
        }
    },
    {
        "id": 7,
        "name": {
            "english": "Squirtle"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 44,
            "Attack": 48,
            "Defense": 65,
            "Sp. Attack": 50,
            "Sp. Defense": 64,
            "Speed": 43
        }
    },
    {
        "id": 8,
        "name": {
            "english": "Wartortle"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 59,
            "Attack": 63,
            "Defense": 80,
            "Sp. Attack": 65,
            "Sp. Defense": 80,
            "Speed": 58
        }
    },
    {
        "id": 9,
        "name": {
            "english": "Blastoise"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 79,
            "Attack": 83,
            "Defense": 100,
            "Sp. Attack": 85,
            "Sp. Defense": 105,
            "Speed": 78
        }
    },
    {
        "id": 10,
        "name": {
            "english": "Caterpie"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 45,
            "Attack": 30,
            "Defense": 35,
            "Sp. Attack": 20,
            "Sp. Defense": 20,
            "Speed": 45
        }
    },
    {
        "id": 11,
        "name": {
            "english": "Metapod"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 50,
            "Attack": 20,
            "Defense": 55,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            "Speed": 30
        }
    },
    {
        "id": 12,
        "name": {
            "english": "Butterfree"
        },
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 60,
            "Attack": 45,
            "Defense": 50,
            "Sp. Attack": 90,
            "Sp. Defense": 80,
            "Speed": 70
        }
    },
    {
        "id": 13,
        "name": {
            "english": "Weedle"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 40,
            "Attack": 35,
            "Defense": 30,
            "Sp. Attack": 20,
            "Sp. Defense": 20,
            "Speed": 50
        }
    },
    {
        "id": 14,
        "name": {
            "english": "Kakuna"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 45,
            "Attack": 25,
            "Defense": 50,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            "Speed": 35
        }
    },
    {
        "id": 15,
        "name": {
            "english": "Beedrill"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 65,
            "Attack": 90,
            "Defense": 40,
            "Sp. Attack": 45,
            "Sp. Defense": 80,
            "Speed": 75
        }
    },
    {
        "id": 16,
        "name": {
            "english": "Pidgey"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 40,
            "Attack": 45,
            "Defense": 40,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            "Speed": 56
        }
    },
    {
        "id": 17,
        "name": {
            "english": "Pidgeotto"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 63,
            "Attack": 60,
            "Defense": 55,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 71
        }
    },
    {
        "id": 18,
        "name": {
            "english": "Pidgeot"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 83,
            "Attack": 80,
            "Defense": 75,
            "Sp. Attack": 70,
            "Sp. Defense": 70,
            "Speed": 101
        }
    },
    {
        "id": 19,
        "name": {
            "english": "Rattata"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 30,
            "Attack": 56,
            "Defense": 35,
            "Sp. Attack": 25,
            "Sp. Defense": 35,
            "Speed": 72
        }
    },
    {
        "id": 20,
        "name": {
            "english": "Raticate"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 55,
            "Attack": 81,
            "Defense": 60,
            "Sp. Attack": 50,
            "Sp. Defense": 70,
            "Speed": 97
        }
    },
    {
        "id": 21,
        "name": {
            "english": "Spearow"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 40,
            "Attack": 60,
            "Defense": 30,
            "Sp. Attack": 31,
            "Sp. Defense": 31,
            "Speed": 70
        }
    },
    {
        "id": 22,
        "name": {
            "english": "Fearow"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 65,
            "Attack": 90,
            "Defense": 65,
            "Sp. Attack": 61,
            "Sp. Defense": 61,
            "Speed": 100
        }
    },
    {
        "id": 23,
        "name": {
            "english": "Ekans"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 35,
            "Attack": 60,
            "Defense": 44,
            "Sp. Attack": 40,
            "Sp. Defense": 54,
            "Speed": 55
        }
    },
    {
        "id": 24,
        "name": {
            "english": "Arbok"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 60,
            "Attack": 95,
            "Defense": 69,
            "Sp. Attack": 65,
            "Sp. Defense": 79,
            "Speed": 80
        }
    },
    {
        "id": 25,
        "name": {
            "english": "Pikachu"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 35,
            "Attack": 55,
            "Defense": 40,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 90
        }
    },
    {
        "id": 26,
        "name": {
            "english": "Raichu"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 60,
            "Attack": 90,
            "Defense": 55,
            "Sp. Attack": 90,
            "Sp. Defense": 80,
            "Speed": 110
        }
    },
    {
        "id": 27,
        "name": {
            "english": "Sandshrew"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 50,
            "Attack": 75,
            "Defense": 85,
            "Sp. Attack": 20,
            "Sp. Defense": 30,
            "Speed": 40
        }
    },
    {
        "id": 28,
        "name": {
            "english": "Sandslash"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 75,
            "Attack": 100,
            "Defense": 110,
            "Sp. Attack": 45,
            "Sp. Defense": 55,
            "Speed": 65
        }
    },
    {
        "id": 29,
        "name": {
            "english": "Nidoran♀"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 55,
            "Attack": 47,
            "Defense": 52,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 41
        }
    },
    {
        "id": 30,
        "name": {
            "english": "Nidorina"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 70,
            "Attack": 62,
            "Defense": 67,
            "Sp. Attack": 55,
            "Sp. Defense": 55,
            "Speed": 56
        }
    },
    {
        "id": 31,
        "name": {
            "english": "Nidoqueen"
        },
        "type": [
            "Poison",
            "Ground"
        ],
        "base": {
            "HP": 90,
            "Attack": 92,
            "Defense": 87,
            "Sp. Attack": 75,
            "Sp. Defense": 85,
            "Speed": 76
        }
    },
    {
        "id": 32,
        "name": {
            "english": "Nidoran♂"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 46,
            "Attack": 57,
            "Defense": 40,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 50
        }
    },
    {
        "id": 33,
        "name": {
            "english": "Nidorino"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 61,
            "Attack": 72,
            "Defense": 57,
            "Sp. Attack": 55,
            "Sp. Defense": 55,
            "Speed": 65
        }
    },
    {
        "id": 34,
        "name": {
            "english": "Nidoking"
        },
        "type": [
            "Poison",
            "Ground"
        ],
        "base": {
            "HP": 81,
            "Attack": 102,
            "Defense": 77,
            "Sp. Attack": 85,
            "Sp. Defense": 75,
            "Speed": 85
        }
    },
    {
        "id": 35,
        "name": {
            "english": "Clefairy"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 70,
            "Attack": 45,
            "Defense": 48,
            "Sp. Attack": 60,
            "Sp. Defense": 65,
            "Speed": 35
        }
    },
    {
        "id": 36,
        "name": {
            "english": "Clefable"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 95,
            "Attack": 70,
            "Defense": 73,
            "Sp. Attack": 95,
            "Sp. Defense": 90,
            "Speed": 60
        }
    },
    {
        "id": 37,
        "name": {
            "english": "Vulpix"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 38,
            "Attack": 41,
            "Defense": 40,
            "Sp. Attack": 50,
            "Sp. Defense": 65,
            "Speed": 65
        }
    },
    {
        "id": 38,
        "name": {
            "english": "Ninetales"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 73,
            "Attack": 76,
            "Defense": 75,
            "Sp. Attack": 81,
            "Sp. Defense": 100,
            "Speed": 100
        }
    },
    {
        "id": 39,
        "name": {
            "english": "Jigglypuff"
        },
        "type": [
            "Normal",
            "Fairy"
        ],
        "base": {
            "HP": 115,
            "Attack": 45,
            "Defense": 20,
            "Sp. Attack": 45,
            "Sp. Defense": 25,
            "Speed": 20
        }
    },
    {
        "id": 40,
        "name": {
            "english": "Wigglytuff"
        },
        "type": [
            "Normal",
            "Fairy"
        ],
        "base": {
            "HP": 140,
            "Attack": 70,
            "Defense": 45,
            "Sp. Attack": 85,
            "Sp. Defense": 50,
            "Speed": 45
        }
    },
    {
        "id": 41,
        "name": {
            "english": "Zubat"
        },
        "type": [
            "Poison",
            "Flying"
        ],
        "base": {
            "HP": 40,
            "Attack": 45,
            "Defense": 35,
            "Sp. Attack": 30,
            "Sp. Defense": 40,
            "Speed": 55
        }
    },
    {
        "id": 42,
        "name": {
            "english": "Golbat"
        },
        "type": [
            "Poison",
            "Flying"
        ],
        "base": {
            "HP": 75,
            "Attack": 80,
            "Defense": 70,
            "Sp. Attack": 65,
            "Sp. Defense": 75,
            "Speed": 90
        }
    },
    {
        "id": 43,
        "name": {
            "english": "Oddish"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 45,
            "Attack": 50,
            "Defense": 55,
            "Sp. Attack": 75,
            "Sp. Defense": 65,
            "Speed": 30
        }
    },
    {
        "id": 44,
        "name": {
            "english": "Gloom"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 60,
            "Attack": 65,
            "Defense": 70,
            "Sp. Attack": 85,
            "Sp. Defense": 75,
            "Speed": 40
        }
    },
    {
        "id": 45,
        "name": {
            "english": "Vileplume"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 75,
            "Attack": 80,
            "Defense": 85,
            "Sp. Attack": 110,
            "Sp. Defense": 90,
            "Speed": 50
        }
    },
    {
        "id": 46,
        "name": {
            "english": "Paras"
        },
        "type": [
            "Bug",
            "Grass"
        ],
        "base": {
            "HP": 35,
            "Attack": 70,
            "Defense": 55,
            "Sp. Attack": 45,
            "Sp. Defense": 55,
            "Speed": 25
        }
    },
    {
        "id": 47,
        "name": {
            "english": "Parasect"
        },
        "type": [
            "Bug",
            "Grass"
        ],
        "base": {
            "HP": 60,
            "Attack": 95,
            "Defense": 80,
            "Sp. Attack": 60,
            "Sp. Defense": 80,
            "Speed": 30
        }
    },
    {
        "id": 48,
        "name": {
            "english": "Venonat"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 60,
            "Attack": 55,
            "Defense": 50,
            "Sp. Attack": 40,
            "Sp. Defense": 55,
            "Speed": 45
        }
    },
    {
        "id": 49,
        "name": {
            "english": "Venomoth"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 70,
            "Attack": 65,
            "Defense": 60,
            "Sp. Attack": 90,
            "Sp. Defense": 75,
            "Speed": 90
        }
    },
    {
        "id": 50,
        "name": {
            "english": "Diglett"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 10,
            "Attack": 55,
            "Defense": 25,
            "Sp. Attack": 35,
            "Sp. Defense": 45,
            "Speed": 95
        }
    },
    {
        "id": 51,
        "name": {
            "english": "Dugtrio"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 35,
            "Attack": 100,
            "Defense": 50,
            "Sp. Attack": 50,
            "Sp. Defense": 70,
            "Speed": 120
        }
    },
    {
        "id": 52,
        "name": {
            "english": "Meowth"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 40,
            "Attack": 45,
            "Defense": 35,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 90
        }
    },
    {
        "id": 53,
        "name": {
            "english": "Persian"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 65,
            "Attack": 70,
            "Defense": 60,
            "Sp. Attack": 65,
            "Sp. Defense": 65,
            "Speed": 115
        }
    },
    {
        "id": 54,
        "name": {
            "english": "Psyduck"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 50,
            "Attack": 52,
            "Defense": 48,
            "Sp. Attack": 65,
            "Sp. Defense": 50,
            "Speed": 55
        }
    },
    {
        "id": 55,
        "name": {
            "english": "Golduck"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 80,
            "Attack": 82,
            "Defense": 78,
            "Sp. Attack": 95,
            "Sp. Defense": 80,
            "Speed": 85
        }
    },
    {
        "id": 56,
        "name": {
            "english": "Mankey"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 40,
            "Attack": 80,
            "Defense": 35,
            "Sp. Attack": 35,
            "Sp. Defense": 45,
            "Speed": 70
        }
    },
    {
        "id": 57,
        "name": {
            "english": "Primeape"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 65,
            "Attack": 105,
            "Defense": 60,
            "Sp. Attack": 60,
            "Sp. Defense": 70,
            "Speed": 95
        }
    },
    {
        "id": 58,
        "name": {
            "english": "Growlithe"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 55,
            "Attack": 70,
            "Defense": 45,
            "Sp. Attack": 70,
            "Sp. Defense": 50,
            "Speed": 60
        }
    },
    {
        "id": 59,
        "name": {
            "english": "Arcanine"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 90,
            "Attack": 110,
            "Defense": 80,
            "Sp. Attack": 100,
            "Sp. Defense": 80,
            "Speed": 95
        }
    },
    {
        "id": 60,
        "name": {
            "english": "Poliwag"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 40,
            "Attack": 50,
            "Defense": 40,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 90
        }
    },
    {
        "id": 61,
        "name": {
            "english": "Poliwhirl"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 65,
            "Attack": 65,
            "Defense": 65,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 90
        }
    },
    {
        "id": 62,
        "name": {
            "english": "Poliwrath"
        },
        "type": [
            "Water",
            "Fighting"
        ],
        "base": {
            "HP": 90,
            "Attack": 95,
            "Defense": 95,
            "Sp. Attack": 70,
            "Sp. Defense": 90,
            "Speed": 70
        }
    },
    {
        "id": 63,
        "name": {
            "english": "Abra"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 25,
            "Attack": 20,
            "Defense": 15,
            "Sp. Attack": 105,
            "Sp. Defense": 55,
            "Speed": 90
        }
    },
    {
        "id": 64,
        "name": {
            "english": "Kadabra"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 40,
            "Attack": 35,
            "Defense": 30,
            "Sp. Attack": 120,
            "Sp. Defense": 70,
            "Speed": 105
        }
    },
    {
        "id": 65,
        "name": {
            "english": "Alakazam"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 55,
            "Attack": 50,
            "Defense": 45,
            "Sp. Attack": 135,
            "Sp. Defense": 95,
            "Speed": 120
        }
    },
    {
        "id": 66,
        "name": {
            "english": "Machop"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 70,
            "Attack": 80,
            "Defense": 50,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            "Speed": 35
        }
    },
    {
        "id": 67,
        "name": {
            "english": "Machoke"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 80,
            "Attack": 100,
            "Defense": 70,
            "Sp. Attack": 50,
            "Sp. Defense": 60,
            "Speed": 45
        }
    },
    {
        "id": 68,
        "name": {
            "english": "Machamp"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 90,
            "Attack": 130,
            "Defense": 80,
            "Sp. Attack": 65,
            "Sp. Defense": 85,
            "Speed": 55
        }
    },
    {
        "id": 69,
        "name": {
            "english": "Bellsprout"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 50,
            "Attack": 75,
            "Defense": 35,
            "Sp. Attack": 70,
            "Sp. Defense": 30,
            "Speed": 40
        }
    },
    {
        "id": 70,
        "name": {
            "english": "Weepinbell"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 65,
            "Attack": 90,
            "Defense": 50,
            "Sp. Attack": 85,
            "Sp. Defense": 45,
            "Speed": 55
        }
    },
    {
        "id": 71,
        "name": {
            "english": "Victreebel"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 80,
            "Attack": 105,
            "Defense": 65,
            "Sp. Attack": 100,
            "Sp. Defense": 70,
            "Speed": 70
        }
    },
    {
        "id": 72,
        "name": {
            "english": "Tentacool"
        },
        "type": [
            "Water",
            "Poison"
        ],
        "base": {
            "HP": 40,
            "Attack": 40,
            "Defense": 35,
            "Sp. Attack": 50,
            "Sp. Defense": 100,
            "Speed": 70
        }
    },
    {
        "id": 73,
        "name": {
            "english": "Tentacruel"
        },
        "type": [
            "Water",
            "Poison"
        ],
        "base": {
            "HP": 80,
            "Attack": 70,
            "Defense": 65,
            "Sp. Attack": 80,
            "Sp. Defense": 120,
            "Speed": 100
        }
    },
    {
        "id": 74,
        "name": {
            "english": "Geodude"
        },
        "type": [
            "Rock",
            "Ground"
        ],
        "base": {
            "HP": 40,
            "Attack": 80,
            "Defense": 100,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            "Speed": 20
        }
    },
    {
        "id": 75,
        "name": {
            "english": "Graveler"
        },
        "type": [
            "Rock",
            "Ground"
        ],
        "base": {
            "HP": 55,
            "Attack": 95,
            "Defense": 115,
            "Sp. Attack": 45,
            "Sp. Defense": 45,
            "Speed": 35
        }
    },
    {
        "id": 76,
        "name": {
            "english": "Golem"
        },
        "type": [
            "Rock",
            "Ground"
        ],
        "base": {
            "HP": 80,
            "Attack": 120,
            "Defense": 130,
            "Sp. Attack": 55,
            "Sp. Defense": 65,
            "Speed": 45
        }
    },
    {
        "id": 77,
        "name": {
            "english": "Ponyta"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 50,
            "Attack": 85,
            "Defense": 55,
            "Sp. Attack": 65,
            "Sp. Defense": 65,
            "Speed": 90
        }
    },
    {
        "id": 78,
        "name": {
            "english": "Rapidash"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 65,
            "Attack": 100,
            "Defense": 70,
            "Sp. Attack": 80,
            "Sp. Defense": 80,
            "Speed": 105
        }
    },
    {
        "id": 79,
        "name": {
            "english": "Slowpoke"
        },
        "type": [
            "Water",
            "Psychic"
        ],
        "base": {
            "HP": 90,
            "Attack": 65,
            "Defense": 65,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 15
        }
    },
    {
        "id": 80,
        "name": {
            "english": "Slowbro"
        },
        "type": [
            "Water",
            "Psychic"
        ],
        "base": {
            "HP": 95,
            "Attack": 75,
            "Defense": 110,
            "Sp. Attack": 100,
            "Sp. Defense": 80,
            "Speed": 30
        }
    },
    {
        "id": 81,
        "name": {
            "english": "Magnemite"
        },
        "type": [
            "Electric",
            "Steel"
        ],
        "base": {
            "HP": 25,
            "Attack": 35,
            "Defense": 70,
            "Sp. Attack": 95,
            "Sp. Defense": 55,
            "Speed": 45
        }
    },
    {
        "id": 82,
        "name": {
            "english": "Magneton"
        },
        "type": [
            "Electric",
            "Steel"
        ],
        "base": {
            "HP": 50,
            "Attack": 60,
            "Defense": 95,
            "Sp. Attack": 120,
            "Sp. Defense": 70,
            "Speed": 70
        }
    },
    {
        "id": 83,
        "name": {
            "english": "Farfetch'd"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 52,
            "Attack": 90,
            "Defense": 55,
            "Sp. Attack": 58,
            "Sp. Defense": 62,
            "Speed": 60
        }
    },
    {
        "id": 84,
        "name": {
            "english": "Doduo"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 35,
            "Attack": 85,
            "Defense": 45,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            "Speed": 75
        }
    },
    {
        "id": 85,
        "name": {
            "english": "Dodrio"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 60,
            "Attack": 110,
            "Defense": 70,
            "Sp. Attack": 60,
            "Sp. Defense": 60,
            "Speed": 110
        }
    },
    {
        "id": 86,
        "name": {
            "english": "Seel"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 65,
            "Attack": 45,
            "Defense": 55,
            "Sp. Attack": 45,
            "Sp. Defense": 70,
            "Speed": 45
        }
    },
    {
        "id": 87,
        "name": {
            "english": "Dewgong"
        },
        "type": [
            "Water",
            "Ice"
        ],
        "base": {
            "HP": 90,
            "Attack": 70,
            "Defense": 80,
            "Sp. Attack": 70,
            "Sp. Defense": 95,
            "Speed": 70
        }
    },
    {
        "id": 88,
        "name": {
            "english": "Grimer"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 80,
            "Attack": 80,
            "Defense": 50,
            "Sp. Attack": 40,
            "Sp. Defense": 50,
            "Speed": 25
        }
    },
    {
        "id": 89,
        "name": {
            "english": "Muk"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 105,
            "Attack": 105,
            "Defense": 75,
            "Sp. Attack": 65,
            "Sp. Defense": 100,
            "Speed": 50
        }
    },
    {
        "id": 90,
        "name": {
            "english": "Shellder"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 30,
            "Attack": 65,
            "Defense": 100,
            "Sp. Attack": 45,
            "Sp. Defense": 25,
            "Speed": 40
        }
    },
    {
        "id": 91,
        "name": {
            "english": "Cloyster"
        },
        "type": [
            "Water",
            "Ice"
        ],
        "base": {
            "HP": 50,
            "Attack": 95,
            "Defense": 180,
            "Sp. Attack": 85,
            "Sp. Defense": 45,
            "Speed": 70
        }
    },
    {
        "id": 92,
        "name": {
            "english": "Gastly"
        },
        "type": [
            "Ghost",
            "Poison"
        ],
        "base": {
            "HP": 30,
            "Attack": 35,
            "Defense": 30,
            "Sp. Attack": 100,
            "Sp. Defense": 35,
            "Speed": 80
        }
    },
    {
        "id": 93,
        "name": {
            "english": "Haunter"
        },
        "type": [
            "Ghost",
            "Poison"
        ],
        "base": {
            "HP": 45,
            "Attack": 50,
            "Defense": 45,
            "Sp. Attack": 115,
            "Sp. Defense": 55,
            "Speed": 95
        }
    },
    {
        "id": 94,
        "name": {
            "english": "Gengar"
        },
        "type": [
            "Ghost",
            "Poison"
        ],
        "base": {
            "HP": 60,
            "Attack": 65,
            "Defense": 60,
            "Sp. Attack": 130,
            "Sp. Defense": 75,
            "Speed": 110
        }
    },
    {
        "id": 95,
        "name": {
            "english": "Onix"
        },
        "type": [
            "Rock",
            "Ground"
        ],
        "base": {
            "HP": 35,
            "Attack": 45,
            "Defense": 160,
            "Sp. Attack": 30,
            "Sp. Defense": 45,
            "Speed": 70
        }
    },
    {
        "id": 96,
        "name": {
            "english": "Drowzee"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 60,
            "Attack": 48,
            "Defense": 45,
            "Sp. Attack": 43,
            "Sp. Defense": 90,
            "Speed": 42
        }
    },
    {
        "id": 97,
        "name": {
            "english": "Hypno"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 85,
            "Attack": 73,
            "Defense": 70,
            "Sp. Attack": 73,
            "Sp. Defense": 115,
            "Speed": 67
        }
    },
    {
        "id": 98,
        "name": {
            "english": "Krabby"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 30,
            "Attack": 105,
            "Defense": 90,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            "Speed": 50
        }
    },
    {
        "id": 99,
        "name": {
            "english": "Kingler"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 55,
            "Attack": 130,
            "Defense": 115,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 75
        }
    },
    {
        "id": 100,
        "name": {
            "english": "Voltorb"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 40,
            "Attack": 30,
            "Defense": 50,
            "Sp. Attack": 55,
            "Sp. Defense": 55,
            "Speed": 100
        }
    },
    {
        "id": 101,
        "name": {
            "english": "Electrode"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 60,
            "Attack": 50,
            "Defense": 70,
            "Sp. Attack": 80,
            "Sp. Defense": 80,
            "Speed": 150
        }
    },
    {
        "id": 102,
        "name": {
            "english": "Exeggcute"
        },
        "type": [
            "Grass",
            "Psychic"
        ],
        "base": {
            "HP": 60,
            "Attack": 40,
            "Defense": 80,
            "Sp. Attack": 60,
            "Sp. Defense": 45,
            "Speed": 40
        }
    },
    {
        "id": 103,
        "name": {
            "english": "Exeggutor"
        },
        "type": [
            "Grass",
            "Psychic"
        ],
        "base": {
            "HP": 95,
            "Attack": 95,
            "Defense": 85,
            "Sp. Attack": 125,
            "Sp. Defense": 75,
            "Speed": 55
        }
    },
    {
        "id": 104,
        "name": {
            "english": "Cubone"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 50,
            "Attack": 50,
            "Defense": 95,
            "Sp. Attack": 40,
            "Sp. Defense": 50,
            "Speed": 35
        }
    },
    {
        "id": 105,
        "name": {
            "english": "Marowak"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 60,
            "Attack": 80,
            "Defense": 110,
            "Sp. Attack": 50,
            "Sp. Defense": 80,
            "Speed": 45
        }
    },
    {
        "id": 106,
        "name": {
            "english": "Hitmonlee"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 50,
            "Attack": 120,
            "Defense": 53,
            "Sp. Attack": 35,
            "Sp. Defense": 110,
            "Speed": 87
        }
    },
    {
        "id": 107,
        "name": {
            "english": "Hitmonchan"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 50,
            "Attack": 105,
            "Defense": 79,
            "Sp. Attack": 35,
            "Sp. Defense": 110,
            "Speed": 76
        }
    },
    {
        "id": 108,
        "name": {
            "english": "Lickitung"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 90,
            "Attack": 55,
            "Defense": 75,
            "Sp. Attack": 60,
            "Sp. Defense": 75,
            "Speed": 30
        }
    },
    {
        "id": 109,
        "name": {
            "english": "Koffing"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 40,
            "Attack": 65,
            "Defense": 95,
            "Sp. Attack": 60,
            "Sp. Defense": 45,
            "Speed": 35
        }
    },
    {
        "id": 110,
        "name": {
            "english": "Weezing"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 65,
            "Attack": 90,
            "Defense": 120,
            "Sp. Attack": 85,
            "Sp. Defense": 70,
            "Speed": 60
        }
    },
    {
        "id": 111,
        "name": {
            "english": "Rhyhorn"
        },
        "type": [
            "Ground",
            "Rock"
        ],
        "base": {
            "HP": 80,
            "Attack": 85,
            "Defense": 95,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            "Speed": 25
        }
    },
    {
        "id": 112,
        "name": {
            "english": "Rhydon"
        },
        "type": [
            "Ground",
            "Rock"
        ],
        "base": {
            "HP": 105,
            "Attack": 130,
            "Defense": 120,
            "Sp. Attack": 45,
            "Sp. Defense": 45,
            "Speed": 40
        }
    },
    {
        "id": 113,
        "name": {
            "english": "Chansey"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 250,
            "Attack": 5,
            "Defense": 5,
            "Sp. Attack": 35,
            "Sp. Defense": 105,
            "Speed": 50
        }
    },
    {
        "id": 114,
        "name": {
            "english": "Tangela"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 65,
            "Attack": 55,
            "Defense": 115,
            "Sp. Attack": 100,
            "Sp. Defense": 40,
            "Speed": 60
        }
    },
    {
        "id": 115,
        "name": {
            "english": "Kangaskhan"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 105,
            "Attack": 95,
            "Defense": 80,
            "Sp. Attack": 40,
            "Sp. Defense": 80,
            "Speed": 90
        }
    },
    {
        "id": 116,
        "name": {
            "english": "Horsea"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 30,
            "Attack": 40,
            "Defense": 70,
            "Sp. Attack": 70,
            "Sp. Defense": 25,
            "Speed": 60
        }
    },
    {
        "id": 117,
        "name": {
            "english": "Seadra"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 55,
            "Attack": 65,
            "Defense": 95,
            "Sp. Attack": 95,
            "Sp. Defense": 45,
            "Speed": 85
        }
    },
    {
        "id": 118,
        "name": {
            "english": "Goldeen"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 45,
            "Attack": 67,
            "Defense": 60,
            "Sp. Attack": 35,
            "Sp. Defense": 50,
            "Speed": 63
        }
    },
    {
        "id": 119,
        "name": {
            "english": "Seaking"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 80,
            "Attack": 92,
            "Defense": 65,
            "Sp. Attack": 65,
            "Sp. Defense": 80,
            "Speed": 68
        }
    },
    {
        "id": 120,
        "name": {
            "english": "Staryu"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 30,
            "Attack": 45,
            "Defense": 55,
            "Sp. Attack": 70,
            "Sp. Defense": 55,
            "Speed": 85
        }
    },
    {
        "id": 121,
        "name": {
            "english": "Starmie"
        },
        "type": [
            "Water",
            "Psychic"
        ],
        "base": {
            "HP": 60,
            "Attack": 75,
            "Defense": 85,
            "Sp. Attack": 100,
            "Sp. Defense": 85,
            "Speed": 115
        }
    },
    {
        "id": 122,
        "name": {
            "english": "Mr. Mime"
        },
        "type": [
            "Psychic",
            "Fairy"
        ],
        "base": {
            "HP": 40,
            "Attack": 45,
            "Defense": 65,
            "Sp. Attack": 100,
            "Sp. Defense": 120,
            "Speed": 90
        }
    },
    {
        "id": 123,
        "name": {
            "english": "Scyther"
        },
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 70,
            "Attack": 110,
            "Defense": 80,
            "Sp. Attack": 55,
            "Sp. Defense": 80,
            "Speed": 105
        }
    },
    {
        "id": 124,
        "name": {
            "english": "Jynx"
        },
        "type": [
            "Ice",
            "Psychic"
        ],
        "base": {
            "HP": 65,
            "Attack": 50,
            "Defense": 35,
            "Sp. Attack": 115,
            "Sp. Defense": 95,
            "Speed": 95
        }
    },
    {
        "id": 125,
        "name": {
            "english": "Electabuzz"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 65,
            "Attack": 83,
            "Defense": 57,
            "Sp. Attack": 95,
            "Sp. Defense": 85,
            "Speed": 105
        }
    },
    {
        "id": 126,
        "name": {
            "english": "Magmar"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 65,
            "Attack": 95,
            "Defense": 57,
            "Sp. Attack": 100,
            "Sp. Defense": 85,
            "Speed": 93
        }
    },
    {
        "id": 127,
        "name": {
            "english": "Pinsir"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 65,
            "Attack": 125,
            "Defense": 100,
            "Sp. Attack": 55,
            "Sp. Defense": 70,
            "Speed": 85
        }
    },
    {
        "id": 128,
        "name": {
            "english": "Tauros"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 75,
            "Attack": 100,
            "Defense": 95,
            "Sp. Attack": 40,
            "Sp. Defense": 70,
            "Speed": 110
        }
    },
    {
        "id": 129,
        "name": {
            "english": "Magikarp"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 20,
            "Attack": 10,
            "Defense": 55,
            "Sp. Attack": 15,
            "Sp. Defense": 20,
            "Speed": 80
        }
    },
    {
        "id": 130,
        "name": {
            "english": "Gyarados"
        },
        "type": [
            "Water",
            "Flying"
        ],
        "base": {
            "HP": 95,
            "Attack": 125,
            "Defense": 79,
            "Sp. Attack": 60,
            "Sp. Defense": 100,
            "Speed": 81
        }
    },
    {
        "id": 131,
        "name": {
            "english": "Lapras"
        },
        "type": [
            "Water",
            "Ice"
        ],
        "base": {
            "HP": 130,
            "Attack": 85,
            "Defense": 80,
            "Sp. Attack": 85,
            "Sp. Defense": 95,
            "Speed": 60
        }
    },
    {
        "id": 132,
        "name": {
            "english": "Ditto"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 48,
            "Attack": 48,
            "Defense": 48,
            "Sp. Attack": 48,
            "Sp. Defense": 48,
            "Speed": 48
        }
    },
    {
        "id": 133,
        "name": {
            "english": "Eevee"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 55,
            "Attack": 55,
            "Defense": 50,
            "Sp. Attack": 45,
            "Sp. Defense": 65,
            "Speed": 55
        }
    },
    {
        "id": 134,
        "name": {
            "english": "Vaporeon"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 130,
            "Attack": 65,
            "Defense": 60,
            "Sp. Attack": 110,
            "Sp. Defense": 95,
            "Speed": 65
        }
    },
    {
        "id": 135,
        "name": {
            "english": "Jolteon"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 65,
            "Attack": 65,
            "Defense": 60,
            "Sp. Attack": 110,
            "Sp. Defense": 95,
            "Speed": 130
        }
    },
    {
        "id": 136,
        "name": {
            "english": "Flareon"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 65,
            "Attack": 130,
            "Defense": 60,
            "Sp. Attack": 95,
            "Sp. Defense": 110,
            "Speed": 65
        }
    },
    {
        "id": 137,
        "name": {
            "english": "Porygon"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 65,
            "Attack": 60,
            "Defense": 70,
            "Sp. Attack": 85,
            "Sp. Defense": 75,
            "Speed": 40
        }
    },
    {
        "id": 138,
        "name": {
            "english": "Omanyte"
        },
        "type": [
            "Rock",
            "Water"
        ],
        "base": {
            "HP": 35,
            "Attack": 40,
            "Defense": 100,
            "Sp. Attack": 90,
            "Sp. Defense": 55,
            "Speed": 35
        }
    },
    {
        "id": 139,
        "name": {
            "english": "Omastar"
        },
        "type": [
            "Rock",
            "Water"
        ],
        "base": {
            "HP": 70,
            "Attack": 60,
            "Defense": 125,
            "Sp. Attack": 115,
            "Sp. Defense": 70,
            "Speed": 55
        }
    },
    {
        "id": 140,
        "name": {
            "english": "Kabuto"
        },
        "type": [
            "Rock",
            "Water"
        ],
        "base": {
            "HP": 30,
            "Attack": 80,
            "Defense": 90,
            "Sp. Attack": 55,
            "Sp. Defense": 45,
            "Speed": 55
        }
    },
    {
        "id": 141,
        "name": {
            "english": "Kabutops"
        },
        "type": [
            "Rock",
            "Water"
        ],
        "base": {
            "HP": 60,
            "Attack": 115,
            "Defense": 105,
            "Sp. Attack": 65,
            "Sp. Defense": 70,
            "Speed": 80
        }
    },
    {
        "id": 142,
        "name": {
            "english": "Aerodactyl"
        },
        "type": [
            "Rock",
            "Flying"
        ],
        "base": {
            "HP": 80,
            "Attack": 105,
            "Defense": 65,
            "Sp. Attack": 60,
            "Sp. Defense": 75,
            "Speed": 130
        }
    },
    {
        "id": 143,
        "name": {
            "english": "Snorlax"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 160,
            "Attack": 110,
            "Defense": 65,
            "Sp. Attack": 65,
            "Sp. Defense": 110,
            "Speed": 30
        }
    },
    {
        "id": 144,
        "name": {
            "english": "Articuno"
        },
        "type": [
            "Ice",
            "Flying"
        ],
        "base": {
            "HP": 90,
            "Attack": 85,
            "Defense": 100,
            "Sp. Attack": 95,
            "Sp. Defense": 125,
            "Speed": 85
        }
    },
    {
        "id": 145,
        "name": {
            "english": "Zapdos"
        },
        "type": [
            "Electric",
            "Flying"
        ],
        "base": {
            "HP": 90,
            "Attack": 90,
            "Defense": 85,
            "Sp. Attack": 125,
            "Sp. Defense": 90,
            "Speed": 100
        }
    },
    {
        "id": 146,
        "name": {
            "english": "Moltres"
        },
        "type": [
            "Fire",
            "Flying"
        ],
        "base": {
            "HP": 90,
            "Attack": 100,
            "Defense": 90,
            "Sp. Attack": 125,
            "Sp. Defense": 85,
            "Speed": 90
        }
    },
    {
        "id": 147,
        "name": {
            "english": "Dratini"
        },
        "type": [
            "Dragon"
        ],
        "base": {
            "HP": 41,
            "Attack": 64,
            "Defense": 45,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 50
        }
    },
    {
        "id": 148,
        "name": {
            "english": "Dragonair"
        },
        "type": [
            "Dragon"
        ],
        "base": {
            "HP": 61,
            "Attack": 84,
            "Defense": 65,
            "Sp. Attack": 70,
            "Sp. Defense": 70,
            "Speed": 70
        }
    },
    {
        "id": 149,
        "name": {
            "english": "Dragonite"
        },
        "type": [
            "Dragon",
            "Flying"
        ],
        "base": {
            "HP": 91,
            "Attack": 134,
            "Defense": 95,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            "Speed": 80
        }
    },
    {
        "id": 150,
        "name": {
            "english": "Mewtwo"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 106,
            "Attack": 110,
            "Defense": 90,
            "Sp. Attack": 154,
            "Sp. Defense": 90,
            "Speed": 130
        }
    },
    {
        "id": 151,
        "name": {
            "english": "Mew"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 100,
            "Attack": 100,
            "Defense": 100,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            "Speed": 100
        }
    },
    {
        "id": 152,
        "name": {
            "english": "Chikorita"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 45,
            "Attack": 49,
            "Defense": 65,
            "Sp. Attack": 49,
            "Sp. Defense": 65,
            "Speed": 45
        }
    },
    {
        "id": 153,
        "name": {
            "english": "Bayleef"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 60,
            "Attack": 62,
            "Defense": 80,
            "Sp. Attack": 63,
            "Sp. Defense": 80,
            "Speed": 60
        }
    },
    {
        "id": 154,
        "name": {
            "english": "Meganium"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 80,
            "Attack": 82,
            "Defense": 100,
            "Sp. Attack": 83,
            "Sp. Defense": 100,
            "Speed": 80
        }
    },
    {
        "id": 155,
        "name": {
            "english": "Cyndaquil"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 39,
            "Attack": 52,
            "Defense": 43,
            "Sp. Attack": 60,
            "Sp. Defense": 50,
            "Speed": 65
        }
    },
    {
        "id": 156,
        "name": {
            "english": "Quilava"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 58,
            "Attack": 64,
            "Defense": 58,
            "Sp. Attack": 80,
            "Sp. Defense": 65,
            "Speed": 80
        }
    },
    {
        "id": 157,
        "name": {
            "english": "Typhlosion"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 78,
            "Attack": 84,
            "Defense": 78,
            "Sp. Attack": 109,
            "Sp. Defense": 85,
            "Speed": 100
        }
    },
    {
        "id": 158,
        "name": {
            "english": "Totodile"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 50,
            "Attack": 65,
            "Defense": 64,
            "Sp. Attack": 44,
            "Sp. Defense": 48,
            "Speed": 43
        }
    },
    {
        "id": 159,
        "name": {
            "english": "Croconaw"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 65,
            "Attack": 80,
            "Defense": 80,
            "Sp. Attack": 59,
            "Sp. Defense": 63,
            "Speed": 58
        }
    },
    {
        "id": 160,
        "name": {
            "english": "Feraligatr"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 85,
            "Attack": 105,
            "Defense": 100,
            "Sp. Attack": 79,
            "Sp. Defense": 83,
            "Speed": 78
        }
    },
    {
        "id": 161,
        "name": {
            "english": "Sentret"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 35,
            "Attack": 46,
            "Defense": 34,
            "Sp. Attack": 35,
            "Sp. Defense": 45,
            "Speed": 20
        }
    },
    {
        "id": 162,
        "name": {
            "english": "Furret"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 85,
            "Attack": 76,
            "Defense": 64,
            "Sp. Attack": 45,
            "Sp. Defense": 55,
            "Speed": 90
        }
    },
    {
        "id": 163,
        "name": {
            "english": "Hoothoot"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 60,
            "Attack": 30,
            "Defense": 30,
            "Sp. Attack": 36,
            "Sp. Defense": 56,
            "Speed": 50
        }
    },
    {
        "id": 164,
        "name": {
            "english": "Noctowl"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 100,
            "Attack": 50,
            "Defense": 50,
            "Sp. Attack": 86,
            "Sp. Defense": 96,
            "Speed": 70
        }
    },
    {
        "id": 165,
        "name": {
            "english": "Ledyba"
        },
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 40,
            "Attack": 20,
            "Defense": 30,
            "Sp. Attack": 40,
            "Sp. Defense": 80,
            "Speed": 55
        }
    },
    {
        "id": 166,
        "name": {
            "english": "Ledian"
        },
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 55,
            "Attack": 35,
            "Defense": 50,
            "Sp. Attack": 55,
            "Sp. Defense": 110,
            "Speed": 85
        }
    },
    {
        "id": 167,
        "name": {
            "english": "Spinarak"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 40,
            "Attack": 60,
            "Defense": 40,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 30
        }
    },
    {
        "id": 168,
        "name": {
            "english": "Ariados"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 70,
            "Attack": 90,
            "Defense": 70,
            "Sp. Attack": 60,
            "Sp. Defense": 70,
            "Speed": 40
        }
    },
    {
        "id": 169,
        "name": {
            "english": "Crobat"
        },
        "type": [
            "Poison",
            "Flying"
        ],
        "base": {
            "HP": 85,
            "Attack": 90,
            "Defense": 80,
            "Sp. Attack": 70,
            "Sp. Defense": 80,
            "Speed": 130
        }
    },
    {
        "id": 170,
        "name": {
            "english": "Chinchou"
        },
        "type": [
            "Water",
            "Electric"
        ],
        "base": {
            "HP": 75,
            "Attack": 38,
            "Defense": 38,
            "Sp. Attack": 56,
            "Sp. Defense": 56,
            "Speed": 67
        }
    },
    {
        "id": 171,
        "name": {
            "english": "Lanturn"
        },
        "type": [
            "Water",
            "Electric"
        ],
        "base": {
            "HP": 125,
            "Attack": 58,
            "Defense": 58,
            "Sp. Attack": 76,
            "Sp. Defense": 76,
            "Speed": 67
        }
    },
    {
        "id": 172,
        "name": {
            "english": "Pichu"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 20,
            "Attack": 40,
            "Defense": 15,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            "Speed": 60
        }
    },
    {
        "id": 173,
        "name": {
            "english": "Cleffa"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 50,
            "Attack": 25,
            "Defense": 28,
            "Sp. Attack": 45,
            "Sp. Defense": 55,
            "Speed": 15
        }
    },
    {
        "id": 174,
        "name": {
            "english": "Igglybuff"
        },
        "type": [
            "Normal",
            "Fairy"
        ],
        "base": {
            "HP": 90,
            "Attack": 30,
            "Defense": 15,
            "Sp. Attack": 40,
            "Sp. Defense": 20,
            "Speed": 15
        }
    },
    {
        "id": 175,
        "name": {
            "english": "Togepi"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 35,
            "Attack": 20,
            "Defense": 65,
            "Sp. Attack": 40,
            "Sp. Defense": 65,
            "Speed": 20
        }
    },
    {
        "id": 176,
        "name": {
            "english": "Togetic"
        },
        "type": [
            "Fairy",
            "Flying"
        ],
        "base": {
            "HP": 55,
            "Attack": 40,
            "Defense": 85,
            "Sp. Attack": 80,
            "Sp. Defense": 105,
            "Speed": 40
        }
    },
    {
        "id": 177,
        "name": {
            "english": "Natu"
        },
        "type": [
            "Psychic",
            "Flying"
        ],
        "base": {
            "HP": 40,
            "Attack": 50,
            "Defense": 45,
            "Sp. Attack": 70,
            "Sp. Defense": 45,
            "Speed": 70
        }
    },
    {
        "id": 178,
        "name": {
            "english": "Xatu"
        },
        "type": [
            "Psychic",
            "Flying"
        ],
        "base": {
            "HP": 65,
            "Attack": 75,
            "Defense": 70,
            "Sp. Attack": 95,
            "Sp. Defense": 70,
            "Speed": 95
        }
    },
    {
        "id": 179,
        "name": {
            "english": "Mareep"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 55,
            "Attack": 40,
            "Defense": 40,
            "Sp. Attack": 65,
            "Sp. Defense": 45,
            "Speed": 35
        }
    },
    {
        "id": 180,
        "name": {
            "english": "Flaaffy"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 70,
            "Attack": 55,
            "Defense": 55,
            "Sp. Attack": 80,
            "Sp. Defense": 60,
            "Speed": 45
        }
    },
    {
        "id": 181,
        "name": {
            "english": "Ampharos"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 90,
            "Attack": 75,
            "Defense": 85,
            "Sp. Attack": 115,
            "Sp. Defense": 90,
            "Speed": 55
        }
    },
    {
        "id": 182,
        "name": {
            "english": "Bellossom"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 75,
            "Attack": 80,
            "Defense": 95,
            "Sp. Attack": 90,
            "Sp. Defense": 100,
            "Speed": 50
        }
    },
    {
        "id": 183,
        "name": {
            "english": "Marill"
        },
        "type": [
            "Water",
            "Fairy"
        ],
        "base": {
            "HP": 70,
            "Attack": 20,
            "Defense": 50,
            "Sp. Attack": 20,
            "Sp. Defense": 50,
            "Speed": 40
        }
    },
    {
        "id": 184,
        "name": {
            "english": "Azumarill"
        },
        "type": [
            "Water",
            "Fairy"
        ],
        "base": {
            "HP": 100,
            "Attack": 50,
            "Defense": 80,
            "Sp. Attack": 60,
            "Sp. Defense": 80,
            "Speed": 50
        }
    },
    {
        "id": 185,
        "name": {
            "english": "Sudowoodo"
        },
        "type": [
            "Rock"
        ],
        "base": {
            "HP": 70,
            "Attack": 100,
            "Defense": 115,
            "Sp. Attack": 30,
            "Sp. Defense": 65,
            "Speed": 30
        }
    },
    {
        "id": 186,
        "name": {
            "english": "Politoed"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 90,
            "Attack": 75,
            "Defense": 75,
            "Sp. Attack": 90,
            "Sp. Defense": 100,
            "Speed": 70
        }
    },
    {
        "id": 187,
        "name": {
            "english": "Hoppip"
        },
        "type": [
            "Grass",
            "Flying"
        ],
        "base": {
            "HP": 35,
            "Attack": 35,
            "Defense": 40,
            "Sp. Attack": 35,
            "Sp. Defense": 55,
            "Speed": 50
        }
    },
    {
        "id": 188,
        "name": {
            "english": "Skiploom"
        },
        "type": [
            "Grass",
            "Flying"
        ],
        "base": {
            "HP": 55,
            "Attack": 45,
            "Defense": 50,
            "Sp. Attack": 45,
            "Sp. Defense": 65,
            "Speed": 80
        }
    },
    {
        "id": 189,
        "name": {
            "english": "Jumpluff"
        },
        "type": [
            "Grass",
            "Flying"
        ],
        "base": {
            "HP": 75,
            "Attack": 55,
            "Defense": 70,
            "Sp. Attack": 55,
            "Sp. Defense": 95,
            "Speed": 110
        }
    },
    {
        "id": 190,
        "name": {
            "english": "Aipom"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 55,
            "Attack": 70,
            "Defense": 55,
            "Sp. Attack": 40,
            "Sp. Defense": 55,
            "Speed": 85
        }
    },
    {
        "id": 191,
        "name": {
            "english": "Sunkern"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 30,
            "Attack": 30,
            "Defense": 30,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            "Speed": 30
        }
    },
    {
        "id": 192,
        "name": {
            "english": "Sunflora"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 75,
            "Attack": 75,
            "Defense": 55,
            "Sp. Attack": 105,
            "Sp. Defense": 85,
            "Speed": 30
        }
    },
    {
        "id": 193,
        "name": {
            "english": "Yanma"
        },
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 65,
            "Attack": 65,
            "Defense": 45,
            "Sp. Attack": 75,
            "Sp. Defense": 45,
            "Speed": 95
        }
    },
    {
        "id": 194,
        "name": {
            "english": "Wooper"
        },
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "HP": 55,
            "Attack": 45,
            "Defense": 45,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            "Speed": 15
        }
    },
    {
        "id": 195,
        "name": {
            "english": "Quagsire"
        },
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "HP": 95,
            "Attack": 85,
            "Defense": 85,
            "Sp. Attack": 65,
            "Sp. Defense": 65,
            "Speed": 35
        }
    },
    {
        "id": 196,
        "name": {
            "english": "Espeon"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 65,
            "Attack": 65,
            "Defense": 60,
            "Sp. Attack": 130,
            "Sp. Defense": 95,
            "Speed": 110
        }
    },
    {
        "id": 197,
        "name": {
            "english": "Umbreon"
        },
        "type": [
            "Dark"
        ],
        "base": {
            "HP": 95,
            "Attack": 65,
            "Defense": 110,
            "Sp. Attack": 60,
            "Sp. Defense": 130,
            "Speed": 65
        }
    },
    {
        "id": 198,
        "name": {
            "english": "Murkrow"
        },
        "type": [
            "Dark",
            "Flying"
        ],
        "base": {
            "HP": 60,
            "Attack": 85,
            "Defense": 42,
            "Sp. Attack": 85,
            "Sp. Defense": 42,
            "Speed": 91
        }
    },
    {
        "id": 199,
        "name": {
            "english": "Slowking"
        },
        "type": [
            "Water",
            "Psychic"
        ],
        "base": {
            "HP": 95,
            "Attack": 75,
            "Defense": 80,
            "Sp. Attack": 100,
            "Sp. Defense": 110,
            "Speed": 30
        }
    },
    {
        "id": 200,
        "name": {
            "english": "Misdreavus"
        },
        "type": [
            "Ghost"
        ],
        "base": {
            "HP": 60,
            "Attack": 60,
            "Defense": 60,
            "Sp. Attack": 85,
            "Sp. Defense": 85,
            "Speed": 85
        }
    },
    {
        "id": 201,
        "name": {
            "english": "Unown"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 48,
            "Attack": 72,
            "Defense": 48,
            "Sp. Attack": 72,
            "Sp. Defense": 48,
            "Speed": 48
        }
    },
    {
        "id": 202,
        "name": {
            "english": "Wobbuffet"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 190,
            "Attack": 33,
            "Defense": 58,
            "Sp. Attack": 33,
            "Sp. Defense": 58,
            "Speed": 33
        }
    },
    {
        "id": 203,
        "name": {
            "english": "Girafarig"
        },
        "type": [
            "Normal",
            "Psychic"
        ],
        "base": {
            "HP": 70,
            "Attack": 80,
            "Defense": 65,
            "Sp. Attack": 90,
            "Sp. Defense": 65,
            "Speed": 85
        }
    },
    {
        "id": 204,
        "name": {
            "english": "Pineco"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 50,
            "Attack": 65,
            "Defense": 90,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            "Speed": 15
        }
    },
    {
        "id": 205,
        "name": {
            "english": "Forretress"
        },
        "type": [
            "Bug",
            "Steel"
        ],
        "base": {
            "HP": 75,
            "Attack": 90,
            "Defense": 140,
            "Sp. Attack": 60,
            "Sp. Defense": 60,
            "Speed": 40
        }
    },
    {
        "id": 206,
        "name": {
            "english": "Dunsparce"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 100,
            "Attack": 70,
            "Defense": 70,
            "Sp. Attack": 65,
            "Sp. Defense": 65,
            "Speed": 45
        }
    },
    {
        "id": 207,
        "name": {
            "english": "Gligar"
        },
        "type": [
            "Ground",
            "Flying"
        ],
        "base": {
            "HP": 65,
            "Attack": 75,
            "Defense": 105,
            "Sp. Attack": 35,
            "Sp. Defense": 65,
            "Speed": 85
        }
    },
    {
        "id": 208,
        "name": {
            "english": "Steelix"
        },
        "type": [
            "Steel",
            "Ground"
        ],
        "base": {
            "HP": 75,
            "Attack": 85,
            "Defense": 200,
            "Sp. Attack": 55,
            "Sp. Defense": 65,
            "Speed": 30
        }
    },
    {
        "id": 209,
        "name": {
            "english": "Snubbull"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 60,
            "Attack": 80,
            "Defense": 50,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 30
        }
    },
    {
        "id": 210,
        "name": {
            "english": "Granbull"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 90,
            "Attack": 120,
            "Defense": 75,
            "Sp. Attack": 60,
            "Sp. Defense": 60,
            "Speed": 45
        }
    },
    {
        "id": 211,
        "name": {
            "english": "Qwilfish"
        },
        "type": [
            "Water",
            "Poison"
        ],
        "base": {
            "HP": 65,
            "Attack": 95,
            "Defense": 85,
            "Sp. Attack": 55,
            "Sp. Defense": 55,
            "Speed": 85
        }
    },
    {
        "id": 212,
        "name": {
            "english": "Scizor"
        },
        "type": [
            "Bug",
            "Steel"
        ],
        "base": {
            "HP": 70,
            "Attack": 130,
            "Defense": 100,
            "Sp. Attack": 55,
            "Sp. Defense": 80,
            "Speed": 65
        }
    },
    {
        "id": 213,
        "name": {
            "english": "Shuckle"
        },
        "type": [
            "Bug",
            "Rock"
        ],
        "base": {
            "HP": 20,
            "Attack": 10,
            "Defense": 230,
            "Sp. Attack": 10,
            "Sp. Defense": 230,
            "Speed": 5
        }
    },
    {
        "id": 214,
        "name": {
            "english": "Heracross"
        },
        "type": [
            "Bug",
            "Fighting"
        ],
        "base": {
            "HP": 80,
            "Attack": 125,
            "Defense": 75,
            "Sp. Attack": 40,
            "Sp. Defense": 95,
            "Speed": 85
        }
    },
    {
        "id": 215,
        "name": {
            "english": "Sneasel"
        },
        "type": [
            "Dark",
            "Ice"
        ],
        "base": {
            "HP": 55,
            "Attack": 95,
            "Defense": 55,
            "Sp. Attack": 35,
            "Sp. Defense": 75,
            "Speed": 115
        }
    },
    {
        "id": 216,
        "name": {
            "english": "Teddiursa"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 60,
            "Attack": 80,
            "Defense": 50,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 40
        }
    },
    {
        "id": 217,
        "name": {
            "english": "Ursaring"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 90,
            "Attack": 130,
            "Defense": 75,
            "Sp. Attack": 75,
            "Sp. Defense": 75,
            "Speed": 55
        }
    },
    {
        "id": 218,
        "name": {
            "english": "Slugma"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 40,
            "Attack": 40,
            "Defense": 40,
            "Sp. Attack": 70,
            "Sp. Defense": 40,
            "Speed": 20
        }
    },
    {
        "id": 219,
        "name": {
            "english": "Magcargo"
        },
        "type": [
            "Fire",
            "Rock"
        ],
        "base": {
            "HP": 60,
            "Attack": 50,
            "Defense": 120,
            "Sp. Attack": 90,
            "Sp. Defense": 80,
            "Speed": 30
        }
    },
    {
        "id": 220,
        "name": {
            "english": "Swinub"
        },
        "type": [
            "Ice",
            "Ground"
        ],
        "base": {
            "HP": 50,
            "Attack": 50,
            "Defense": 40,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            "Speed": 50
        }
    },
    {
        "id": 221,
        "name": {
            "english": "Piloswine"
        },
        "type": [
            "Ice",
            "Ground"
        ],
        "base": {
            "HP": 100,
            "Attack": 100,
            "Defense": 80,
            "Sp. Attack": 60,
            "Sp. Defense": 60,
            "Speed": 50
        }
    },
    {
        "id": 222,
        "name": {
            "english": "Corsola"
        },
        "type": [
            "Water",
            "Rock"
        ],
        "base": {
            "HP": 65,
            "Attack": 55,
            "Defense": 95,
            "Sp. Attack": 65,
            "Sp. Defense": 95,
            "Speed": 35
        }
    },
    {
        "id": 223,
        "name": {
            "english": "Remoraid"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 35,
            "Attack": 65,
            "Defense": 35,
            "Sp. Attack": 65,
            "Sp. Defense": 35,
            "Speed": 65
        }
    },
    {
        "id": 224,
        "name": {
            "english": "Octillery"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 75,
            "Attack": 105,
            "Defense": 75,
            "Sp. Attack": 105,
            "Sp. Defense": 75,
            "Speed": 45
        }
    },
    {
        "id": 225,
        "name": {
            "english": "Delibird"
        },
        "type": [
            "Ice",
            "Flying"
        ],
        "base": {
            "HP": 45,
            "Attack": 55,
            "Defense": 45,
            "Sp. Attack": 65,
            "Sp. Defense": 45,
            "Speed": 75
        }
    },
    {
        "id": 226,
        "name": {
            "english": "Mantine"
        },
        "type": [
            "Water",
            "Flying"
        ],
        "base": {
            "HP": 85,
            "Attack": 40,
            "Defense": 70,
            "Sp. Attack": 80,
            "Sp. Defense": 140,
            "Speed": 70
        }
    },
    {
        "id": 227,
        "name": {
            "english": "Skarmory"
        },
        "type": [
            "Steel",
            "Flying"
        ],
        "base": {
            "HP": 65,
            "Attack": 80,
            "Defense": 140,
            "Sp. Attack": 40,
            "Sp. Defense": 70,
            "Speed": 70
        }
    },
    {
        "id": 228,
        "name": {
            "english": "Houndour"
        },
        "type": [
            "Dark",
            "Fire"
        ],
        "base": {
            "HP": 45,
            "Attack": 60,
            "Defense": 30,
            "Sp. Attack": 80,
            "Sp. Defense": 50,
            "Speed": 65
        }
    },
    {
        "id": 229,
        "name": {
            "english": "Houndoom"
        },
        "type": [
            "Dark",
            "Fire"
        ],
        "base": {
            "HP": 75,
            "Attack": 90,
            "Defense": 50,
            "Sp. Attack": 110,
            "Sp. Defense": 80,
            "Speed": 95
        }
    },
    {
        "id": 230,
        "name": {
            "english": "Kingdra"
        },
        "type": [
            "Water",
            "Dragon"
        ],
        "base": {
            "HP": 75,
            "Attack": 95,
            "Defense": 95,
            "Sp. Attack": 95,
            "Sp. Defense": 95,
            "Speed": 85
        }
    },
    {
        "id": 231,
        "name": {
            "english": "Phanpy"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 90,
            "Attack": 60,
            "Defense": 60,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 40
        }
    },
    {
        "id": 232,
        "name": {
            "english": "Donphan"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 90,
            "Attack": 120,
            "Defense": 120,
            "Sp. Attack": 60,
            "Sp. Defense": 60,
            "Speed": 50
        }
    },
    {
        "id": 233,
        "name": {
            "english": "Porygon2"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 85,
            "Attack": 80,
            "Defense": 90,
            "Sp. Attack": 105,
            "Sp. Defense": 95,
            "Speed": 60
        }
    },
    {
        "id": 234,
        "name": {
            "english": "Stantler"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 73,
            "Attack": 95,
            "Defense": 62,
            "Sp. Attack": 85,
            "Sp. Defense": 65,
            "Speed": 85
        }
    },
    {
        "id": 235,
        "name": {
            "english": "Smeargle"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 55,
            "Attack": 20,
            "Defense": 35,
            "Sp. Attack": 20,
            "Sp. Defense": 45,
            "Speed": 75
        }
    },
    {
        "id": 236,
        "name": {
            "english": "Tyrogue"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 35,
            "Attack": 35,
            "Defense": 35,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            "Speed": 35
        }
    },
    {
        "id": 237,
        "name": {
            "english": "Hitmontop"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 50,
            "Attack": 95,
            "Defense": 95,
            "Sp. Attack": 35,
            "Sp. Defense": 110,
            "Speed": 70
        }
    },
    {
        "id": 238,
        "name": {
            "english": "Smoochum"
        },
        "type": [
            "Ice",
            "Psychic"
        ],
        "base": {
            "HP": 45,
            "Attack": 30,
            "Defense": 15,
            "Sp. Attack": 85,
            "Sp. Defense": 65,
            "Speed": 65
        }
    },
    {
        "id": 239,
        "name": {
            "english": "Elekid"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 45,
            "Attack": 63,
            "Defense": 37,
            "Sp. Attack": 65,
            "Sp. Defense": 55,
            "Speed": 95
        }
    },
    {
        "id": 240,
        "name": {
            "english": "Magby"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 45,
            "Attack": 75,
            "Defense": 37,
            "Sp. Attack": 70,
            "Sp. Defense": 55,
            "Speed": 83
        }
    },
    {
        "id": 241,
        "name": {
            "english": "Miltank"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 95,
            "Attack": 80,
            "Defense": 105,
            "Sp. Attack": 40,
            "Sp. Defense": 70,
            "Speed": 100
        }
    },
    {
        "id": 242,
        "name": {
            "english": "Blissey"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 255,
            "Attack": 10,
            "Defense": 10,
            "Sp. Attack": 75,
            "Sp. Defense": 135,
            "Speed": 55
        }
    },
    {
        "id": 243,
        "name": {
            "english": "Raikou"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 90,
            "Attack": 85,
            "Defense": 75,
            "Sp. Attack": 115,
            "Sp. Defense": 100,
            "Speed": 115
        }
    },
    {
        "id": 244,
        "name": {
            "english": "Entei"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 115,
            "Attack": 115,
            "Defense": 85,
            "Sp. Attack": 90,
            "Sp. Defense": 75,
            "Speed": 100
        }
    },
    {
        "id": 245,
        "name": {
            "english": "Suicune"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 100,
            "Attack": 75,
            "Defense": 115,
            "Sp. Attack": 90,
            "Sp. Defense": 115,
            "Speed": 85
        }
    },
    {
        "id": 246,
        "name": {
            "english": "Larvitar"
        },
        "type": [
            "Rock",
            "Ground"
        ],
        "base": {
            "HP": 50,
            "Attack": 64,
            "Defense": 50,
            "Sp. Attack": 45,
            "Sp. Defense": 50,
            "Speed": 41
        }
    },
    {
        "id": 247,
        "name": {
            "english": "Pupitar"
        },
        "type": [
            "Rock",
            "Ground"
        ],
        "base": {
            "HP": 70,
            "Attack": 84,
            "Defense": 70,
            "Sp. Attack": 65,
            "Sp. Defense": 70,
            "Speed": 51
        }
    },
    {
        "id": 248,
        "name": {
            "english": "Tyranitar"
        },
        "type": [
            "Rock",
            "Dark"
        ],
        "base": {
            "HP": 100,
            "Attack": 134,
            "Defense": 110,
            "Sp. Attack": 95,
            "Sp. Defense": 100,
            "Speed": 61
        }
    },
    {
        "id": 249,
        "name": {
            "english": "Lugia"
        },
        "type": [
            "Psychic",
            "Flying"
        ],
        "base": {
            "HP": 106,
            "Attack": 90,
            "Defense": 130,
            "Sp. Attack": 90,
            "Sp. Defense": 154,
            "Speed": 110
        }
    },
    {
        "id": 250,
        "name": {
            "english": "Ho-Oh"
        },
        "type": [
            "Fire",
            "Flying"
        ],
        "base": {
            "HP": 106,
            "Attack": 130,
            "Defense": 90,
            "Sp. Attack": 110,
            "Sp. Defense": 154,
            "Speed": 90
        }
    },
    {
        "id": 251,
        "name": {
            "english": "Celebi"
        },
        "type": [
            "Psychic",
            "Grass"
        ],
        "base": {
            "HP": 100,
            "Attack": 100,
            "Defense": 100,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            "Speed": 100
        }
    },
    {
        "id": 252,
        "name": {
            "english": "Treecko"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 40,
            "Attack": 45,
            "Defense": 35,
            "Sp. Attack": 65,
            "Sp. Defense": 55,
            "Speed": 70
        }
    },
    {
        "id": 253,
        "name": {
            "english": "Grovyle"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 50,
            "Attack": 65,
            "Defense": 45,
            "Sp. Attack": 85,
            "Sp. Defense": 65,
            "Speed": 95
        }
    },
    {
        "id": 254,
        "name": {
            "english": "Sceptile"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 70,
            "Attack": 85,
            "Defense": 65,
            "Sp. Attack": 105,
            "Sp. Defense": 85,
            "Speed": 120
        }
    },
    {
        "id": 255,
        "name": {
            "english": "Torchic"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 45,
            "Attack": 60,
            "Defense": 40,
            "Sp. Attack": 70,
            "Sp. Defense": 50,
            "Speed": 45
        }
    },
    {
        "id": 256,
        "name": {
            "english": "Combusken"
        },
        "type": [
            "Fire",
            "Fighting"
        ],
        "base": {
            "HP": 60,
            "Attack": 85,
            "Defense": 60,
            "Sp. Attack": 85,
            "Sp. Defense": 60,
            "Speed": 55
        }
    },
    {
        "id": 257,
        "name": {
            "english": "Blaziken"
        },
        "type": [
            "Fire",
            "Fighting"
        ],
        "base": {
            "HP": 80,
            "Attack": 120,
            "Defense": 70,
            "Sp. Attack": 110,
            "Sp. Defense": 70,
            "Speed": 80
        }
    },
    {
        "id": 258,
        "name": {
            "english": "Mudkip"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 50,
            "Attack": 70,
            "Defense": 50,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 40
        }
    },
    {
        "id": 259,
        "name": {
            "english": "Marshtomp"
        },
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "HP": 70,
            "Attack": 85,
            "Defense": 70,
            "Sp. Attack": 60,
            "Sp. Defense": 70,
            "Speed": 50
        }
    },
    {
        "id": 260,
        "name": {
            "english": "Swampert"
        },
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "HP": 100,
            "Attack": 110,
            "Defense": 90,
            "Sp. Attack": 85,
            "Sp. Defense": 90,
            "Speed": 60
        }
    },
    {
        "id": 261,
        "name": {
            "english": "Poochyena"
        },
        "type": [
            "Dark"
        ],
        "base": {
            "HP": 35,
            "Attack": 55,
            "Defense": 35,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            "Speed": 35
        }
    },
    {
        "id": 262,
        "name": {
            "english": "Mightyena"
        },
        "type": [
            "Dark"
        ],
        "base": {
            "HP": 70,
            "Attack": 90,
            "Defense": 70,
            "Sp. Attack": 60,
            "Sp. Defense": 60,
            "Speed": 70
        }
    },
    {
        "id": 263,
        "name": {
            "english": "Zigzagoon"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 38,
            "Attack": 30,
            "Defense": 41,
            "Sp. Attack": 30,
            "Sp. Defense": 41,
            "Speed": 60
        }
    },
    {
        "id": 264,
        "name": {
            "english": "Linoone"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 78,
            "Attack": 70,
            "Defense": 61,
            "Sp. Attack": 50,
            "Sp. Defense": 61,
            "Speed": 100
        }
    },
    {
        "id": 265,
        "name": {
            "english": "Wurmple"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 45,
            "Attack": 45,
            "Defense": 35,
            "Sp. Attack": 20,
            "Sp. Defense": 30,
            "Speed": 20
        }
    },
    {
        "id": 266,
        "name": {
            "english": "Silcoon"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 50,
            "Attack": 35,
            "Defense": 55,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            "Speed": 15
        }
    },
    {
        "id": 267,
        "name": {
            "english": "Beautifly"
        },
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 60,
            "Attack": 70,
            "Defense": 50,
            "Sp. Attack": 100,
            "Sp. Defense": 50,
            "Speed": 65
        }
    },
    {
        "id": 268,
        "name": {
            "english": "Cascoon"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 50,
            "Attack": 35,
            "Defense": 55,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            "Speed": 15
        }
    },
    {
        "id": 269,
        "name": {
            "english": "Dustox"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 60,
            "Attack": 50,
            "Defense": 70,
            "Sp. Attack": 50,
            "Sp. Defense": 90,
            "Speed": 65
        }
    },
    {
        "id": 270,
        "name": {
            "english": "Lotad"
        },
        "type": [
            "Water",
            "Grass"
        ],
        "base": {
            "HP": 40,
            "Attack": 30,
            "Defense": 30,
            "Sp. Attack": 40,
            "Sp. Defense": 50,
            "Speed": 30
        }
    },
    {
        "id": 271,
        "name": {
            "english": "Lombre"
        },
        "type": [
            "Water",
            "Grass"
        ],
        "base": {
            "HP": 60,
            "Attack": 50,
            "Defense": 50,
            "Sp. Attack": 60,
            "Sp. Defense": 70,
            "Speed": 50
        }
    },
    {
        "id": 272,
        "name": {
            "english": "Ludicolo"
        },
        "type": [
            "Water",
            "Grass"
        ],
        "base": {
            "HP": 80,
            "Attack": 70,
            "Defense": 70,
            "Sp. Attack": 90,
            "Sp. Defense": 100,
            "Speed": 70
        }
    },
    {
        "id": 273,
        "name": {
            "english": "Seedot"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 40,
            "Attack": 40,
            "Defense": 50,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            "Speed": 30
        }
    },
    {
        "id": 274,
        "name": {
            "english": "Nuzleaf"
        },
        "type": [
            "Grass",
            "Dark"
        ],
        "base": {
            "HP": 70,
            "Attack": 70,
            "Defense": 40,
            "Sp. Attack": 60,
            "Sp. Defense": 40,
            "Speed": 60
        }
    },
    {
        "id": 275,
        "name": {
            "english": "Shiftry"
        },
        "type": [
            "Grass",
            "Dark"
        ],
        "base": {
            "HP": 90,
            "Attack": 100,
            "Defense": 60,
            "Sp. Attack": 90,
            "Sp. Defense": 60,
            "Speed": 80
        }
    },
    {
        "id": 276,
        "name": {
            "english": "Taillow"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 40,
            "Attack": 55,
            "Defense": 30,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            "Speed": 85
        }
    },
    {
        "id": 277,
        "name": {
            "english": "Swellow"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 60,
            "Attack": 85,
            "Defense": 60,
            "Sp. Attack": 75,
            "Sp. Defense": 50,
            "Speed": 125
        }
    },
    {
        "id": 278,
        "name": {
            "english": "Wingull"
        },
        "type": [
            "Water",
            "Flying"
        ],
        "base": {
            "HP": 40,
            "Attack": 30,
            "Defense": 30,
            "Sp. Attack": 55,
            "Sp. Defense": 30,
            "Speed": 85
        }
    },
    {
        "id": 279,
        "name": {
            "english": "Pelipper"
        },
        "type": [
            "Water",
            "Flying"
        ],
        "base": {
            "HP": 60,
            "Attack": 50,
            "Defense": 100,
            "Sp. Attack": 95,
            "Sp. Defense": 70,
            "Speed": 65
        }
    },
    {
        "id": 280,
        "name": {
            "english": "Ralts"
        },
        "type": [
            "Psychic",
            "Fairy"
        ],
        "base": {
            "HP": 28,
            "Attack": 25,
            "Defense": 25,
            "Sp. Attack": 45,
            "Sp. Defense": 35,
            "Speed": 40
        }
    },
    {
        "id": 281,
        "name": {
            "english": "Kirlia"
        },
        "type": [
            "Psychic",
            "Fairy"
        ],
        "base": {
            "HP": 38,
            "Attack": 35,
            "Defense": 35,
            "Sp. Attack": 65,
            "Sp. Defense": 55,
            "Speed": 50
        }
    },
    {
        "id": 282,
        "name": {
            "english": "Gardevoir"
        },
        "type": [
            "Psychic",
            "Fairy"
        ],
        "base": {
            "HP": 68,
            "Attack": 65,
            "Defense": 65,
            "Sp. Attack": 125,
            "Sp. Defense": 115,
            "Speed": 80
        }
    },
    {
        "id": 283,
        "name": {
            "english": "Surskit"
        },
        "type": [
            "Bug",
            "Water"
        ],
        "base": {
            "HP": 40,
            "Attack": 30,
            "Defense": 32,
            "Sp. Attack": 50,
            "Sp. Defense": 52,
            "Speed": 65
        }
    },
    {
        "id": 284,
        "name": {
            "english": "Masquerain"
        },
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 70,
            "Attack": 60,
            "Defense": 62,
            "Sp. Attack": 100,
            "Sp. Defense": 82,
            "Speed": 80
        }
    },
    {
        "id": 285,
        "name": {
            "english": "Shroomish"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 60,
            "Attack": 40,
            "Defense": 60,
            "Sp. Attack": 40,
            "Sp. Defense": 60,
            "Speed": 35
        }
    },
    {
        "id": 286,
        "name": {
            "english": "Breloom"
        },
        "type": [
            "Grass",
            "Fighting"
        ],
        "base": {
            "HP": 60,
            "Attack": 130,
            "Defense": 80,
            "Sp. Attack": 60,
            "Sp. Defense": 60,
            "Speed": 70
        }
    },
    {
        "id": 287,
        "name": {
            "english": "Slakoth"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 60,
            "Attack": 60,
            "Defense": 60,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            "Speed": 30
        }
    },
    {
        "id": 288,
        "name": {
            "english": "Vigoroth"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 80,
            "Attack": 80,
            "Defense": 80,
            "Sp. Attack": 55,
            "Sp. Defense": 55,
            "Speed": 90
        }
    },
    {
        "id": 289,
        "name": {
            "english": "Slaking"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 150,
            "Attack": 160,
            "Defense": 100,
            "Sp. Attack": 95,
            "Sp. Defense": 65,
            "Speed": 100
        }
    },
    {
        "id": 290,
        "name": {
            "english": "Nincada"
        },
        "type": [
            "Bug",
            "Ground"
        ],
        "base": {
            "HP": 31,
            "Attack": 45,
            "Defense": 90,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            "Speed": 40
        }
    },
    {
        "id": 291,
        "name": {
            "english": "Ninjask"
        },
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 61,
            "Attack": 90,
            "Defense": 45,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 160
        }
    },
    {
        "id": 292,
        "name": {
            "english": "Shedinja"
        },
        "type": [
            "Bug",
            "Ghost"
        ],
        "base": {
            "HP": 1,
            "Attack": 90,
            "Defense": 45,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            "Speed": 40
        }
    },
    {
        "id": 293,
        "name": {
            "english": "Whismur"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 64,
            "Attack": 51,
            "Defense": 23,
            "Sp. Attack": 51,
            "Sp. Defense": 23,
            "Speed": 28
        }
    },
    {
        "id": 294,
        "name": {
            "english": "Loudred"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 84,
            "Attack": 71,
            "Defense": 43,
            "Sp. Attack": 71,
            "Sp. Defense": 43,
            "Speed": 48
        }
    },
    {
        "id": 295,
        "name": {
            "english": "Exploud"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 104,
            "Attack": 91,
            "Defense": 63,
            "Sp. Attack": 91,
            "Sp. Defense": 73,
            "Speed": 68
        }
    },
    {
        "id": 296,
        "name": {
            "english": "Makuhita"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 72,
            "Attack": 60,
            "Defense": 30,
            "Sp. Attack": 20,
            "Sp. Defense": 30,
            "Speed": 25
        }
    },
    {
        "id": 297,
        "name": {
            "english": "Hariyama"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 144,
            "Attack": 120,
            "Defense": 60,
            "Sp. Attack": 40,
            "Sp. Defense": 60,
            "Speed": 50
        }
    },
    {
        "id": 298,
        "name": {
            "english": "Azurill"
        },
        "type": [
            "Normal",
            "Fairy"
        ],
        "base": {
            "HP": 50,
            "Attack": 20,
            "Defense": 40,
            "Sp. Attack": 20,
            "Sp. Defense": 40,
            "Speed": 20
        }
    },
    {
        "id": 299,
        "name": {
            "english": "Nosepass"
        },
        "type": [
            "Rock"
        ],
        "base": {
            "HP": 30,
            "Attack": 45,
            "Defense": 135,
            "Sp. Attack": 45,
            "Sp. Defense": 90,
            "Speed": 30
        }
    },
    {
        "id": 300,
        "name": {
            "english": "Skitty"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 50,
            "Attack": 45,
            "Defense": 45,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            "Speed": 50
        }
    },
    {
        "id": 301,
        "name": {
            "english": "Delcatty"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 70,
            "Attack": 65,
            "Defense": 65,
            "Sp. Attack": 55,
            "Sp. Defense": 55,
            "Speed": 90
        }
    },
    {
        "id": 302,
        "name": {
            "english": "Sableye"
        },
        "type": [
            "Dark",
            "Ghost"
        ],
        "base": {
            "HP": 50,
            "Attack": 75,
            "Defense": 75,
            "Sp. Attack": 65,
            "Sp. Defense": 65,
            "Speed": 50
        }
    },
    {
        "id": 303,
        "name": {
            "english": "Mawile"
        },
        "type": [
            "Steel",
            "Fairy"
        ],
        "base": {
            "HP": 50,
            "Attack": 85,
            "Defense": 85,
            "Sp. Attack": 55,
            "Sp. Defense": 55,
            "Speed": 50
        }
    },
    {
        "id": 304,
        "name": {
            "english": "Aron"
        },
        "type": [
            "Steel",
            "Rock"
        ],
        "base": {
            "HP": 50,
            "Attack": 70,
            "Defense": 100,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 30
        }
    },
    {
        "id": 305,
        "name": {
            "english": "Lairon"
        },
        "type": [
            "Steel",
            "Rock"
        ],
        "base": {
            "HP": 60,
            "Attack": 90,
            "Defense": 140,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 40
        }
    },
    {
        "id": 306,
        "name": {
            "english": "Aggron"
        },
        "type": [
            "Steel",
            "Rock"
        ],
        "base": {
            "HP": 70,
            "Attack": 110,
            "Defense": 180,
            "Sp. Attack": 60,
            "Sp. Defense": 60,
            "Speed": 50
        }
    },
    {
        "id": 307,
        "name": {
            "english": "Meditite"
        },
        "type": [
            "Fighting",
            "Psychic"
        ],
        "base": {
            "HP": 30,
            "Attack": 40,
            "Defense": 55,
            "Sp. Attack": 40,
            "Sp. Defense": 55,
            "Speed": 60
        }
    },
    {
        "id": 308,
        "name": {
            "english": "Medicham"
        },
        "type": [
            "Fighting",
            "Psychic"
        ],
        "base": {
            "HP": 60,
            "Attack": 60,
            "Defense": 75,
            "Sp. Attack": 60,
            "Sp. Defense": 75,
            "Speed": 80
        }
    },
    {
        "id": 309,
        "name": {
            "english": "Electrike"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 40,
            "Attack": 45,
            "Defense": 40,
            "Sp. Attack": 65,
            "Sp. Defense": 40,
            "Speed": 65
        }
    },
    {
        "id": 310,
        "name": {
            "english": "Manectric"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 70,
            "Attack": 75,
            "Defense": 60,
            "Sp. Attack": 105,
            "Sp. Defense": 60,
            "Speed": 105
        }
    },
    {
        "id": 311,
        "name": {
            "english": "Plusle"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 60,
            "Attack": 50,
            "Defense": 40,
            "Sp. Attack": 85,
            "Sp. Defense": 75,
            "Speed": 95
        }
    },
    {
        "id": 312,
        "name": {
            "english": "Minun"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 60,
            "Attack": 40,
            "Defense": 50,
            "Sp. Attack": 75,
            "Sp. Defense": 85,
            "Speed": 95
        }
    },
    {
        "id": 313,
        "name": {
            "english": "Volbeat"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 65,
            "Attack": 73,
            "Defense": 75,
            "Sp. Attack": 47,
            "Sp. Defense": 85,
            "Speed": 85
        }
    },
    {
        "id": 314,
        "name": {
            "english": "Illumise"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 65,
            "Attack": 47,
            "Defense": 75,
            "Sp. Attack": 73,
            "Sp. Defense": 85,
            "Speed": 85
        }
    },
    {
        "id": 315,
        "name": {
            "english": "Roselia"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 50,
            "Attack": 60,
            "Defense": 45,
            "Sp. Attack": 100,
            "Sp. Defense": 80,
            "Speed": 65
        }
    },
    {
        "id": 316,
        "name": {
            "english": "Gulpin"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 70,
            "Attack": 43,
            "Defense": 53,
            "Sp. Attack": 43,
            "Sp. Defense": 53,
            "Speed": 40
        }
    },
    {
        "id": 317,
        "name": {
            "english": "Swalot"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 100,
            "Attack": 73,
            "Defense": 83,
            "Sp. Attack": 73,
            "Sp. Defense": 83,
            "Speed": 55
        }
    },
    {
        "id": 318,
        "name": {
            "english": "Carvanha"
        },
        "type": [
            "Water",
            "Dark"
        ],
        "base": {
            "HP": 45,
            "Attack": 90,
            "Defense": 20,
            "Sp. Attack": 65,
            "Sp. Defense": 20,
            "Speed": 65
        }
    },
    {
        "id": 319,
        "name": {
            "english": "Sharpedo"
        },
        "type": [
            "Water",
            "Dark"
        ],
        "base": {
            "HP": 70,
            "Attack": 120,
            "Defense": 40,
            "Sp. Attack": 95,
            "Sp. Defense": 40,
            "Speed": 95
        }
    },
    {
        "id": 320,
        "name": {
            "english": "Wailmer"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 130,
            "Attack": 70,
            "Defense": 35,
            "Sp. Attack": 70,
            "Sp. Defense": 35,
            "Speed": 60
        }
    },
    {
        "id": 321,
        "name": {
            "english": "Wailord"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 170,
            "Attack": 90,
            "Defense": 45,
            "Sp. Attack": 90,
            "Sp. Defense": 45,
            "Speed": 60
        }
    },
    {
        "id": 322,
        "name": {
            "english": "Numel"
        },
        "type": [
            "Fire",
            "Ground"
        ],
        "base": {
            "HP": 60,
            "Attack": 60,
            "Defense": 40,
            "Sp. Attack": 65,
            "Sp. Defense": 45,
            "Speed": 35
        }
    },
    {
        "id": 323,
        "name": {
            "english": "Camerupt"
        },
        "type": [
            "Fire",
            "Ground"
        ],
        "base": {
            "HP": 70,
            "Attack": 100,
            "Defense": 70,
            "Sp. Attack": 105,
            "Sp. Defense": 75,
            "Speed": 40
        }
    },
    {
        "id": 324,
        "name": {
            "english": "Torkoal"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 70,
            "Attack": 85,
            "Defense": 140,
            "Sp. Attack": 85,
            "Sp. Defense": 70,
            "Speed": 20
        }
    },
    {
        "id": 325,
        "name": {
            "english": "Spoink"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 60,
            "Attack": 25,
            "Defense": 35,
            "Sp. Attack": 70,
            "Sp. Defense": 80,
            "Speed": 60
        }
    },
    {
        "id": 326,
        "name": {
            "english": "Grumpig"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 80,
            "Attack": 45,
            "Defense": 65,
            "Sp. Attack": 90,
            "Sp. Defense": 110,
            "Speed": 80
        }
    },
    {
        "id": 327,
        "name": {
            "english": "Spinda"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 60,
            "Attack": 60,
            "Defense": 60,
            "Sp. Attack": 60,
            "Sp. Defense": 60,
            "Speed": 60
        }
    },
    {
        "id": 328,
        "name": {
            "english": "Trapinch"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 45,
            "Attack": 100,
            "Defense": 45,
            "Sp. Attack": 45,
            "Sp. Defense": 45,
            "Speed": 10
        }
    },
    {
        "id": 329,
        "name": {
            "english": "Vibrava"
        },
        "type": [
            "Ground",
            "Dragon"
        ],
        "base": {
            "HP": 50,
            "Attack": 70,
            "Defense": 50,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 70
        }
    },
    {
        "id": 330,
        "name": {
            "english": "Flygon"
        },
        "type": [
            "Ground",
            "Dragon"
        ],
        "base": {
            "HP": 80,
            "Attack": 100,
            "Defense": 80,
            "Sp. Attack": 80,
            "Sp. Defense": 80,
            "Speed": 100
        }
    },
    {
        "id": 331,
        "name": {
            "english": "Cacnea"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 50,
            "Attack": 85,
            "Defense": 40,
            "Sp. Attack": 85,
            "Sp. Defense": 40,
            "Speed": 35
        }
    },
    {
        "id": 332,
        "name": {
            "english": "Cacturne"
        },
        "type": [
            "Grass",
            "Dark"
        ],
        "base": {
            "HP": 70,
            "Attack": 115,
            "Defense": 60,
            "Sp. Attack": 115,
            "Sp. Defense": 60,
            "Speed": 55
        }
    },
    {
        "id": 333,
        "name": {
            "english": "Swablu"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 45,
            "Attack": 40,
            "Defense": 60,
            "Sp. Attack": 40,
            "Sp. Defense": 75,
            "Speed": 50
        }
    },
    {
        "id": 334,
        "name": {
            "english": "Altaria"
        },
        "type": [
            "Dragon",
            "Flying"
        ],
        "base": {
            "HP": 75,
            "Attack": 70,
            "Defense": 90,
            "Sp. Attack": 70,
            "Sp. Defense": 105,
            "Speed": 80
        }
    },
    {
        "id": 335,
        "name": {
            "english": "Zangoose"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 73,
            "Attack": 115,
            "Defense": 60,
            "Sp. Attack": 60,
            "Sp. Defense": 60,
            "Speed": 90
        }
    },
    {
        "id": 336,
        "name": {
            "english": "Seviper"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 73,
            "Attack": 100,
            "Defense": 60,
            "Sp. Attack": 100,
            "Sp. Defense": 60,
            "Speed": 65
        }
    },
    {
        "id": 337,
        "name": {
            "english": "Lunatone"
        },
        "type": [
            "Rock",
            "Psychic"
        ],
        "base": {
            "HP": 90,
            "Attack": 55,
            "Defense": 65,
            "Sp. Attack": 95,
            "Sp. Defense": 85,
            "Speed": 70
        }
    },
    {
        "id": 338,
        "name": {
            "english": "Solrock"
        },
        "type": [
            "Rock",
            "Psychic"
        ],
        "base": {
            "HP": 90,
            "Attack": 95,
            "Defense": 85,
            "Sp. Attack": 55,
            "Sp. Defense": 65,
            "Speed": 70
        }
    },
    {
        "id": 339,
        "name": {
            "english": "Barboach"
        },
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "HP": 50,
            "Attack": 48,
            "Defense": 43,
            "Sp. Attack": 46,
            "Sp. Defense": 41,
            "Speed": 60
        }
    },
    {
        "id": 340,
        "name": {
            "english": "Whiscash"
        },
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "HP": 110,
            "Attack": 78,
            "Defense": 73,
            "Sp. Attack": 76,
            "Sp. Defense": 71,
            "Speed": 60
        }
    },
    {
        "id": 341,
        "name": {
            "english": "Corphish"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 43,
            "Attack": 80,
            "Defense": 65,
            "Sp. Attack": 50,
            "Sp. Defense": 35,
            "Speed": 35
        }
    },
    {
        "id": 342,
        "name": {
            "english": "Crawdaunt"
        },
        "type": [
            "Water",
            "Dark"
        ],
        "base": {
            "HP": 63,
            "Attack": 120,
            "Defense": 85,
            "Sp. Attack": 90,
            "Sp. Defense": 55,
            "Speed": 55
        }
    },
    {
        "id": 343,
        "name": {
            "english": "Baltoy"
        },
        "type": [
            "Ground",
            "Psychic"
        ],
        "base": {
            "HP": 40,
            "Attack": 40,
            "Defense": 55,
            "Sp. Attack": 40,
            "Sp. Defense": 70,
            "Speed": 55
        }
    },
    {
        "id": 344,
        "name": {
            "english": "Claydol"
        },
        "type": [
            "Ground",
            "Psychic"
        ],
        "base": {
            "HP": 60,
            "Attack": 70,
            "Defense": 105,
            "Sp. Attack": 70,
            "Sp. Defense": 120,
            "Speed": 75
        }
    },
    {
        "id": 345,
        "name": {
            "english": "Lileep"
        },
        "type": [
            "Rock",
            "Grass"
        ],
        "base": {
            "HP": 66,
            "Attack": 41,
            "Defense": 77,
            "Sp. Attack": 61,
            "Sp. Defense": 87,
            "Speed": 23
        }
    },
    {
        "id": 346,
        "name": {
            "english": "Cradily"
        },
        "type": [
            "Rock",
            "Grass"
        ],
        "base": {
            "HP": 86,
            "Attack": 81,
            "Defense": 97,
            "Sp. Attack": 81,
            "Sp. Defense": 107,
            "Speed": 43
        }
    },
    {
        "id": 347,
        "name": {
            "english": "Anorith"
        },
        "type": [
            "Rock",
            "Bug"
        ],
        "base": {
            "HP": 45,
            "Attack": 95,
            "Defense": 50,
            "Sp. Attack": 40,
            "Sp. Defense": 50,
            "Speed": 75
        }
    },
    {
        "id": 348,
        "name": {
            "english": "Armaldo"
        },
        "type": [
            "Rock",
            "Bug"
        ],
        "base": {
            "HP": 75,
            "Attack": 125,
            "Defense": 100,
            "Sp. Attack": 70,
            "Sp. Defense": 80,
            "Speed": 45
        }
    },
    {
        "id": 349,
        "name": {
            "english": "Feebas"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 20,
            "Attack": 15,
            "Defense": 20,
            "Sp. Attack": 10,
            "Sp. Defense": 55,
            "Speed": 80
        }
    },
    {
        "id": 350,
        "name": {
            "english": "Milotic"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 95,
            "Attack": 60,
            "Defense": 79,
            "Sp. Attack": 100,
            "Sp. Defense": 125,
            "Speed": 81
        }
    },
    {
        "id": 351,
        "name": {
            "english": "Castform"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 70,
            "Attack": 70,
            "Defense": 70,
            "Sp. Attack": 70,
            "Sp. Defense": 70,
            "Speed": 70
        }
    },
    {
        "id": 352,
        "name": {
            "english": "Kecleon"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 60,
            "Attack": 90,
            "Defense": 70,
            "Sp. Attack": 60,
            "Sp. Defense": 120,
            "Speed": 40
        }
    },
    {
        "id": 353,
        "name": {
            "english": "Shuppet"
        },
        "type": [
            "Ghost"
        ],
        "base": {
            "HP": 44,
            "Attack": 75,
            "Defense": 35,
            "Sp. Attack": 63,
            "Sp. Defense": 33,
            "Speed": 45
        }
    },
    {
        "id": 354,
        "name": {
            "english": "Banette"
        },
        "type": [
            "Ghost"
        ],
        "base": {
            "HP": 64,
            "Attack": 115,
            "Defense": 65,
            "Sp. Attack": 83,
            "Sp. Defense": 63,
            "Speed": 65
        }
    },
    {
        "id": 355,
        "name": {
            "english": "Duskull"
        },
        "type": [
            "Ghost"
        ],
        "base": {
            "HP": 20,
            "Attack": 40,
            "Defense": 90,
            "Sp. Attack": 30,
            "Sp. Defense": 90,
            "Speed": 25
        }
    },
    {
        "id": 356,
        "name": {
            "english": "Dusclops"
        },
        "type": [
            "Ghost"
        ],
        "base": {
            "HP": 40,
            "Attack": 70,
            "Defense": 130,
            "Sp. Attack": 60,
            "Sp. Defense": 130,
            "Speed": 25
        }
    },
    {
        "id": 357,
        "name": {
            "english": "Tropius"
        },
        "type": [
            "Grass",
            "Flying"
        ],
        "base": {
            "HP": 99,
            "Attack": 68,
            "Defense": 83,
            "Sp. Attack": 72,
            "Sp. Defense": 87,
            "Speed": 51
        }
    },
    {
        "id": 358,
        "name": {
            "english": "Chimecho"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 75,
            "Attack": 50,
            "Defense": 80,
            "Sp. Attack": 95,
            "Sp. Defense": 90,
            "Speed": 65
        }
    },
    {
        "id": 359,
        "name": {
            "english": "Absol"
        },
        "type": [
            "Dark"
        ],
        "base": {
            "HP": 65,
            "Attack": 130,
            "Defense": 60,
            "Sp. Attack": 75,
            "Sp. Defense": 60,
            "Speed": 75
        }
    },
    {
        "id": 360,
        "name": {
            "english": "Wynaut"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 95,
            "Attack": 23,
            "Defense": 48,
            "Sp. Attack": 23,
            "Sp. Defense": 48,
            "Speed": 23
        }
    },
    {
        "id": 361,
        "name": {
            "english": "Snorunt"
        },
        "type": [
            "Ice"
        ],
        "base": {
            "HP": 50,
            "Attack": 50,
            "Defense": 50,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 50
        }
    },
    {
        "id": 362,
        "name": {
            "english": "Glalie"
        },
        "type": [
            "Ice"
        ],
        "base": {
            "HP": 80,
            "Attack": 80,
            "Defense": 80,
            "Sp. Attack": 80,
            "Sp. Defense": 80,
            "Speed": 80
        }
    },
    {
        "id": 363,
        "name": {
            "english": "Spheal"
        },
        "type": [
            "Ice",
            "Water"
        ],
        "base": {
            "HP": 70,
            "Attack": 40,
            "Defense": 50,
            "Sp. Attack": 55,
            "Sp. Defense": 50,
            "Speed": 25
        }
    },
    {
        "id": 364,
        "name": {
            "english": "Sealeo"
        },
        "type": [
            "Ice",
            "Water"
        ],
        "base": {
            "HP": 90,
            "Attack": 60,
            "Defense": 70,
            "Sp. Attack": 75,
            "Sp. Defense": 70,
            "Speed": 45
        }
    },
    {
        "id": 365,
        "name": {
            "english": "Walrein"
        },
        "type": [
            "Ice",
            "Water"
        ],
        "base": {
            "HP": 110,
            "Attack": 80,
            "Defense": 90,
            "Sp. Attack": 95,
            "Sp. Defense": 90,
            "Speed": 65
        }
    },
    {
        "id": 366,
        "name": {
            "english": "Clamperl"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 35,
            "Attack": 64,
            "Defense": 85,
            "Sp. Attack": 74,
            "Sp. Defense": 55,
            "Speed": 32
        }
    },
    {
        "id": 367,
        "name": {
            "english": "Huntail"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 55,
            "Attack": 104,
            "Defense": 105,
            "Sp. Attack": 94,
            "Sp. Defense": 75,
            "Speed": 52
        }
    },
    {
        "id": 368,
        "name": {
            "english": "Gorebyss"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 55,
            "Attack": 84,
            "Defense": 105,
            "Sp. Attack": 114,
            "Sp. Defense": 75,
            "Speed": 52
        }
    },
    {
        "id": 369,
        "name": {
            "english": "Relicanth"
        },
        "type": [
            "Water",
            "Rock"
        ],
        "base": {
            "HP": 100,
            "Attack": 90,
            "Defense": 130,
            "Sp. Attack": 45,
            "Sp. Defense": 65,
            "Speed": 55
        }
    },
    {
        "id": 370,
        "name": {
            "english": "Luvdisc"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 43,
            "Attack": 30,
            "Defense": 55,
            "Sp. Attack": 40,
            "Sp. Defense": 65,
            "Speed": 97
        }
    },
    {
        "id": 371,
        "name": {
            "english": "Bagon"
        },
        "type": [
            "Dragon"
        ],
        "base": {
            "HP": 45,
            "Attack": 75,
            "Defense": 60,
            "Sp. Attack": 40,
            "Sp. Defense": 30,
            "Speed": 50
        }
    },
    {
        "id": 372,
        "name": {
            "english": "Shelgon"
        },
        "type": [
            "Dragon"
        ],
        "base": {
            "HP": 65,
            "Attack": 95,
            "Defense": 100,
            "Sp. Attack": 60,
            "Sp. Defense": 50,
            "Speed": 50
        }
    },
    {
        "id": 373,
        "name": {
            "english": "Salamence"
        },
        "type": [
            "Dragon",
            "Flying"
        ],
        "base": {
            "HP": 95,
            "Attack": 135,
            "Defense": 80,
            "Sp. Attack": 110,
            "Sp. Defense": 80,
            "Speed": 100
        }
    },
    {
        "id": 374,
        "name": {
            "english": "Beldum"
        },
        "type": [
            "Steel",
            "Psychic"
        ],
        "base": {
            "HP": 40,
            "Attack": 55,
            "Defense": 80,
            "Sp. Attack": 35,
            "Sp. Defense": 60,
            "Speed": 30
        }
    },
    {
        "id": 375,
        "name": {
            "english": "Metang"
        },
        "type": [
            "Steel",
            "Psychic"
        ],
        "base": {
            "HP": 60,
            "Attack": 75,
            "Defense": 100,
            "Sp. Attack": 55,
            "Sp. Defense": 80,
            "Speed": 50
        }
    },
    {
        "id": 376,
        "name": {
            "english": "Metagross"
        },
        "type": [
            "Steel",
            "Psychic"
        ],
        "base": {
            "HP": 80,
            "Attack": 135,
            "Defense": 130,
            "Sp. Attack": 95,
            "Sp. Defense": 90,
            "Speed": 70
        }
    },
    {
        "id": 377,
        "name": {
            "english": "Regirock"
        },
        "type": [
            "Rock"
        ],
        "base": {
            "HP": 80,
            "Attack": 100,
            "Defense": 200,
            "Sp. Attack": 50,
            "Sp. Defense": 100,
            "Speed": 50
        }
    },
    {
        "id": 378,
        "name": {
            "english": "Regice"
        },
        "type": [
            "Ice"
        ],
        "base": {
            "HP": 80,
            "Attack": 50,
            "Defense": 100,
            "Sp. Attack": 100,
            "Sp. Defense": 200,
            "Speed": 50
        }
    },
    {
        "id": 379,
        "name": {
            "english": "Registeel"
        },
        "type": [
            "Steel"
        ],
        "base": {
            "HP": 80,
            "Attack": 75,
            "Defense": 150,
            "Sp. Attack": 75,
            "Sp. Defense": 150,
            "Speed": 50
        }
    },
    {
        "id": 380,
        "name": {
            "english": "Latias"
        },
        "type": [
            "Dragon",
            "Psychic"
        ],
        "base": {
            "HP": 80,
            "Attack": 80,
            "Defense": 90,
            "Sp. Attack": 110,
            "Sp. Defense": 130,
            "Speed": 110
        }
    },
    {
        "id": 381,
        "name": {
            "english": "Latios"
        },
        "type": [
            "Dragon",
            "Psychic"
        ],
        "base": {
            "HP": 80,
            "Attack": 90,
            "Defense": 80,
            "Sp. Attack": 130,
            "Sp. Defense": 110,
            "Speed": 110
        }
    },
    {
        "id": 382,
        "name": {
            "english": "Kyogre"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 100,
            "Attack": 100,
            "Defense": 90,
            "Sp. Attack": 150,
            "Sp. Defense": 140,
            "Speed": 90
        }
    },
    {
        "id": 383,
        "name": {
            "english": "Groudon"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 100,
            "Attack": 150,
            "Defense": 140,
            "Sp. Attack": 100,
            "Sp. Defense": 90,
            "Speed": 90
        }
    },
    {
        "id": 384,
        "name": {
            "english": "Rayquaza"
        },
        "type": [
            "Dragon",
            "Flying"
        ],
        "base": {
            "HP": 105,
            "Attack": 150,
            "Defense": 90,
            "Sp. Attack": 150,
            "Sp. Defense": 90,
            "Speed": 95
        }
    },
    {
        "id": 385,
        "name": {
            "english": "Jirachi"
        },
        "type": [
            "Steel",
            "Psychic"
        ],
        "base": {
            "HP": 100,
            "Attack": 100,
            "Defense": 100,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            "Speed": 100
        }
    },
    {
        "id": 386,
        "name": {
            "english": "Deoxys"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 50,
            "Attack": 150,
            "Defense": 50,
            "Sp. Attack": 150,
            "Sp. Defense": 50,
            "Speed": 150
        }
    },
    {
        "id": 387,
        "name": {
            "english": "Turtwig"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 55,
            "Attack": 68,
            "Defense": 64,
            "Sp. Attack": 45,
            "Sp. Defense": 55,
            "Speed": 31
        }
    },
    {
        "id": 388,
        "name": {
            "english": "Grotle"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 75,
            "Attack": 89,
            "Defense": 85,
            "Sp. Attack": 55,
            "Sp. Defense": 65,
            "Speed": 36
        }
    },
    {
        "id": 389,
        "name": {
            "english": "Torterra"
        },
        "type": [
            "Grass",
            "Ground"
        ],
        "base": {
            "HP": 95,
            "Attack": 109,
            "Defense": 105,
            "Sp. Attack": 75,
            "Sp. Defense": 85,
            "Speed": 56
        }
    },
    {
        "id": 390,
        "name": {
            "english": "Chimchar"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 44,
            "Attack": 58,
            "Defense": 44,
            "Sp. Attack": 58,
            "Sp. Defense": 44,
            "Speed": 61
        }
    },
    {
        "id": 391,
        "name": {
            "english": "Monferno"
        },
        "type": [
            "Fire",
            "Fighting"
        ],
        "base": {
            "HP": 64,
            "Attack": 78,
            "Defense": 52,
            "Sp. Attack": 78,
            "Sp. Defense": 52,
            "Speed": 81
        }
    },
    {
        "id": 392,
        "name": {
            "english": "Infernape"
        },
        "type": [
            "Fire",
            "Fighting"
        ],
        "base": {
            "HP": 76,
            "Attack": 104,
            "Defense": 71,
            "Sp. Attack": 104,
            "Sp. Defense": 71,
            "Speed": 108
        }
    },
    {
        "id": 393,
        "name": {
            "english": "Piplup"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 53,
            "Attack": 51,
            "Defense": 53,
            "Sp. Attack": 61,
            "Sp. Defense": 56,
            "Speed": 40
        }
    },
    {
        "id": 394,
        "name": {
            "english": "Prinplup"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 64,
            "Attack": 66,
            "Defense": 68,
            "Sp. Attack": 81,
            "Sp. Defense": 76,
            "Speed": 50
        }
    },
    {
        "id": 395,
        "name": {
            "english": "Empoleon"
        },
        "type": [
            "Water",
            "Steel"
        ],
        "base": {
            "HP": 84,
            "Attack": 86,
            "Defense": 88,
            "Sp. Attack": 111,
            "Sp. Defense": 101,
            "Speed": 60
        }
    },
    {
        "id": 396,
        "name": {
            "english": "Starly"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 40,
            "Attack": 55,
            "Defense": 30,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            "Speed": 60
        }
    },
    {
        "id": 397,
        "name": {
            "english": "Staravia"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 55,
            "Attack": 75,
            "Defense": 50,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 80
        }
    },
    {
        "id": 398,
        "name": {
            "english": "Staraptor"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 85,
            "Attack": 120,
            "Defense": 70,
            "Sp. Attack": 50,
            "Sp. Defense": 60,
            "Speed": 100
        }
    },
    {
        "id": 399,
        "name": {
            "english": "Bidoof"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 59,
            "Attack": 45,
            "Defense": 40,
            "Sp. Attack": 35,
            "Sp. Defense": 40,
            "Speed": 31
        }
    },
    {
        "id": 400,
        "name": {
            "english": "Bibarel"
        },
        "type": [
            "Normal",
            "Water"
        ],
        "base": {
            "HP": 79,
            "Attack": 85,
            "Defense": 60,
            "Sp. Attack": 55,
            "Sp. Defense": 60,
            "Speed": 71
        }
    },
    {
        "id": 401,
        "name": {
            "english": "Kricketot"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 37,
            "Attack": 25,
            "Defense": 41,
            "Sp. Attack": 25,
            "Sp. Defense": 41,
            "Speed": 25
        }
    },
    {
        "id": 402,
        "name": {
            "english": "Kricketune"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 77,
            "Attack": 85,
            "Defense": 51,
            "Sp. Attack": 55,
            "Sp. Defense": 51,
            "Speed": 65
        }
    },
    {
        "id": 403,
        "name": {
            "english": "Shinx"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 45,
            "Attack": 65,
            "Defense": 34,
            "Sp. Attack": 40,
            "Sp. Defense": 34,
            "Speed": 45
        }
    },
    {
        "id": 404,
        "name": {
            "english": "Luxio"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 60,
            "Attack": 85,
            "Defense": 49,
            "Sp. Attack": 60,
            "Sp. Defense": 49,
            "Speed": 60
        }
    },
    {
        "id": 405,
        "name": {
            "english": "Luxray"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 80,
            "Attack": 120,
            "Defense": 79,
            "Sp. Attack": 95,
            "Sp. Defense": 79,
            "Speed": 70
        }
    },
    {
        "id": 406,
        "name": {
            "english": "Budew"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 40,
            "Attack": 30,
            "Defense": 35,
            "Sp. Attack": 50,
            "Sp. Defense": 70,
            "Speed": 55
        }
    },
    {
        "id": 407,
        "name": {
            "english": "Roserade"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 60,
            "Attack": 70,
            "Defense": 65,
            "Sp. Attack": 125,
            "Sp. Defense": 105,
            "Speed": 90
        }
    },
    {
        "id": 408,
        "name": {
            "english": "Cranidos"
        },
        "type": [
            "Rock"
        ],
        "base": {
            "HP": 67,
            "Attack": 125,
            "Defense": 40,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            "Speed": 58
        }
    },
    {
        "id": 409,
        "name": {
            "english": "Rampardos"
        },
        "type": [
            "Rock"
        ],
        "base": {
            "HP": 97,
            "Attack": 165,
            "Defense": 60,
            "Sp. Attack": 65,
            "Sp. Defense": 50,
            "Speed": 58
        }
    },
    {
        "id": 410,
        "name": {
            "english": "Shieldon"
        },
        "type": [
            "Rock",
            "Steel"
        ],
        "base": {
            "HP": 30,
            "Attack": 42,
            "Defense": 118,
            "Sp. Attack": 42,
            "Sp. Defense": 88,
            "Speed": 30
        }
    },
    {
        "id": 411,
        "name": {
            "english": "Bastiodon"
        },
        "type": [
            "Rock",
            "Steel"
        ],
        "base": {
            "HP": 60,
            "Attack": 52,
            "Defense": 168,
            "Sp. Attack": 47,
            "Sp. Defense": 138,
            "Speed": 30
        }
    },
    {
        "id": 412,
        "name": {
            "english": "Burmy"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 40,
            "Attack": 29,
            "Defense": 45,
            "Sp. Attack": 29,
            "Sp. Defense": 45,
            "Speed": 36
        }
    },
    {
        "id": 413,
        "name": {
            "english": "Wormadam"
        },
        "type": [
            "Bug",
            "Grass"
        ],
        "base": {
            "HP": 60,
            "Attack": 59,
            "Defense": 85,
            "Sp. Attack": 79,
            "Sp. Defense": 105,
            "Speed": 36
        }
    },
    {
        "id": 414,
        "name": {
            "english": "Mothim"
        },
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 70,
            "Attack": 94,
            "Defense": 50,
            "Sp. Attack": 94,
            "Sp. Defense": 50,
            "Speed": 66
        }
    },
    {
        "id": 415,
        "name": {
            "english": "Combee"
        },
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 30,
            "Attack": 30,
            "Defense": 42,
            "Sp. Attack": 30,
            "Sp. Defense": 42,
            "Speed": 70
        }
    },
    {
        "id": 416,
        "name": {
            "english": "Vespiquen"
        },
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 70,
            "Attack": 80,
            "Defense": 102,
            "Sp. Attack": 80,
            "Sp. Defense": 102,
            "Speed": 40
        }
    },
    {
        "id": 417,
        "name": {
            "english": "Pachirisu"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 60,
            "Attack": 45,
            "Defense": 70,
            "Sp. Attack": 45,
            "Sp. Defense": 90,
            "Speed": 95
        }
    },
    {
        "id": 418,
        "name": {
            "english": "Buizel"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 55,
            "Attack": 65,
            "Defense": 35,
            "Sp. Attack": 60,
            "Sp. Defense": 30,
            "Speed": 85
        }
    },
    {
        "id": 419,
        "name": {
            "english": "Floatzel"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 85,
            "Attack": 105,
            "Defense": 55,
            "Sp. Attack": 85,
            "Sp. Defense": 50,
            "Speed": 115
        }
    },
    {
        "id": 420,
        "name": {
            "english": "Cherubi"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 45,
            "Attack": 35,
            "Defense": 45,
            "Sp. Attack": 62,
            "Sp. Defense": 53,
            "Speed": 35
        }
    },
    {
        "id": 421,
        "name": {
            "english": "Cherrim"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 70,
            "Attack": 60,
            "Defense": 70,
            "Sp. Attack": 87,
            "Sp. Defense": 78,
            "Speed": 85
        }
    },
    {
        "id": 422,
        "name": {
            "english": "Shellos"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 76,
            "Attack": 48,
            "Defense": 48,
            "Sp. Attack": 57,
            "Sp. Defense": 62,
            "Speed": 34
        }
    },
    {
        "id": 423,
        "name": {
            "english": "Gastrodon"
        },
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "HP": 111,
            "Attack": 83,
            "Defense": 68,
            "Sp. Attack": 92,
            "Sp. Defense": 82,
            "Speed": 39
        }
    },
    {
        "id": 424,
        "name": {
            "english": "Ambipom"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 75,
            "Attack": 100,
            "Defense": 66,
            "Sp. Attack": 60,
            "Sp. Defense": 66,
            "Speed": 115
        }
    },
    {
        "id": 425,
        "name": {
            "english": "Drifloon"
        },
        "type": [
            "Ghost",
            "Flying"
        ],
        "base": {
            "HP": 90,
            "Attack": 50,
            "Defense": 34,
            "Sp. Attack": 60,
            "Sp. Defense": 44,
            "Speed": 70
        }
    },
    {
        "id": 426,
        "name": {
            "english": "Drifblim"
        },
        "type": [
            "Ghost",
            "Flying"
        ],
        "base": {
            "HP": 150,
            "Attack": 80,
            "Defense": 44,
            "Sp. Attack": 90,
            "Sp. Defense": 54,
            "Speed": 80
        }
    },
    {
        "id": 427,
        "name": {
            "english": "Buneary"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 55,
            "Attack": 66,
            "Defense": 44,
            "Sp. Attack": 44,
            "Sp. Defense": 56,
            "Speed": 85
        }
    },
    {
        "id": 428,
        "name": {
            "english": "Lopunny"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 65,
            "Attack": 76,
            "Defense": 84,
            "Sp. Attack": 54,
            "Sp. Defense": 96,
            "Speed": 105
        }
    },
    {
        "id": 429,
        "name": {
            "english": "Mismagius"
        },
        "type": [
            "Ghost"
        ],
        "base": {
            "HP": 60,
            "Attack": 60,
            "Defense": 60,
            "Sp. Attack": 105,
            "Sp. Defense": 105,
            "Speed": 105
        }
    },
    {
        "id": 430,
        "name": {
            "english": "Honchkrow"
        },
        "type": [
            "Dark",
            "Flying"
        ],
        "base": {
            "HP": 100,
            "Attack": 125,
            "Defense": 52,
            "Sp. Attack": 105,
            "Sp. Defense": 52,
            "Speed": 71
        }
    },
    {
        "id": 431,
        "name": {
            "english": "Glameow"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 49,
            "Attack": 55,
            "Defense": 42,
            "Sp. Attack": 42,
            "Sp. Defense": 37,
            "Speed": 85
        }
    },
    {
        "id": 432,
        "name": {
            "english": "Purugly"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 71,
            "Attack": 82,
            "Defense": 64,
            "Sp. Attack": 64,
            "Sp. Defense": 59,
            "Speed": 112
        }
    },
    {
        "id": 433,
        "name": {
            "english": "Chingling"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 45,
            "Attack": 30,
            "Defense": 50,
            "Sp. Attack": 65,
            "Sp. Defense": 50,
            "Speed": 45
        }
    },
    {
        "id": 434,
        "name": {
            "english": "Stunky"
        },
        "type": [
            "Poison",
            "Dark"
        ],
        "base": {
            "HP": 63,
            "Attack": 63,
            "Defense": 47,
            "Sp. Attack": 41,
            "Sp. Defense": 41,
            "Speed": 74
        }
    },
    {
        "id": 435,
        "name": {
            "english": "Skuntank"
        },
        "type": [
            "Poison",
            "Dark"
        ],
        "base": {
            "HP": 103,
            "Attack": 93,
            "Defense": 67,
            "Sp. Attack": 71,
            "Sp. Defense": 61,
            "Speed": 84
        }
    },
    {
        "id": 436,
        "name": {
            "english": "Bronzor"
        },
        "type": [
            "Steel",
            "Psychic"
        ],
        "base": {
            "HP": 57,
            "Attack": 24,
            "Defense": 86,
            "Sp. Attack": 24,
            "Sp. Defense": 86,
            "Speed": 23
        }
    },
    {
        "id": 437,
        "name": {
            "english": "Bronzong"
        },
        "type": [
            "Steel",
            "Psychic"
        ],
        "base": {
            "HP": 67,
            "Attack": 89,
            "Defense": 116,
            "Sp. Attack": 79,
            "Sp. Defense": 116,
            "Speed": 33
        }
    },
    {
        "id": 438,
        "name": {
            "english": "Bonsly"
        },
        "type": [
            "Rock"
        ],
        "base": {
            "HP": 50,
            "Attack": 80,
            "Defense": 95,
            "Sp. Attack": 10,
            "Sp. Defense": 45,
            "Speed": 10
        }
    },
    {
        "id": 439,
        "name": {
            "english": "Mime Jr."
        },
        "type": [
            "Psychic",
            "Fairy"
        ],
        "base": {
            "HP": 20,
            "Attack": 25,
            "Defense": 45,
            "Sp. Attack": 70,
            "Sp. Defense": 90,
            "Speed": 60
        }
    },
    {
        "id": 440,
        "name": {
            "english": "Happiny"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 100,
            "Attack": 5,
            "Defense": 5,
            "Sp. Attack": 15,
            "Sp. Defense": 65,
            "Speed": 30
        }
    },
    {
        "id": 441,
        "name": {
            "english": "Chatot"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 76,
            "Attack": 65,
            "Defense": 45,
            "Sp. Attack": 92,
            "Sp. Defense": 42,
            "Speed": 91
        }
    },
    {
        "id": 442,
        "name": {
            "english": "Spiritomb"
        },
        "type": [
            "Ghost",
            "Dark"
        ],
        "base": {
            "HP": 50,
            "Attack": 92,
            "Defense": 108,
            "Sp. Attack": 92,
            "Sp. Defense": 108,
            "Speed": 35
        }
    },
    {
        "id": 443,
        "name": {
            "english": "Gible"
        },
        "type": [
            "Dragon",
            "Ground"
        ],
        "base": {
            "HP": 58,
            "Attack": 70,
            "Defense": 45,
            "Sp. Attack": 40,
            "Sp. Defense": 45,
            "Speed": 42
        }
    },
    {
        "id": 444,
        "name": {
            "english": "Gabite"
        },
        "type": [
            "Dragon",
            "Ground"
        ],
        "base": {
            "HP": 68,
            "Attack": 90,
            "Defense": 65,
            "Sp. Attack": 50,
            "Sp. Defense": 55,
            "Speed": 82
        }
    },
    {
        "id": 445,
        "name": {
            "english": "Garchomp"
        },
        "type": [
            "Dragon",
            "Ground"
        ],
        "base": {
            "HP": 108,
            "Attack": 130,
            "Defense": 95,
            "Sp. Attack": 80,
            "Sp. Defense": 85,
            "Speed": 102
        }
    },
    {
        "id": 446,
        "name": {
            "english": "Munchlax"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 135,
            "Attack": 85,
            "Defense": 40,
            "Sp. Attack": 40,
            "Sp. Defense": 85,
            "Speed": 5
        }
    },
    {
        "id": 447,
        "name": {
            "english": "Riolu"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 40,
            "Attack": 70,
            "Defense": 40,
            "Sp. Attack": 35,
            "Sp. Defense": 40,
            "Speed": 60
        }
    },
    {
        "id": 448,
        "name": {
            "english": "Lucario"
        },
        "type": [
            "Fighting",
            "Steel"
        ],
        "base": {
            "HP": 70,
            "Attack": 110,
            "Defense": 70,
            "Sp. Attack": 115,
            "Sp. Defense": 70,
            "Speed": 90
        }
    },
    {
        "id": 449,
        "name": {
            "english": "Hippopotas"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 68,
            "Attack": 72,
            "Defense": 78,
            "Sp. Attack": 38,
            "Sp. Defense": 42,
            "Speed": 32
        }
    },
    {
        "id": 450,
        "name": {
            "english": "Hippowdon"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 108,
            "Attack": 112,
            "Defense": 118,
            "Sp. Attack": 68,
            "Sp. Defense": 72,
            "Speed": 47
        }
    },
    {
        "id": 451,
        "name": {
            "english": "Skorupi"
        },
        "type": [
            "Poison",
            "Bug"
        ],
        "base": {
            "HP": 40,
            "Attack": 50,
            "Defense": 90,
            "Sp. Attack": 30,
            "Sp. Defense": 55,
            "Speed": 65
        }
    },
    {
        "id": 452,
        "name": {
            "english": "Drapion"
        },
        "type": [
            "Poison",
            "Dark"
        ],
        "base": {
            "HP": 70,
            "Attack": 90,
            "Defense": 110,
            "Sp. Attack": 60,
            "Sp. Defense": 75,
            "Speed": 95
        }
    },
    {
        "id": 453,
        "name": {
            "english": "Croagunk"
        },
        "type": [
            "Poison",
            "Fighting"
        ],
        "base": {
            "HP": 48,
            "Attack": 61,
            "Defense": 40,
            "Sp. Attack": 61,
            "Sp. Defense": 40,
            "Speed": 50
        }
    },
    {
        "id": 454,
        "name": {
            "english": "Toxicroak"
        },
        "type": [
            "Poison",
            "Fighting"
        ],
        "base": {
            "HP": 83,
            "Attack": 106,
            "Defense": 65,
            "Sp. Attack": 86,
            "Sp. Defense": 65,
            "Speed": 85
        }
    },
    {
        "id": 455,
        "name": {
            "english": "Carnivine"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 74,
            "Attack": 100,
            "Defense": 72,
            "Sp. Attack": 90,
            "Sp. Defense": 72,
            "Speed": 46
        }
    },
    {
        "id": 456,
        "name": {
            "english": "Finneon"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 49,
            "Attack": 49,
            "Defense": 56,
            "Sp. Attack": 49,
            "Sp. Defense": 61,
            "Speed": 66
        }
    },
    {
        "id": 457,
        "name": {
            "english": "Lumineon"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 69,
            "Attack": 69,
            "Defense": 76,
            "Sp. Attack": 69,
            "Sp. Defense": 86,
            "Speed": 91
        }
    },
    {
        "id": 458,
        "name": {
            "english": "Mantyke"
        },
        "type": [
            "Water",
            "Flying"
        ],
        "base": {
            "HP": 45,
            "Attack": 20,
            "Defense": 50,
            "Sp. Attack": 60,
            "Sp. Defense": 120,
            "Speed": 50
        }
    },
    {
        "id": 459,
        "name": {
            "english": "Snover"
        },
        "type": [
            "Grass",
            "Ice"
        ],
        "base": {
            "HP": 60,
            "Attack": 62,
            "Defense": 50,
            "Sp. Attack": 62,
            "Sp. Defense": 60,
            "Speed": 40
        }
    },
    {
        "id": 460,
        "name": {
            "english": "Abomasnow"
        },
        "type": [
            "Grass",
            "Ice"
        ],
        "base": {
            "HP": 90,
            "Attack": 92,
            "Defense": 75,
            "Sp. Attack": 92,
            "Sp. Defense": 85,
            "Speed": 60
        }
    },
    {
        "id": 461,
        "name": {
            "english": "Weavile"
        },
        "type": [
            "Dark",
            "Ice"
        ],
        "base": {
            "HP": 70,
            "Attack": 120,
            "Defense": 65,
            "Sp. Attack": 45,
            "Sp. Defense": 85,
            "Speed": 125
        }
    },
    {
        "id": 462,
        "name": {
            "english": "Magnezone"
        },
        "type": [
            "Electric",
            "Steel"
        ],
        "base": {
            "HP": 70,
            "Attack": 70,
            "Defense": 115,
            "Sp. Attack": 130,
            "Sp. Defense": 90,
            "Speed": 60
        }
    },
    {
        "id": 463,
        "name": {
            "english": "Lickilicky"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 110,
            "Attack": 85,
            "Defense": 95,
            "Sp. Attack": 80,
            "Sp. Defense": 95,
            "Speed": 50
        }
    },
    {
        "id": 464,
        "name": {
            "english": "Rhyperior"
        },
        "type": [
            "Ground",
            "Rock"
        ],
        "base": {
            "HP": 115,
            "Attack": 140,
            "Defense": 130,
            "Sp. Attack": 55,
            "Sp. Defense": 55,
            "Speed": 40
        }
    },
    {
        "id": 465,
        "name": {
            "english": "Tangrowth"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 100,
            "Attack": 100,
            "Defense": 125,
            "Sp. Attack": 110,
            "Sp. Defense": 50,
            "Speed": 50
        }
    },
    {
        "id": 466,
        "name": {
            "english": "Electivire"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 75,
            "Attack": 123,
            "Defense": 67,
            "Sp. Attack": 95,
            "Sp. Defense": 85,
            "Speed": 95
        }
    },
    {
        "id": 467,
        "name": {
            "english": "Magmortar"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 75,
            "Attack": 95,
            "Defense": 67,
            "Sp. Attack": 125,
            "Sp. Defense": 95,
            "Speed": 83
        }
    },
    {
        "id": 468,
        "name": {
            "english": "Togekiss"
        },
        "type": [
            "Fairy",
            "Flying"
        ],
        "base": {
            "HP": 85,
            "Attack": 50,
            "Defense": 95,
            "Sp. Attack": 120,
            "Sp. Defense": 115,
            "Speed": 80
        }
    },
    {
        "id": 469,
        "name": {
            "english": "Yanmega"
        },
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 86,
            "Attack": 76,
            "Defense": 86,
            "Sp. Attack": 116,
            "Sp. Defense": 56,
            "Speed": 95
        }
    },
    {
        "id": 470,
        "name": {
            "english": "Leafeon"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 65,
            "Attack": 110,
            "Defense": 130,
            "Sp. Attack": 60,
            "Sp. Defense": 65,
            "Speed": 95
        }
    },
    {
        "id": 471,
        "name": {
            "english": "Glaceon"
        },
        "type": [
            "Ice"
        ],
        "base": {
            "HP": 65,
            "Attack": 60,
            "Defense": 110,
            "Sp. Attack": 130,
            "Sp. Defense": 95,
            "Speed": 65
        }
    },
    {
        "id": 472,
        "name": {
            "english": "Gliscor"
        },
        "type": [
            "Ground",
            "Flying"
        ],
        "base": {
            "HP": 75,
            "Attack": 95,
            "Defense": 125,
            "Sp. Attack": 45,
            "Sp. Defense": 75,
            "Speed": 95
        }
    },
    {
        "id": 473,
        "name": {
            "english": "Mamoswine"
        },
        "type": [
            "Ice",
            "Ground"
        ],
        "base": {
            "HP": 110,
            "Attack": 130,
            "Defense": 80,
            "Sp. Attack": 70,
            "Sp. Defense": 60,
            "Speed": 80
        }
    },
    {
        "id": 474,
        "name": {
            "english": "Porygon-Z"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 85,
            "Attack": 80,
            "Defense": 70,
            "Sp. Attack": 135,
            "Sp. Defense": 75,
            "Speed": 90
        }
    },
    {
        "id": 475,
        "name": {
            "english": "Gallade"
        },
        "type": [
            "Psychic",
            "Fighting"
        ],
        "base": {
            "HP": 68,
            "Attack": 125,
            "Defense": 65,
            "Sp. Attack": 65,
            "Sp. Defense": 115,
            "Speed": 80
        }
    },
    {
        "id": 476,
        "name": {
            "english": "Probopass"
        },
        "type": [
            "Rock",
            "Steel"
        ],
        "base": {
            "HP": 60,
            "Attack": 55,
            "Defense": 145,
            "Sp. Attack": 75,
            "Sp. Defense": 150,
            "Speed": 40
        }
    },
    {
        "id": 477,
        "name": {
            "english": "Dusknoir"
        },
        "type": [
            "Ghost"
        ],
        "base": {
            "HP": 45,
            "Attack": 100,
            "Defense": 135,
            "Sp. Attack": 65,
            "Sp. Defense": 135,
            "Speed": 45
        }
    },
    {
        "id": 478,
        "name": {
            "english": "Froslass"
        },
        "type": [
            "Ice",
            "Ghost"
        ],
        "base": {
            "HP": 70,
            "Attack": 80,
            "Defense": 70,
            "Sp. Attack": 80,
            "Sp. Defense": 70,
            "Speed": 110
        }
    },
    {
        "id": 479,
        "name": {
            "english": "Rotom"
        },
        "type": [
            "Electric",
            "Ghost"
        ],
        "base": {
            "HP": 50,
            "Attack": 50,
            "Defense": 77,
            "Sp. Attack": 95,
            "Sp. Defense": 77,
            "Speed": 91
        }
    },
    {
        "id": 480,
        "name": {
            "english": "Uxie"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 75,
            "Attack": 75,
            "Defense": 130,
            "Sp. Attack": 75,
            "Sp. Defense": 130,
            "Speed": 95
        }
    },
    {
        "id": 481,
        "name": {
            "english": "Mesprit"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 80,
            "Attack": 105,
            "Defense": 105,
            "Sp. Attack": 105,
            "Sp. Defense": 105,
            "Speed": 80
        }
    },
    {
        "id": 482,
        "name": {
            "english": "Azelf"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 75,
            "Attack": 125,
            "Defense": 70,
            "Sp. Attack": 125,
            "Sp. Defense": 70,
            "Speed": 115
        }
    },
    {
        "id": 483,
        "name": {
            "english": "Dialga"
        },
        "type": [
            "Steel",
            "Dragon"
        ],
        "base": {
            "HP": 100,
            "Attack": 120,
            "Defense": 120,
            "Sp. Attack": 150,
            "Sp. Defense": 100,
            "Speed": 90
        }
    },
    {
        "id": 484,
        "name": {
            "english": "Palkia"
        },
        "type": [
            "Water",
            "Dragon"
        ],
        "base": {
            "HP": 90,
            "Attack": 120,
            "Defense": 100,
            "Sp. Attack": 150,
            "Sp. Defense": 120,
            "Speed": 100
        }
    },
    {
        "id": 485,
        "name": {
            "english": "Heatran"
        },
        "type": [
            "Fire",
            "Steel"
        ],
        "base": {
            "HP": 91,
            "Attack": 90,
            "Defense": 106,
            "Sp. Attack": 130,
            "Sp. Defense": 106,
            "Speed": 77
        }
    },
    {
        "id": 486,
        "name": {
            "english": "Regigigas"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 110,
            "Attack": 160,
            "Defense": 110,
            "Sp. Attack": 80,
            "Sp. Defense": 110,
            "Speed": 100
        }
    },
    {
        "id": 487,
        "name": {
            "english": "Giratina"
        },
        "type": [
            "Ghost",
            "Dragon"
        ],
        "base": {
            "HP": 150,
            "Attack": 100,
            "Defense": 120,
            "Sp. Attack": 100,
            "Sp. Defense": 120,
            "Speed": 90
        }
    },
    {
        "id": 488,
        "name": {
            "english": "Cresselia"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 120,
            "Attack": 70,
            "Defense": 120,
            "Sp. Attack": 75,
            "Sp. Defense": 130,
            "Speed": 85
        }
    },
    {
        "id": 489,
        "name": {
            "english": "Phione"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 80,
            "Attack": 80,
            "Defense": 80,
            "Sp. Attack": 80,
            "Sp. Defense": 80,
            "Speed": 80
        }
    },
    {
        "id": 490,
        "name": {
            "english": "Manaphy"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 100,
            "Attack": 100,
            "Defense": 100,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            "Speed": 100
        }
    },
    {
        "id": 491,
        "name": {
            "english": "Darkrai"
        },
        "type": [
            "Dark"
        ],
        "base": {
            "HP": 70,
            "Attack": 90,
            "Defense": 90,
            "Sp. Attack": 135,
            "Sp. Defense": 90,
            "Speed": 125
        }
    },
    {
        "id": 492,
        "name": {
            "english": "Shaymin"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 100,
            "Attack": 100,
            "Defense": 100,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            "Speed": 100
        }
    },
    {
        "id": 493,
        "name": {
            "english": "Arceus"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 120,
            "Attack": 120,
            "Defense": 120,
            "Sp. Attack": 120,
            "Sp. Defense": 120,
            "Speed": 120
        }
    },
    {
        "id": 494,
        "name": {
            "english": "Victini"
        },
        "type": [
            "Psychic",
            "Fire"
        ],
        "base": {
            "HP": 100,
            "Attack": 100,
            "Defense": 100,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            "Speed": 100
        }
    },
    {
        "id": 495,
        "name": {
            "english": "Snivy"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 45,
            "Attack": 45,
            "Defense": 55,
            "Sp. Attack": 45,
            "Sp. Defense": 55,
            "Speed": 63
        }
    },
    {
        "id": 496,
        "name": {
            "english": "Servine"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 60,
            "Attack": 60,
            "Defense": 75,
            "Sp. Attack": 60,
            "Sp. Defense": 75,
            "Speed": 83
        }
    },
    {
        "id": 497,
        "name": {
            "english": "Serperior"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 75,
            "Attack": 75,
            "Defense": 95,
            "Sp. Attack": 75,
            "Sp. Defense": 95,
            "Speed": 113
        }
    },
    {
        "id": 498,
        "name": {
            "english": "Tepig"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 65,
            "Attack": 63,
            "Defense": 45,
            "Sp. Attack": 45,
            "Sp. Defense": 45,
            "Speed": 45
        }
    },
    {
        "id": 499,
        "name": {
            "english": "Pignite"
        },
        "type": [
            "Fire",
            "Fighting"
        ],
        "base": {
            "HP": 90,
            "Attack": 93,
            "Defense": 55,
            "Sp. Attack": 70,
            "Sp. Defense": 55,
            "Speed": 55
        }
    },
    {
        "id": 500,
        "name": {
            "english": "Emboar"
        },
        "type": [
            "Fire",
            "Fighting"
        ],
        "base": {
            "HP": 110,
            "Attack": 123,
            "Defense": 65,
            "Sp. Attack": 100,
            "Sp. Defense": 65,
            "Speed": 65
        }
    },
    {
        "id": 501,
        "name": {
            "english": "Oshawott"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 55,
            "Attack": 55,
            "Defense": 45,
            "Sp. Attack": 63,
            "Sp. Defense": 45,
            "Speed": 45
        }
    },
    {
        "id": 502,
        "name": {
            "english": "Dewott"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 75,
            "Attack": 75,
            "Defense": 60,
            "Sp. Attack": 83,
            "Sp. Defense": 60,
            "Speed": 60
        }
    },
    {
        "id": 503,
        "name": {
            "english": "Samurott"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 95,
            "Attack": 100,
            "Defense": 85,
            "Sp. Attack": 108,
            "Sp. Defense": 70,
            "Speed": 70
        }
    },
    {
        "id": 504,
        "name": {
            "english": "Patrat"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 45,
            "Attack": 55,
            "Defense": 39,
            "Sp. Attack": 35,
            "Sp. Defense": 39,
            "Speed": 42
        }
    },
    {
        "id": 505,
        "name": {
            "english": "Watchog"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 60,
            "Attack": 85,
            "Defense": 69,
            "Sp. Attack": 60,
            "Sp. Defense": 69,
            "Speed": 77
        }
    },
    {
        "id": 506,
        "name": {
            "english": "Lillipup"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 45,
            "Attack": 60,
            "Defense": 45,
            "Sp. Attack": 25,
            "Sp. Defense": 45,
            "Speed": 55
        }
    },
    {
        "id": 507,
        "name": {
            "english": "Herdier"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 65,
            "Attack": 80,
            "Defense": 65,
            "Sp. Attack": 35,
            "Sp. Defense": 65,
            "Speed": 60
        }
    },
    {
        "id": 508,
        "name": {
            "english": "Stoutland"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 85,
            "Attack": 110,
            "Defense": 90,
            "Sp. Attack": 45,
            "Sp. Defense": 90,
            "Speed": 80
        }
    },
    {
        "id": 509,
        "name": {
            "english": "Purrloin"
        },
        "type": [
            "Dark"
        ],
        "base": {
            "HP": 41,
            "Attack": 50,
            "Defense": 37,
            "Sp. Attack": 50,
            "Sp. Defense": 37,
            "Speed": 66
        }
    },
    {
        "id": 510,
        "name": {
            "english": "Liepard"
        },
        "type": [
            "Dark"
        ],
        "base": {
            "HP": 64,
            "Attack": 88,
            "Defense": 50,
            "Sp. Attack": 88,
            "Sp. Defense": 50,
            "Speed": 106
        }
    },
    {
        "id": 511,
        "name": {
            "english": "Pansage"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 50,
            "Attack": 53,
            "Defense": 48,
            "Sp. Attack": 53,
            "Sp. Defense": 48,
            "Speed": 64
        }
    },
    {
        "id": 512,
        "name": {
            "english": "Simisage"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 75,
            "Attack": 98,
            "Defense": 63,
            "Sp. Attack": 98,
            "Sp. Defense": 63,
            "Speed": 101
        }
    },
    {
        "id": 513,
        "name": {
            "english": "Pansear"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 50,
            "Attack": 53,
            "Defense": 48,
            "Sp. Attack": 53,
            "Sp. Defense": 48,
            "Speed": 64
        }
    },
    {
        "id": 514,
        "name": {
            "english": "Simisear"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 75,
            "Attack": 98,
            "Defense": 63,
            "Sp. Attack": 98,
            "Sp. Defense": 63,
            "Speed": 101
        }
    },
    {
        "id": 515,
        "name": {
            "english": "Panpour"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 50,
            "Attack": 53,
            "Defense": 48,
            "Sp. Attack": 53,
            "Sp. Defense": 48,
            "Speed": 64
        }
    },
    {
        "id": 516,
        "name": {
            "english": "Simipour"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 75,
            "Attack": 98,
            "Defense": 63,
            "Sp. Attack": 98,
            "Sp. Defense": 63,
            "Speed": 101
        }
    },
    {
        "id": 517,
        "name": {
            "english": "Munna"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 76,
            "Attack": 25,
            "Defense": 45,
            "Sp. Attack": 67,
            "Sp. Defense": 55,
            "Speed": 24
        }
    },
    {
        "id": 518,
        "name": {
            "english": "Musharna"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 116,
            "Attack": 55,
            "Defense": 85,
            "Sp. Attack": 107,
            "Sp. Defense": 95,
            "Speed": 29
        }
    },
    {
        "id": 519,
        "name": {
            "english": "Pidove"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 50,
            "Attack": 55,
            "Defense": 50,
            "Sp. Attack": 36,
            "Sp. Defense": 30,
            "Speed": 43
        }
    },
    {
        "id": 520,
        "name": {
            "english": "Tranquill"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 62,
            "Attack": 77,
            "Defense": 62,
            "Sp. Attack": 50,
            "Sp. Defense": 42,
            "Speed": 65
        }
    },
    {
        "id": 521,
        "name": {
            "english": "Unfezant"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 80,
            "Attack": 115,
            "Defense": 80,
            "Sp. Attack": 65,
            "Sp. Defense": 55,
            "Speed": 93
        }
    },
    {
        "id": 522,
        "name": {
            "english": "Blitzle"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 45,
            "Attack": 60,
            "Defense": 32,
            "Sp. Attack": 50,
            "Sp. Defense": 32,
            "Speed": 76
        }
    },
    {
        "id": 523,
        "name": {
            "english": "Zebstrika"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 75,
            "Attack": 100,
            "Defense": 63,
            "Sp. Attack": 80,
            "Sp. Defense": 63,
            "Speed": 116
        }
    },
    {
        "id": 524,
        "name": {
            "english": "Roggenrola"
        },
        "type": [
            "Rock"
        ],
        "base": {
            "HP": 55,
            "Attack": 75,
            "Defense": 85,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            "Speed": 15
        }
    },
    {
        "id": 525,
        "name": {
            "english": "Boldore"
        },
        "type": [
            "Rock"
        ],
        "base": {
            "HP": 70,
            "Attack": 105,
            "Defense": 105,
            "Sp. Attack": 50,
            "Sp. Defense": 40,
            "Speed": 20
        }
    },
    {
        "id": 526,
        "name": {
            "english": "Gigalith"
        },
        "type": [
            "Rock"
        ],
        "base": {
            "HP": 85,
            "Attack": 135,
            "Defense": 130,
            "Sp. Attack": 60,
            "Sp. Defense": 80,
            "Speed": 25
        }
    },
    {
        "id": 527,
        "name": {
            "english": "Woobat"
        },
        "type": [
            "Psychic",
            "Flying"
        ],
        "base": {
            "HP": 65,
            "Attack": 45,
            "Defense": 43,
            "Sp. Attack": 55,
            "Sp. Defense": 43,
            "Speed": 72
        }
    },
    {
        "id": 528,
        "name": {
            "english": "Swoobat"
        },
        "type": [
            "Psychic",
            "Flying"
        ],
        "base": {
            "HP": 67,
            "Attack": 57,
            "Defense": 55,
            "Sp. Attack": 77,
            "Sp. Defense": 55,
            "Speed": 114
        }
    },
    {
        "id": 529,
        "name": {
            "english": "Drilbur"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 60,
            "Attack": 85,
            "Defense": 40,
            "Sp. Attack": 30,
            "Sp. Defense": 45,
            "Speed": 68
        }
    },
    {
        "id": 530,
        "name": {
            "english": "Excadrill"
        },
        "type": [
            "Ground",
            "Steel"
        ],
        "base": {
            "HP": 110,
            "Attack": 135,
            "Defense": 60,
            "Sp. Attack": 50,
            "Sp. Defense": 65,
            "Speed": 88
        }
    },
    {
        "id": 531,
        "name": {
            "english": "Audino"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 103,
            "Attack": 60,
            "Defense": 86,
            "Sp. Attack": 60,
            "Sp. Defense": 86,
            "Speed": 50
        }
    },
    {
        "id": 532,
        "name": {
            "english": "Timburr"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 75,
            "Attack": 80,
            "Defense": 55,
            "Sp. Attack": 25,
            "Sp. Defense": 35,
            "Speed": 35
        }
    },
    {
        "id": 533,
        "name": {
            "english": "Gurdurr"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 85,
            "Attack": 105,
            "Defense": 85,
            "Sp. Attack": 40,
            "Sp. Defense": 50,
            "Speed": 40
        }
    },
    {
        "id": 534,
        "name": {
            "english": "Conkeldurr"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 105,
            "Attack": 140,
            "Defense": 95,
            "Sp. Attack": 55,
            "Sp. Defense": 65,
            "Speed": 45
        }
    },
    {
        "id": 535,
        "name": {
            "english": "Tympole"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 50,
            "Attack": 50,
            "Defense": 40,
            "Sp. Attack": 50,
            "Sp. Defense": 40,
            "Speed": 64
        }
    },
    {
        "id": 536,
        "name": {
            "english": "Palpitoad"
        },
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "HP": 75,
            "Attack": 65,
            "Defense": 55,
            "Sp. Attack": 65,
            "Sp. Defense": 55,
            "Speed": 69
        }
    },
    {
        "id": 537,
        "name": {
            "english": "Seismitoad"
        },
        "type": [
            "Water",
            "Ground"
        ],
        "base": {
            "HP": 105,
            "Attack": 95,
            "Defense": 75,
            "Sp. Attack": 85,
            "Sp. Defense": 75,
            "Speed": 74
        }
    },
    {
        "id": 538,
        "name": {
            "english": "Throh"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 120,
            "Attack": 100,
            "Defense": 85,
            "Sp. Attack": 30,
            "Sp. Defense": 85,
            "Speed": 45
        }
    },
    {
        "id": 539,
        "name": {
            "english": "Sawk"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 75,
            "Attack": 125,
            "Defense": 75,
            "Sp. Attack": 30,
            "Sp. Defense": 75,
            "Speed": 85
        }
    },
    {
        "id": 540,
        "name": {
            "english": "Sewaddle"
        },
        "type": [
            "Bug",
            "Grass"
        ],
        "base": {
            "HP": 45,
            "Attack": 53,
            "Defense": 70,
            "Sp. Attack": 40,
            "Sp. Defense": 60,
            "Speed": 42
        }
    },
    {
        "id": 541,
        "name": {
            "english": "Swadloon"
        },
        "type": [
            "Bug",
            "Grass"
        ],
        "base": {
            "HP": 55,
            "Attack": 63,
            "Defense": 90,
            "Sp. Attack": 50,
            "Sp. Defense": 80,
            "Speed": 42
        }
    },
    {
        "id": 542,
        "name": {
            "english": "Leavanny"
        },
        "type": [
            "Bug",
            "Grass"
        ],
        "base": {
            "HP": 75,
            "Attack": 103,
            "Defense": 80,
            "Sp. Attack": 70,
            "Sp. Defense": 80,
            "Speed": 92
        }
    },
    {
        "id": 543,
        "name": {
            "english": "Venipede"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 30,
            "Attack": 45,
            "Defense": 59,
            "Sp. Attack": 30,
            "Sp. Defense": 39,
            "Speed": 57
        }
    },
    {
        "id": 544,
        "name": {
            "english": "Whirlipede"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 40,
            "Attack": 55,
            "Defense": 99,
            "Sp. Attack": 40,
            "Sp. Defense": 79,
            "Speed": 47
        }
    },
    {
        "id": 545,
        "name": {
            "english": "Scolipede"
        },
        "type": [
            "Bug",
            "Poison"
        ],
        "base": {
            "HP": 60,
            "Attack": 100,
            "Defense": 89,
            "Sp. Attack": 55,
            "Sp. Defense": 69,
            "Speed": 112
        }
    },
    {
        "id": 546,
        "name": {
            "english": "Cottonee"
        },
        "type": [
            "Grass",
            "Fairy"
        ],
        "base": {
            "HP": 40,
            "Attack": 27,
            "Defense": 60,
            "Sp. Attack": 37,
            "Sp. Defense": 50,
            "Speed": 66
        }
    },
    {
        "id": 547,
        "name": {
            "english": "Whimsicott"
        },
        "type": [
            "Grass",
            "Fairy"
        ],
        "base": {
            "HP": 60,
            "Attack": 67,
            "Defense": 85,
            "Sp. Attack": 77,
            "Sp. Defense": 75,
            "Speed": 116
        }
    },
    {
        "id": 548,
        "name": {
            "english": "Petilil"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 45,
            "Attack": 35,
            "Defense": 50,
            "Sp. Attack": 70,
            "Sp. Defense": 50,
            "Speed": 30
        }
    },
    {
        "id": 549,
        "name": {
            "english": "Lilligant"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 70,
            "Attack": 60,
            "Defense": 75,
            "Sp. Attack": 110,
            "Sp. Defense": 75,
            "Speed": 90
        }
    },
    {
        "id": 550,
        "name": {
            "english": "Basculin"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 70,
            "Attack": 92,
            "Defense": 65,
            "Sp. Attack": 80,
            "Sp. Defense": 55,
            "Speed": 98
        }
    },
    {
        "id": 551,
        "name": {
            "english": "Sandile"
        },
        "type": [
            "Ground",
            "Dark"
        ],
        "base": {
            "HP": 50,
            "Attack": 72,
            "Defense": 35,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            "Speed": 65
        }
    },
    {
        "id": 552,
        "name": {
            "english": "Krokorok"
        },
        "type": [
            "Ground",
            "Dark"
        ],
        "base": {
            "HP": 60,
            "Attack": 82,
            "Defense": 45,
            "Sp. Attack": 45,
            "Sp. Defense": 45,
            "Speed": 74
        }
    },
    {
        "id": 553,
        "name": {
            "english": "Krookodile"
        },
        "type": [
            "Ground",
            "Dark"
        ],
        "base": {
            "HP": 95,
            "Attack": 117,
            "Defense": 80,
            "Sp. Attack": 65,
            "Sp. Defense": 70,
            "Speed": 92
        }
    },
    {
        "id": 554,
        "name": {
            "english": "Darumaka"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 70,
            "Attack": 90,
            "Defense": 45,
            "Sp. Attack": 15,
            "Sp. Defense": 45,
            "Speed": 50
        }
    },
    {
        "id": 555,
        "name": {
            "english": "Darmanitan"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 105,
            "Attack": 140,
            "Defense": 55,
            "Sp. Attack": 30,
            "Sp. Defense": 55,
            "Speed": 95
        }
    },
    {
        "id": 556,
        "name": {
            "english": "Maractus"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 75,
            "Attack": 86,
            "Defense": 67,
            "Sp. Attack": 106,
            "Sp. Defense": 67,
            "Speed": 60
        }
    },
    {
        "id": 557,
        "name": {
            "english": "Dwebble"
        },
        "type": [
            "Bug",
            "Rock"
        ],
        "base": {
            "HP": 50,
            "Attack": 65,
            "Defense": 85,
            "Sp. Attack": 35,
            "Sp. Defense": 35,
            "Speed": 55
        }
    },
    {
        "id": 558,
        "name": {
            "english": "Crustle"
        },
        "type": [
            "Bug",
            "Rock"
        ],
        "base": {
            "HP": 70,
            "Attack": 105,
            "Defense": 125,
            "Sp. Attack": 65,
            "Sp. Defense": 75,
            "Speed": 45
        }
    },
    {
        "id": 559,
        "name": {
            "english": "Scraggy"
        },
        "type": [
            "Dark",
            "Fighting"
        ],
        "base": {
            "HP": 50,
            "Attack": 75,
            "Defense": 70,
            "Sp. Attack": 35,
            "Sp. Defense": 70,
            "Speed": 48
        }
    },
    {
        "id": 560,
        "name": {
            "english": "Scrafty"
        },
        "type": [
            "Dark",
            "Fighting"
        ],
        "base": {
            "HP": 65,
            "Attack": 90,
            "Defense": 115,
            "Sp. Attack": 45,
            "Sp. Defense": 115,
            "Speed": 58
        }
    },
    {
        "id": 561,
        "name": {
            "english": "Sigilyph"
        },
        "type": [
            "Psychic",
            "Flying"
        ],
        "base": {
            "HP": 72,
            "Attack": 58,
            "Defense": 80,
            "Sp. Attack": 103,
            "Sp. Defense": 80,
            "Speed": 97
        }
    },
    {
        "id": 562,
        "name": {
            "english": "Yamask"
        },
        "type": [
            "Ghost"
        ],
        "base": {
            "HP": 38,
            "Attack": 30,
            "Defense": 85,
            "Sp. Attack": 55,
            "Sp. Defense": 65,
            "Speed": 30
        }
    },
    {
        "id": 563,
        "name": {
            "english": "Cofagrigus"
        },
        "type": [
            "Ghost"
        ],
        "base": {
            "HP": 58,
            "Attack": 50,
            "Defense": 145,
            "Sp. Attack": 95,
            "Sp. Defense": 105,
            "Speed": 30
        }
    },
    {
        "id": 564,
        "name": {
            "english": "Tirtouga"
        },
        "type": [
            "Water",
            "Rock"
        ],
        "base": {
            "HP": 54,
            "Attack": 78,
            "Defense": 103,
            "Sp. Attack": 53,
            "Sp. Defense": 45,
            "Speed": 22
        }
    },
    {
        "id": 565,
        "name": {
            "english": "Carracosta"
        },
        "type": [
            "Water",
            "Rock"
        ],
        "base": {
            "HP": 74,
            "Attack": 108,
            "Defense": 133,
            "Sp. Attack": 83,
            "Sp. Defense": 65,
            "Speed": 32
        }
    },
    {
        "id": 566,
        "name": {
            "english": "Archen"
        },
        "type": [
            "Rock",
            "Flying"
        ],
        "base": {
            "HP": 55,
            "Attack": 112,
            "Defense": 45,
            "Sp. Attack": 74,
            "Sp. Defense": 45,
            "Speed": 70
        }
    },
    {
        "id": 567,
        "name": {
            "english": "Archeops"
        },
        "type": [
            "Rock",
            "Flying"
        ],
        "base": {
            "HP": 75,
            "Attack": 140,
            "Defense": 65,
            "Sp. Attack": 112,
            "Sp. Defense": 65,
            "Speed": 110
        }
    },
    {
        "id": 568,
        "name": {
            "english": "Trubbish"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 50,
            "Attack": 50,
            "Defense": 62,
            "Sp. Attack": 40,
            "Sp. Defense": 62,
            "Speed": 65
        }
    },
    {
        "id": 569,
        "name": {
            "english": "Garbodor"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 80,
            "Attack": 95,
            "Defense": 82,
            "Sp. Attack": 60,
            "Sp. Defense": 82,
            "Speed": 75
        }
    },
    {
        "id": 570,
        "name": {
            "english": "Zorua"
        },
        "type": [
            "Dark"
        ],
        "base": {
            "HP": 40,
            "Attack": 65,
            "Defense": 40,
            "Sp. Attack": 80,
            "Sp. Defense": 40,
            "Speed": 65
        }
    },
    {
        "id": 571,
        "name": {
            "english": "Zoroark"
        },
        "type": [
            "Dark"
        ],
        "base": {
            "HP": 60,
            "Attack": 105,
            "Defense": 60,
            "Sp. Attack": 120,
            "Sp. Defense": 60,
            "Speed": 105
        }
    },
    {
        "id": 572,
        "name": {
            "english": "Minccino"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 55,
            "Attack": 50,
            "Defense": 40,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 75
        }
    },
    {
        "id": 573,
        "name": {
            "english": "Cinccino"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 75,
            "Attack": 95,
            "Defense": 60,
            "Sp. Attack": 65,
            "Sp. Defense": 60,
            "Speed": 115
        }
    },
    {
        "id": 574,
        "name": {
            "english": "Gothita"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 45,
            "Attack": 30,
            "Defense": 50,
            "Sp. Attack": 55,
            "Sp. Defense": 65,
            "Speed": 45
        }
    },
    {
        "id": 575,
        "name": {
            "english": "Gothorita"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 60,
            "Attack": 45,
            "Defense": 70,
            "Sp. Attack": 75,
            "Sp. Defense": 85,
            "Speed": 55
        }
    },
    {
        "id": 576,
        "name": {
            "english": "Gothitelle"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 70,
            "Attack": 55,
            "Defense": 95,
            "Sp. Attack": 95,
            "Sp. Defense": 110,
            "Speed": 65
        }
    },
    {
        "id": 577,
        "name": {
            "english": "Solosis"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 45,
            "Attack": 30,
            "Defense": 40,
            "Sp. Attack": 105,
            "Sp. Defense": 50,
            "Speed": 20
        }
    },
    {
        "id": 578,
        "name": {
            "english": "Duosion"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 65,
            "Attack": 40,
            "Defense": 50,
            "Sp. Attack": 125,
            "Sp. Defense": 60,
            "Speed": 30
        }
    },
    {
        "id": 579,
        "name": {
            "english": "Reuniclus"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 110,
            "Attack": 65,
            "Defense": 75,
            "Sp. Attack": 125,
            "Sp. Defense": 85,
            "Speed": 30
        }
    },
    {
        "id": 580,
        "name": {
            "english": "Ducklett"
        },
        "type": [
            "Water",
            "Flying"
        ],
        "base": {
            "HP": 62,
            "Attack": 44,
            "Defense": 50,
            "Sp. Attack": 44,
            "Sp. Defense": 50,
            "Speed": 55
        }
    },
    {
        "id": 581,
        "name": {
            "english": "Swanna"
        },
        "type": [
            "Water",
            "Flying"
        ],
        "base": {
            "HP": 75,
            "Attack": 87,
            "Defense": 63,
            "Sp. Attack": 87,
            "Sp. Defense": 63,
            "Speed": 98
        }
    },
    {
        "id": 582,
        "name": {
            "english": "Vanillite"
        },
        "type": [
            "Ice"
        ],
        "base": {
            "HP": 36,
            "Attack": 50,
            "Defense": 50,
            "Sp. Attack": 65,
            "Sp. Defense": 60,
            "Speed": 44
        }
    },
    {
        "id": 583,
        "name": {
            "english": "Vanillish"
        },
        "type": [
            "Ice"
        ],
        "base": {
            "HP": 51,
            "Attack": 65,
            "Defense": 65,
            "Sp. Attack": 80,
            "Sp. Defense": 75,
            "Speed": 59
        }
    },
    {
        "id": 584,
        "name": {
            "english": "Vanilluxe"
        },
        "type": [
            "Ice"
        ],
        "base": {
            "HP": 71,
            "Attack": 95,
            "Defense": 85,
            "Sp. Attack": 110,
            "Sp. Defense": 95,
            "Speed": 79
        }
    },
    {
        "id": 585,
        "name": {
            "english": "Deerling"
        },
        "type": [
            "Normal",
            "Grass"
        ],
        "base": {
            "HP": 60,
            "Attack": 60,
            "Defense": 50,
            "Sp. Attack": 40,
            "Sp. Defense": 50,
            "Speed": 75
        }
    },
    {
        "id": 586,
        "name": {
            "english": "Sawsbuck"
        },
        "type": [
            "Normal",
            "Grass"
        ],
        "base": {
            "HP": 80,
            "Attack": 100,
            "Defense": 70,
            "Sp. Attack": 60,
            "Sp. Defense": 70,
            "Speed": 95
        }
    },
    {
        "id": 587,
        "name": {
            "english": "Emolga"
        },
        "type": [
            "Electric",
            "Flying"
        ],
        "base": {
            "HP": 55,
            "Attack": 75,
            "Defense": 60,
            "Sp. Attack": 75,
            "Sp. Defense": 60,
            "Speed": 103
        }
    },
    {
        "id": 588,
        "name": {
            "english": "Karrablast"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 50,
            "Attack": 75,
            "Defense": 45,
            "Sp. Attack": 40,
            "Sp. Defense": 45,
            "Speed": 60
        }
    },
    {
        "id": 589,
        "name": {
            "english": "Escavalier"
        },
        "type": [
            "Bug",
            "Steel"
        ],
        "base": {
            "HP": 70,
            "Attack": 135,
            "Defense": 105,
            "Sp. Attack": 60,
            "Sp. Defense": 105,
            "Speed": 20
        }
    },
    {
        "id": 590,
        "name": {
            "english": "Foongus"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 69,
            "Attack": 55,
            "Defense": 45,
            "Sp. Attack": 55,
            "Sp. Defense": 55,
            "Speed": 15
        }
    },
    {
        "id": 591,
        "name": {
            "english": "Amoonguss"
        },
        "type": [
            "Grass",
            "Poison"
        ],
        "base": {
            "HP": 114,
            "Attack": 85,
            "Defense": 70,
            "Sp. Attack": 85,
            "Sp. Defense": 80,
            "Speed": 30
        }
    },
    {
        "id": 592,
        "name": {
            "english": "Frillish"
        },
        "type": [
            "Water",
            "Ghost"
        ],
        "base": {
            "HP": 55,
            "Attack": 40,
            "Defense": 50,
            "Sp. Attack": 65,
            "Sp. Defense": 85,
            "Speed": 40
        }
    },
    {
        "id": 593,
        "name": {
            "english": "Jellicent"
        },
        "type": [
            "Water",
            "Ghost"
        ],
        "base": {
            "HP": 100,
            "Attack": 60,
            "Defense": 70,
            "Sp. Attack": 85,
            "Sp. Defense": 105,
            "Speed": 60
        }
    },
    {
        "id": 594,
        "name": {
            "english": "Alomomola"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 165,
            "Attack": 75,
            "Defense": 80,
            "Sp. Attack": 40,
            "Sp. Defense": 45,
            "Speed": 65
        }
    },
    {
        "id": 595,
        "name": {
            "english": "Joltik"
        },
        "type": [
            "Bug",
            "Electric"
        ],
        "base": {
            "HP": 50,
            "Attack": 47,
            "Defense": 50,
            "Sp. Attack": 57,
            "Sp. Defense": 50,
            "Speed": 65
        }
    },
    {
        "id": 596,
        "name": {
            "english": "Galvantula"
        },
        "type": [
            "Bug",
            "Electric"
        ],
        "base": {
            "HP": 70,
            "Attack": 77,
            "Defense": 60,
            "Sp. Attack": 97,
            "Sp. Defense": 60,
            "Speed": 108
        }
    },
    {
        "id": 597,
        "name": {
            "english": "Ferroseed"
        },
        "type": [
            "Grass",
            "Steel"
        ],
        "base": {
            "HP": 44,
            "Attack": 50,
            "Defense": 91,
            "Sp. Attack": 24,
            "Sp. Defense": 86,
            "Speed": 10
        }
    },
    {
        "id": 598,
        "name": {
            "english": "Ferrothorn"
        },
        "type": [
            "Grass",
            "Steel"
        ],
        "base": {
            "HP": 74,
            "Attack": 94,
            "Defense": 131,
            "Sp. Attack": 54,
            "Sp. Defense": 116,
            "Speed": 20
        }
    },
    {
        "id": 599,
        "name": {
            "english": "Klink"
        },
        "type": [
            "Steel"
        ],
        "base": {
            "HP": 40,
            "Attack": 55,
            "Defense": 70,
            "Sp. Attack": 45,
            "Sp. Defense": 60,
            "Speed": 30
        }
    },
    {
        "id": 600,
        "name": {
            "english": "Klang"
        },
        "type": [
            "Steel"
        ],
        "base": {
            "HP": 60,
            "Attack": 80,
            "Defense": 95,
            "Sp. Attack": 70,
            "Sp. Defense": 85,
            "Speed": 50
        }
    },
    {
        "id": 601,
        "name": {
            "english": "Klinklang"
        },
        "type": [
            "Steel"
        ],
        "base": {
            "HP": 60,
            "Attack": 100,
            "Defense": 115,
            "Sp. Attack": 70,
            "Sp. Defense": 85,
            "Speed": 90
        }
    },
    {
        "id": 602,
        "name": {
            "english": "Tynamo"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 35,
            "Attack": 55,
            "Defense": 40,
            "Sp. Attack": 45,
            "Sp. Defense": 40,
            "Speed": 60
        }
    },
    {
        "id": 603,
        "name": {
            "english": "Eelektrik"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 65,
            "Attack": 85,
            "Defense": 70,
            "Sp. Attack": 75,
            "Sp. Defense": 70,
            "Speed": 40
        }
    },
    {
        "id": 604,
        "name": {
            "english": "Eelektross"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 85,
            "Attack": 115,
            "Defense": 80,
            "Sp. Attack": 105,
            "Sp. Defense": 80,
            "Speed": 50
        }
    },
    {
        "id": 605,
        "name": {
            "english": "Elgyem"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 55,
            "Attack": 55,
            "Defense": 55,
            "Sp. Attack": 85,
            "Sp. Defense": 55,
            "Speed": 30
        }
    },
    {
        "id": 606,
        "name": {
            "english": "Beheeyem"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 75,
            "Attack": 75,
            "Defense": 75,
            "Sp. Attack": 125,
            "Sp. Defense": 95,
            "Speed": 40
        }
    },
    {
        "id": 607,
        "name": {
            "english": "Litwick"
        },
        "type": [
            "Ghost",
            "Fire"
        ],
        "base": {
            "HP": 50,
            "Attack": 30,
            "Defense": 55,
            "Sp. Attack": 65,
            "Sp. Defense": 55,
            "Speed": 20
        }
    },
    {
        "id": 608,
        "name": {
            "english": "Lampent"
        },
        "type": [
            "Ghost",
            "Fire"
        ],
        "base": {
            "HP": 60,
            "Attack": 40,
            "Defense": 60,
            "Sp. Attack": 95,
            "Sp. Defense": 60,
            "Speed": 55
        }
    },
    {
        "id": 609,
        "name": {
            "english": "Chandelure"
        },
        "type": [
            "Ghost",
            "Fire"
        ],
        "base": {
            "HP": 60,
            "Attack": 55,
            "Defense": 90,
            "Sp. Attack": 145,
            "Sp. Defense": 90,
            "Speed": 80
        }
    },
    {
        "id": 610,
        "name": {
            "english": "Axew"
        },
        "type": [
            "Dragon"
        ],
        "base": {
            "HP": 46,
            "Attack": 87,
            "Defense": 60,
            "Sp. Attack": 30,
            "Sp. Defense": 40,
            "Speed": 57
        }
    },
    {
        "id": 611,
        "name": {
            "english": "Fraxure"
        },
        "type": [
            "Dragon"
        ],
        "base": {
            "HP": 66,
            "Attack": 117,
            "Defense": 70,
            "Sp. Attack": 40,
            "Sp. Defense": 50,
            "Speed": 67
        }
    },
    {
        "id": 612,
        "name": {
            "english": "Haxorus"
        },
        "type": [
            "Dragon"
        ],
        "base": {
            "HP": 76,
            "Attack": 147,
            "Defense": 90,
            "Sp. Attack": 60,
            "Sp. Defense": 70,
            "Speed": 97
        }
    },
    {
        "id": 613,
        "name": {
            "english": "Cubchoo"
        },
        "type": [
            "Ice"
        ],
        "base": {
            "HP": 55,
            "Attack": 70,
            "Defense": 40,
            "Sp. Attack": 60,
            "Sp. Defense": 40,
            "Speed": 40
        }
    },
    {
        "id": 614,
        "name": {
            "english": "Beartic"
        },
        "type": [
            "Ice"
        ],
        "base": {
            "HP": 95,
            "Attack": 130,
            "Defense": 80,
            "Sp. Attack": 70,
            "Sp. Defense": 80,
            "Speed": 50
        }
    },
    {
        "id": 615,
        "name": {
            "english": "Cryogonal"
        },
        "type": [
            "Ice"
        ],
        "base": {
            "HP": 80,
            "Attack": 50,
            "Defense": 50,
            "Sp. Attack": 95,
            "Sp. Defense": 135,
            "Speed": 105
        }
    },
    {
        "id": 616,
        "name": {
            "english": "Shelmet"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 50,
            "Attack": 40,
            "Defense": 85,
            "Sp. Attack": 40,
            "Sp. Defense": 65,
            "Speed": 25
        }
    },
    {
        "id": 617,
        "name": {
            "english": "Accelgor"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 80,
            "Attack": 70,
            "Defense": 40,
            "Sp. Attack": 100,
            "Sp. Defense": 60,
            "Speed": 145
        }
    },
    {
        "id": 618,
        "name": {
            "english": "Stunfisk"
        },
        "type": [
            "Ground",
            "Electric"
        ],
        "base": {
            "HP": 109,
            "Attack": 66,
            "Defense": 84,
            "Sp. Attack": 81,
            "Sp. Defense": 99,
            "Speed": 32
        }
    },
    {
        "id": 619,
        "name": {
            "english": "Mienfoo"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 45,
            "Attack": 85,
            "Defense": 50,
            "Sp. Attack": 55,
            "Sp. Defense": 50,
            "Speed": 65
        }
    },
    {
        "id": 620,
        "name": {
            "english": "Mienshao"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 65,
            "Attack": 125,
            "Defense": 60,
            "Sp. Attack": 95,
            "Sp. Defense": 60,
            "Speed": 105
        }
    },
    {
        "id": 621,
        "name": {
            "english": "Druddigon"
        },
        "type": [
            "Dragon"
        ],
        "base": {
            "HP": 77,
            "Attack": 120,
            "Defense": 90,
            "Sp. Attack": 60,
            "Sp. Defense": 90,
            "Speed": 48
        }
    },
    {
        "id": 622,
        "name": {
            "english": "Golett"
        },
        "type": [
            "Ground",
            "Ghost"
        ],
        "base": {
            "HP": 59,
            "Attack": 74,
            "Defense": 50,
            "Sp. Attack": 35,
            "Sp. Defense": 50,
            "Speed": 35
        }
    },
    {
        "id": 623,
        "name": {
            "english": "Golurk"
        },
        "type": [
            "Ground",
            "Ghost"
        ],
        "base": {
            "HP": 89,
            "Attack": 124,
            "Defense": 80,
            "Sp. Attack": 55,
            "Sp. Defense": 80,
            "Speed": 55
        }
    },
    {
        "id": 624,
        "name": {
            "english": "Pawniard"
        },
        "type": [
            "Dark",
            "Steel"
        ],
        "base": {
            "HP": 45,
            "Attack": 85,
            "Defense": 70,
            "Sp. Attack": 40,
            "Sp. Defense": 40,
            "Speed": 60
        }
    },
    {
        "id": 625,
        "name": {
            "english": "Bisharp"
        },
        "type": [
            "Dark",
            "Steel"
        ],
        "base": {
            "HP": 65,
            "Attack": 125,
            "Defense": 100,
            "Sp. Attack": 60,
            "Sp. Defense": 70,
            "Speed": 70
        }
    },
    {
        "id": 626,
        "name": {
            "english": "Bouffalant"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 95,
            "Attack": 110,
            "Defense": 95,
            "Sp. Attack": 40,
            "Sp. Defense": 95,
            "Speed": 55
        }
    },
    {
        "id": 627,
        "name": {
            "english": "Rufflet"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 70,
            "Attack": 83,
            "Defense": 50,
            "Sp. Attack": 37,
            "Sp. Defense": 50,
            "Speed": 60
        }
    },
    {
        "id": 628,
        "name": {
            "english": "Braviary"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 100,
            "Attack": 123,
            "Defense": 75,
            "Sp. Attack": 57,
            "Sp. Defense": 75,
            "Speed": 80
        }
    },
    {
        "id": 629,
        "name": {
            "english": "Vullaby"
        },
        "type": [
            "Dark",
            "Flying"
        ],
        "base": {
            "HP": 70,
            "Attack": 55,
            "Defense": 75,
            "Sp. Attack": 45,
            "Sp. Defense": 65,
            "Speed": 60
        }
    },
    {
        "id": 630,
        "name": {
            "english": "Mandibuzz"
        },
        "type": [
            "Dark",
            "Flying"
        ],
        "base": {
            "HP": 110,
            "Attack": 65,
            "Defense": 105,
            "Sp. Attack": 55,
            "Sp. Defense": 95,
            "Speed": 80
        }
    },
    {
        "id": 631,
        "name": {
            "english": "Heatmor"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 85,
            "Attack": 97,
            "Defense": 66,
            "Sp. Attack": 105,
            "Sp. Defense": 66,
            "Speed": 65
        }
    },
    {
        "id": 632,
        "name": {
            "english": "Durant"
        },
        "type": [
            "Bug",
            "Steel"
        ],
        "base": {
            "HP": 58,
            "Attack": 109,
            "Defense": 112,
            "Sp. Attack": 48,
            "Sp. Defense": 48,
            "Speed": 109
        }
    },
    {
        "id": 633,
        "name": {
            "english": "Deino"
        },
        "type": [
            "Dark",
            "Dragon"
        ],
        "base": {
            "HP": 52,
            "Attack": 65,
            "Defense": 50,
            "Sp. Attack": 45,
            "Sp. Defense": 50,
            "Speed": 38
        }
    },
    {
        "id": 634,
        "name": {
            "english": "Zweilous"
        },
        "type": [
            "Dark",
            "Dragon"
        ],
        "base": {
            "HP": 72,
            "Attack": 85,
            "Defense": 70,
            "Sp. Attack": 65,
            "Sp. Defense": 70,
            "Speed": 58
        }
    },
    {
        "id": 635,
        "name": {
            "english": "Hydreigon"
        },
        "type": [
            "Dark",
            "Dragon"
        ],
        "base": {
            "HP": 92,
            "Attack": 105,
            "Defense": 90,
            "Sp. Attack": 125,
            "Sp. Defense": 90,
            "Speed": 98
        }
    },
    {
        "id": 636,
        "name": {
            "english": "Larvesta"
        },
        "type": [
            "Bug",
            "Fire"
        ],
        "base": {
            "HP": 55,
            "Attack": 85,
            "Defense": 55,
            "Sp. Attack": 50,
            "Sp. Defense": 55,
            "Speed": 60
        }
    },
    {
        "id": 637,
        "name": {
            "english": "Volcarona"
        },
        "type": [
            "Bug",
            "Fire"
        ],
        "base": {
            "HP": 85,
            "Attack": 60,
            "Defense": 65,
            "Sp. Attack": 135,
            "Sp. Defense": 105,
            "Speed": 100
        }
    },
    {
        "id": 638,
        "name": {
            "english": "Cobalion"
        },
        "type": [
            "Steel",
            "Fighting"
        ],
        "base": {
            "HP": 91,
            "Attack": 90,
            "Defense": 129,
            "Sp. Attack": 90,
            "Sp. Defense": 72,
            "Speed": 108
        }
    },
    {
        "id": 639,
        "name": {
            "english": "Terrakion"
        },
        "type": [
            "Rock",
            "Fighting"
        ],
        "base": {
            "HP": 91,
            "Attack": 129,
            "Defense": 90,
            "Sp. Attack": 72,
            "Sp. Defense": 90,
            "Speed": 108
        }
    },
    {
        "id": 640,
        "name": {
            "english": "Virizion"
        },
        "type": [
            "Grass",
            "Fighting"
        ],
        "base": {
            "HP": 91,
            "Attack": 90,
            "Defense": 72,
            "Sp. Attack": 90,
            "Sp. Defense": 129,
            "Speed": 108
        }
    },
    {
        "id": 641,
        "name": {
            "english": "Tornadus"
        },
        "type": [
            "Flying"
        ],
        "base": {
            "HP": 79,
            "Attack": 115,
            "Defense": 70,
            "Sp. Attack": 125,
            "Sp. Defense": 80,
            "Speed": 111
        }
    },
    {
        "id": 642,
        "name": {
            "english": "Thundurus"
        },
        "type": [
            "Electric",
            "Flying"
        ],
        "base": {
            "HP": 79,
            "Attack": 115,
            "Defense": 70,
            "Sp. Attack": 125,
            "Sp. Defense": 80,
            "Speed": 111
        }
    },
    {
        "id": 643,
        "name": {
            "english": "Reshiram"
        },
        "type": [
            "Dragon",
            "Fire"
        ],
        "base": {
            "HP": 100,
            "Attack": 120,
            "Defense": 100,
            "Sp. Attack": 150,
            "Sp. Defense": 120,
            "Speed": 90
        }
    },
    {
        "id": 644,
        "name": {
            "english": "Zekrom"
        },
        "type": [
            "Dragon",
            "Electric"
        ],
        "base": {
            "HP": 100,
            "Attack": 150,
            "Defense": 120,
            "Sp. Attack": 120,
            "Sp. Defense": 100,
            "Speed": 90
        }
    },
    {
        "id": 645,
        "name": {
            "english": "Landorus"
        },
        "type": [
            "Ground",
            "Flying"
        ],
        "base": {
            "HP": 89,
            "Attack": 125,
            "Defense": 90,
            "Sp. Attack": 115,
            "Sp. Defense": 80,
            "Speed": 101
        }
    },
    {
        "id": 646,
        "name": {
            "english": "Kyurem"
        },
        "type": [
            "Dragon",
            "Ice"
        ],
        "base": {
            "HP": 125,
            "Attack": 130,
            "Defense": 90,
            "Sp. Attack": 130,
            "Sp. Defense": 90,
            "Speed": 95
        }
    },
    {
        "id": 647,
        "name": {
            "english": "Keldeo"
        },
        "type": [
            "Water",
            "Fighting"
        ],
        "base": {
            "HP": 91,
            "Attack": 72,
            "Defense": 90,
            "Sp. Attack": 129,
            "Sp. Defense": 90,
            "Speed": 108
        }
    },
    {
        "id": 648,
        "name": {
            "english": "Meloetta"
        },
        "type": [
            "Normal",
            "Psychic"
        ],
        "base": {
            "HP": 100,
            "Attack": 77,
            "Defense": 77,
            "Sp. Attack": 128,
            "Sp. Defense": 128,
            "Speed": 90
        }
    },
    {
        "id": 649,
        "name": {
            "english": "Genesect"
        },
        "type": [
            "Bug",
            "Steel"
        ],
        "base": {
            "HP": 71,
            "Attack": 120,
            "Defense": 95,
            "Sp. Attack": 120,
            "Sp. Defense": 95,
            "Speed": 99
        }
    },
    {
        "id": 650,
        "name": {
            "english": "Chespin"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 56,
            "Attack": 61,
            "Defense": 65,
            "Sp. Attack": 48,
            "Sp. Defense": 45,
            "Speed": 38
        }
    },
    {
        "id": 651,
        "name": {
            "english": "Quilladin"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 61,
            "Attack": 78,
            "Defense": 95,
            "Sp. Attack": 56,
            "Sp. Defense": 58,
            "Speed": 57
        }
    },
    {
        "id": 652,
        "name": {
            "english": "Chesnaught"
        },
        "type": [
            "Grass",
            "Fighting"
        ],
        "base": {
            "HP": 88,
            "Attack": 107,
            "Defense": 122,
            "Sp. Attack": 74,
            "Sp. Defense": 75,
            "Speed": 64
        }
    },
    {
        "id": 653,
        "name": {
            "english": "Fennekin"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 40,
            "Attack": 45,
            "Defense": 40,
            "Sp. Attack": 62,
            "Sp. Defense": 60,
            "Speed": 60
        }
    },
    {
        "id": 654,
        "name": {
            "english": "Braixen"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 59,
            "Attack": 59,
            "Defense": 58,
            "Sp. Attack": 90,
            "Sp. Defense": 70,
            "Speed": 73
        }
    },
    {
        "id": 655,
        "name": {
            "english": "Delphox"
        },
        "type": [
            "Fire",
            "Psychic"
        ],
        "base": {
            "HP": 75,
            "Attack": 69,
            "Defense": 72,
            "Sp. Attack": 114,
            "Sp. Defense": 100,
            "Speed": 104
        }
    },
    {
        "id": 656,
        "name": {
            "english": "Froakie"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 41,
            "Attack": 56,
            "Defense": 40,
            "Sp. Attack": 62,
            "Sp. Defense": 44,
            "Speed": 71
        }
    },
    {
        "id": 657,
        "name": {
            "english": "Frogadier"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 54,
            "Attack": 63,
            "Defense": 52,
            "Sp. Attack": 83,
            "Sp. Defense": 56,
            "Speed": 97
        }
    },
    {
        "id": 658,
        "name": {
            "english": "Greninja"
        },
        "type": [
            "Water",
            "Dark"
        ],
        "base": {
            "HP": 72,
            "Attack": 95,
            "Defense": 67,
            "Sp. Attack": 103,
            "Sp. Defense": 71,
            "Speed": 122
        }
    },
    {
        "id": 659,
        "name": {
            "english": "Bunnelby"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 38,
            "Attack": 36,
            "Defense": 38,
            "Sp. Attack": 32,
            "Sp. Defense": 36,
            "Speed": 57
        }
    },
    {
        "id": 660,
        "name": {
            "english": "Diggersby"
        },
        "type": [
            "Normal",
            "Ground"
        ],
        "base": {
            "HP": 85,
            "Attack": 56,
            "Defense": 77,
            "Sp. Attack": 50,
            "Sp. Defense": 77,
            "Speed": 78
        }
    },
    {
        "id": 661,
        "name": {
            "english": "Fletchling"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 45,
            "Attack": 50,
            "Defense": 43,
            "Sp. Attack": 40,
            "Sp. Defense": 38,
            "Speed": 62
        }
    },
    {
        "id": 662,
        "name": {
            "english": "Fletchinder"
        },
        "type": [
            "Fire",
            "Flying"
        ],
        "base": {
            "HP": 62,
            "Attack": 73,
            "Defense": 55,
            "Sp. Attack": 56,
            "Sp. Defense": 52,
            "Speed": 84
        }
    },
    {
        "id": 663,
        "name": {
            "english": "Talonflame"
        },
        "type": [
            "Fire",
            "Flying"
        ],
        "base": {
            "HP": 78,
            "Attack": 81,
            "Defense": 71,
            "Sp. Attack": 74,
            "Sp. Defense": 69,
            "Speed": 126
        }
    },
    {
        "id": 664,
        "name": {
            "english": "Scatterbug"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 38,
            "Attack": 35,
            "Defense": 40,
            "Sp. Attack": 27,
            "Sp. Defense": 25,
            "Speed": 35
        }
    },
    {
        "id": 665,
        "name": {
            "english": "Spewpa"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 45,
            "Attack": 22,
            "Defense": 60,
            "Sp. Attack": 27,
            "Sp. Defense": 30,
            "Speed": 29
        }
    },
    {
        "id": 666,
        "name": {
            "english": "Vivillon"
        },
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 80,
            "Attack": 52,
            "Defense": 50,
            "Sp. Attack": 90,
            "Sp. Defense": 50,
            "Speed": 89
        }
    },
    {
        "id": 667,
        "name": {
            "english": "Litleo"
        },
        "type": [
            "Fire",
            "Normal"
        ],
        "base": {
            "HP": 62,
            "Attack": 50,
            "Defense": 58,
            "Sp. Attack": 73,
            "Sp. Defense": 54,
            "Speed": 72
        }
    },
    {
        "id": 668,
        "name": {
            "english": "Pyroar"
        },
        "type": [
            "Fire",
            "Normal"
        ],
        "base": {
            "HP": 86,
            "Attack": 68,
            "Defense": 72,
            "Sp. Attack": 109,
            "Sp. Defense": 66,
            "Speed": 106
        }
    },
    {
        "id": 669,
        "name": {
            "english": "Flabébé"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 44,
            "Attack": 38,
            "Defense": 39,
            "Sp. Attack": 61,
            "Sp. Defense": 79,
            "Speed": 42
        }
    },
    {
        "id": 670,
        "name": {
            "english": "Floette"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 54,
            "Attack": 45,
            "Defense": 47,
            "Sp. Attack": 75,
            "Sp. Defense": 98,
            "Speed": 52
        }
    },
    {
        "id": 671,
        "name": {
            "english": "Florges"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 78,
            "Attack": 65,
            "Defense": 68,
            "Sp. Attack": 112,
            "Sp. Defense": 154,
            "Speed": 75
        }
    },
    {
        "id": 672,
        "name": {
            "english": "Skiddo"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 66,
            "Attack": 65,
            "Defense": 48,
            "Sp. Attack": 62,
            "Sp. Defense": 57,
            "Speed": 52
        }
    },
    {
        "id": 673,
        "name": {
            "english": "Gogoat"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 123,
            "Attack": 100,
            "Defense": 62,
            "Sp. Attack": 97,
            "Sp. Defense": 81,
            "Speed": 68
        }
    },
    {
        "id": 674,
        "name": {
            "english": "Pancham"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 67,
            "Attack": 82,
            "Defense": 62,
            "Sp. Attack": 46,
            "Sp. Defense": 48,
            "Speed": 43
        }
    },
    {
        "id": 675,
        "name": {
            "english": "Pangoro"
        },
        "type": [
            "Fighting",
            "Dark"
        ],
        "base": {
            "HP": 95,
            "Attack": 124,
            "Defense": 78,
            "Sp. Attack": 69,
            "Sp. Defense": 71,
            "Speed": 58
        }
    },
    {
        "id": 676,
        "name": {
            "english": "Furfrou"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 75,
            "Attack": 80,
            "Defense": 60,
            "Sp. Attack": 65,
            "Sp. Defense": 90,
            "Speed": 102
        }
    },
    {
        "id": 677,
        "name": {
            "english": "Espurr"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 62,
            "Attack": 48,
            "Defense": 54,
            "Sp. Attack": 63,
            "Sp. Defense": 60,
            "Speed": 68
        }
    },
    {
        "id": 678,
        "name": {
            "english": "Meowstic"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 74,
            "Attack": 48,
            "Defense": 76,
            "Sp. Attack": 83,
            "Sp. Defense": 81,
            "Speed": 104
        }
    },
    {
        "id": 679,
        "name": {
            "english": "Honedge"
        },
        "type": [
            "Steel",
            "Ghost"
        ],
        "base": {
            "HP": 45,
            "Attack": 80,
            "Defense": 100,
            "Sp. Attack": 35,
            "Sp. Defense": 37,
            "Speed": 28
        }
    },
    {
        "id": 680,
        "name": {
            "english": "Doublade"
        },
        "type": [
            "Steel",
            "Ghost"
        ],
        "base": {
            "HP": 59,
            "Attack": 110,
            "Defense": 150,
            "Sp. Attack": 45,
            "Sp. Defense": 49,
            "Speed": 35
        }
    },
    {
        "id": 681,
        "name": {
            "english": "Aegislash"
        },
        "type": [
            "Steel",
            "Ghost"
        ],
        "base": {
            "HP": 60,
            "Attack": 50,
            "Defense": 150,
            "Sp. Attack": 50,
            "Sp. Defense": 150,
            "Speed": 60
        }
    },
    {
        "id": 682,
        "name": {
            "english": "Spritzee"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 78,
            "Attack": 52,
            "Defense": 60,
            "Sp. Attack": 63,
            "Sp. Defense": 65,
            "Speed": 23
        }
    },
    {
        "id": 683,
        "name": {
            "english": "Aromatisse"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 101,
            "Attack": 72,
            "Defense": 72,
            "Sp. Attack": 99,
            "Sp. Defense": 89,
            "Speed": 29
        }
    },
    {
        "id": 684,
        "name": {
            "english": "Swirlix"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 62,
            "Attack": 48,
            "Defense": 66,
            "Sp. Attack": 59,
            "Sp. Defense": 57,
            "Speed": 49
        }
    },
    {
        "id": 685,
        "name": {
            "english": "Slurpuff"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 82,
            "Attack": 80,
            "Defense": 86,
            "Sp. Attack": 85,
            "Sp. Defense": 75,
            "Speed": 72
        }
    },
    {
        "id": 686,
        "name": {
            "english": "Inkay"
        },
        "type": [
            "Dark",
            "Psychic"
        ],
        "base": {
            "HP": 53,
            "Attack": 54,
            "Defense": 53,
            "Sp. Attack": 37,
            "Sp. Defense": 46,
            "Speed": 45
        }
    },
    {
        "id": 687,
        "name": {
            "english": "Malamar"
        },
        "type": [
            "Dark",
            "Psychic"
        ],
        "base": {
            "HP": 86,
            "Attack": 92,
            "Defense": 88,
            "Sp. Attack": 68,
            "Sp. Defense": 75,
            "Speed": 73
        }
    },
    {
        "id": 688,
        "name": {
            "english": "Binacle"
        },
        "type": [
            "Rock",
            "Water"
        ],
        "base": {
            "HP": 42,
            "Attack": 52,
            "Defense": 67,
            "Sp. Attack": 39,
            "Sp. Defense": 56,
            "Speed": 50
        }
    },
    {
        "id": 689,
        "name": {
            "english": "Barbaracle"
        },
        "type": [
            "Rock",
            "Water"
        ],
        "base": {
            "HP": 72,
            "Attack": 105,
            "Defense": 115,
            "Sp. Attack": 54,
            "Sp. Defense": 86,
            "Speed": 68
        }
    },
    {
        "id": 690,
        "name": {
            "english": "Skrelp"
        },
        "type": [
            "Poison",
            "Water"
        ],
        "base": {
            "HP": 50,
            "Attack": 60,
            "Defense": 60,
            "Sp. Attack": 60,
            "Sp. Defense": 60,
            "Speed": 30
        }
    },
    {
        "id": 691,
        "name": {
            "english": "Dragalge"
        },
        "type": [
            "Poison",
            "Dragon"
        ],
        "base": {
            "HP": 65,
            "Attack": 75,
            "Defense": 90,
            "Sp. Attack": 97,
            "Sp. Defense": 123,
            "Speed": 44
        }
    },
    {
        "id": 692,
        "name": {
            "english": "Clauncher"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 50,
            "Attack": 53,
            "Defense": 62,
            "Sp. Attack": 58,
            "Sp. Defense": 63,
            "Speed": 44
        }
    },
    {
        "id": 693,
        "name": {
            "english": "Clawitzer"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 71,
            "Attack": 73,
            "Defense": 88,
            "Sp. Attack": 120,
            "Sp. Defense": 89,
            "Speed": 59
        }
    },
    {
        "id": 694,
        "name": {
            "english": "Helioptile"
        },
        "type": [
            "Electric",
            "Normal"
        ],
        "base": {
            "HP": 44,
            "Attack": 38,
            "Defense": 33,
            "Sp. Attack": 61,
            "Sp. Defense": 43,
            "Speed": 70
        }
    },
    {
        "id": 695,
        "name": {
            "english": "Heliolisk"
        },
        "type": [
            "Electric",
            "Normal"
        ],
        "base": {
            "HP": 62,
            "Attack": 55,
            "Defense": 52,
            "Sp. Attack": 109,
            "Sp. Defense": 94,
            "Speed": 109
        }
    },
    {
        "id": 696,
        "name": {
            "english": "Tyrunt"
        },
        "type": [
            "Rock",
            "Dragon"
        ],
        "base": {
            "HP": 58,
            "Attack": 89,
            "Defense": 77,
            "Sp. Attack": 45,
            "Sp. Defense": 45,
            "Speed": 48
        }
    },
    {
        "id": 697,
        "name": {
            "english": "Tyrantrum"
        },
        "type": [
            "Rock",
            "Dragon"
        ],
        "base": {
            "HP": 82,
            "Attack": 121,
            "Defense": 119,
            "Sp. Attack": 69,
            "Sp. Defense": 59,
            "Speed": 71
        }
    },
    {
        "id": 698,
        "name": {
            "english": "Amaura"
        },
        "type": [
            "Rock",
            "Ice"
        ],
        "base": {
            "HP": 77,
            "Attack": 59,
            "Defense": 50,
            "Sp. Attack": 67,
            "Sp. Defense": 63,
            "Speed": 46
        }
    },
    {
        "id": 699,
        "name": {
            "english": "Aurorus"
        },
        "type": [
            "Rock",
            "Ice"
        ],
        "base": {
            "HP": 123,
            "Attack": 77,
            "Defense": 72,
            "Sp. Attack": 99,
            "Sp. Defense": 92,
            "Speed": 58
        }
    },
    {
        "id": 700,
        "name": {
            "english": "Sylveon"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 95,
            "Attack": 65,
            "Defense": 65,
            "Sp. Attack": 110,
            "Sp. Defense": 130,
            "Speed": 60
        }
    },
    {
        "id": 701,
        "name": {
            "english": "Hawlucha"
        },
        "type": [
            "Fighting",
            "Flying"
        ],
        "base": {
            "HP": 78,
            "Attack": 92,
            "Defense": 75,
            "Sp. Attack": 74,
            "Sp. Defense": 63,
            "Speed": 118
        }
    },
    {
        "id": 702,
        "name": {
            "english": "Dedenne"
        },
        "type": [
            "Electric",
            "Fairy"
        ],
        "base": {
            "HP": 67,
            "Attack": 58,
            "Defense": 57,
            "Sp. Attack": 81,
            "Sp. Defense": 67,
            "Speed": 101
        }
    },
    {
        "id": 703,
        "name": {
            "english": "Carbink"
        },
        "type": [
            "Rock",
            "Fairy"
        ],
        "base": {
            "HP": 50,
            "Attack": 50,
            "Defense": 150,
            "Sp. Attack": 50,
            "Sp. Defense": 150,
            "Speed": 50
        }
    },
    {
        "id": 704,
        "name": {
            "english": "Goomy"
        },
        "type": [
            "Dragon"
        ],
        "base": {
            "HP": 45,
            "Attack": 50,
            "Defense": 35,
            "Sp. Attack": 55,
            "Sp. Defense": 75,
            "Speed": 40
        }
    },
    {
        "id": 705,
        "name": {
            "english": "Sliggoo"
        },
        "type": [
            "Dragon"
        ],
        "base": {
            "HP": 68,
            "Attack": 75,
            "Defense": 53,
            "Sp. Attack": 83,
            "Sp. Defense": 113,
            "Speed": 60
        }
    },
    {
        "id": 706,
        "name": {
            "english": "Goodra"
        },
        "type": [
            "Dragon"
        ],
        "base": {
            "HP": 90,
            "Attack": 100,
            "Defense": 70,
            "Sp. Attack": 110,
            "Sp. Defense": 150,
            "Speed": 80
        }
    },
    {
        "id": 707,
        "name": {
            "english": "Klefki"
        },
        "type": [
            "Steel",
            "Fairy"
        ],
        "base": {
            "HP": 57,
            "Attack": 80,
            "Defense": 91,
            "Sp. Attack": 80,
            "Sp. Defense": 87,
            "Speed": 75
        }
    },
    {
        "id": 708,
        "name": {
            "english": "Phantump"
        },
        "type": [
            "Ghost",
            "Grass"
        ],
        "base": {
            "HP": 43,
            "Attack": 70,
            "Defense": 48,
            "Sp. Attack": 50,
            "Sp. Defense": 60,
            "Speed": 38
        }
    },
    {
        "id": 709,
        "name": {
            "english": "Trevenant"
        },
        "type": [
            "Ghost",
            "Grass"
        ],
        "base": {
            "HP": 85,
            "Attack": 110,
            "Defense": 76,
            "Sp. Attack": 65,
            "Sp. Defense": 82,
            "Speed": 56
        }
    },
    {
        "id": 710,
        "name": {
            "english": "Pumpkaboo"
        },
        "type": [
            "Ghost",
            "Grass"
        ],
        "base": {
            "HP": 59,
            "Attack": 66,
            "Defense": 70,
            "Sp. Attack": 44,
            "Sp. Defense": 55,
            "Speed": 41
        }
    },
    {
        "id": 711,
        "name": {
            "english": "Gourgeist"
        },
        "type": [
            "Ghost",
            "Grass"
        ],
        "base": {
            "HP": 85,
            "Attack": 100,
            "Defense": 122,
            "Sp. Attack": 58,
            "Sp. Defense": 75,
            "Speed": 54
        }
    },
    {
        "id": 712,
        "name": {
            "english": "Bergmite"
        },
        "type": [
            "Ice"
        ],
        "base": {
            "HP": 55,
            "Attack": 69,
            "Defense": 85,
            "Sp. Attack": 32,
            "Sp. Defense": 35,
            "Speed": 28
        }
    },
    {
        "id": 713,
        "name": {
            "english": "Avalugg"
        },
        "type": [
            "Ice"
        ],
        "base": {
            "HP": 95,
            "Attack": 117,
            "Defense": 184,
            "Sp. Attack": 44,
            "Sp. Defense": 46,
            "Speed": 28
        }
    },
    {
        "id": 714,
        "name": {
            "english": "Noibat"
        },
        "type": [
            "Flying",
            "Dragon"
        ],
        "base": {
            "HP": 40,
            "Attack": 30,
            "Defense": 35,
            "Sp. Attack": 45,
            "Sp. Defense": 40,
            "Speed": 55
        }
    },
    {
        "id": 715,
        "name": {
            "english": "Noivern"
        },
        "type": [
            "Flying",
            "Dragon"
        ],
        "base": {
            "HP": 85,
            "Attack": 70,
            "Defense": 80,
            "Sp. Attack": 97,
            "Sp. Defense": 80,
            "Speed": 123
        }
    },
    {
        "id": 716,
        "name": {
            "english": "Xerneas"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 126,
            "Attack": 131,
            "Defense": 95,
            "Sp. Attack": 131,
            "Sp. Defense": 98,
            "Speed": 99
        }
    },
    {
        "id": 717,
        "name": {
            "english": "Yveltal"
        },
        "type": [
            "Dark",
            "Flying"
        ],
        "base": {
            "HP": 126,
            "Attack": 131,
            "Defense": 95,
            "Sp. Attack": 131,
            "Sp. Defense": 98,
            "Speed": 99
        }
    },
    {
        "id": 718,
        "name": {
            "english": "Zygarde"
        },
        "type": [
            "Dragon",
            "Ground"
        ],
        "base": {
            "HP": 108,
            "Attack": 100,
            "Defense": 121,
            "Sp. Attack": 81,
            "Sp. Defense": 95,
            "Speed": 95
        }
    },
    {
        "id": 719,
        "name": {
            "english": "Diancie"
        },
        "type": [
            "Rock",
            "Fairy"
        ],
        "base": {
            "HP": 50,
            "Attack": 100,
            "Defense": 150,
            "Sp. Attack": 100,
            "Sp. Defense": 150,
            "Speed": 50
        }
    },
    {
        "id": 720,
        "name": {
            "english": "Hoopa"
        },
        "type": [
            "Psychic",
            "Ghost"
        ],
        "base": {
            "HP": 80,
            "Attack": 110,
            "Defense": 60,
            "Sp. Attack": 150,
            "Sp. Defense": 130,
            "Speed": 70
        }
    },
    {
        "id": 721,
        "name": {
            "english": "Volcanion"
        },
        "type": [
            "Fire",
            "Water"
        ],
        "base": {
            "HP": 80,
            "Attack": 110,
            "Defense": 120,
            "Sp. Attack": 130,
            "Sp. Defense": 90,
            "Speed": 70
        }
    },
    {
        "id": 722,
        "name": {
            "english": "Rowlet"
        },
        "type": [
            "Grass",
            "Flying"
        ],
        "base": {
            "HP": 68,
            "Attack": 55,
            "Defense": 55,
            "Sp. Attack": 50,
            "Sp. Defense": 50,
            "Speed": 42
        }
    },
    {
        "id": 723,
        "name": {
            "english": "Dartrix"
        },
        "type": [
            "Grass",
            "Flying"
        ],
        "base": {
            "HP": 78,
            "Attack": 75,
            "Defense": 75,
            "Sp. Attack": 70,
            "Sp. Defense": 70,
            "Speed": 52
        }
    },
    {
        "id": 724,
        "name": {
            "english": "Decidueye"
        },
        "type": [
            "Grass",
            "Ghost"
        ],
        "base": {
            "HP": 78,
            "Attack": 107,
            "Defense": 75,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            "Speed": 70
        }
    },
    {
        "id": 725,
        "name": {
            "english": "Litten"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 45,
            "Attack": 65,
            "Defense": 40,
            "Sp. Attack": 60,
            "Sp. Defense": 40,
            "Speed": 70
        }
    },
    {
        "id": 726,
        "name": {
            "english": "Torracat"
        },
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 65,
            "Attack": 85,
            "Defense": 50,
            "Sp. Attack": 80,
            "Sp. Defense": 50,
            "Speed": 90
        }
    },
    {
        "id": 727,
        "name": {
            "english": "Incineroar"
        },
        "type": [
            "Fire",
            "Dark"
        ],
        "base": {
            "HP": 95,
            "Attack": 115,
            "Defense": 90,
            "Sp. Attack": 80,
            "Sp. Defense": 90,
            "Speed": 60
        }
    },
    {
        "id": 728,
        "name": {
            "english": "Popplio"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 50,
            "Attack": 54,
            "Defense": 54,
            "Sp. Attack": 66,
            "Sp. Defense": 56,
            "Speed": 40
        }
    },
    {
        "id": 729,
        "name": {
            "english": "Brionne"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 60,
            "Attack": 69,
            "Defense": 69,
            "Sp. Attack": 91,
            "Sp. Defense": 81,
            "Speed": 50
        }
    },
    {
        "id": 730,
        "name": {
            "english": "Primarina"
        },
        "type": [
            "Water",
            "Fairy"
        ],
        "base": {
            "HP": 80,
            "Attack": 74,
            "Defense": 74,
            "Sp. Attack": 126,
            "Sp. Defense": 116,
            "Speed": 60
        }
    },
    {
        "id": 731,
        "name": {
            "english": "Pikipek"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 35,
            "Attack": 75,
            "Defense": 30,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            "Speed": 65
        }
    },
    {
        "id": 732,
        "name": {
            "english": "Trumbeak"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 55,
            "Attack": 85,
            "Defense": 50,
            "Sp. Attack": 40,
            "Sp. Defense": 50,
            "Speed": 75
        }
    },
    {
        "id": 733,
        "name": {
            "english": "Toucannon"
        },
        "type": [
            "Normal",
            "Flying"
        ],
        "base": {
            "HP": 80,
            "Attack": 120,
            "Defense": 75,
            "Sp. Attack": 75,
            "Sp. Defense": 75,
            "Speed": 60
        }
    },
    {
        "id": 734,
        "name": {
            "english": "Yungoos"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 48,
            "Attack": 70,
            "Defense": 30,
            "Sp. Attack": 30,
            "Sp. Defense": 30,
            "Speed": 45
        }
    },
    {
        "id": 735,
        "name": {
            "english": "Gumshoos"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 88,
            "Attack": 110,
            "Defense": 60,
            "Sp. Attack": 55,
            "Sp. Defense": 60,
            "Speed": 45
        }
    },
    {
        "id": 736,
        "name": {
            "english": "Grubbin"
        },
        "type": [
            "Bug"
        ],
        "base": {
            "HP": 47,
            "Attack": 62,
            "Defense": 45,
            "Sp. Attack": 55,
            "Sp. Defense": 45,
            "Speed": 46
        }
    },
    {
        "id": 737,
        "name": {
            "english": "Charjabug"
        },
        "type": [
            "Bug",
            "Electric"
        ],
        "base": {
            "HP": 57,
            "Attack": 82,
            "Defense": 95,
            "Sp. Attack": 55,
            "Sp. Defense": 75,
            "Speed": 36
        }
    },
    {
        "id": 738,
        "name": {
            "english": "Vikavolt"
        },
        "type": [
            "Bug",
            "Electric"
        ],
        "base": {
            "HP": 77,
            "Attack": 70,
            "Defense": 90,
            "Sp. Attack": 145,
            "Sp. Defense": 75,
            "Speed": 43
        }
    },
    {
        "id": 739,
        "name": {
            "english": "Crabrawler"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 47,
            "Attack": 82,
            "Defense": 57,
            "Sp. Attack": 42,
            "Sp. Defense": 47,
            "Speed": 63
        }
    },
    {
        "id": 740,
        "name": {
            "english": "Crabominable"
        },
        "type": [
            "Fighting",
            "Ice"
        ],
        "base": {
            "HP": 97,
            "Attack": 132,
            "Defense": 77,
            "Sp. Attack": 62,
            "Sp. Defense": 67,
            "Speed": 43
        }
    },
    {
        "id": 741,
        "name": {
            "english": "Oricorio"
        },
        "type": [
            "Fire",
            "Flying"
        ],
        "base": {
            "HP": 75,
            "Attack": 70,
            "Defense": 70,
            "Sp. Attack": 98,
            "Sp. Defense": 70,
            "Speed": 93
        }
    },
    {
        "id": 742,
        "name": {
            "english": "Cutiefly"
        },
        "type": [
            "Bug",
            "Fairy"
        ],
        "base": {
            "HP": 40,
            "Attack": 45,
            "Defense": 40,
            "Sp. Attack": 55,
            "Sp. Defense": 40,
            "Speed": 84
        }
    },
    {
        "id": 743,
        "name": {
            "english": "Ribombee"
        },
        "type": [
            "Bug",
            "Fairy"
        ],
        "base": {
            "HP": 60,
            "Attack": 55,
            "Defense": 60,
            "Sp. Attack": 95,
            "Sp. Defense": 70,
            "Speed": 124
        }
    },
    {
        "id": 744,
        "name": {
            "english": "Rockruff"
        },
        "type": [
            "Rock"
        ],
        "base": {
            "HP": 45,
            "Attack": 65,
            "Defense": 40,
            "Sp. Attack": 30,
            "Sp. Defense": 40,
            "Speed": 60
        }
    },
    {
        "id": 745,
        "name": {
            "english": "Lycanroc"
        },
        "type": [
            "Rock"
        ],
        "base": {
            "HP": 75,
            "Attack": 115,
            "Defense": 65,
            "Sp. Attack": 55,
            "Sp. Defense": 65,
            "Speed": 112
        }
    },
    {
        "id": 746,
        "name": {
            "english": "Wishiwashi"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 45,
            "Attack": 20,
            "Defense": 20,
            "Sp. Attack": 25,
            "Sp. Defense": 25,
            "Speed": 40
        }
    },
    {
        "id": 747,
        "name": {
            "english": "Mareanie"
        },
        "type": [
            "Poison",
            "Water"
        ],
        "base": {
            "HP": 50,
            "Attack": 53,
            "Defense": 62,
            "Sp. Attack": 43,
            "Sp. Defense": 52,
            "Speed": 45
        }
    },
    {
        "id": 748,
        "name": {
            "english": "Toxapex"
        },
        "type": [
            "Poison",
            "Water"
        ],
        "base": {
            "HP": 50,
            "Attack": 63,
            "Defense": 152,
            "Sp. Attack": 53,
            "Sp. Defense": 142,
            "Speed": 35
        }
    },
    {
        "id": 749,
        "name": {
            "english": "Mudbray"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 70,
            "Attack": 100,
            "Defense": 70,
            "Sp. Attack": 45,
            "Sp. Defense": 55,
            "Speed": 45
        }
    },
    {
        "id": 750,
        "name": {
            "english": "Mudsdale"
        },
        "type": [
            "Ground"
        ],
        "base": {
            "HP": 100,
            "Attack": 125,
            "Defense": 100,
            "Sp. Attack": 55,
            "Sp. Defense": 85,
            "Speed": 35
        }
    },
    {
        "id": 751,
        "name": {
            "english": "Dewpider"
        },
        "type": [
            "Water",
            "Bug"
        ],
        "base": {
            "HP": 38,
            "Attack": 40,
            "Defense": 52,
            "Sp. Attack": 40,
            "Sp. Defense": 72,
            "Speed": 27
        }
    },
    {
        "id": 752,
        "name": {
            "english": "Araquanid"
        },
        "type": [
            "Water",
            "Bug"
        ],
        "base": {
            "HP": 68,
            "Attack": 70,
            "Defense": 92,
            "Sp. Attack": 50,
            "Sp. Defense": 132,
            "Speed": 42
        }
    },
    {
        "id": 753,
        "name": {
            "english": "Fomantis"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 40,
            "Attack": 55,
            "Defense": 35,
            "Sp. Attack": 50,
            "Sp. Defense": 35,
            "Speed": 35
        }
    },
    {
        "id": 754,
        "name": {
            "english": "Lurantis"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 70,
            "Attack": 105,
            "Defense": 90,
            "Sp. Attack": 80,
            "Sp. Defense": 90,
            "Speed": 45
        }
    },
    {
        "id": 755,
        "name": {
            "english": "Morelull"
        },
        "type": [
            "Grass",
            "Fairy"
        ],
        "base": {
            "HP": 40,
            "Attack": 35,
            "Defense": 55,
            "Sp. Attack": 65,
            "Sp. Defense": 75,
            "Speed": 15
        }
    },
    {
        "id": 756,
        "name": {
            "english": "Shiinotic"
        },
        "type": [
            "Grass",
            "Fairy"
        ],
        "base": {
            "HP": 60,
            "Attack": 45,
            "Defense": 80,
            "Sp. Attack": 90,
            "Sp. Defense": 100,
            "Speed": 30
        }
    },
    {
        "id": 757,
        "name": {
            "english": "Salandit"
        },
        "type": [
            "Poison",
            "Fire"
        ],
        "base": {
            "HP": 48,
            "Attack": 44,
            "Defense": 40,
            "Sp. Attack": 71,
            "Sp. Defense": 40,
            "Speed": 77
        }
    },
    {
        "id": 758,
        "name": {
            "english": "Salazzle"
        },
        "type": [
            "Poison",
            "Fire"
        ],
        "base": {
            "HP": 68,
            "Attack": 64,
            "Defense": 60,
            "Sp. Attack": 111,
            "Sp. Defense": 60,
            "Speed": 117
        }
    },
    {
        "id": 759,
        "name": {
            "english": "Stufful"
        },
        "type": [
            "Normal",
            "Fighting"
        ],
        "base": {
            "HP": 70,
            "Attack": 75,
            "Defense": 50,
            "Sp. Attack": 45,
            "Sp. Defense": 50,
            "Speed": 50
        }
    },
    {
        "id": 760,
        "name": {
            "english": "Bewear"
        },
        "type": [
            "Normal",
            "Fighting"
        ],
        "base": {
            "HP": 120,
            "Attack": 125,
            "Defense": 80,
            "Sp. Attack": 55,
            "Sp. Defense": 60,
            "Speed": 60
        }
    },
    {
        "id": 761,
        "name": {
            "english": "Bounsweet"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 42,
            "Attack": 30,
            "Defense": 38,
            "Sp. Attack": 30,
            "Sp. Defense": 38,
            "Speed": 32
        }
    },
    {
        "id": 762,
        "name": {
            "english": "Steenee"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 52,
            "Attack": 40,
            "Defense": 48,
            "Sp. Attack": 40,
            "Sp. Defense": 48,
            "Speed": 62
        }
    },
    {
        "id": 763,
        "name": {
            "english": "Tsareena"
        },
        "type": [
            "Grass"
        ],
        "base": {
            "HP": 72,
            "Attack": 120,
            "Defense": 98,
            "Sp. Attack": 50,
            "Sp. Defense": 98,
            "Speed": 72
        }
    },
    {
        "id": 764,
        "name": {
            "english": "Comfey"
        },
        "type": [
            "Fairy"
        ],
        "base": {
            "HP": 51,
            "Attack": 52,
            "Defense": 90,
            "Sp. Attack": 82,
            "Sp. Defense": 110,
            "Speed": 100
        }
    },
    {
        "id": 765,
        "name": {
            "english": "Oranguru"
        },
        "type": [
            "Normal",
            "Psychic"
        ],
        "base": {
            "HP": 90,
            "Attack": 60,
            "Defense": 80,
            "Sp. Attack": 90,
            "Sp. Defense": 110,
            "Speed": 60
        }
    },
    {
        "id": 766,
        "name": {
            "english": "Passimian"
        },
        "type": [
            "Fighting"
        ],
        "base": {
            "HP": 100,
            "Attack": 120,
            "Defense": 90,
            "Sp. Attack": 40,
            "Sp. Defense": 60,
            "Speed": 80
        }
    },
    {
        "id": 767,
        "name": {
            "english": "Wimpod"
        },
        "type": [
            "Bug",
            "Water"
        ],
        "base": {
            "HP": 25,
            "Attack": 35,
            "Defense": 40,
            "Sp. Attack": 20,
            "Sp. Defense": 30,
            "Speed": 80
        }
    },
    {
        "id": 768,
        "name": {
            "english": "Golisopod"
        },
        "type": [
            "Bug",
            "Water"
        ],
        "base": {
            "HP": 75,
            "Attack": 125,
            "Defense": 140,
            "Sp. Attack": 60,
            "Sp. Defense": 90,
            "Speed": 40
        }
    },
    {
        "id": 769,
        "name": {
            "english": "Sandygast"
        },
        "type": [
            "Ghost",
            "Ground"
        ],
        "base": {
            "HP": 55,
            "Attack": 55,
            "Defense": 80,
            "Sp. Attack": 70,
            "Sp. Defense": 45,
            "Speed": 15
        }
    },
    {
        "id": 770,
        "name": {
            "english": "Palossand"
        },
        "type": [
            "Ghost",
            "Ground"
        ],
        "base": {
            "HP": 85,
            "Attack": 75,
            "Defense": 110,
            "Sp. Attack": 100,
            "Sp. Defense": 75,
            "Speed": 35
        }
    },
    {
        "id": 771,
        "name": {
            "english": "Pyukumuku"
        },
        "type": [
            "Water"
        ],
        "base": {
            "HP": 55,
            "Attack": 60,
            "Defense": 130,
            "Sp. Attack": 30,
            "Sp. Defense": 130,
            "Speed": 5
        }
    },
    {
        "id": 772,
        "name": {
            "english": "Type: Null"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 95,
            "Attack": 95,
            "Defense": 95,
            "Sp. Attack": 95,
            "Sp. Defense": 95,
            "Speed": 59
        }
    },
    {
        "id": 773,
        "name": {
            "english": "Silvally"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 95,
            "Attack": 95,
            "Defense": 95,
            "Sp. Attack": 95,
            "Sp. Defense": 95,
            "Speed": 95
        }
    },
    {
        "id": 774,
        "name": {
            "english": "Minior"
        },
        "type": [
            "Rock",
            "Flying"
        ],
        "base": {
            "HP": 60,
            "Attack": 60,
            "Defense": 100,
            "Sp. Attack": 60,
            "Sp. Defense": 100,
            "Speed": 60
        }
    },
    {
        "id": 775,
        "name": {
            "english": "Komala"
        },
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 65,
            "Attack": 115,
            "Defense": 65,
            "Sp. Attack": 75,
            "Sp. Defense": 95,
            "Speed": 65
        }
    },
    {
        "id": 776,
        "name": {
            "english": "Turtonator"
        },
        "type": [
            "Fire",
            "Dragon"
        ],
        "base": {
            "HP": 60,
            "Attack": 78,
            "Defense": 135,
            "Sp. Attack": 91,
            "Sp. Defense": 85,
            "Speed": 36
        }
    },
    {
        "id": 777,
        "name": {
            "english": "Togedemaru"
        },
        "type": [
            "Electric",
            "Steel"
        ],
        "base": {
            "HP": 65,
            "Attack": 98,
            "Defense": 63,
            "Sp. Attack": 40,
            "Sp. Defense": 73,
            "Speed": 96
        }
    },
    {
        "id": 778,
        "name": {
            "english": "Mimikyu"
        },
        "type": [
            "Ghost",
            "Fairy"
        ],
        "base": {
            "HP": 55,
            "Attack": 90,
            "Defense": 80,
            "Sp. Attack": 50,
            "Sp. Defense": 105,
            "Speed": 96
        }
    },
    {
        "id": 779,
        "name": {
            "english": "Bruxish"
        },
        "type": [
            "Water",
            "Psychic"
        ],
        "base": {
            "HP": 68,
            "Attack": 105,
            "Defense": 70,
            "Sp. Attack": 70,
            "Sp. Defense": 70,
            "Speed": 92
        }
    },
    {
        "id": 780,
        "name": {
            "english": "Drampa"
        },
        "type": [
            "Normal",
            "Dragon"
        ],
        "base": {
            "HP": 78,
            "Attack": 60,
            "Defense": 85,
            "Sp. Attack": 135,
            "Sp. Defense": 91,
            "Speed": 36
        }
    },
    {
        "id": 781,
        "name": {
            "english": "Dhelmise"
        },
        "type": [
            "Ghost",
            "Grass"
        ],
        "base": {
            "HP": 70,
            "Attack": 131,
            "Defense": 100,
            "Sp. Attack": 86,
            "Sp. Defense": 90,
            "Speed": 40
        }
    },
    {
        "id": 782,
        "name": {
            "english": "Jangmo-o"
        },
        "type": [
            "Dragon"
        ],
        "base": {
            "HP": 45,
            "Attack": 55,
            "Defense": 65,
            "Sp. Attack": 45,
            "Sp. Defense": 45,
            "Speed": 45
        }
    },
    {
        "id": 783,
        "name": {
            "english": "Hakamo-o"
        },
        "type": [
            "Dragon",
            "Fighting"
        ],
        "base": {
            "HP": 55,
            "Attack": 75,
            "Defense": 90,
            "Sp. Attack": 65,
            "Sp. Defense": 70,
            "Speed": 65
        }
    },
    {
        "id": 784,
        "name": {
            "english": "Kommo-o"
        },
        "type": [
            "Dragon",
            "Fighting"
        ],
        "base": {
            "HP": 75,
            "Attack": 110,
            "Defense": 125,
            "Sp. Attack": 100,
            "Sp. Defense": 105,
            "Speed": 85
        }
    },
    {
        "id": 785,
        "name": {
            "english": "Tapu Koko"
        },
        "type": [
            "Electric",
            "Fairy"
        ],
        "base": {
            "HP": 70,
            "Attack": 115,
            "Defense": 85,
            "Sp. Attack": 95,
            "Sp. Defense": 75,
            "Speed": 130
        }
    },
    {
        "id": 786,
        "name": {
            "english": "Tapu Lele"
        },
        "type": [
            "Psychic",
            "Fairy"
        ],
        "base": {
            "HP": 70,
            "Attack": 85,
            "Defense": 75,
            "Sp. Attack": 130,
            "Sp. Defense": 115,
            "Speed": 95
        }
    },
    {
        "id": 787,
        "name": {
            "english": "Tapu Bulu"
        },
        "type": [
            "Grass",
            "Fairy"
        ],
        "base": {
            "HP": 70,
            "Attack": 130,
            "Defense": 115,
            "Sp. Attack": 85,
            "Sp. Defense": 95,
            "Speed": 75
        }
    },
    {
        "id": 788,
        "name": {
            "english": "Tapu Fini"
        },
        "type": [
            "Water",
            "Fairy"
        ],
        "base": {
            "HP": 70,
            "Attack": 75,
            "Defense": 115,
            "Sp. Attack": 95,
            "Sp. Defense": 130,
            "Speed": 85
        }
    },
    {
        "id": 789,
        "name": {
            "english": "Cosmog"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 43,
            "Attack": 29,
            "Defense": 31,
            "Sp. Attack": 29,
            "Sp. Defense": 31,
            "Speed": 37
        }
    },
    {
        "id": 790,
        "name": {
            "english": "Cosmoem"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 43,
            "Attack": 29,
            "Defense": 131,
            "Sp. Attack": 29,
            "Sp. Defense": 131,
            "Speed": 37
        }
    },
    {
        "id": 791,
        "name": {
            "english": "Solgaleo"
        },
        "type": [
            "Psychic",
            "Steel"
        ],
        "base": {
            "HP": 137,
            "Attack": 137,
            "Defense": 107,
            "Sp. Attack": 113,
            "Sp. Defense": 89,
            "Speed": 97
        }
    },
    {
        "id": 792,
        "name": {
            "english": "Lunala"
        },
        "type": [
            "Psychic",
            "Ghost"
        ],
        "base": {
            "HP": 137,
            "Attack": 113,
            "Defense": 89,
            "Sp. Attack": 137,
            "Sp. Defense": 107,
            "Speed": 97
        }
    },
    {
        "id": 793,
        "name": {
            "english": "Nihilego"
        },
        "type": [
            "Rock",
            "Poison"
        ],
        "base": {
            "HP": 109,
            "Attack": 53,
            "Defense": 47,
            "Sp. Attack": 127,
            "Sp. Defense": 131,
            "Speed": 103
        }
    },
    {
        "id": 794,
        "name": {
            "english": "Buzzwole"
        },
        "type": [
            "Bug",
            "Fighting"
        ],
        "base": {
            "HP": 107,
            "Attack": 139,
            "Defense": 139,
            "Sp. Attack": 53,
            "Sp. Defense": 53,
            "Speed": 79
        }
    },
    {
        "id": 795,
        "name": {
            "english": "Pheromosa"
        },
        "type": [
            "Bug",
            "Fighting"
        ],
        "base": {
            "HP": 71,
            "Attack": 137,
            "Defense": 37,
            "Sp. Attack": 137,
            "Sp. Defense": 37,
            "Speed": 151
        }
    },
    {
        "id": 796,
        "name": {
            "english": "Xurkitree"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 83,
            "Attack": 89,
            "Defense": 71,
            "Sp. Attack": 173,
            "Sp. Defense": 71,
            "Speed": 83
        }
    },
    {
        "id": 797,
        "name": {
            "english": "Celesteela"
        },
        "type": [
            "Steel",
            "Flying"
        ],
        "base": {
            "HP": 97,
            "Attack": 101,
            "Defense": 103,
            "Sp. Attack": 107,
            "Sp. Defense": 101,
            "Speed": 61
        }
    },
    {
        "id": 798,
        "name": {
            "english": "Kartana"
        },
        "type": [
            "Grass",
            "Steel"
        ],
        "base": {
            "HP": 59,
            "Attack": 181,
            "Defense": 131,
            "Sp. Attack": 59,
            "Sp. Defense": 31,
            "Speed": 109
        }
    },
    {
        "id": 799,
        "name": {
            "english": "Guzzlord"
        },
        "type": [
            "Dark",
            "Dragon"
        ],
        "base": {
            "HP": 223,
            "Attack": 101,
            "Defense": 53,
            "Sp. Attack": 97,
            "Sp. Defense": 53,
            "Speed": 43
        }
    },
    {
        "id": 800,
        "name": {
            "english": "Necrozma"
        },
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 97,
            "Attack": 107,
            "Defense": 101,
            "Sp. Attack": 127,
            "Sp. Defense": 89,
            "Speed": 79
        }
    },
    {
        "id": 801,
        "name": {
            "english": "Magearna"
        },
        "type": [
            "Steel",
            "Fairy"
        ],
        "base": {
            "HP": 80,
            "Attack": 95,
            "Defense": 115,
            "Sp. Attack": 130,
            "Sp. Defense": 115,
            "Speed": 65
        }
    },
    {
        "id": 802,
        "name": {
            "english": "Marshadow"
        },
        "type": [
            "Fighting",
            "Ghost"
        ],
        "base": {
            "HP": 90,
            "Attack": 125,
            "Defense": 80,
            "Sp. Attack": 90,
            "Sp. Defense": 90,
            "Speed": 125
        }
    },
    {
        "id": 803,
        "name": {
            "english": "Poipole"
        },
        "type": [
            "Poison"
        ],
        "base": {
            "HP": 67,
            "Attack": 73,
            "Defense": 67,
            "Sp. Attack": 73,
            "Sp. Defense": 67,
            "Speed": 73
        }
    },
    {
        "id": 804,
        "name": {
            "english": "Naganadel"
        },
        "type": [
            "Poison",
            "Dragon"
        ],
        "base": {
            "HP": 73,
            "Attack": 73,
            "Defense": 73,
            "Sp. Attack": 127,
            "Sp. Defense": 73,
            "Speed": 121
        }
    },
    {
        "id": 805,
        "name": {
            "english": "Stakataka"
        },
        "type": [
            "Rock",
            "Steel"
        ],
        "base": {
            "HP": 61,
            "Attack": 131,
            "Defense": 211,
            "Sp. Attack": 53,
            "Sp. Defense": 101,
            "Speed": 13
        }
    },
    {
        "id": 806,
        "name": {
            "english": "Blacephalon"
        },
        "type": [
            "Fire",
            "Ghost"
        ],
        "base": {
            "HP": 53,
            "Attack": 127,
            "Defense": 53,
            "Sp. Attack": 151,
            "Sp. Defense": 79,
            "Speed": 107
        }
    },
    {
        "id": 807,
        "name": {
            "english": "Zeraora"
        },
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 88,
            "Attack": 112,
            "Defense": 75,
            "Sp. Attack": 102,
            "Sp. Defense": 80,
            "Speed": 143
        }
    },
    {
        "id": 808,
        "name": {
            "english": "Meltan"
        },
        "type": [
            "Steel"
        ],
        "base": {
            "HP": 46,
            "Attack": 65,
            "Defense": 65,
            "Sp. Attack": 55,
            "Sp. Defense": 35,
            "Speed": 34
        }
    },
    {
        "id": 809,
        "name": {
            "english": "Melmetal"
        },
        "type": [
            "Steel"
        ],
        "base": {
            "HP": 135,
            "Attack": 143,
            "Defense": 143,
            "Sp. Attack": 80,
            "Sp. Defense": 65,
            "Speed": 34
        }
    }
]

export default pokemon;