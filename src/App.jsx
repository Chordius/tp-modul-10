import './App.css'
import Navbar from './components/navbar'
import Card from './components/card';
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
    const [count, setCount] = useState(0);
    const [alldisplay, setAlldisplay] = useState(false);

    useEffect(() => {
      countHandler();
    }, [count]);

    const countHandler = () => {
      if (count !== 0 && count % 10 === 0) {
        alert(`${count} is divisible by 10`);
      }
    }

    const response = {
        page: 1,
        results: [
            {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt remeveniet architecto",
                image: "https://picsum.photos/500",
            },
            {
                userId: 1,
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
                image: "https://picsum.photos/500",
            },
            {
                userId: 1,
                id: 3,
                title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
                image: "https://picsum.photos/500",
            },
            {
                userId: 1,
                id: 4,
                title: "eum et est occaecati",
                body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
                image: "https://picsum.photos/500",
            },
            {
                userId: 1,
                id: 5,
                title: "nesciunt quas odio",
                body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
                image: "https://picsum.photos/500",
            },
        ],
    };
    
  return (
    <div className='flex flex-col justify-top items-center gap-y-6'>
      {/* Navbar */}
      <div className='w-full flex justify-center pt-6'>
        <Navbar/>
      </div>

      {/* Content */}
      <div className='max-w-[80%] pb-10'>
        <div className='flex justify-center items-center gap-x-4'>
          <button onClick={() => setAlldisplay(true)} className='mb-6 px-9 py-4 bg-sky-400 text-white rounded-full duration-300 hover:bg-sky-200 hover:text-black'>
            All Cards
          </button>
          <button onClick={() => setAlldisplay(false)} className='mb-6 px-9 py-4 bg-sky-400 text-white rounded-full duration-300 hover:bg-sky-200 hover:text-black'>
            One Card
          </button>
        </div>

        <div className='py-1'/>
        <hr className='w-full'/>
        <div className='py-4'/>

        {/* Card */}
        <div className='flex justify-center items-center'>
          {alldisplay && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {response.results.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          )}
          {!alldisplay && (
            <div className="flex flex-col items-center w-96">
                <Card item={response.results[Math.max(0, count % response.results.length)]} />
            </div>
          )}
        </div>

        <div className='py-4'/>
        <hr/>
        <div className='py-4'/>

        {/* Counter */}
        <div className='flex justify-center items-center flex-col'>
          <div>
            <h2 className='text-2xl font-bold'>Counter: {count}</h2>
          </div>
          
          <div className='flex gap-x-6'>
            <button 
                onClick={() => setCount((currentCount) => Math.max(0, currentCount - 1))} 
              className='w-24 mt-6 px-4 py-2 bg-sky-500 text-white text-3xl rounded-full duration-300 hover:bg-sky-200 hover:text-black'
            >
              -
            </button>
            <button 
                onClick={() => setCount(0)} 
              className='w-24 mt-6 px-4 py-2 bg-sky-500 text-white text-xl rounded-full duration-300 hover:bg-sky-200 hover:text-black'
            >
              Reset
            </button>
            <button onClick={() => setCount(count + 1)} className='w-24 mt-6 px-4 py-2 bg-sky-500 text-white text-3xl rounded-full duration-300 hover:bg-sky-200 hover:text-black'>
              +
            </button>
          </div>

        </div>
      </div>
      
    </div>
  )
}

