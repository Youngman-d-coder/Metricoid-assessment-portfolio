const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#343a40] text-gray-300 p-4">
      <div>
        <h1>
          <span>Nelson</span> Chimdiadi
        </h1>
      </div>
      <div className="p-4">
        <ul className="flex space-x-4 ">
          <li className="hover:text-gray-100">About Me </li>
          <li className="hover:text-gray-100">Skills</li>
          <li className="hover:text-gray-100">Hobbies & Interests</li>
          <li>Passions</li>
          <li>Academic Background</li>
          <li>Work Experience</li>
          <li>Certifications </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
