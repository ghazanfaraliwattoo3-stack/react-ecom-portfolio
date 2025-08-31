import React, { useRef } from "react";

const Categories = ({ categories }) => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1; // speed control (1 rakho ya 2 karo)
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      className="d-flex overflow-auto img-scroll-bar mt-3"
      style={{ cursor: "grab" }}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {categories.map((cat, index) => (
        <div key={index} className="mx-2 flex-shrink-0">
          <div className="d-flex align-items-center justify-content-center rounded border cat-bg px-3 py-2">
            <img
              src={cat.Image[0]}
              alt={cat.Category}
              style={{ width: "70px", height: "70px" }}
              className="cat-img-bg object-fit-contain p-1 rounded img-zoom"
            />
            <span className="ms-2">{cat.Category}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
