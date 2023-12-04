import React,{ useState, useEffect } from 'react'
import './home.css';

function Home() {

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    gender: "",
    mobile: "",
    imageUrl: "",
  });

  const fetchRandomUser = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();

      const user = data.results[0];
      setUserData({
        name: user.name.first,
        lastName: user.name.last,
        gender: user.gender,
        mobile: user.cell,
        imageUrl: user.picture.large,
      });
    } catch (error) {
      console.error("Error fetching random user data", error);
    }
  };

  useEffect(() => {
    // Fetch random user data when the component mounts
    fetchRandomUser();
  }, []); // The empty dependency array ensures that this effect runs only once



  return (
    <div className='Home-container mt-32 rounded-xl md:w-4/5 sm:w-11/12 mx-auto grid grid-flow-row md:grid-flow-col gap-4 md:auto-cols-fr p-8'>
  <div className="home-left border-2 border-white-500 h-80 rounded-xl flex justify-center items-center">
    <div className="prile-container  border-4 border-white-500 h-64 w-64">
      <img className="h-full w-full object-cover" src={userData.imageUrl} alt="" />
    </div>
  </div>
  <div className="home-right border-2 border-white-500 h-80 rounded-xl flex justify-center items-center">
   <div className="details  h-64 w-11/12 flex justify-center items-center flex-col">
    <div className="details-1 flex justify-start h-11">
      <div className="name  text-white text-lg">{userData.name}</div>
      <div className="last-name  ml-8 text-white text-lg ">{userData.lastName}</div>
    </div>
    <div className="details-1 text-white text-lg h-11"><span className='font-bold'>Gender:</span>{userData.gender}</div>
    <div className="details-1 text-white text-lg h-11"><span className='font-bold'>Mobile:</span>{userData.mobile}</div>
    <button  className="btn border-2 border-white-500 p-2 text-black bg-white mt-2.5 rounded-md md:mr-60 text-lg outline-0  " type='submit' onClick={fetchRandomUser}>Get New User</button>
   </div>
  </div>
</div>

  )
}

export default Home
