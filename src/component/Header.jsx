import React from 'react';




const Header = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><h2 class="text-warning">LogoHere</h2></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mob-navbar" aria-label="Toggle">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mob-navbar">
                <ul class="navbar-nav mb-2 mb-lg-0 mx-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Register</a>
                    </li>
                </ul>                  
                
              
            </div>
        </div>
    </nav>
    );
};

export default Header;


{/* <nav class="navbar navbar-expand-sm navbar-light bg-light">
<a class="navbar-brand" href="#">Urvesh</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href=''>Movies</a>
    </li>
     <li class="nav-item">
       <Link class="nav-link" to='/Movies'>Movies</Link>
     </li>
     <li class="nav-item">
       <Link class="nav-link" to='/Contact'>Contact</Link>
     </li>
     <li class="nav-item">
       <Link class="nav-link" to='/Register'>Register</Link>
     </li>
     <li class="nav-item">
       <Link class="nav-link" to='/Login'>Login</Link>
     </li>  
  </ul>
  
</div>
</nav> */}