import React, { useEffect, useState } from 'react';
import '../styles/ChildrenCategories.css'


const ChildrenCategories = () => {
  const [childrenFootwear, setChildrenFootwear] = useState([]);
  const [gender, setGender] = useState('boy'); // Default to 'boy' when the component mounts

  useEffect(() => {
    const fetchChildrenData = async () => {
      try {
        const resChildrenFootwear = await fetch(`http://localhost:4000/childrenFootwear?gender=${gender}`);
        const dataChildrenFootwear = await resChildrenFootwear.json();
        setChildrenFootwear(dataChildrenFootwear);
      } catch (err) {
        console.log('Error: ', err);
      }
    };

    // Call function here
    fetchChildrenData();
  }, [gender]); // Add 'gender' as a dependency so that the effect runs when the gender changes

  return (
    <div className="children-categories">
      <div className="category-buttons">
        <button onClick={() => setGender('Boys')}>Boys Footwear</button>
        <button onClick={() => setGender('Girls')}>Girls Footwear</button>
        {/* Add more buttons for other categories as needed */}
      </div>

      <div className="children-sub-category">
        {childrenFootwear.map((item) => (
          <div key={item.id} className="children-card">
            {/* Add your card content here */}
            <img src={item.image} alt={item.title} />
            <h2>Size {item.size}</h2>
            <h2>{item.id}</h2>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChildrenCategories;
