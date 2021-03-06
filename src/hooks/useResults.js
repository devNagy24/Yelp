import { useEffect, useState } from 'react';
import yelp from '../api/yelp'; 

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('Hey there!');
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'tacoma'
            }
        });
        setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    //call search api when component is rendered. BAD CODE

    // searchApi('pasta')
    useEffect(() => {
        searchApi('pasta');
}, [])

    return [searchApi, results, errorMessage];
};
