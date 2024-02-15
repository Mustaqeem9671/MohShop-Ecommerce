import React, { useEffect, useState } from "react";

const ViewItem = ({ selectedItem }) => {
    console.log(selectedItem)
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        // Check if selectedItem is available and has an id
        if (!selectedItem || !selectedItem.id) {
          console.error("No selectedItem or id available. selectedItem:", selectedItem);
          return;
        }
  
        const response = await fetch(`http://localhost:4000/newArrivals/${selectedItem.id}`);

        
        // Handle error when item is not found
        if (!response.ok) {
          console.error(`Error fetching item details. Status: ${response.status}`);
          setError(`Error fetching item details. Status: ${response.status}`);
          return;
        }
  
        const data = await response.json();
  
        // Assuming the response data has properties like "brand", "title", "price", "image"
        setItem(data);
      } catch (error) {
        console.error(`Error fetching item details: ${error.message}`);
        setError(`Error fetching item details: ${error.message}`);
      }
    };
  
    // Call the function to fetch item details only when selectedItem is available
    if (selectedItem) {
      fetchItemDetails();
    }
  }, [selectedItem]);
  
  

  // Render "Loading..." while waiting for data
  if (!item && !error) {
    return <div>Loading...</div>;
  }

  // Render an error message if there was an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render item details once data is fetched
  return (
    <div className="item-details">
      {item ? (
        <>
          <h2>{item.brand}</h2>
          <h2>{item.id}</h2>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <img src={item.image} alt={item.title} />
        </>
      ) : (
        <div>Item details not available</div>
      )}
    </div>
  );
      }
export default ViewItem;
