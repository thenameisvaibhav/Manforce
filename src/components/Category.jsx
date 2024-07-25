import React from 'react'

const Category = () => {
  return (
    <div className="w-full">
      <div className="cards bg-white h-96 w-full lg:flex">
        <div className="card1 bg-blue-500 h-full lg:w-1/2 hover:w-[80%] transition-all">
        <div className="cardcontainer w-full h-full hover:bg-green-500 hover:transition-colors hover:duration-100 hover:delay-100"></div>
        </div>
        <div className="card2 bg-yellow-500 h-full lg:w-1/2 hover:w-[80%] transition-all"></div>
      </div>
    </div>
  );
}

export default Category