import React from 'react'
import ReviewCard from './ReviewCard'

function ReviewSection() {

    const reviews = [
        { name: "Alice Johnson", stars: 5, word: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque saepe voluptatibus excepturi ut architecto, quisquam ipsum quis nulla unde? Praesentium repellat magni quisquam molestiae tempore! Obcaecati sunt ratione reprehenderit quod!" }, 
        { name: "John Doe", stars: 4.5, word: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
        { name: "Jane Smith", stars: 3.5, word: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque saepe voluptatibus excepturi ut architecto, quisquam ipsum quis nulla unde? Praesentium repellat magni quisquam molestiae tempore! Obcaecati sunt ratione reprehenderit quod!" },
        { name: "Mike Wilson", stars: 4, word: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque saepe voluptatibus excepturi ut architecto, quisquam ipsum quis nulla unde? Praesentium repellat magni quisquam molestiae tempore! Obcaecati sunt ratione reprehenderit quod!" },
        { name: "Laura Brown", stars: 5, word: "Excellent quality and fast delivery!" },
        { name: "Laura Brown", stars: 5, word: "Excellent quality and fast delivery!" },
    ]

  return (
    <div className='mx-auto'>
        <h1 className='text-main-army font-extrabold text-4xl leading-tight text-center my-5'>WHAT'S OUR CUSTOMERS SAYS</h1>
        <div className='mx-5 md:mx-20 lg:mx-12 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 justify-self-center lg:gap-4'>
            {reviews.map((item, index) => (
                <ReviewCard 
                    key={index}
                    name={item.name}
                    stars={item.stars}
                    word={item.word}
                />
            ))} 
        </div>
    </div>
  )
}

export default ReviewSection
