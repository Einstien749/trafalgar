import './App.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import user from './images/user.png';
import {FaSearch, FaLongArrowAltDown, FaLongArrowAltLeft, FaLongArrowAltRight, FaCircle, FaUserMd} from 'react-icons/fa';
import {RiFirstAidKitFill} from'react-icons/ri';
import {CgNotes} from 'react-icons/cg';
import {GiSodaCan} from 'react-icons/gi';
import {FcViewDetails} from 'react-icons/fc';

function App() {
  return (
    <>
      <div className="mainbody">
        <nav>
          <span>
            <span>T</span> <span>Trafalgar </span>
          </span>
          <span>
            <i style={{color: "rgb(0,0,0)"}}>Home</i>
            <i>Find A Doctor</i>
            <i>Apps</i>
            <i>Testimonials</i>
            <i>About Us</i>
          </span>
        </nav>
        <div className="first">
          <div>
            <p style={{fontSize: "3.0em", color: "rgb(0,0,0)", fontWeight: "900"}}>
              Virtual healthcare for you
            </p>
            <p>
              Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
            </p>
            <button style={{backgroundColor: "rgb(51, 113, 228)", color: "rgb(255,255,255)", border: "0px"}}>Consult today</button>
          </div>
          <img src={img1} alt="" />
        </div>
        <div className="second">
          <h1>
            Our services
          </h1>
          <div style={{width: "5%", marginLeft: "47.5%", backgroundColor: "rgb(0,0,0)", height: "4px" }}></div>
          <p>
            We provide to you the best choiches for you. Adjust it to your health needs and amke sureyour undergo treatment with our high qualified doctors you can consult with us which type of service is suitable for your health. 
          </p>
          <div>
            <div>
              <FaSearch></FaSearch>
              <h3>Search doctor</h3>
              <p>Choose your doctor from thousands of specialist, general and trusted hospitals</p>
            </div>
            <div>
              <GiSodaCan></GiSodaCan>
              <h3>Online Pharmacy</h3>
              <p>Buy your medicines with our mobile applications with simple delivery system</p>
            </div>
            <div>
              <FaUserMd></FaUserMd>
              <h3>Consultation</h3>
              <p>Free consultation with our trusted doctors and get the best recommendations</p>
            </div>
            <div>
              <FcViewDetails></FcViewDetails>
              <h3>Details info</h3>
              <p>Free consultation with our trusted doctors and get the best recommendations</p>
            </div>
            <div>
              <RiFirstAidKitFill></RiFirstAidKitFill>
              <h3>Emergency care</h3>
              <p>You can get 24/7 urgent care for yourselfor your children and your lovely family</p>
            </div>
            <div>
              <CgNotes></CgNotes>
              <h3>Tracking</h3>
              <p>Track and save your medical history and health data</p>
            </div>
          </div>
          <button style={{marginTop: "20px"}}>Learn More</button>
        </div>
        <div className="third">
          <div>
            <img src={img2} alt="" />
            <div>
              <h1>
                Leading healthcare provider
              </h1>
              <div style={{width: "8%", backgroundColor: "rgb(0,0,0)", height: "4px" }}></div>
              <p>
                Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us it's not just work. We take pride in the solutions we deliver.
              </p>
              <button className='colored'>Learn more</button>
            </div>
          </div>
          <div>
            <div>
              <h1>
                Download our mobile app
              </h1>
              <div style={{width: "8%", backgroundColor: "rgb(0,0,0)", height: "4px" }}></div>
              <p>
                Our dedicated patient engagement app and web portal allow you to access information instateneously (no tedeous form, long calls, or administrative hassle) and securely.
              </p>
              <button className='colored'>Download  <FaLongArrowAltDown></FaLongArrowAltDown></button>
            </div>
            <img src={img3} alt="" />
          </div>
        </div>
        <div className='fourth'>
          <h1 style={{color: "rgb(255,255,255)"}}>What our customer are saying</h1>
          <div style={{width: "8%",marginLeft:"46%", backgroundColor: "rgb(255,255,255)", height: "4px" }}></div>
          <div style={{marginTop: "20px",width: "80%",marginLeft:"10%", height: "65%", display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
            <img src={user} alt='' />
            <i style={{width: "25%", paddingTop: "20px"}}><span style={{fontWeight: "900"}}>Edward Newgate</span><p>Founder Circle</p></i>
            <i style={{width: "50%", paddingTop: "20px"}}>"Our dedicated patient engagement app and web portal allow you to access information instataneously (no tedeous form, long calls, or administrative hassle) and securely"</i>
          </div>
        </div>
        <div className='fifth'>
          <FaLongArrowAltLeft style={{color: "rgb(151, 213, 228)"}}></FaLongArrowAltLeft>
          <span style={{fontSize: "o.5em"}}>
            <FaCircle style={{color: "rgb(51, 113, 228)"}}></FaCircle>
            <FaCircle style={{color: "rgb(151, 213, 228)"}}></FaCircle>
            <FaCircle style={{color: "rgb(151, 213, 228)"}}></FaCircle>
            <FaCircle style={{color: "rgb(151, 213, 228)"}}></FaCircle>
          </span>
          <FaLongArrowAltRight style={{color: "rgb(51, 113, 228)"}}></FaLongArrowAltRight>
        </div>
        <div className="sixth">
          <h1>
            Check out our latest article
          </h1>
          <div style={{width: "5%", marginLeft: "47.5%", backgroundColor: "rgb(0,0,0)", height: "4px" }}></div>
          <div>
            <div className='hi'>
              <img src={img4} alt='' />
              <h3>Disease detection, check up in the laboratory</h3>
              <p>In this case the role of the laboratory is very important to do a disease detection ...</p>
              <p>Read more   <FaLongArrowAltRight></FaLongArrowAltRight></p>
            </div>
            <div className='hi'>
              <img src={img5} alt='' />
              <h3>Herbal medicines that are safe for consumption</h3>
              <p>Herbal medicine is very widely used at this time because of its very good for your health ...</p>
              <p>Read more   <FaLongArrowAltRight></FaLongArrowAltRight></p>
            </div>
            <div className='hi'>
              <img src={img6} alt="" />
              <h3>Natural care for healthy facial skin</h3>
              <p>A healthy lifestyle should start from now and also for your health. There are some ...</p>
              <p>Read more   <FaLongArrowAltRight></FaLongArrowAltRight></p>
            </div>
          </div>
          <button style={{marginTop: "20px"}}>View all</button>
        </div>

      </div>
      
      <div className="footer">
        <div>
          <h3>
            <span>T</span> <span>Trafalgar </span>
          </h3>
          <p>
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
          </p>
          <p>
            Trafalgar PTY LTD 2020. All rights reserved.
          </p>

        </div>
        <div>
          <h3>Company</h3>
          <p>About</p>
          <p>Testimonials</p>
          <p>Find a doctor</p>
          <p>Apps</p>
        </div>
        <div>
          <h3>Region</h3>
          <p>Indonesia</p>
          <p>Singapore</p>
          <p>Hongkong</p>
          <p>Canada</p>
        </div>
        <div>
          <h3>Help</h3>
          <p>Help center</p>
          <p>Contact support</p>
          <p>Instructions</p>
          <p>How it works</p>
        </div>
      </div>
    </>
  );
}

export default App;
