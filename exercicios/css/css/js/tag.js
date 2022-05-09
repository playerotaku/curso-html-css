const colors = {
    p: '#003300',
    span: '#ff6666',
    ul: '#af44fa',
    ol: '#996633',
    form: '#fa3',
    div: '#699',
    section: '#f67809',
    header: '#d81b60',
    nav: '#66acc1',
    main: '#64dd17',
    footer: '#304ffe',
    body: '#25b6da',
    padrao: '#616161',

    get(tag){
        return this[tag] ? this[tag]: this.padrao
    }
}




document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label,elemento.childNodes[0])
    }
})