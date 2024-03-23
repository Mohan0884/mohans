import React,{useEffect} from 'react'
import Circle from './Circle'
import '../assets/styles/About.css'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
function About() {
//   useEffect(()=>{
//     AOS.init({duration:2000});
// },[])
  return (
    <div className='about' >
        <br />
        <br />
        <hr className='dashed-rules' />
        <br />
        <p className='about-me-title' ><Circle color="green" width="30px"/><h1>About Me</h1></p>
        <br />
        <div className="about-me-texts" >
        <p className='about-me-left' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ex ipsa sunt. Eaque doloribus quis perferendis sit? Molestias facere, sit placeat quis enim voluptatibus culpa aliquid repudiandae et voluptates quasi, voluptatem laboriosam eius illo expedita tempora voluptas veniam voluptatum reiciendis dignissimos! Dolorum quod incidunt rerum vel blanditiis consectetur, maiores molestiae?</p>
        <p className='about-me-right' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab debitis repudiandae enim, dolores reprehenderit recusandae blanditiis vel placeat illo, ipsam quaerat veniam perspiciatis tempore asperiores autem sapiente quisquam, voluptate nesciunt dignissimos voluptates. Delectus necessitatibus laboriosam ut accusamus ex unde velit cupiditate in, ipsam enim, id adipisci incidunt nesciunt ducimus culpa.</p>
    
        </div>
        <br />
        </div>
  )
}

export default About