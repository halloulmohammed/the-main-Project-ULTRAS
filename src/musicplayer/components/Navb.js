import React from "react"; 
  
const Nav = ({ setLibraryStatus, libraryStatus }) => { 
    return ( 
        <nav id="musicnav"> 
            <h1>listen to your favorite songs of your ultras</h1> 
            <button 
                onClick={() => { 
                    setLibraryStatus(!libraryStatus); 
                }} 
            > 
                <h4>Library</h4> 
            </button> 
        </nav> 
    ); 
}; 
  
export default Nav; 