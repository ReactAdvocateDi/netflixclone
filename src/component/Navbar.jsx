import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';


const Navbar = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()
  //console.log(user)

  const handleLogout = async () => {
    try{
      await logOut();
      navigate('/')
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-between mt-[-10px] pr-4 pl-4 z-[100] w-full absolute'>
      <Link to='/'>
        <img className='sm:block w-[140px] h-[140px] pt-[-20px] object-contain cursor-pointer' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' />
      </Link>
      {user?.email ? (
         <div>
            <Link to="/account">
              <button className="text-white pr-4">Account</button>
            </Link>
              <button onClick={logOut} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Log Out</button>
            
          </div>
        
      ) : (
          <div>
              <Link to="/login">
                <button className="text-white pr-4">Sign In</button>
              </Link>
              <Link to="/signup">
                <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Sign Up</button>
              </Link>
              </div>
      )}

    </div>
  )
}

export default Navbar