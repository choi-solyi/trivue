import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./component/resume/Resume";
import "./App.css";
import IconButton from "./component/IconButton";

export default function App() {
  return (
    <>
      <div className="contents">
        <div className="header">
          <span>haehyeonPark</span>
          <IconButton />
        </div>
        <div className="about-me">
          <span>Hello!</span>
          <div>
            <span>I&apos;m Haehyeon Park :)</span>
          </div>
          <p className="paragraph">
            3+ years work experiences in IT startup, telecommunication and
            financial service provider companies.
            <br />
            Currently living in Vancouver, and looking for full stack developer
            job.
          </p>
        </div>
        <div id="resume">
          <h1>
            <span>Work</span>
          </h1>
          <div class="work">
            <div>
              <h3>Tennod Solution</h3>
              <p class="info">
                Java Spring Framework, Oracle, Jsp, Javascript, jquery, Ajax
              </p>
              <p>
                <em class="date">MAR 2022 - MAR 2023</em>
                <p>
                  <span>• </span>
                  Built new web application for Lotte Card, one of the
                  well-known credit card companies in Korea, to assist users in
                  using new payment system called Locapay which is an open
                  payment system
                </p>
                <p>
                  <span>• </span>
                  Developed the end-to-end APIs with Python3 and Tornado for
                  collecting and delivering data of network infrastructures
                  including server, switch and VM
                </p>
                <p>
                  <span>• </span>
                  Integrated website using Javascript, Angular to prototype
                  unique data-driven dashboard
                </p>
              </p>
            </div>
          </div>
          <div class="work">
            <div>
              <h3>Ariel Networks</h3>
              <p class="info">Python, Tornado, MySQL, Javascript</p>
              <p>
                <em class="date">OCT 2020 - DEC 2021</em>
                <p>
                  <span>• </span>
                  Worked closely with clients of KT, one of the biggest
                  telecommunications company in Korea, to develop a web
                  application service that monitors and manages its network
                  infrastructures
                </p>
                <p>
                  <span>• </span>
                  Created and implemented transaction web view pages and APIs
                  with Java and Spring framework
                </p>
                <p>
                  <span>• </span>
                  Integrated open API to register cards and bring transaction
                  data from 3 different card companies
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

    /*
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resume />}></Route>
      </Routes>
    </BrowserRouter>
    */
  );
}
