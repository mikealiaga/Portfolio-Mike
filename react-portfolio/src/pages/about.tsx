import "../styles/colors.css";
import "../styles/home.css";

function About() {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">

      <div className="flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0">
        
        <div id="content-hero" className="flex flex-col items-start space-y-6 md:w-2/3">
          <h1 className="text-left text-4xl md:text-6xl lg:text-[96px] font-medium white-txt">
            About me...
          </h1>
          <p className="text-left text-lg grey-txt">
            I’m a Swiss Army Knife of design—versatile, precise, and always evolving. In my high 20s, 
            I’ve explored many disciplines of design, but for the past three years, I’ve been focused on UX/UI. 
            To take my skills to the next level, I’m diving into Full-Stack Development—not just to code, 
            but to become a better Front-End Developer and UX/UI Designer.
          </p>
          <p className="text-left text-lg grey-txt">
            With a background in industrial design and a strong foundation in graphic design, web design, branding, animation, 
            3D modeling, and rendering, I bring a unique perspective to the digital space. 
            Now, I’m honing my skills in HTML, CSS, JavaScript, React, and more to build seamless, user-friendly experiences 
            that look great and function even better.
          </p>
        </div>
      </div>


      <p id="phrase" className="text-left mt-12 white-txt text-lg">
        I believe great design isn’t just about aesthetics—it’s about interaction, accessibility, and performance. 
        My goal is to bridge the gap between design and development, creating digital experiences that are both beautiful and intuitive.
      </p>
    </div>
  );
}

export default About;