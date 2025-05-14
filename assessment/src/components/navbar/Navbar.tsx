const Navbar = () => {
  return (
    <nav className="flex justify-between items-center text-gray-300 p-4">
      <div>
        <h1 className="text-2xl">
          <span className="font-bold font-">Nelson</span> Chimdiadi
        </h1>
      </div>
      <div className="p-4">
        <ul className="flex space-x-4 ">
          <div className="relative group">
            <li className="hover:text-gray-100 cursor-pointer flex items-center">
              About Me <span className="ml-1 text-xs">▼</span>
            </li>
            <div className="absolute hidden group-hover:block mt-2 py-2 w-48 bg-transparent rounded shadow-lg z-10">
              <a href="#personal" className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-gray-100">Personal Info</a>
              <a href="#biography" className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-gray-100">Biography</a>
              <a href="#interests" className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-gray-100">Interests</a>
            </div>
          </div>
          <li className="hover:text-gray-100">Skills</li>
          <li className="hover:text-gray-100">Hobbies & Interests</li>
          <li className="hover:text-gray-100">Passions</li>
          <li className="hover:text-gray-100">Academic Background</li>
          <li className="hover:text-gray-100">Work Experience</li>
          <li className="hover:text-gray-100">Certifications </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
