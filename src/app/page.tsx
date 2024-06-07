"use client"
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from 'next/image';

export default function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/api/movies');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center bg-white py-4 px-8">
        <Button variant="outline" className="text-red-500 border-red-500">
          <FilmIcon className="mr-2" /> GET MOVIES
        </Button>
        <Input placeholder="Search movies and series" className="flex-1 mx-4" />
        <Button variant="outline" className="text-red-500 border-red-500">
          <HeartIcon className="mr-2" /> My favourites
        </Button>
      </div>
      <div className="relative bg-[#f8f8f8] rounded-md">
        <Image
          src="/spiderman.png"
          alt="Featured Movie"
          width={1600}
          height={800}
          className="w-full h-auto rounded-md object-cover aspect-[16/9]"
        />
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#00000080] to-transparent rounded-md">
          <h1 className="text-5xl font-bold text-white">Spider-Man: Into The Spider Verse</h1>
          <p className="text-white mt-4">
            Spider-Man: Across the Spider-Verse, now zipping into the theater-verse, is the long-awaited follow-up to
            2018&apos;s &quot;Spider-Man: Into the Spider-Verse,&quot; a revelatory thrill ride that deservedly won the Oscar for
            animation.
          </p>
          <Button variant="secondary" className="mt-4">
            <PlayIcon className="mr-2" /> Watch trailer
          </Button>
        </div>
        <div className="absolute top-4 right-4">
          <Button variant="ghost" className="text-white p-2 rounded-full">
            <DotIcon />
          </Button>
        </div>
      </div>
      <div className="py-8">
        <h2 className="text-3xl font-bold mb-6">Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie, i) => (
            <div key={i} className="bg-white rounded-sm relative">
              <Image
              //@ts-ignore
                src={movie.banner_image}
                //@ts-ignore
                alt={movie.title}
                width={400}
                height={600}
                className="w-full h-auto rounded-md object-cover aspect-[2/3]"
              />
              <div className="absolute top-1 right-1 md:p-1">
                <Button variant="ghost" className="text-red-500 rounded-full">
                  <HeartIcon />
                </Button>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  
                {//@ts-ignore
                  <span className="text-sm text-gray-500">{movie.year}</span>}
                </div>
                
                {//@ts-ignore
                <h3 className="text-lg font-bold">{movie.title}</h3>}
                {//@ts-ignore
                  <p className="text-sm text-gray-500">{movie.genre}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




function DotIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  )
}


function FilmIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  )
}


function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function PlayIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}
