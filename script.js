//Criação de timeline do GSAP com animações sincronizadas com scroll//

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: 'top 95%',
        end: '70% 50%',
        scrub: true,
        markers: false, // depuração
    }
});

// Seletores devem usar o '#' para IDs e nomes devem corresponder ao HTML
tl.to(
    '#fanta',
    {
        top: '120%', // move o elemento com o ID #fanta para 120% do topo
        left: '0%'
    },
    'orange'
);

tl.to(
    '#laranja-cortada',
    {
        top: '160%',
        left: '23%'
    },
    'orange'
);

tl.to(
    '#laranja',
    {
        width: '15%',
        top: '160%',
        right:'10%',
    },
    'orange'
);

tl.to(
    '#folha',
    {
        top: '110%',
        rotate: '630%deg',
        left:'70%',
    },
    'orange'
);

tl.to(
    '#folha2',
    {
        top: '110%',
        rotate: '630deg',
        left:'0%',
    },
    'orange'
);

//criando outra timeline//

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: 'top 95%',
        end: '20% 50%',
        scrub: true,
        markers: false // depuração
    }
});

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '.lemon2',
    {
        rotate: '-90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#pepsi',
    {
        rotate: '-90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.to(
    '#laranja-cortada',
    {
        width: '18%',
        left: '42%',
        top: '204%',
    },
    'ca'
);

tl2.to(
    '#fanta',
    {
        width: '35%',
        left: '33%',
        top: '204%',
    },
    'ca'
);