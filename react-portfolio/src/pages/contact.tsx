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

      <form className="mt-[120px] max-w-lg w-full">
  {/* Name */}
  <label className="block text-sm font-medium grey-txt text-left w-full">Name</label>
  <input type="text" className="w-full p-3 mt-1 bg-black2-bg rounded-md border border-gray-700 focus:ring-2 focus:ring-purple-500 grey-txt" defaultValue="Elon" />

  {/* Last Name */}
  <label className="block text-sm font-medium grey-txt mt-4 text-left w-full">Last Name</label>
  <input type="text" className="w-full p-3 mt-1 bg-black2-bg rounded-md border border-gray-700 focus:ring-2 focus:ring-purple-500 grey-txt" defaultValue="Musk" />

  {/* Email */}
  <label className="block text-sm font-medium grey-txt mt-4 text-left w-full">Email</label>
  <input type="email" className="w-full p-3 mt-1 bg-black2-bg rounded-md border border-gray-700 focus:ring-2 focus:ring-purple-500 grey-txt" defaultValue="elon@tesla.com" />

  {/* Message */}
  <label className="block text-sm font-medium grey-txt mt-4 text-left w-full">Message</label>
  <textarea className="w-full p-3 mt-1 h-24 bg-black2-bg rounded-md border border-gray-700 focus:ring-2 focus:ring-purple-500 grey-txt">
    I want to hire you
  </textarea>

  {/* Submit Button */}
  <button type="submit" className="w-full mt-6 p-3 rounded-md cyan-border cyan-txt black-bg hover:bg-green-500 hover:text-black transition">
    Send
  </button>
</form>

      <div className="mt-[240px]">
        <p id="phrase" className="text-left mt-12 grey-txt mt-6 text-sm">
          "The only way to do great work is to love what you do.  
          If you haven’t found it yet, keep looking. Don’t settle."  
          <br /> — Steve Jobs
        </p>
      </div>

    </div>
  );
}

export default Contact;