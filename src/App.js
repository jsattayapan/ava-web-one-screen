
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AvataraLogo from './assets/avatara-logo.png'
import Double1 from './assets/double-1.jpg'
import Double2 from './assets/double-2.jpg'
import Twin1 from './assets/twin-1.jpg'
import Twin2 from './assets/twin-2.jpg'
import Triple1 from './assets/triple-1.jpg'
import Triple2 from './assets/triple-2.jpg'
import PrivateFunction from './assets/private-function.jpg'
import Surf from './assets/surf.jpg'
import FireShow from './assets/fire-show.jpg'
import Snorkeling from './assets/snorkeling.jpg'
import Massage from './assets/massage.jpg'
import Motorbike from './assets/motorbike-2.jpg'
import GroupDinner from './assets/group-dinner.jpg'
import MeetingRoom from './assets/meeting-room.jpg'
import Entertain from './assets/entertain.JPG'

import Bathroom1 from './assets/bathroom-1.jpg'
import Bathroom2 from './assets/bathroom-2.jpg'
import Bathroom3 from './assets/bathroom-3.jpg'
import Bathroom4 from './assets/bathroom-4.jpg'
import Food1 from './assets/food-1.jpg'
import Food2 from './assets/food-2.jpg'
import Food3 from './assets/food-3.jpg'
import Food4 from './assets/food-4.jpg'

import Activities1 from './assets/activities-1.JPG'

import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { faFacebookSquare, faLine } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <div id="container1" className="container-fluid">
          <MainFrame />
    </div>
    </div>
  );
}
const images = [
  Double1,
  Double2
];
const images2 = [
  Twin1,
  Twin2
];
const images3 = [
  Triple1,
  Triple2
];
const images4 = [
  Bathroom1,
  Bathroom2,
  Bathroom3,
  Bathroom4,
];
const Slideshow = (props) => {
  const zoomInProperties = {
    indicators: true,
    scale: 1.4
  }
  return (
    <div>
      <Zoom {...zoomInProperties}>
        {props.images.map((each, index) => (
          <div key={index} style={{width: "100%"}}>
            <img style={{ objectFit: "cover", width: "100%" }} alt={index} src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  )
}

class MainFrame extends React.Component {
  render(){
    return(
      <div className="row">
          <HeaderIntroduction />
        <Room />
      <Double title="Deluxe Double Room" images={images} />
      <Double title="Deluxe Twin Room" images={images2} />
    <Double title="Deluxe Triple Room" images={images3} />
    <Double title="Walk-in Closet & Shower" images={images4} />
  <Restaurant />
<Activities />
<Meeting />
<Contact />
      </div>
    )
  }
}

class HeaderIntroduction extends React.Component {
  render(){
    return(
        <div className="col-12">
          <div className="row">
            <div id="introduction_container" className="col-12">
              <div className="row justify-content-around">
                <div id="introduction_text" className="col-8 text-center">
                  <img alt='logo' id="avatara-logo" src={AvataraLogo} />
                  <p>Avatara Resort เป็นรีสอร์ทในเกาะเสม็ด ที่ขยายกิจการมาจาก เจี๊ยบบังกาโล  รีสอร์ทแห่งนี้มีสถาปัตยกรรมและการตกแต่งที่ได้ inspection จากภาพยนตร์ “Avatar “</p>
                </div>
                <div className="col-10 my-5 " id="reservation_container">
                  <div className="row justify-content-around">
                    <div className="col-md-2 col-11 my-2 ">
                      <label className="label-control">CHECK-IN/CHECK-OUT</label>
                    <input className="form-control" placeholder="SELECT DATES" />
                    </div>
                    <div className="col-md-2 col-11 my-2 ">
                      <label className="label-control">ADULTS</label>
                    <div className="row justify-content-around">
                      <div className="col-4 ">
                          <div className="box-button">
                              -
                          </div>
                    </div>
                    <div className="col-4 text-left">
                      <p>2</p>
                    </div>

                    <div className="col-4 text-right">
                        <div className="box-button">
                            +
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="col-md-2 col-11 my-2 ">
                      <label className="label-control">CHILDREN</label>
                    <div className="row justify-content-around">
                      <div className="col-4 ">
                          <div className="box-button">
                              -
                          </div>
                    </div>
                    <div className="col-4 text-left">
                      <p>0</p>
                    </div>

                    <div className="col-4 text-right">
                        <div className="box-button">
                            +
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="col-md-2 col-11 my-2 pt-4">
                      <button id="booking-btn" className="btn btn-warning">BOOK NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-around">

          </div>
        </div>
    )
  }
}

class Room extends React.Component {
  render(){
    return(
        <div  className="col-12">
          <div className="row" id="room_container">
            <div id="room_title" className="col-12 col-md-4">
              <div className="row m-4">
                <div className="col-12">
                  <h3>ห้องพัก</h3>
                </div>
                <div className="col-12">
                  <p>ในส่วนของห้องพักของเรามีทั้งหมด 89 ห้อง แบ่งเป็น 3 Room Type ซึ่ง Room Type ทุก Room Type ได้รับการตกแต่งใน concept “space “ ซึ่งภายในห้องจะตกแต่งด้วยโคมไฟหลากหลายสีไม่ซ้ำสีในแต่ละห้อง หรือจะเป็นแนวโคมไฟสดใสดูสบายตา และฝ้าเพดานหลากหลายแบบ พร้อมด้วยห้องน้ำสไตล์โมเดิร์นที่มีfunction walk-in Closet ที่สามารถมองเห็นวิวภูเขาสีเขียวแบบเต็มตา</p>
                </div>
              </div>
            </div>
                <div id="room_overview" className="col-12 col-md-4">
                </div>
                <div id="room_overview_2" className="col-12 col-md-4">
                </div>
              </div>
            </div>
    )
  }
}

class Double extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return(
        <div  className="col-12 col-md-6">
          <div className="row justify-content-around my-5" id="double_container">
            <div className="col-md-10 col-9bathroom1 text-center">
              <h3>{this.props.title}</h3>
            </div>
            </div>
            <div className="row justify-content-around">
            <div className="col-12 col-md-12 text-center">
              <Slideshow images={this.props.images} />
            </div>
            </div>
          </div>
    )
  }
}

class Restaurant extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return(
        <div  className="col-12" id="restaurant-container">
          <div className="row justify-content-around" >
            <div className="col-12 col-md-6">
              <div className="row m-4">
                <div className="col-12">
                  <h3 className="sub-title-t">ร้านอาหาร</h3>
                </div>
                <div className="col-12">
                  <p className="text-t">Jep’s Restaurantที่มี วิวทะเลแบบพาโนรามาและอาหารซึ่งขึ้นชื่อมาอย่างยาวนานในเรื่องรสชาติที่เป็นที่มีเอกลักษณ์เฉพาะตัวอย่าง”ข้าวผัดลุงเจี๊ยบ ซี่โครงหมูอบ” และเครื่องดื่มที่ไม่ว่าใครจะมากี่ครั้งก็ต้องสั่ง”Jep’s Beach “</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row justify-content-around">
                <div className="col-6 p-2">
                  <img className="img-t" src={Food1} alt='food' />
                </div>
                <div className="col-6  p-2">
                  <img className="img-t" src={Food2} alt='food' />
                </div>
                <div className="col-6  p-2">
                  <img className="img-t" src={Food3} alt='food' />
                </div>
                <div className="col-6  p-2">
                  <img className="img-t" src={Food4} alt='food' />
                </div>
              </div>
            </div>
            </div>
          </div>
    )
  }
}

const Activities = () => (
  <div className="col-12">
    <div className="row justify-content-around">
      <div className="col-10 col-md-5 text-center pt-5 activities-title" >
        <h3 className="sub-title-t-dark">กิจกรรม</h3>
      </div>
    </div>
    <div className="row justify-content-around">
      <div className="col-10 col-md-5 text-center mt-3 text-center activities-text">
        <p>พบกับกิจกรรมมากมายบนเกาะเสม็ด อาทิ S.U.P คายัก ขี่มอเตอร์ไซต์รอบเกาะ โชว์ควงกระบองไฟ ดำน้ำ ตกปลา</p>
      </div>
    </div>
    <div className="row justify-content-around mb-5">
      <div className="col-10 col-md-5 text-center mt-3 text-center activities-text">
        <img className="img-t-activities" src={Activities1} alt="Activities" />
        <h4 className="activities-image-title">คายัก</h4>
      </div>
      <div className="col-10 col-md-5 text-center mt-3 text-center activities-text">
        <img className="img-t-activities" src={Surf} alt="Activities" />
      <h4 className="activities-image-title">Surf</h4>
      </div>
      <div className="col-10 col-md-5 text-center mt-3 text-center activities-text">
        <img className="img-t-activities" src={FireShow} alt="Activities" />
      <h4 className="activities-image-title">Fire Show</h4>
      </div>
      <div className="col-10 col-md-5 text-center mt-3 text-center activities-text">
        <img className="img-t-activities" src={Snorkeling} alt="Activities" />
      <h4 className="activities-image-title">ดำน้ำ</h4>
      </div>
      <div className="col-10 col-md-5 text-center mt-3 text-center activities-text">
        <img className="img-t-activities" src={Massage} alt="Activities" />
      <h4 className="activities-image-title">นวดแผนไทย ริมชายหาด</h4>
      </div>
      <div className="col-10 col-md-5 text-center mt-3 text-center activities-text">
        <img className="img-t-activities" src={Motorbike} alt="Activities" />
      <h4 className="activities-image-title">ขับมอเตอร์ไซต์รอบเกาะ</h4>
      </div>
    </div>
  </div>
)

const Meeting = () =>
  <div className="col-12 meeting-container">
    <div className="row">
      <div className="col-12 my-3 text-center">
        <h3 className="sub-title-t">Private Function</h3>
      </div>
      <div className="col-12 text-center">
        <p className="text-t">อุปกรณ์การจัดสัมนาประชุม ครบวงจรณ์ พร้อมกับฟังชั่นคุณภาพ ให้บริการ</p>
      </div>
    </div>
    <div className="row justify-content-around mb-5">
      <div className="col-10 col-md-5 text-center mt-3 text-center activities-text">
        <img className="img-t-activities" src={GroupDinner} alt="Activities" />
      <h4 className="activities-image-title">จัดเลี้ยง</h4>
    </div>
    <div className="col-10 col-md-5 text-center mt-3 text-center activities-text">
      <img className="img-t-activities" src={PrivateFunction} alt="Activities" />
    <h4 className="activities-image-title">Private Function</h4>
    </div>
    <div className="col-10 col-md-5 text-center mt-3 text-center activities-text">
      <img className="img-t-activities" src={MeetingRoom} alt="Activities" />
    <h4 className="activities-image-title">Conference</h4>
    </div>
    <div className="col-10 col-md-5 text-center mt-3 text-center activities-text">
      <img className="img-t-activities" src={Entertain} alt="Activities" />
    <h4 className="activities-image-title">Entertainment</h4>
    </div>
    </div>

  </div>


const Contact = () =>
<div className="col-12 contact-container">
  <div className="row justify-content-center py-4">
    <div className="col-3 col-md-2 col-lg-1">
      <p class="d-flex align-items-end sm-text">STAY CONNECTED</p>
    </div>
    <div className="col-1 text-center">
      <FontAwesomeIcon className="t-pointer" icon={faFacebookSquare} color="#e3e3e3" size="2x" />
    </div>
    <div className="col-1 text-center">
      <FontAwesomeIcon className="t-pointer" icon={faLine} color="#e3e3e3" size="2x" />
    </div>
    <div className="col-1 text-center">
      <FontAwesomeIcon className="t-pointer" icon={faMapMarkedAlt} color="#e3e3e3" size="2x" />
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-12 text-center">
      <p style={{color: 'white'}}>All rights reserved by Avatara Resort</p>
    </div>
  </div>
</div>





export default App;
