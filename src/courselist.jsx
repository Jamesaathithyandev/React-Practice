import Course from './course.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import useFetch from './useFetch.jsx';

function CourseList() {
    
    const [courses, error] = useFetch("http://localhost:3000/courses");

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