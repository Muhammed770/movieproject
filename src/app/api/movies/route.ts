import { NextRequest, NextResponse } from 'next/server';

const movies = [
    {
        "id": 36,
        "title": "Reservoir Dogs",
        "year": "1992",
        "genre": "Crime",
        "banner_image": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjE5ZDJiZTQtOGE2YS00ZTc5LTk0OGUtOTg2NjdjZmVlYzE2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
    },
    {
        "id": 41,
        "title": "Moneyball",
        "year": "2011",
        "genre": "Biography",
        "banner_image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg"
    },
    {
        "id": 42,
        "title": "The Hangover",
        "year": "2009",
        "genre": "Comedy",
        "banner_image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg@@._V1_SX300.jpg"
    },
    {
        "id": 43,
        "title": "The Great Beauty",
        "year": "2013",
        "genre": "Drama",
        "banner_image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0ODg1OTQ2Nl5BMl5BanBnXkFtZTgwNTc2MDY1MDE@._V1_SX300.jpg"
    },
    {
        "id": 45,
        "title": "Mary and Max",
        "year": "2009",
        "genre": "Animation",
        "banner_image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1NDIyNTA1Nl5BMl5BanBnXkFtZTcwMjc2Njk3OA@@._V1_SX300.jpg"
    },
    {
        "id": 46,
        "title": "Flight",
        "year": "2012",
        "genre": "Drama",
        "banner_image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjI1OTMxNl5BMl5BanBnXkFtZTcwNjc3NTY1OA@@._V1_SX300.jpg"
    },
    {
        "id": 47,
        "title": "One Flew Over the Cuckoo's Nest",
        "year": "1975",
        "genre": "Drama",
        "banner_image": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmJkODkwOTItZThjZC00MTE0LWIxNzQtYTM3MmQwMGI1OWFiXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
    },
    {
        "id": 48,
        "title": "Requiem for a Dream",
        "year": "2000",
        "genre": "Drama",
        "banner_image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzODMzODYwOF5BMl5BanBnXkFtZTcwODM2NjA2NQ@@._V1_SX300.jpg"
    },
    {
        "id": 49,
        "title": "The Truman Show",
        "year": "1998",
        "genre": "Comedy",
        "banner_image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
        "id": 50,
        "title": "The Artist",
        "year": "2011",
        "genre": "Comedy",
        "banner_image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzk0NzQxMTM0OV5BMl5BanBnXkFtZTcwMzU4MDYyNQ@@._V1_SX300.jpg"
    },
    {
        "id": 52,
        "title": "The Hobbit: The Desolation of Smaug",
        "year": "2013",
        "genre": "Adventure",
        "banner_image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_SX300.jpg"
    },
];


export const GET = async (req: NextRequest) => {
    try {
      
        return NextResponse.json(movies);
    } catch (error) {
        return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
};
