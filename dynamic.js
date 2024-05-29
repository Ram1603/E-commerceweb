// Creating dynamic javascript code which will generate header and footer for all pages

function generateHeader()
{
    var headerHtml =
    `
    <header class="header" id="site-header">
    <div class="web-logo">
      <img src="./logo5.png" alt="Logo of the website" />
    </div>
    <form class="search-bar">
      <input type="text" placeholder="Search..." class="search-box" />
      <button type="button" class="search-btn">search</button>
    </form>
    <div class="login-btn">
      <button
        type="button"
        class="button"
        style="background-color: rgb(198, 198, 4)"
        onclick="gotologin()"
      >
        Login/Signup
      </button>
      <button class="cart-btn" onclick="gotocart()">
        <i class="fa-solid fa-cart-shopping fa-lg"></i>
      </button>
    </div>
  </header>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="./02_allproduct.html"
                >All Products</a
              >
            </li>
            <li class="nav-item dropdown">
              <!-- Women dropdown menu -->
              <a
                data-bs-target="#womenDropdownMenu"
                data-bs-auto-close="outside"
                class="nav-link dropdown-toggle active"
                id="womenDropdown"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-toggle="hover"
                onmouseover="func1()"
              >
                Women
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="womenDropdown"
                id="womenDropdownMenu"
              >
                <li>
                  <a class="dropdown-item" href="./02_allproduct.html"
                    >All Products</a
                  >
                </li>
                <li><a class="dropdown-item" href="./07_women_dresses.html">Dresses</a></li>
                <li><a class="dropdown-item" href="./08_women_pants.html">Pants</a></li>
                <li><a class="dropdown-item" href="./06_women_skirts.html">Skirts</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <!-- Men dropdown menu -->
              <a
                data-bs-target="#menuDropdownMenu"
                data-bs-auto-close="outside"
                class="nav-link dropdown-toggle active"
                id="mendropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onmouseover="func()"
              >
                Men
              </a>
              <ul class="dropdown-menu" aria-labelledby="mendropdown" id="menDropdownMenu">
                <li>
                  <a
                    class="dropdown-item"
                    href="./02_allproduct.html"
                    target="_blank"
                    >All Products</a
                  >
                </li>
                <li><a class="dropdown-item" href="./11_men_shirts.html">Shirts</a></li>
                <li><a class="dropdown-item" href="./10_men_pants.html">Pants</a></li>
                <li><a class="dropdown-item" href="./09_men_hoodies.html">Hoodies</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="./12_kids.html">Kids</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="./03_Contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
        </div>
        </nav>
        `
        ;
        // Return the header HTML code
        return headerHtml;
        }


function generateFooter() {
var footerHTML=`
<footer class="footer-container">
<div class="row">
  <div class="col-sm-3 col-items">
    <p class="col-title">Women</p>
    <div class="links">
      <ul>
        <li><a href="./07_women_dresses.html">Dresses</a></li>
        <li><a href="./08_women_pants.html">Pants</a></li>
        <li><a href="./09_women_skirts.html">Skirts</a></li>
      </ul>
    </div>
  </div>
  <div class="col-sm-3">
    <p class="col-title">Men</p>
    <!-- Add links for Men category here -->
    <div class="links">
      <ul>
        <li><a href="./11_men_shirts.html">Shirts</a></li>
        <li><a href="./10_men_pants.html">Pants</a></li>
        <li><a href="./09_men_hoodies.html">Hoodies</a></li>
      </ul>
    </div>
  </div>
  <div class="col-sm-3">
    <p class="col-title">Kids</p>
    <!-- Add links for Kids category here -->
    <div class="links">
      <ul>
        <li><a href="./12_kids.html">Shorts</a></li>
        <li><a href="./12_kids.html">Shirts</a></li>
        <li><a href="./12_kids.html">Pants</a></li>
      </ul>
    </div>
  </div>
  <div class="col-sm-3">
    <p class="col-title">Links</p>
    <div class="links">
      <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./03_Contact.html">Contact</a></li>
        <li><a href="="./04_login.html">Login/Signup</a></li>
      </ul>
    </div>
  </div>
  <hr />
  <p>&copy; Copyright @Ecommerce 2023-2024</p>
</div>
</footer>
`; 
 return footerHTML;
        }
// Function to insert the header HTML into the header element of each page
function insertHeader() {
    // Get the header element of the current page
    var headerElement = document.querySelector('header');
   
    // Generate the header HTML
    var headerHTML = generateHeader();
    
    // Insert the generated header HTML into the header element
    headerElement.innerHTML = headerHTML;
    
}

function insertfooter(){
    var footerElement = document.querySelector('footer')
    var footerhtml = generateFooter();
    footerElement.innerHTML = footerhtml;
}
function gotologin() {
    window.location.href = './04_login.html';
  }
function gotocart() {
    window.location.href = './05_newcart.html';
  } 
  
// Call the insertHeader function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', insertfooter);
document.addEventListener('DOMContentLoaded', insertHeader);
