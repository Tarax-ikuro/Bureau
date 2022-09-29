// Creation d'un objet qui va definir l'ensemble des options 

// root est l'élement racine qui permet de détecter la zone d'affichage
// rootMargin depassement de marge pour qui'il y ait une visibilité

// threshold detecte à partir de quel moment l'intersection estr détécté soit 1 donc l'enti

// creation d'une constante ratio à 10 %
const ratio = .1
const options = {
    root:null,
rootMargin: '0px',
thresold: ratio

}
// Creation de l'observer
// Creation de la constante observer
// Prend en parametre la  fonction uqi sera executer callback pendant le laps visible ou masqué 


// Creation de la fonction
// Comparaison de l'intersection ratio et le ratio 
// Si elemnt visible on ne peut plus observer les choses 
// Entries qui sont les differtns elements observés 
const handleIntersect = function(entries, observer){
entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
       entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
    }

})
}


const observer = IntersectionObserver(handleIntersect, options)

// Detection collision et zone d'affichage 
// Observation de l'élément qui aura comme classe reveal
// Detection de plusieurs element avec query selector all  + boucle sur l'ensemble des éléments 

document.querySelectorAll('.reveal').forEach(function (r){
    observer.observe(r)
})
