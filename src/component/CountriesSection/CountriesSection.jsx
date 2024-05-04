import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountriesSection = () => {
    const [country, setCountry] = useState();


    useEffect(() => {
        fetch(`https://tourism-management-server-blond.vercel.app/countries`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCountry(data)
        })
    },[])
    console.log(country);
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		

		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{/* Bangladesh */}
            <Link to={'/bangladesh'} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" 
				src="https://i.ibb.co/qdKkTrL/Flag-of-Bangladesh.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    Bangladesh
                        </h3>
					
					<p>Bangladesh, located in South Asia, is known for its lush greenery and vibrant culture. It is home to the world's largest river delta, the Sundarbans mangrove forest, and the bustling capital city of Dhaka.</p>
				</div>
			</Link>

            {/* Thailand */}
			<Link to={'/thailand'} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" 
				src="https://i.ibb.co/vLdvmzq/Flag-of-Thailand.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    Thailand</h3>
					
					<p>Thailand, in Southeast Asia, is famous for its tropical beaches, ornate temples, and delicious cuisine. The bustling city of Bangkok is a hub of culture and commerce, while places like Chiang Mai and Phuket offer rich cultural experiences and stunning landscapes.</p>
				</div>
			</Link>

            {/* Indonesia */}
			<Link to={'/indonesia'} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" 
				className="object-cover w-full rounded h-44 dark:bg-gray-500" 
				src="https://i.ibb.co/fQTZchF/Flag-of-Indonesia.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    Indonesia
                        </h3>
					
					<p>Indonesia, the largest archipelago in the world, is renowned for its stunning natural beauty, including tropical beaches, lush rainforests, and active volcanoes. Bali, known as the "Island of the Gods" attracts tourists with its unique culture, while Jakarta serves as the bustling capital.</p>
				</div>
			</Link>

            {/* Malaysia */}
			<Link to={'/malaysia'} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" 
				src="https://i.ibb.co/JWJLGGb/Flag-of-Malaysia.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    Malaysia</h3>
					
					<p>Malaysia, situated in Southeast Asia, is known for its diverse culture, modern cities, and natural attractions. Kuala Lumpur, the capital, is home to the iconic Petronas Twin Towers, while places like Penang and Langkawi offer beautiful beaches and rich culinary experiences.</p>
				</div>
			</Link>

            {/* Vietnam */}
			<Link to={'/vietnam'} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" 
				className="object-cover w-full rounded h-44 dark:bg-gray-500" 
				src="https://i.ibb.co/vkYYsgH/Flag-of-Vietnam.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    Vietnam</h3>
					<p>Vietnam, located in Southeast Asia, is celebrated for its diverse landscapes, rich history, and delicious cuisine. From the bustling streets of Hanoi to the picturesque landscapes of Ha Long Bay and the Mekong Delta, Vietnam offers a unique blend of tradition and modernity.</p>
				</div>
			</Link>

            {/* Cambodia */}
			<Link to={'/cambodia'} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" 
				src='https://i.ibb.co/WcpFqp7/Flag-of-Cambodia-1.jpg' />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    Cambodia</h3>
					
					<p>Cambodia, home to the magnificent temples of Angkor Wat, is steeped in ancient history and cultural heritage. Its capital, Phnom Penh, offers a glimpse into the country's past, while destinations like Siem Reap and Sihanoukville attract tourists with their natural beauty and vibrant atmosphere.</p>
				</div>
			</Link>
		</div>
		
	</div>
</section>
        </div>
    );
};

export default CountriesSection;