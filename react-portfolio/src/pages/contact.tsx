import "../styles/colors.css";
import "../styles/home.css";

function Contact() {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">

      <div className="flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0">
        
        <div id="content-hero" className="flex flex-col items-start space-y-6 md:w-2/3">
          <h1 className="text-left text-4xl md:text-6xl lg:text-[96px] font-medium white-txt">
            Contact
          </h1>
          <p className="text-left text-lg mt-4 grey-txt">
        Let's <span className="text-purple-400">start a conversation</span> that will ignite our creative sparks.
      </p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="mt-8 max-w-lg">
        {/* Name */}
        <label className="block text-sm font-medium grey-txt">Name</label>
        <input type="text" className="w-full p-3 mt-1 bg-black2-bg rounded-md border border-gray-700 focus:ring-2 focus:ring-purple-500" defaultValue="Elon" />

        {/* Last Name */}
        <label className="block text-sm font-medium grey-txt mt-4">Last Name</label>
        <input type="text" className="w-full p-3 mt-1 bg-black2-bg rounded-md border border-gray-700 focus:ring-2 focus:ring-purple-500" defaultValue="Musk" />

        {/* Email */}
        <label className="block text-sm font-medium grey-txt mt-4">Email</label>
        <input type="email" className="w-full p-3 mt-1 bg-black2-bg rounded-md border border-gray-700 focus:ring-2 focus:ring-purple-500" defaultValue="elon@tesla.com" />

        {/* Message */}
        <label className="block text-sm font-medium grey-txt mt-4">Message</label>
        <textarea className="w-full p-3 mt-1 h-24 bg-black2-bg rounded-md border border-gray-700 focus:ring-2 focus:ring-purple-500">
          I want to hire you
        </textarea>

        {/* Submit Button */}
        <button type="submit" className="w-full mt-6 p-3 border rounded-md border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition">
          Send
        </button>
      </form>


      <p id="phrase" className="text-left mt-12 white-txt text-lg">
        I believe great design isn’t just about aesthetics—it’s about interaction, accessibility, and performance. 
        My goal is to bridge the gap between design and development, creating digital experiences that are both beautiful and intuitive.
      </p>
    </div>
  );
}

export default Contact;