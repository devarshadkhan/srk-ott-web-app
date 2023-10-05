import React from 'react'
import "./header.css"
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
const navigate = useNavigate()
  const navigateHandle =  (params)=>{
    if(params === "movie"){
      navigate("/explore/movie")
    }
    else{
      navigate("/explore/tv")
    }
  }
  return (
    <>
       <div className='header'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='listing'>
                  <ul>
                    <li><Link  to='/' >Home</Link></li>
                    <li><p    onClick={()=>{navigateHandle("movie")}}  >Movies</p></li>
                    <li><a  className='logoHighlight' >SRK+ OTT APP</a></li>
                    <li><p     onClick={()=>{navigateHandle("tv")}} >TV Shows</p></li>
                    <li><Link to='' >Favourites</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
       </div>
    </>
  )
}

export default Header