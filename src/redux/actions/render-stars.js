const renderStars = (stars, maxStars = 5) => {
    const starsArray = [];
    const fullStars = Math.floor(stars); // Jumlah bintang penuh
    const hasHalfStar = stars % 1 !== 0; // Mengecek jika ada desimal (setengah bintang)
  
    // memastikan tidak lebih banyak bintang penuh daripada maxStars
    for (let i = 0; i < Math.min(fullStars, maxStars); i++) {
      starsArray.push(<i key={i} className="fa-solid fa-star fa-xs lg:fa-lg text-yellow-400"></i>);
    }
  
    // Tambahkan bintang setengah jika ada dan masih dalam batas `maxStars`
    if (hasHalfStar && fullStars < maxStars) {
      starsArray.push(
        <i key="half-star" className="fa-solid fa-star-half fa-xs lg:fa-lg text-yellow-400"></i>
      );
    }
  
    // Tambahkan bintang kosong untuk mencapai `maxStars` jika diperlukan
    for (let i = starsArray.length; i < maxStars; i++) {
      starsArray.push(<i key={`empty-${i}`} className="fa-regular fa-star fa-xs lg:fa-lg text-gray-400"></i>);
    }
  
    return starsArray;
  };

export default renderStars;
  