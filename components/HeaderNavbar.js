function HeaderNavbar(){
    return (
      <header>
          <nav id="nav-bar">
              {/* list, with each item being a nav to a section of the page navigation class is used keep the list items together in a flex box, with centered content */}
              <ul id="nav-list" className="navigation">
                  <li><a id="early-life-nav" className="nav-links" href="#">Back To Top</a></li>
                  <li><a id="leading-a-positive-change-nav" className="nav-links" href="#section1">Basics of Evolution</a></li>
                  <li><a id="malcolm-x-death-nav" className="nav-links" href="#section2">Maybe the Chicken Came First</a></li>
                  <li><a id="malcolm-x-death-nav" className="nav-links" href="#section3">Maybe the Egg Came First</a></li>
              </ul>
          </nav> 
      </header>
    )
  }

  export default HeaderNavbar