import html from './assets/html.jpg'
import css from './assets/css.jpg'
import javascript from './assets/javascript.jpg'
import Course from './course.jsx'

function CourseList() {
    const courses = [
        {   name:"HTML", 
            price:199, 
            img:html
        },
        {
            name:"CSS", 
            price:299, 
            img:css
        },
        {   name:"Javascript", 
            price:499, 
            img:javascript
        }
    ]

    courses.sort((x, y) => y.price - x.price);

    /* const lesscourse = courses.filter((course) => course.price<300) */

    const coursesList = courses.map((course) => 
    <Course name={course.name} 
            price={course.price} 
            img={course.img}/>)

    return(
        <>
        {coursesList}
        </>
    )
}

export default CourseList