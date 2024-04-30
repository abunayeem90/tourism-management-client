
import Slider from "../Slider/Slider";
import Country from "../Country/Country";



const Home = () => {

   
    return (
        <div>
            <Slider></Slider>
            {/* Some Touris Spot */}
            <div className="mt-10 mb-8">
                <div className="">
                    <h1 className="flex justify-center items-center font-bold text-5xl mb-8 mx-80  bg-secondary py-4 rounded-xl hover:bg-blue-300 ">
                    Tourists Spots
                    </h1>
                </div>
            <div className="grid gap-10 ml-10 mr-10 sm:grid-cols-1 lg:grid-cols-3">
           
            {/* Cox's Bazar  */}
             <div className="card w-full bg-base-100 shadow-xl hover:bg-blue-300 hover:w-[105%] hover:h-[105%]">
                <figure><img src='https://i.ibb.co/k3b0YtJ/Cox-s-Bazar.webp' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Cox's Bazar
                        <div className="badge badge-secondary">Bangladesh</div>
                    </h2>
                    <p>Cox's Bazar, situated in the Chittagong Division of Bangladesh, boasts the title of being the longest natural sea beach in the world. With its pristine sandy shores stretching for miles along the Bay of Bengal, Cox's Bazar is a paradise for beach lovers. Visitors can relax on the soft sands, enjoy thrilling water sports, and savor delicious seafood while soaking in the breathtaking coastal views.</p>
                 </div>
            </div>

            {/* Rangamati  */}
            <div className="card w-full bg-base-100 shadow-xl hover:bg-blue-300 hover:w-[105%] hover:h-[105%]">
                <figure><img src='https://i.ibb.co/hCzXxzX/Rangamati.jpg' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Rangamati
                        <div className="badge badge-secondary">Bangladesh</div>
                    </h2>
                    <p>
                    Rangamati, located in the scenic Chittagong Hill Tracts of Bangladesh, is a mesmerizing hill district blessed with serene lakes, rolling hills, and rich indigenous culture. Visitors can explore the tranquil beauty of Kaptai Lake, hike through lush green forests, and immerse themselves in the vibrant traditions of the indigenous communities. Rangamati offers a peaceful retreat amidst nature's bounty.
                    </p>
                 </div>
            </div>

            {/* Bandarbon  */}
            <div className="card w-full bg-base-100 shadow-xl hover:bg-blue-300 hover:w-[105%] hover:h-[105%]">
                <figure><img src='https://i.ibb.co/qNwjyKQ/Bandarban.jpg' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Bandarbon
                        <div className="badge badge-secondary">Bangladesh</div>
                    </h2>
                    <p>
                    Bandarban, nestled in the picturesque Chittagong Hill Tracts of Bangladesh, is a captivating hill town renowned for its scenic beauty and trekking opportunities. With its misty mountains, cascading waterfalls, and verdant landscapes, Bandarban offers an idyllic escape for nature enthusiasts and adventure seekers alike. Explore the tribal villages, embark on thrilling treks, and soak in the tranquility of this enchanting destination.
                    </p>
                 </div>
            </div>

            {/* Bangkok  */}
            <div className="card w-full bg-base-100 shadow-xl hover:bg-blue-300 hover:w-[105%] hover:h-[105%]">
                <figure><img src='https://i.ibb.co/1TV4H2c/Bangkok.jpg' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Bangkok
                        <div className="badge badge-secondary">Thailand</div>
                    </h2>
                    <p>
                    Bangkok, the bustling capital city of Thailand, is a vibrant metropolis known for its dynamic street life, ornate temples, and bustling markets. From the gleaming skyscrapers of downtown to the historic temples of Old City, Bangkok offers a fascinating blend of modernity and tradition. Explore the lively street food scene, shop till you drop at the colorful markets, and immerse yourself in the rich cultural tapestry of this captivating city.
                    </p>
                 </div>
            </div>

            {/* Phuket  */}
            <div className="card w-full bg-base-100 shadow-xl hover:bg-blue-300 hover:w-[105%] hover:h-[105%]">
                <figure><img src='https://i.ibb.co/wJ2k1r9/Phuket.jpg' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Phuket
                        <div className="badge badge-secondary">Thailand</div>
                    </h2>
                    <p>
                    Phuket, located in Southern Thailand, is a renowned island destination celebrated for its stunning beaches, vibrant nightlife, and rich cultural heritage. Whether you seek relaxation on the pristine shores, adventure in the azure waters, or excitement in the bustling streets, Phuket offers something for every traveler. Explore the vibrant markets, savor delicious Thai cuisine, and experience the magic of Phuket's tropical paradise.
                    </p>
                 </div>
            </div>

            {/* Borobudur Temple  */}
            <div className="card w-full bg-base-100 shadow-xl hover:bg-blue-300 hover:w-[105%] hover:h-[105%]">
                <figure><img src='https://i.ibb.co/CKxXbFr/Borobudur-Temple.jpg' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Borobudur Temple
                        <div className="badge badge-secondary">Indonesia</div>
                    </h2>
                    <p>
                    Borobudur Temple, located in Central Java, Indonesia, is a magnificent Buddhist temple complex dating back to the 9th century. This UNESCO World Heritage Site is one of the largest Buddhist temples in the world, adorned with intricate carvings and stupas. Visitors can explore the ancient ruins, admire panoramic views of the surrounding landscapes, and immerse themselves in the spiritual ambiance of this iconic cultural landmark.
                    </p>
                 </div>
            </div>

            {/* Komodo National Park  */}
            <div className="card w-full bg-base-100 shadow-xl hover:bg-blue-300 hover:w-[105%] hover:h-[105%]">
                <figure>
                    <img src='https://i.ibb.co/ZfwFgBy/Komodo-National-Park.jpg' alt="Shoes" />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Komodo National Park
                        <div className="badge badge-secondary">
                        Indonesia
                            </div>
                    </h2>
                    <p>
                    Komodo National Park, situated in East Nusa Tenggara, Indonesia, is a spectacular marine and terrestrial wilderness known for its iconic Komodo dragons and diverse marine life. Visitors can embark on thrilling treks through rugged landscapes, encounter the legendary Komodo dragons in their natural habitat, and dive into the pristine waters teeming with colorful coral reefs and marine species. Explore the wonders of Komodo National Park for an unforgettable adventure.
                    </p>
                 </div>
            </div>

            {/* Raja Ampat Islands  */}
            <div className="card w-full bg-base-100 shadow-xl hover:bg-blue-300 hover:w-[105%] hover:h-[105%]">
                <figure>
                    <img src='https://i.ibb.co/Hg052jf/Raja-Ampat-Islands.jpg' alt="Shoes" />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Raja Ampat Islands
                        <div className="badge badge-secondary">
                        Indonesia
                            </div>
                    </h2>
                    <p>
                    The Raja Ampat Islands, located in West Papua, Indonesia, are a breathtaking archipelago renowned for their stunning marine biodiversity and pristine coral reefs. With its crystal-clear waters, vibrant coral gardens, and diverse marine species, Raja Ampat offers unparalleled opportunities for snorkeling, diving, and marine exploration. Explore remote islands, encounter exotic wildlife, and immerse yourself in the natural wonders of this marine paradise.
                    </p>
                 </div>
            </div>




            {/* Ha Long Bay  */}
            <div className="card w-full bg-base-100 shadow-xl hover:bg-blue-300 hover:w-[105%] hover:h-[105%]">
                <figure>
                    <img src='https://i.ibb.co/F6t16mn/Ha-Long-Bay.jpg' alt="Shoes" />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Ha Long Bay
                        <div className="badge badge-secondary">
                        Vietnam
                            </div>
                    </h2>
                    <p>
                    Ha Long Bay, situated in Quang Ninh Province, Vietnam, is a breathtaking natural wonder characterized by its emerald waters, towering limestone islands, and mystical caves. Sail among the iconic karst formations on traditional junk boats, explore hidden grottoes and pristine beaches, and marvel at the enchanting beauty of this UNESCO World Heritage Site. Ha Long Bay offers a mesmerizing escape into a world of natural splendor and timeless charm.
                    </p>
                 </div>
            </div>
            
           
        </div>
            </div>
            

            {/* Countries Section */}

            <div className="mx-10 rounded-xl p-6 bg-green-200 mt-10 mb-2">
                <h1 className="flex font-bold text-5xl text-primary justify-center items-center">
                Countries Section
                </h1>
                
            </div>
            
            <div className="mx-10 ">
            <Country></Country>
            </div>
            
        </div>
    );
};

export default Home;