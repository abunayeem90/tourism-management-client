import { useEffect, useState } from "react";


const Countries = () => {
    
    const [countryData, setCountryData] = useState([]);

  
//   console.log(countryData);

  useEffect(() => {
    fetch('https://tourism-management-server-blond.vercel.app/countries')
      .then(res => res.json())
      .then(data => {
        console.log('Fetch Data:', data);
        return setCountryData(data)
        
      });
  }, []);

  
    
    return (
        <div>
           
            
        </div>
    );
};

export default Countries;