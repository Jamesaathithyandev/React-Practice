import html from './assets/html.jpg'
import css from './assets/css.jpg'
import javascript from './assets/javascript.jpg'
import Course from './course.jsx'

function CourseList() {
    const courses = [
        {   name:"HTML", 
            price:"$199", 
            img:html
        },
        {
            name:"CSS", 
            price:"$199", 
            img:css
        },
        {   name:"Javascript", 
            price:"$299", 
            img:javascript
        }
    ]

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