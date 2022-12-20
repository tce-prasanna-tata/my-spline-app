// import logo from './logo.svg';
import './App.css';
import Spline from '@splinetool/react-spline';
import { useRef } from 'react';

console.log("pkp:  ~ file: App.js:6 ~ onMouseDown ~ e")
function App() {

  const TEXT_1 = "cbdfc5c9-affd-4b1f-91e7-a87f068d08e3"
  const TEXT_2 = "2d33510a-6bbd-4b5c-9f7b-88e63777ec21"
  const ID_SLIDER1 = "6fb26fa2-31bf-4f08-b123-b27295a80d30"
  const ID_SLIDER2 = "b3adf2c9-b1a2-489d-86c4-11775d0d2f44"

  let spln = null

  let text1 = null;
  let text2 = null;
  let ball_golf = null;
  let Ellipse3 = null;


  const cube = useRef();



  function onMouseDown(e) {
    console.log("pkp:  ~ file: App.js:23 ~ onMouseDown ~ e", e.target)

    console.log("pkp:  ~ file: App.js:25 ~ onMouseDown ~ ID_SLIDER1", ID_SLIDER1)

    var slide1 = spln.findObjectById(ID_SLIDER1)
    console.log("pkp:  ~ file: App.js:28 ~ onMouseDown ~ slide1", slide1)

    // console.log("pkp:  ~ file: App.js:9 ~ onMouseDown ~ e position ", e.target.position)
    console.log("pkp:  ~ file: App.js:31 ~ onMouseDown ~ e id ", e.target.id)
    console.log("pkp:  ~ file: App.js:32 ~ onMouseDown ~ e.target.name", e.target.name)
    if (e.target.name === 'cgroup1') {
      console.log('I have been clicked!');
      // const obj = spln.findObjectByName('cgroup1');
      const obj = spln.findObjectById(e.target.id);
      console.log("pkp:  ~ file:   App.js:18 ~ onMouseDown ~ objsssss", obj)
      cube.current = obj;
      // obj.rotation.set(0)
    }
    if (e.target.id === 'cbdfc5c9-affd-4b1f-91e7-a87f068d08e3') {
      console.log('I have been clicked!');
      //f27b87d1-f2bb-4bc2-bfb1-dbf3dedff8de
      const slider2 = spln.findObjectById(ID_SLIDER2);
      console.log("pkp:  ~ file: App.js:50 ~ onMouseDown ~ slider2", slider2)
      spln.current = slider2;
      // slider2.emitEvent('mouseHover');
      slider2.emitEvent('mouseDown');
    }





  }

  function onMyLoad(spline, sss) {
    console.log("pkp:  ~ file: App.js:19 ~ on Load ~ spline", spline)


    // spline.setZoom(0)
    // console.log("pkp:  ~ file: App.js:36 ~ onMyLoad ~ spline.setZoom", spline.setZoom)
    if (spline.dt) {
      console.log("pkp:  ~ file: App.js:27 ~ on Load ~ spln", spln)

      spln = spline
      text1 = spline.findObjectById(TEXT_1);
      text2 = spline.findObjectById(TEXT_2);
      ball_golf = spline.findObjectByName('ball_golf');
      Ellipse3 = spline.findObjectByName('Ellipse3');


      const slider2 = spline.findObjectById(ID_SLIDER2);
      console.log("pkp:  ~ file: App.js:79 ~ onMyLoad ~ slider2", slider2)

      var slide1 = spline.findObjectById(ID_SLIDER1)
      console.log("pkp:  ~ file: App.js:28 ~ onMouseDown ~ slide1", slide1)
    }




    // const obj = spline.findObjectByName('cgroup1');
    // console.log("pkp:  ~ file: App.js:22 ~ on Load ~ spln", spln)
    // const obj = spln.findObjectByName('Component Instance 5');
    // console.log("pkp:  ~ file: App.js:22 ~ on Load ~ obj xxxxx", obj)
    // // or
    // // const obj = spln.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // // save it in a ref for later use
    // cube.current = obj;

    // setTimeout(function (eee) {
    //   console.log("pkp:  ~ file: App.js:37 ~ eee", eee)
    //   spline.setSize(window.innerWidth, window.innerHeight);
    // }, 100);

  }

  function moveObj() {
    // console.log(cube.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }
    console.log("pkp:  ~ file: App.js:55 ~ moveObj ~ cube.current", cube.current)
    if (cube.current) {

      console.log("pkp:  ~ file: App.js:57 ~ moveObj ~ cube.current.rotation.x", cube.current.rotation.x)
      console.log("pkp:  ~ file: App.js:60 ~ moveObj ~ cube.current.rotation", cube.current.rotation)
      cube.current.rotation.x += 0.2
      // move the object in 3D space
      cube.current.position.x += 10;
    }
    Ellipse3.rotation.x += 0.2

  }

  function calculateTotalEnergy() {
    /* Formula from SB
       ---------------------------------
       Kinetic Energy (K.E.) = ½ *m*v*v
       Potential Energy (P.E.) = m*h*9.8
       Total Energy (E) = K.E. + P.E.
  	
       Where,
       m is mass of plane
       v is velocity of plane
       h is height of plane
     */
    var planeMass = 10;
    var planeVelocity = 20;
    var planeHeight = 30;
    var kineticEnergy = 30;
    var potentialEnergy = 30;
    var totalEnergy = 0;

    kineticEnergy = (1 / 2) * planeMass * planeVelocity * planeVelocity;
    potentialEnergy = planeMass * planeHeight * 9.8;
    totalEnergy = kineticEnergy + potentialEnergy;
    console.log("pkp:  ~ file: App.js:94 ~ calculateTotalEnergy ~ totalEnergy", totalEnergy)
    // if (resultMc != null) {
    //   resultMc.updateTotalEnergy(kineticEnergy, potentialEnergy, totalEnergy);
    // }
  }

  calculateTotalEnergy()



  return (
    <div className="App">

      <header className="App-header">
        <Spline scene="https://prod.spline.design/K2kd3ytsOFVIRLXL/scene.splinecode" onMouseDown={onMouseDown} onLoad={onMyLoad} />
        <div className='uis'>
          <button type="button" onClick={moveObj}>
            Move Cube
          </button>
        </div>
      </header>

    </div>
  );
}

export default App;

