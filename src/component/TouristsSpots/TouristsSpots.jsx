import PropTypes from 'prop-types';

const TouristsSpots = (loadedData) => {
    const {id, image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear} = loadedData;
    
    
    return (
        <div className="grid gap-10 ml-10 mr-10 sm:grid-cols-1 lg:grid-cols-3">
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {tourists_spot_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
           
        </div>
    );
};

export default TouristsSpots;
TouristsSpots.propTypes = {
    loadedData: PropTypes.array,
  };