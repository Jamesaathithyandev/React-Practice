import Course from './course.jsx'
import { useState } from 'react'
import { useEffect } from 'react'

function CourseList() {
    const [courses, setCourses] = useState(null);

    const [error, setError] = useState(null);
    
  

    useEffect(() => {
        setTimeout(() => {
        fetch("http://localhost:3000/courses")
        .then(response => {
            if(!response.ok){
                throw Error("Could Retrieve Data: Error 404")
            }
            return response.json()
        }).then(data => setCourses(data))
    .catch((error) => {
        setError(error.message);
    
    })}, 2000)

        
    },[]);

    function HandleDelete(id){
        const newcourse = courses.filter((course) => course.id !== id);
        setCourses(newcourse);
    }


    // courses.sort((x, y) => y.price - x.price);

    if(!courses){
        return (
        <>
        {!error && <p style={{color: 'white'}}>loading...</p>}
        {error && <p style={{color: 'white'}}>{error}</p>}
        </>
        )
    }

    

    const coursesList = courses.map((course,index) => 
    <Course key = {course.id}
            name={course.name} 
            price={course.price} 
            img={course.img} 
            delete={HandleDelete} 
            id={course.id} />)


    return(
        <>
        {coursesList}
        </>
    )
}

export default CourseList