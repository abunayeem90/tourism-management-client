
import Bangladesh from './Bangladesh';
import { useLoaderData } from 'react-router-dom';
import Thailand from './Thailand';
import Indonesia from './Indonesia';
import Malaysia from './Malaysia';
import Vietnam from './Vietnam';
import Cambodia from './Cambodia';

const Country = () => {
    const countryData = useLoaderData();

    const bangladesh  = countryData.filter(item => item.country_Name === 'Bangladesh');
    const thailand  = countryData.filter(item => item.country_Name === 'Thailand');
    const indonesia  = countryData.filter(item => item.country_Name === 'Indonesia');
    const malaysia  = countryData.filter(item => item.country_Name === 'Malaysia');
    const vietnam  = countryData.filter(item => item.country_Name === 'Vietnam');
    const cambodia  = countryData.filter(item => item.country_Name === 'Cambodia');


    return (
        <div className='mt-2 mb-6'>
            <Bangladesh countryData={bangladesh}>
            </Bangladesh>

            <Thailand countryData={thailand}>
            </Thailand>

            <Indonesia countryData={indonesia}>
            </Indonesia>

            <Malaysia countryData={malaysia}>
            </Malaysia>

            <Vietnam countryData={vietnam}>
            </Vietnam>
            <Cambodia countryData={cambodia}>
            </Cambodia>
        </div>
    );
};

export default Country;