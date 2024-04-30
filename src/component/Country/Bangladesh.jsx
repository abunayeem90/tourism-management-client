import PropTypes from 'prop-types';


const Bangladesh = ({ countryData }) => {
    console.log(countryData);



    return (

        <div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                <h1 className="flex justify-center items-center font-bold text-secondary text-4xl pt-3">Bangladesh</h1>
                </div>
                <div className="collapse-content">
                    <p> 
                    <div className='bg-blue-300 py-10 rounded-2xl'>
                
                <div className=" m-4 grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
                    {
                        countryData.map(item => <div key={item.id}>

                            <div className="card w-full bg-base-100 shadow-xl hover:bg-blue-300 hover:w-[105%] hover:h-[105%]">
                                <figure><img src={item.image} alt="item.tourists_spot_name" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {item.tourists_spot_name}
                                        <div className="badge badge-secondary">{item.country_Name}</div>
                                    </h2>
                                    <p>
                                        {item.short_description}
                                    </p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
                    
                    </p>
                </div>
            </div>

            
        </div>
    );
};

Bangladesh.propTypes = {
    countryData: PropTypes.array
}
export default Bangladesh;