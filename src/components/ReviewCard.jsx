import React from 'react';
import  renderStars from '../store/actions/render-stars';

function ReviewCard({ name, stars, word }) {
  return (
    <div className="w-[420px] h-[240px] bg-white border border-slate-400 rounded-3xl shadow-md flex flex-col justify-between p-5">
      <div>
        <div className="flex gap-1">{renderStars(stars)}</div>
        <h3 className="text-main-army font-bold text-lg mt-2">{name}</h3>
        <p className="text-gray-500 mt-5">"{word}"</p>
      </div>
    </div>
  );
}

export default ReviewCard;
