const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
        <div className="items-center justify-center">
            <div className="">
                <img 
                    src="https://randomuser.me/api/portraits/men/40.jpg" 
                    alt="Profile Photo" 
                    className="profile-image"
                />
            </div>
        </div>
        <div>
            <div>
                <h2>Nelson Chimdiadi</h2>
                <p></p>
            </div>
        </div>
    </section>
  )
}

export default HeroSection