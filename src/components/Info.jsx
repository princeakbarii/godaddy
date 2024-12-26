import React from "react";
import img2 from "./image/section-img.webp";
import img3 from "./image/img-2.webp"


export default function info() {
  return (
    <div>
      <div className="main-promo">
        <div className="promo-image">
          <img
            src="https://img1.wsimg.com/cdnassets/transform/e22a8b0c-0926-41d4-b93c-f029b99f72bf/in-mrq-hp-tablet"
            alt="Person holding camera"
            className="img1"
          />
        </div>
        <div className="promo-container">
            <div className="promo-1">
            <h2 className="font-1">Domain Names</h2>
            <h1 className="font-2">Get a .com for ₹ 1.001st yr.</h1>

            <p className="font-3">Grab the world's most popular domain.</p>
            <button className="cta-button">Get It Now</button>
            <p className="small-print">
              3-year purchase required. Additional year(s) ₹ 1,299.00*
            </p>
            </div>
          
        </div>
      </div>

      <div className="promo-hosting">
        <p className="hosting-font1">
          Find the perfect Domain and Business name with AI.
        </p>
        
        <button className="cta-button1">Try AI Search Button</button>
      </div>

      <div>
        <p className="main-heading">What's first up for your business?</p>
        <div className="main-btn">
          <button className="btn-1">Domains</button>
          <button className="btn-1">Recommmended</button>
          <button className="btn-2">WordPress and Security</button>
        </div>
      </div>

    
      <div>
        <img src={img2} alt="" className="sec-img" />
        <p className="sec-img-font1">Domains</p>
        <p className="sec-img-font2">Get started with the perfect domain, which comes with free domain privacy protection forever.</p>
        <br />
        <button className="Sec-img-btn1">Search Domains</button>
      </div>

      <div>
        <img src={img3} alt="" className="sec-img1" />
        <p className="sec-img1-font1">.Co for 1.00/ 1st yesr</p>
        <p className="sec-img1-font2">Ensure your company and website stand out with a .co domain.</p>
       <strong><p className="sec-img1-font2">3-yesr purchase required. Additional year(s) 3,299./-</p></strong>
        <br />
        <button className="Sec-img1-btn1">Find Your Domain</button>
      </div>

    <div>
      <div>
        <p className="input-text">Grow your brand with Websites + Marketing.</p>
        <img src="https://img1.wsimg.com/cdnassets/transform/305e0fdd-0043-42cd-851e-5a6a00df7576/intl-img-bl-prod-feature-engage-with-marketing-desktop" alt=""  className="input-img"/>
      </div>

      <div>
        <div className="section-text1">
          <p className="text1-p1">Get online fast. No design skills needed. </p> 
          <p className="text1-p2">Build your site in minutes. Choose from 100s of beautiful, mobile-friendly templates with our Website Builder, many with ecommerce features.</p>
          </div>
        <div className="section-text2">
        <p className="text2-p1">Build trust with email that matches your domain.  </p> 
        <p className="text2-p2">Help boost your credibility with customers with free Professional Email that’s identical to your domain name.</p>
        </div>
        <div className="section-text3">
        <p className="text3-p1">Engage with marketing tools.  </p> 
        <p className="text3-p2">Help your audience find you with built-in SEO and promote your business with social media and email marketing tools..</p>
        </div>

        <button className="section-btn">Start for Free</button>
      </div>

    </div>


    <div>

      <p className="img-section1-tex1">More tools to grow your business.</p>
      <p className="img-section1-tex2">We’re known for domains, but check out other essentials to take your business further online.</p>

      <div className="img-section1">

      <img src="https://img1.wsimg.com/cdnassets/transform/5a86c058-8d48-46c9-8532-c2af07e2b815/en-img-brand-lander-professional-email" alt=""  className="img1-section1"/>
      <p className="img1-section1-text1">Professional Email</p>
      <p className="img1-section1-text2">Show customers you’re a pro with an email address that matches your domain. Get Professional Email today.</p>
      <p className="img1-section1-text3">As low as <br></br>₹ 39.00 per user/mo</p>
      <button className="img1-section1-btn1">Explore Plans</button>
    </div>

      <div className="img-section2">
      <img src="https://img1.wsimg.com/cdnassets/transform/850393f4-30e2-4b3d-9627-17f2c5557c47/en-img-brand-lander-web-hosting" alt=""  className="img2-section1"/>
      <p className="img2-section1-text1">Web Hosting</p>
      <p className="img2-section1-text2">Whether you want hosting for one or 100 websites, we’ve got plans to keep everything running in peak form.</p>
      <p className="img2-section1-text3">As low as<br />₹ 89.00 per user/mo</p>
      <button className="img2-section1-btn1">Explore Plans</button>

      </div>
    </div>

    <div>
      <p className="main-section-text-1">Onward and upward with our customers.</p>

      <div>
        <img src="https://img1.wsimg.com/cdnassets/transform/d5382385-bb63-435e-bbf7-b20816e2d160/Raheim-Thompson-D" alt="" className="main-section-img"/>
        <div className="main-section-div">
          <p className="main-section-text1">“GoDaddy's Website Builder is super-convenient for somebody who has an idea of what they're trying to create, but might not have any technical skills.”</p>
          <img src="https://img1.wsimg.com/cdnassets/transform/bc4b4bee-f709-4f8b-b606-a92a74286ae2/Raheim-Thompson-site" alt="" className="main-section-img1"/>
          <p className="main-section-text2">Products used by <br /><b>Roletape:</b></p>


          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="35px" fill="#000"  className="main-section-icon1"><path d="m775.5-168.5-247.77-248Q498-390.5 459-376.75T383.16-363q-91.36 0-154.01-62.81-62.65-62.82-62.65-153.5 0-90.69 62.54-153.69t153.5-63q90.96 0 153.96 62.89 63 62.89 63 153.69 0 40.42-15 79.42T546-434.29L794-187l-18.5 18.5ZM383-388.5q80.5 0 135.75-55.06t55.25-136q0-80.94-55.25-135.94t-136-55Q302-770.5 247-715.44t-55 136q0 80.94 55.04 135.94t135.96 55Z" /></svg>
          <a href="https://www.godaddy.com/en-in/domains"> <p className="main-section-text3">Domain</p></a>


          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="35px" fill="#000"  className="main-section-icon2"><path d="M785-511.5v287.64q0 21.28-14.18 35.57T735.5-174H222q-21.14 0-35.32-14.53T172.5-223.5v-291q-36.5-19-43.75-52.09-7.25-33.1.75-66.41l41.46-116.73q4.98-21.47 19.44-29.12 14.46-7.65 39.02-7.65h496.82q24.39 0 39.08 6.25Q780-774 784.74-751.58L828-633q8 33.5.25 68.5t-43.25 53Zm-219.14-13q36.64 0 57.64-18t19-38l-30-188.5h-121v169.12q0 31.19 22.1 53.28 22.11 22.1 52.26 22.1Zm-174.9 0q32.46 0 53.75-22.1Q466-568.69 466-599.88V-769H345l-29.5 192.5q0 12.5 20 32.25t55.46 19.75Zm-173.96 0q29 0 49.25-17.78Q286.5-560.07 290.5-586L320-769h-91.5q-17 0-27.25 7.5T186.5-739L145-621.5q-13.5 39.5 8.5 68.25T217-524.5Zm523.5 0q34 0 60.25-26.5t12.75-70.5L772-741q-5-15-15.25-21.5T730-769h-92l29 183q4 26 24.75 43.75t48.75 17.75ZM222-191.5h513.5q14 0 23-9t9-23V-511q-4 1-11.75 2.5t-15.27 1.5q-24.82 0-47.19-11.5-22.37-11.5-37.75-35.5-14.44 22-36.76 34.5T562.23-507q-20.91 0-40.07-11.5T479-554q-21 24-46.5 35.5T387.47-507q-19.47 0-41.97-7.75T304-554q-33.02 32.55-56.51 39.78Q224-507 217.04-507q-7.61 0-14.33-1.5Q196-510 190-511v287.5q0 14 9 23t23 9Zm513.5 0H216.83h523.72-5.05Z"/></svg>
          <a href=""> <p className="main-section-text4">Online Store</p></a>


          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="35px" fill="#000" className="main-section-icon3"><path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-32-556v496q0 12 10 22t22 10h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10h-74v234l-74-44-74 44v-234H232q-12 0-22 10t-10 22Zm0 528v-560 560Z"/></svg>
          <a href=""> <p className="main-section-text5">SSL Certificate</p></a>
        

        </div>
      </div>
    </div>

    <div>
      <div className="main-div">
        <img src="https://img1.wsimg.com/cdnassets/transform/5471a319-d006-4ef1-b8f0-6079f3d8b5da/mrq-Guide-IN-PK-Suraiya-desktop" alt="" className="main-div-img-1"/>

        <img src="https://img1.wsimg.com/cdnassets/transform/373795fc-f4f1-4258-baf4-4912056db214/mrq-Guide-IN-PK-Suraiya-tablet" alt="" className="main-div-img1-1"/>

        <p className="main-div-text">Suraiya J. <br></br> GoDaddy Guide</p>
        <img src="https://img1.wsimg.com/cdnassets/m/28edcf2f3f8529b/original/gd-guides-logo.svg" alt=""  className="main-div-img-2"/>
        <p className="main-div-text1">We love to help. Seriously.</p>

        <p className="main-div-text2">Still not sure what you need? We’re happy to help, even if you’re not a customer. Contact us and we'll chat — or get back to you as soon as we can.</p>
        <button className="main-div-btn1">Get Help</button>
      </div>

          </div>

    </div>
  );
  
}
