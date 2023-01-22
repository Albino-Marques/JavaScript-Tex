let bgImages = [
    '/images/produtos/noodles.jpg',
    '/images/produtos/beef.jpg',
    '/images/produtos/rice-noodles.jpg',
    '/images/produtos/spare-ribs.jpg',
    '/images/produtos/sushi.jpg',
    '/images/produtos/salad.jpg',
]


const sorteio = parseInt(Math.random() * bgImages.length)
document.querySelector('#banner').style.backgroundImage = `url(${bgImages[sorteio]})`
