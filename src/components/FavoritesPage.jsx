// FavoritesPage.jsx
import React from "react";
import "../styles/Favorites.css";

const FavoritesPage = ({ favoriteItems, setFavorites }) => {
  // Check if favoriteItems is undefined or null before mapping over it
  if (!favoriteItems) {
    return <div>No favorite items to display</div>;
  }

  return (
    <div className="favorite--container" style={{ marginTop: "8%" }}>
      <h2>Favorites</h2>
      {favoriteItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <h4>Size {item.size}</h4>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesPage;
