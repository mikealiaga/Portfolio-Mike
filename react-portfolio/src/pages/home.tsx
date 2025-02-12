import Cara from "../assets/Cara.svg";
import "../styles/colors.css";
import "../styles/home.css";


function Home() {
  return (
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between h-screen pb-[240px]">
      
      {/* Left: Content */}
      <div id="content-hero" className="flex flex-col items-start space-y-6 md:w-1/2">
            <h1 className="text-left text-4xl md:text-6xl lg:text-[96px] font-medium white-txt">
                Hola, my name is <span className="cyan-txt">Mike</span>
            </h1>
            <p className="text-left text-lg grey-txt">
            I´m a Swiss Army Knife of design. Picture me as your design superhero with many super powers, 
            a magical blend of industrial design expertise and a whole arsenal of skills, including graphic 
            design, web design, branding, animation, 3D modeling, and rendering.
            </p>
            <div className="flex space-x-4" id="hero-buttons">
                <button className="px-6 py-3 rounded-lg transition black2-bg " id="hero-button1">
                    View Portfolio
                </button>
                <button className="px-6 py-3 rounded-lg transition cyan-border cyan-txt black-bg" id="button2">
                    Contact Me
                </button>
            </div>
      </div>

      {/* Right: Hero Image */}
      <div id="hero-image" className="md:w-1/2 flex justify-center">
        <img src={Cara} alt="Cara" className="w-full max-w-xs md:max-w-sm lg:max-w-md" />
      </div>

    </div>
  );
}

export default Home;