import React from 'react';
import  renderStars from '../redux/actions/render-stars';

function ReviewCard({ name, stars, word }) {
  return (
    <div className="w-[420px] h-[240px] md:w-[22.6rem] bg-white border border-slate-400 rounded-3xl shadow-md flex flex-col justify-between p-5">
      <div>
        <h3 className="text-main-army font-bold text-lg mt-2">{name}</h3>
        <div className="flex gap-1 my-2">{renderStars(stars)}</div>
        <p className="text-gray-500 mb-8">"{word}"</p>
      </div>
    </div>
  );
}

export default ReviewCard;
