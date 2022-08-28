const DUMMY_DATA = [
    {
        id: '1',
        name: 'Drole de copine Paris',
        image: '/img/catalogue/drole_de_copine_paris.jpg',
        price: 230,
        sex: 'male',
        size: "XL",
        categories: ['Płaszcz']
    },
    {
        id: '2',
        image: '/img/catalogue/green_queen.jpg',
        name: 'Queen',
        price: 28,
        sex: 'female',
        size: "S",
        categories: ['Odzież dziecięca', 'Bluza']
    },
    {
        id: '3',
        name: 'GEL, lekkie buty sportowe',
        image: '/img/catalogue/blue_gel.jpg',
        price: 159,
        sex: 'male',
        size: "M",
        categories: ['Buty', 'Sport']
    },
    {
        id: '4',
        name: 'CORDURA buty sportowe',
        image: '/img/catalogue/blue_codura.jpg',
        price: 199,
        sex: 'male',
        size: "M",
        categories: ['Buty', 'Sport']
    },
    {
        id: '5',
        name: 'ADIDAS SALA, nowe buty',
        image: '/img/catalogue/white_adidas.jpg',
        price: 110,
        sex: 'male',
        size: "L",
        categories: ['Buty', 'Sport']
    },
    {
        id: '6',
        name: 'Torba Laura Biaggi',
        image: '/img/catalogue/laura_biaggi.jpg',
        price: 89,
        sex: 'female',
        size: null,
        categories: ['Torba']
    },
    {
        id: '7',
        name: 'Torba Bessie London',
        image: '/img/catalogue/bessie_london.jpg',
        price: 75,
        sex: 'female',
        size: null,
        categories: ['Torba']
    },
    {
        id: '8',
        name: 'Sukienka Rocco',
        image: '/img/catalogue/rocco.jpg',
        price: 99,
        sex: 'female',
        size: 'S',
        categories: ['Sukienka']
    },
    {
        id: '9',
        name: 'CHIARETTA - lawendowy płaszczyk',
        image: '/img/catalogue/chiaretta.jpg',
        price: 129,
        sex: 'female',
        size: 'S',
        categories: ['Płaszcz']
    },
    {
        id: '10',
        name: 'Sukienka Sinsay',
        image: '/img/catalogue/sinsay_dress.jpg',
        price: 45,
        sex: 'female',
        size: 'S',
        categories: ['Płaszcz']
    },
    {
        id: '11',
        name: 'Bezrękawnik Nike',
        image: '/img/catalogue/nike_sleeveless.jpg',
        price: 45,
        sex: 'male',
        size: 'M',
        categories: ['Kurtka']
    },
    {
        id: '12',
        name: 'Turecka sukienka',
        image: '/img/catalogue/turkish_dress.jpg',
        price: 45,
        sex: 'female',
        size: 'XL',
        categories: ['Sukienka']
    },
]

export const getAllItems = () => {
    return DUMMY_DATA;
}

export const getCategories = () => {
    let categories = [];

    DUMMY_DATA.forEach(item => {
        for (const category of item['categories']) {
            categories.push(category)
        }
    });

    categories = [...new Set(categories)];
    return categories;
}