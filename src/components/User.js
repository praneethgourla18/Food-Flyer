
import react, {useState,useEffect} from "react";

import UserShimmer from "./UserShimmer";

const User = () => {

  const[userInfo ,setUserInfo] = useState(null);
  const [error, setError] = useState(false);

  const fetchUserInfo = async () => {
    try {
      const response = await fetch("https://api.github.com/users/praneethgourla18");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setUserInfo(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  if (error || userInfo === null) {
    return <UserShimmer />;
  }
     const{name,bio,location,avatar_url} = userInfo;
  return (
      <div className="mt-[130px] flex justify-center">
        <div className="w-[650px]  rounded-[10px] p-[30px] mt-[50px] bg-white shadow-lg border border-gray-200 transition-transform duration-200 ease-in-out z-10  flex gap-[20px] ">
          <div className="h-[280px] w-[280px]  bg-pink-200 rounded-full overflow-hidden">
            <img className="h-full w-full object-cover hover:scale-105" src={avatar_url} alt="Avatar" />
          </div>
          <div className="ml-[20px] flex flex-col justify-center">

            <h1 className="text-2xl font-semibold">Hi, I'm {name}</h1>
            <p className="text-lg text-gray-700 mt-2">{bio}</p>
            <p className="text-md text-gray-500 mt-1">{location}</p>


            <div className="flex gap-[10px] mt-[20px]">
              <a
                href="https://www.linkedin.com/in/praneethgourla/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="30"
                  height="30"
                  className="hover:scale-125 transition-transform duration-200"
                  src="https://img.icons8.com/color/48/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a
                href="https://github.com/praneethgourla18"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="30"
                  height="30"
                  className="hover:scale-125 transition-transform duration-200"
                  src="https://img.icons8.com/ios-glyphs/30/github.png"
                  alt="github"
                />
              </a>
              <a
                href="https://twitter.com/Praneeeethh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="30"
                  height="50"
                  className="hover:scale-125 transition-transform duration-200"
                  src="https://img.icons8.com/ios-filled/50/twitterx--v1.png"
                  alt="twitterx--v1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
   )
}
export default User;