const DUMMY_DATA = [
    {
        id: '1',
        name: 'Drole de copine Paris',
        image: '/img/catalogue/drole_de_copine_paris.jpg',
        price: 230,
        sex: 'Mężczyzna',
        categories: ['Płaszcz']
    },
    {
        id: '2',
        image: '/img/catalogue/green_queen.jpg',
        name: 'Queen',
        price: 28,
        sex: 'Kobieta',
        categories: ['Odzież dziecięca', 'Bluza']
    },
    {
        id: '3',
        name: 'GEL, lekkie buty sportowe',
        image: '/img/catalogue/blue_gel.jpg',
        price: 159,
        sex: 'Mężczyzna',
        categories: ['Buty', 'Sport']
    },
    {
        id: '4',
        name: 'CORDURA buty sportowe',
        image: '/img/catalogue/blue_codura.jpg',
        price: 199,
        sex: 'Mężczyzna',
        categories: ['Buty', 'Sport']
    },
    {
        id: '5',
        name: 'ADIDAS SALA, nowe buty',
        image: '/img/catalogue/white_adidas.jpg',
        price: 110,
        sex: 'Mężczyzna',
        categories: ['Buty', 'Sport']
    },
    {
        id: '6',
        name: 'Torba Laura Biaggi',
        image: '/img/catalogue/laura_biaggi.jpg',
        price: 89,
        sex: 'Kobieta',
        categories: ['Torba']
    },
]

export const getAllItems = () => {
    return DUMMY_DATA;
}