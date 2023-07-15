import React from 'react';

const Destination = () => {
  const destinations = [
    {
      name: 'Japan',
      image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      details: 'Japan is well known for its bustling cities, imperial palaces, national parks and lots of beautifully constructed temples.Japan has 21 World Heritage Sites, including Himeji Castle, Historic Monuments of Ancient Kyoto and Nara.',
      price: '$100',
    },
    {
      name: 'Australia',
      image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      details: 'Its spectacular natural environment, multicultural communities, excellent food, its weather and lifestyle and the friendliness and openness of its people make it one of the worlds most attractive tourist destinations. ',
      price: '$150',
    },
    {
      name: 'New Zealand',
      image: 'https://plus.unsplash.com/premium_photo-1675824592772-4d0f0daa067e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      details: 'New Zealand lies to the southwest of the Pacific Ocean and promises breathtaking landscapes adorned with picturesque coastlines and the mightiest mountains.',
      price: '$120',
    },
    {
      name: 'United Kingdom',
      image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      details: 'The highest mountains of Wales are in Snowdonia. The Irish Sea separates Northern Ireland from Great Britain and is mostly a hilly terrain. Endowed with beautiful scenery and landscapes, rich history and cultural diversity, the United Kingdom has made a remarkable mark on the map of world history.',
      price: '$180',
    },
    {
      name: 'United States Of America',
      image: 'https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',
      details: 'There exist a broad range of tourist attractions in the United States such as amusement parks, festivals, gambling, golf courses, historical buildings and landmarks, hotels, museums, galleries, outdoor recreation, spas, restaurants and sports.',
      price: '$230',
    },
    {
      name: 'India',
      image: 'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      details: 'India is a country that attracts millions of tourists every year and is considered one of the most popular tourist destinations in the world. These visitors are attracted to its natural beauty and cultural heritage.',
      price: '$200',
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {destinations.map((destination, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4">
              <img
                src={destination.image}
                className="card-img-top"
                alt={destination.name}
                style={{ width: "200px", height: "150px" }} 
              />
              <div className="card-body">
                <h5 className="card-title">{destination.name}</h5>
                <p className="card-text">{destination.details}</p>
                <p className="card-text">Price: {destination.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
