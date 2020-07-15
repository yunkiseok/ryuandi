import React from 'react';
import PropTypes from "prop-types"

function Food({ name, picture, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "https://search.naver.com/search.naver?where=image&sm=tab_jum&query=%EA%B9%80%EC%B9%98#",
    rating: 5
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://search.naver.com/search.naver?sm=tab_hty.top&where=image&query=%EC%82%BC%EA%B2%B9%EC%82%B4&oquery=%EA%B9%80%EC%B9%98&tqi=Uw0jMsprvxsss6Z%2B2ANssssstSZ-029971#",
    rating: 4
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2018%2F10%2F03%2F355b5cd5c3beb1a775c82ee425dcd1931.jpg&imgrefurl=https%3A%2F%2Fwww.10000recipe.com%2Frecipe%2F6896992&tbnid=LweXywcNOJGGUM&vet=12ahUKEwj71aP70MvqAhUSEIgKHSaLD8sQMygBegUIARDbAQ..i&docid=sBJsEy_ygP1yDM&w=936&h=624&q=%EB%B9%84%EB%B9%94%EB%B0%A5&ved=2ahUKEwj71aP70MvqAhUSEIgKHSaLD8sQMygBegUIARDbAQ",
    rating: 3
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpost-phinf.pstatic.net%2FMjAyMDA0MTZfMjY3%2FMDAxNTg2OTk5MzYwOTMw.YZk3XJCkJqOrZmSzXTGfnXcfoj5CoLQfY9kEBhBmlyYg.WdEgjt1SmPLlCfi8nmVMB79FymTDi3ApEfQJrGF57Acg.JPEG%2F1.jpg%3Ftype%3Dw1200&imgrefurl=https%3A%2F%2Fpost.naver.com%2Fviewer%2FpostView.nhn%3FvolumeNo%3D28004866%26memberNo%3D3600238&tbnid=GJ5h3yaL2i2E5M&vet=12ahUKEwiB-rOO0cvqAhWQDN4KHb3fCL0QMygAegUIARDIAQ..i&docid=iKKHSmncSMYv8M&w=700&h=485&q=%EB%8F%88%EA%B0%80%EC%8A%A4&ved=2ahUKEwiB-rOO0cvqAhWQDN4KHb3fCL0QMygAegUIARDIAQ",
    rating: 2
  }
];

Food.propTypes() = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
      <Food 
      key={dish.id} 
      name={dish.name} 
      picture={dish.image}
      rating={dish.rating}
       />
      ))}
    </div>
  );
}

export default App;
