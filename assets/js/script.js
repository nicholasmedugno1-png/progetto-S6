const myArrayCard = [
    {
        icon: '🏠',
        title: 'Progettazione residenziale',
        desc: 'Case private, ville e ristrutturazioni domestiche, dal sopralluogo alla consegna delle chiavi'
    },
    {
        icon: '🪑',
        title: 'Interior design',
        desc:'Allestimenti d\'interno per case e uffici, con materiali selezionati e arredo su misura' ,
    },
    {
        icon: '🧱',
        title: 'Ristrutturazione',
        desc: 'Riqualificazione di spazi esistenti, gestione dei lavori e coordinamento con le imprese',
    }
]

const containerCard = document.querySelector('#containerCard')

myArrayCard.forEach((item) => {
    
containerCard.append(creaCard(item))
})


function creaCard(item) {
    const MyArticle = document.createElement('article');
    MyArticle.classList.add('col-12', 'col-sm-6', 'col-xl-4', 'mb-3');
    const myDivCard = document.createElement('div')
    // myDivCard.classList.add('');
    const myIconCard = document.createElement('span')
    myIconCard.textContent = `${item.icon}`
    // myIconCard.classList.add('')
    const myTitleCard = document.createElement('h4');
    myTitleCard.textContent = `${item.title}`
    const myDescCard = document.createElement('p')
    myDescCard.textContent = `${item.desc}`
    
    myDivCard.append(myIconCard, myTitleCard, myDescCard)
    MyArticle.append(myDivCard)
    return MyArticle
}


