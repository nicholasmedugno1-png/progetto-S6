//extra: il form se compilato correttamente stampa un mex di confrerma con nome e email 
//        in caso di errore stampa il mex di errore 
//          animazione refresh card 
//           dark mode
//          click su card apre modale con descrizione specifica se si clicca fuori dalla modale non si chiude ma pulsa          

const myArrayCard = [
    {
        icon: '🏠',
        title: 'Progettazione residenziale',
        desc: 'Case private, ville e ristrutturazioni domestiche, dal sopralluogo alla consegna delle chiavi'
    },
    {
        icon: '🪑',
        title: 'Interior design',
        desc: 'Allestimenti d\'interno per case e uffici, con materiali selezionati e arredo su misura',
    },
    {
        icon: '🧱',
        title: 'Ristrutturazione',
        desc: 'Riqualificazione di spazi esistenti, gestione dei lavori e coordinamento con le imprese',
    }
]


const myJobs = [
    {
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
        name: 'Ristrutturazione Open Space Moderno',
        descrizione: 'Riqualificazione completa degli spazi interni con design minimalista e luminoso.',
        descrizioneDttagliata: 'Un intervento completo che ha trasformato un vecchio immobile in un open space fluido e moderno. Include la demolizione di pareti non portanti, la posa di parquet in rovere, impianti tecnologici di ultima generazione e un sistema di illuminazione a LED integrata.'
    },
    {
        img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
        name: 'Interior Design Zona Giorno',
        descrizione: 'Progettazione su misura per living e cucina con materiali di pregio.',
        descrizioneDttagliata: 'Studio approfondito degli arredi su misura per ottimizzare gli spazi della zona giorno. Il progetto comprende una cucina con isola centrale in gres, libreria a muro artigianale in legno laccato e pareti con finiture materiche.'
    },
    {
        img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop',
        name: 'Master Suite & Bagno En-Suite',
        descrizione: 'Creazione di una camera da letto matrimoniale di lusso con cabina armadio.',
        descrizioneDttagliata: 'Progetto di interior design focalizzato sul massimo comfort. Realizzazione di una cabina armadio illuminata su misura, testata letto imbottita di design e rifacimento completo del bagno privato con sanitari sospesi e grandi lastre in marmo.'
    },
    {
        img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
        name: 'Home Office & Studio Professionale',
        descrizione: 'Spazi di lavoro ergonomici, funzionali e di grande impatto estetico.',
        descrizioneDttagliata: 'Ristrutturazione mirata per uno studio privato o home office. Sono stati inseriti pannelli fonoassorbenti decorativi, una scrivania sospesa in legno massello e soluzioni di illuminazione mirate per ridurre l\'affaticamento visivo.'
    },
    {
        img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
        name: 'Terrazzo & Outdoor Living',
        descrizione: 'Progettazione di spazi esterni e giardini pensili per il relax cittadino.',
        descrizioneDttagliata: 'Intervento di riqualificazione di un terrazzo urbano, trasformato in un giardino pensile con pergolato bioclimatico, pavimentazione in teak nautico, illuminazione scenografica a incasso e zona cucina/barbecue su misura.'
    },
    {
        img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
        name: 'Recupero Loft Industriale',
        descrizione: 'Conversione di un ex laboratorio in un’abitazione contemporanea dal carattere forte.',
        descrizioneDttagliata: 'Progetto di recupero conservativo di uno spazio industriale dismesso. Sono stati valorizzati gli elementi strutturali originali come le travi in ferro a vista e le grandi vetrate, abbinati a finiture in resina e arredi di design contemporaneo.'
    }
]

const containerCard = document.querySelector('#containerCard')
const containerJobs = document.querySelector('#containerJobs')

myArrayCard.forEach((item) => {

    containerCard.append(creaCard(item))
})


function creaCard(item) {
    const MyArticle = document.createElement('article');
    MyArticle.classList.add('col-12', 'col-md-4');
    const myDivCard = document.createElement('div')
    myDivCard.classList.add('card', 'd-flex', 'flex-column', 'text-center', 'h-100', 'p-1');
    const myIconCard = document.createElement('span')
    myIconCard.textContent = `${item.icon}`
    myIconCard.classList.add('fs-2')
    const myTitleCard = document.createElement('h4');
    myTitleCard.textContent = `${item.title}`
    myTitleCard.classList.add('fw-bold')
    const myDescCard = document.createElement('p')
    myDescCard.textContent = `${item.desc}`
    myDescCard.classList.add('text-muted')

    myDivCard.append(myIconCard, myTitleCard, myDescCard)
    MyArticle.append(myDivCard)
    return MyArticle
};



function stampaCard(array, contenitorePadre) {
    contenitorePadre.textContent = ''
    array.forEach((item, i) => {
        const myArt = document.createElement('article');
        myArt.classList.add('col-12', 'col-sm-6', 'col-xl-4', 'mb-3')

        const myDivCard = document.createElement('div');
        myDivCard.classList.add('card', 'p-3', 'd-flex', 'row', 'g-1')
        myDivCard.style.height = '380px'
        const myDivInterno = document.createElement('div');
        myDivInterno.classList.add('mb-2', 'rounded');
        myDivInterno.style.height = '50%';
        const myImgPro = document.createElement('img');
        myImgPro.classList.add('w-100', 'h-100', 'object-fit-cover', 'rounded');
        myImgPro.src = `${item.img}`
        myDivInterno.appendChild(myImgPro)
        const myTitleProd = document.createElement('h3');
        myTitleProd.classList.add('fs-5', 'fw-bold');
        myTitleProd.textContent = `${item.name}`
        const myDescri = document.createElement('p');
        myDescri.classList.add('text-muted',);
        myDescri.textContent = `${item.descrizione}`

        myDivCard.append(myDivInterno, myTitleProd, myDescri);
        myArt.appendChild(myDivCard);
        contenitorePadre.appendChild(myArt)


        myDivCard.addEventListener('click', (e) => {
            const myModal = document.createElement('div')
            myModal.classList.add('modal', 'fade')
            myModal.setAttribute('data-bs-backdrop', 'static');
            myModal.setAttribute('data-bs-keyboard', 'false');
            myModal.setAttribute('tabindex', '-1');
            myModal.setAttribute('aria-labelledby', 'staticBackdropLabel');
            myModal.setAttribute('aria-hidden', 'true');
            const myModalDialog = document.createElement('div');
            myModalDialog.classList.add('modal-dialog');
            const myModalContent = document.createElement('div');
            myModalContent.classList.add('modal-content');
            //HEADER MODALE
            const myModalHead = document.createElement('div');
            myModalHead.classList.add('modal-header');
            const myTitleModal = document.createElement('h2');
            myTitleModal.classList.add('modal-title', 'fs-5');
            myTitleModal.textContent = `${item.name}`;
            const btnClose = document.createElement('button');
            btnClose.classList.add('btn-close');
            btnClose.type = 'button';
            btnClose.setAttribute('data-bs-dismiss', 'modal');
            btnClose.setAttribute('aria-label', 'Close');
            //BODY MODALE
            const myModalBody = document.createElement('div');
            myModalBody.classList.add('modal-body');
            const myDivImgModal = document.createElement('div');
            myDivImgModal.classList.add('rounded');
            const myImgModal = document.createElement('img')
            myImgModal.classList.add('w-100', 'h-100', 'object-fit-cover', 'rounded');
            myImgModal.src = `${item.img}`
            myDivImgModal.appendChild(myImgModal)
            const myDescModale = document.createElement('p');
            myDescModale.classList.add();
            myDescModale.textContent = `${item.descrizioneDttagliata}`;
            const mesConf = document.createElement('p');
            //FOOTER MODALE
            const myFooterModal = document.createElement('div');
            myFooterModal.classList.add('modal-footer');
            const btnChiudiModal = document.createElement('button');
            btnChiudiModal.classList.add('btn', 'btn-secondary');
            btnChiudiModal.textContent = 'Chiudi';
            btnChiudiModal.setAttribute('data-bs-dismiss', 'modal');

            myModal.appendChild(myModalDialog)
            myModalDialog.appendChild(myModalContent)
            myModalContent.append(myModalHead, myModalBody, myFooterModal)
            myModalHead.append(myTitleModal, btnClose);
            myModalBody.append(myDivImgModal, myDescModale, mesConf);
            myFooterModal.append(btnChiudiModal)
            document.body.appendChild(myModal);

            const myModalBootstrap = new bootstrap.Modal(myModal);
            myModalBootstrap.show();

        })
    });

}


stampaCard(myJobs, containerJobs);

// DARK MODE
const checkNativeSwitch = document.querySelector('#checkNativeSwitch');
checkNativeSwitch.addEventListener('change', (e) => {
    const myIcon = document.querySelector('#toogleDark')
    const myHtml = document.querySelector('html')
    const myForm = document.querySelector('form')
    if (myHtml.getAttribute('data-bs-theme') === 'dark') {
        myHtml.setAttribute('data-bs-theme', 'light');
        myIcon.classList.add('fa-moon', 'text-black',);
        myForm.classList.remove('darkModeForm')
        myIcon.classList.remove('fa-sun', 'text-white')
    } else {
        myHtml.setAttribute('data-bs-theme', 'dark');
        myIcon.classList.add('fa-sun', 'text-white')
        myIcon.classList.remove('fa-moon', 'text-black');
        myForm.classList.add('darkModeForm')
    }
});



const nameUser = document.querySelector('#nameUser')
const emailUser = document.querySelector('#emailUser')
const myForm = document.querySelector('form')
const btnInvia = document.querySelector('#btnInvia');
const mesForm = document.querySelector('#mesForm');
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (myForm.checkValidity()) {

        const userName = nameUser.value;
        const userEmail = emailUser.value;
        mesForm.textContent = `✅ grazie ${userName}.La ricontatteremo all email: ${userEmail}`
        mesForm.classList.add('alert-success')
        mesForm.classList.remove('alert-danger','d-none')
        nameUser.classList.remove('is-invalid');
        emailUser.classList.remove('is-invalid');
        emailUser.classList.add('is-valid');
        nameUser.classList.add('is-valid');
        myForm.reset();
    } else {
        mesForm.classList.remove('d-none')
        mesForm.textContent = `❌ Il form non e' compilato correttamente`
        mesForm.classList.add('alert-danger')
       if (!nameUser.checkValidity()) {
            nameUser.classList.add('is-invalid');
            nameUser.classList.remove('is-valid');
        } else {
            nameUser.classList.remove('is-invalid');
            nameUser.classList.add('is-valid');
        }
        
        if (!emailUser.checkValidity()) {
            emailUser.classList.add('is-invalid');
            emailUser.classList.remove('is-valid');
        } else {
            emailUser.classList.remove('is-invalid');
            emailUser.classList.add('is-valid');
        }
    }
    setTimeout(() => {
        mesForm.textContent = ''
        mesForm.classList.add('d-none')
        mesForm.classList.remove('alert-danger', 'alert-success')
    }, 5000)


});



