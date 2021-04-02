import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

const HeroText = () =>{
    return(
      <div className="hero-text container">
        <div className="row">
          <div className="hero-text-main mx-auto p-4 md-4">
            <h2>Best URL Shortner for FREE</h2>
          </div>
        </div>
        <div className="row">
          <div className="hero-text-sec mx-auto">
            <h4>Shorten any url for free and share with friends to get easy access to links.</h4>
          </div>
        </div>
        
      </div>
    );
  }

export default HeroText