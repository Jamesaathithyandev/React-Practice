import { useState } from 'react'
import { useEffect } from 'react'

const useFetch = (url) => {
    const [courses, setCourses] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw Error("Could Retrieve Data: Error 404")
            }
            return response.json()
        }).then(data => setCourses(data))
    .catch((error) => {
        setError(error.message);
    
    })}, 2000)

        
    },[url]);
    
    return [courses, error];
}

export default useFetch