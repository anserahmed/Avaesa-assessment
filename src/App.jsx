
import './App.css';
import Info from "./Components/Info.jsx"
import Product from "./Components/Product.jsx"
import Events from "./Components/Events.jsx"
import Contacts from "./Components/Contacts.jsx"
import About from "./Components/About.jsx"
import photo from "./illustration.png"
function App() {
  return (
    <>
      <div className="App">

        <header id="home" >
          <div class="container">
            <h1>Welcome to <span class="highlight">"Journalism Unveiled"</span></h1>
          </div>
        </header>

        <section >
          <div class="container">

            <div class="about-content">
              <img src={photo} alt="Illustration" />
              <div>
                <p>Welcome to the journey of unraveling the enigma of journalism with Mr. Arun, a seasoned journalist with decades of experience in the field.</p>
                <div className='btn'>
                  <button>Get yours</button>
                  <button>Learn more</button>
                </div>
              </div>


            </div>
          </div>
        </section>
      </div>


      {/* Info section */}
      <Info />

      {/* Product Section */}
      <Product />

      {/* About Section */}
      <About />

      {/* Events Section */}
      <Events />

      {/* Contacts Page */}
      <Contacts />
    </>

  );
}

export default App;
