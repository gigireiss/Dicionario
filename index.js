const botoesContainer = document.getElementById('botoes-container')
const modal = document.getElementById('modal')
const fecharModal = document.getElementById('fechar-modal')
const tituloModal = document.getElementById('titulo-modal')
const textoModal = document.getElementById('texto-modal')
const audioModal = document.getElementById('audio-modal')
const vozModal = document.getElementById('voz-modal')
const significadoModal = document.getElementById('significado-modal')
const traduçãoModal = document.getElementById('tradução-modal')


const objetos = [
    {
        titulo : 'dessert',
        texto: 'I ate a delicious dessert!',
        significado: 'Dessert, It is traditionally served after the savory dish in the two main daily meals, ranging from fruit to more elaborate foods, all with a sweet appearance due to the use of sugar. ',
        tradução : 'Sobremesa. É tradicionalente servida após o prato salgado nas duas principais refeições diárias, varia desde uma fruta até aliementos mais elaborados, todos com aspecto doce devido a utilização de açúcar.',
        audio: './audio/dessert.mp4',
        voz: './audio/sobremesa.mp4'

    },
    {
        titulo : 'oath',
        texto: 'I made an oath with my friend',
        audio: './audio/oath.mp4',
        significado: ' Act of swearing, of solemnly affirming before a witness. Oath, solemn promise that results from this act, commitment, vow. Formula used for judgment. ',
        significa: 'Sobremesa. É tradicionalente servida após o prato salgado nas duas principais refeições diárias, varia desde uma fruta até aliementos mais elaborados, todos com aspecto doce devido a utilização de açúcar.',
        tradução: 'Ato de jurar, de afirmar solenemente diante de testemunha. Juramento, promessa solene que resulta desse ato, compromisso, voto. Formula usada para o julgamento.',
        voz: './audio/juramento.mp4'


    },
    {
        titulo : 'draft',
        texto: 'I wrote the topic down in my draft',
        audio: './audio/draft.mp4',
        significado: 'Substantially masculine Draft, draft, first work in which decisions are made before giving it its definitive form. Previous writing or drawing work. ',
        tradução: 'substantivo masculino Minuta, esboço, trabalho primeiro em que se fazem as correções necessárias antes de dar-lhe a forma definitiva. Trabalho prévio de redação ou desenho.',
        voz: './audio/rascunho.mp4'
    },
    {
        titulo : 'ubiquitous',
        texto: 'you seem like an ubiquitous person',
        audio: './audio/ubiquitous.mp4',
        significado: 'Omnipresent is a masculine and feminine adjective that means ubiquitous and characterizes something or someone that is present everywhere at the same time. Ability to be everywhere. ',
        tradução: 'Onipresente é um adjetivo masculino e feminino que significa ubíquo e caracteriza algo ou alguém que está presente em todos os lugares ao mesmo tempo. Capacidade de estar em todos os lugares.',
        voz: './audio/onipresente.mp4'


    },
    {
        titulo : 'lieutenant',
        texto: 'the lieutenant is watching the city',
        audio: './audio/lieutenant.mp4',
        significado: 'Meaning of Lieutenant. masculine noun What fills the place of a boss, and commands in his absence. Military rank immediately lower than captain. ', 
        tradução: 'O que supre o lugar de um chefe e comanda na sua ausência. substantivo masculino O que supre o lugar de um chefe, e comanda na sua ausência. Posto militar imediatamente inferior ao de capitão.',
        voz: './audio/tenente.mp4'

    },
    {
        titulo : 'obstreperous',
        texto: 'you are very obstreperous',
        audio: './audio/obstreperous.mp4',
        significado: 'where there is noise; noisy, busy, busy. that makes a lot of noise; which promotes noise; turbulent. Very strong sound, boom, intense. Lots of confusion. ',
        tradução: 'onde há barulho; ruidoso, agitado, movimentado.  que faz muito barulho; que promove barulhos; turbulento. Som muito forte, estrondo, intenso. Muita confusão.',
        voz: './audio/barulhento.mp4'

    },
    {
        titulo : 'mellifluous',
        texto: 'this food is very mellifluous',
        audio: './audio/mellifluous.mp4',
        significado: 'mellifluous, smooth, sweet, sugary. That flows or flows like honey. Pleasant, smooth, harmonious; mellifluous voice,That distills or pours honey. voice filled with sweetness of someone who wants to insinuate themselves. ',
        tradução: 'melífluo, suave, doce, adocicado. Que flui ou mana como mel. Agradável, suave, harmonioso; voz melíflua,Que destila ou deita mel. voz repassada de doçura de quem pretende insinuar-se.',
        voz: './audio/meliflua.mp4'

    },
    {
        titulo : 'pernicious',
        texto: 'this person is pernicious',
        audio: './audio/pernicious.mp4',
        significado: 'That harms; that causes damage; harmful, harmful, ruinous. In which there is danger; dangerous: harmful procedure. is used to describe something that is harmful or harmful. ',
        tradução: 'Que prejudica; que ocasiona danos; nocivo, prejudicial, ruinoso. Em que há perigo; perigoso: procedimento pernicioso. é usada para descrever algo que é prejudicial ou nocivo.',
        voz: './audio/pernicioso.mp4'

    },
    {
        titulo : 'nefarious',
        texto: 'this is nefarious',
        audio: './audio/nefarious.mp4',
        significado: 'something or someone is harmful when it awakens feelings of sadness, mourning or thoughts related to death and what is funereal. evil or diabolical, everything that causes bad luck. ',
        tradução: 'algo ou alguém é nefasto quando desperta sensações de tristeza, luto ou pensamentos relacionados à morte e ao que é fúnebre. maléfico ou diabólico, tudo que causa azar.',
        voz: './audio/nefasto.mp4'

    },
    {
        titulo : 'squirrel',
        texto: 'I just saw a squirrel',
        audio: './audio/squirrel.mp4',
        significado: 'common designation, extended to small rodent mammals of the Ciuridae family, arboreal, with long and hairy tails, which feed on nuts and seeds. ',
        tradução: 'designação comum, extensiva aos mamíferos roedores de pequeno porte da família dos Ciurídeos, arborícolas, de cauda longa e peluda, que se alimentam de nozes, sementes.',
        voz: './audio/esquilo.mp4'

    }

    
]

const botoees2 = document.querySelectorAll('.botoes')
const botoes = objetos.map((objeto, indice)=>{
    botoees2[indice].addEventListener('click', ()=>{
        tituloModal.textContent = objeto.titulo
        textoModal.textContent = objeto.texto
        significadoModal.textContent = objeto.significado
        traduçãoModal.textContent = objeto.tradução
        audioModal.src = objeto.audio 
        vozModal.src = objeto.voz

        modal.style.display = 'block'
    }
    )
})

fecharModal.addEventListener('click', ()=> {
    modal.style.display = 'none'
})