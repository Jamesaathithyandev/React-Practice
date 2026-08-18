import html from './assets/html.jpg'
import css from './assets/css.jpg'
import javascript from './assets/javascript.jpg'
import Course from './course.jsx'
import { useState } from 'react'
import { useEffect } from 'react'

function CourseList() {
    const [courses, setCourses] = useState([
        {   id:1,
            name:"HTML", 
            price:199, 
            img:html
        },
        {   id:2,
            name:"CSS", 
            price:299, 
            img:css
        },
        {   id:3,
            name:"Javascript", 
            price:499, 
            img:javascript
        }
    ])
    
    const [dummy, setDummy] = useState(true);

    useEffect(() => {
        console.log("Effect Called");
        console.log(dummy);
        
    },[]);

    function HandleDelete(id){
        const newcourse = courses.filter((course) => course.id !== id);
        setCourses(newcourse);
    }


    courses.sort((x, y) => y.price - x.price);

    

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