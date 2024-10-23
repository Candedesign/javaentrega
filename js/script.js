

const pokemon151 = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard","squirtle", "wartortle", "blastoise", "caterpie", "metapod", 
    "butterfree","weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearrow", "fearow","ekans", "arbok", "pikachu", "raichu",
"sandshew", "sandslash", "nidoran", "nidorina", "nidorino", "nidoqueen", "nidoking", "clefairy", "clefable", "vulpix", "ninetales",
"jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth",
"diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag",
"poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machamp", "machoke", "bellsprout", "weepinbell", "victreebel", "tentacool",
"tentacruel", "geodude","graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro","magnemite", "magneton", "farfetch'd",
"doduo","dodrio", "seel","dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee",
"hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan",
"lickitung", "koffing","weezing", "rhyhorn","rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking",
"staryu", "starmie", "mr. Mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto",
 "eevee", "vaporeon","jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax",
"articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew"]
let pokemoningresado = prompt ("ingresa el nombre de un pokemon para saber si forma parte de los 151")

pokemoningresado = pokemoningresado.toLowerCase();

if (pokemon151.indexOf(pokemoningresado)!== -1) {
    alert ("felicidades " + pokemoningresado + " " + "forma parte de los 151");
} else {
    alert ("Lo sentimos " + pokemoningresado + " " + "no forma parte de los 151, vuelve a intentarlo")
} ;