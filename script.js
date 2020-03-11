var quoteArray = [
    {
        "quote" : " Pourquoi s'acharner contre le vice ? Sans lui les vertus ne seraient pas d'un bon exemple.",
        "author" : "Jean-Louis-Auguste Commerson"
    },

    {
        "quote" : "Le mauvais exemple scandalise plus que le bon n'édifie.",
        "author" : "Joseph Sanial-Dubay "
    },

    {
        "quote" : "On exige l'exemple, mais on se dispense de le donner. ",
        "author" : "Joseph Sanial-Dubay"
    },

    {
        "quote" : "L'exemple vaut mieux que la leçon, parce qu'il est plus difficile à donner.",
        "author" : "Alexandre Dumas,"
    },

    {
        "quote" : "Lorsque les classes supérieures donneront l'exemple, les classes inférieures le suivront. Quand vous verrez du vin dans le haut de la bouteille, soyez assuré qu'il y en a au fond.",
        "author" : "Alexandre Dumas,"
    },

    {
        "quote" : "L'exemple à plus d'influence que tous les préceptes et que toutes les règles.",
        "author" : "John Locke"
    },

    {
        "quote" : "Il faut pour être bon prendre exemple du bien, et non chercher à valoir un peu mieux qu'un vaurien.",
        "author" : "Publilius Syrus"
    },

    {
        "quote" : "Le conseil offense quelquefois, l'exemple n'offense jamais.",
        "author" : "Alfred Auguste Pilavoine"
    },

    {
        "quote" : "Un mauvais exemple ne peut pas plus nous excuser, que la bonté d'un autre nous faire mériter.",
        "author" : "Anne Barratin"
    },

    {
        "quote" : "Les femmes n'aiment à être quittées qu'en second, quand elles ont donné l'exemple en premier.",
        "author" : "François Salvat de Montfort"
    },

    {
        "quote" : "Le plus riche héritage que puisse laisser un homme de bien, c'est son exemple.",
        "author" : "Joseph Michel Antoine Servan"
    }
]

// Variables

const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

// event Listenner

btn.addEventListener('click', getQuote);

function getQuote(){
    let number = Math.floor(Math.random() * quoteArray.length);

    quote.innerHTML = '<span>"</span>' + quoteArray[number].quote + '<span>"</span>'
    author.innerHTML = '<span>-----</span>' + quoteArray[number].author;
}