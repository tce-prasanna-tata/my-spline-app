// import logo from './logo.svg';
import './App.css';
import Spline from '@splinetool/react-spline';
import { useRef } from 'react';

console.log("pkp:  ~ file: App.js:9 ~ onMouseDown ~ e")
function App() {

  let spln = null

  const cube = useRef();
  function onMouseDown(e) {
    console.log("pkp:  ~ file: App.js:9 ~ onMouseDown ~ e", e.target)
    // console.log("pkp:  ~ file: App.js:9 ~ onMouseDown ~ e position ", e.target.position)
    console.log("pkp:  ~ file: App.js:9 ~ onMouseDown ~ e id ", e.target.id)
    console.log("pkp:  ~ file: App.js:13 ~ onMouseDown ~ e.target.name", e.target.name)
    if (e.target.name === 'cgroup1') {
      console.log('I have been clicked!');
      // const obj = spln.findObjectByName('cgroup1');
      const obj = spln.findObjectById(e.target.id);
      console.log("pkp:  ~ file:   App.js:18 ~ onMouseDown ~ objsssss", obj)
      cube.current = obj;
      // obj.rotation._x = 99
      // obj.rotation.set(0)
    }



  }

  function onMyLoad(spline, sss) {
    console.log("pkp:  ~ file: App.js:19 ~ on Load ~ spline", spline)


    spline.setZoom(0)
    console.log("pkp:  ~ file: App.js:36 ~ onMyLoad ~ spline.setZoom", spline.setZoom)
    if (!spln) {
      console.log("pkp:  ~ file: App.js:27 ~ on Load ~ spln", spln)

      spln = spline
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
  }



  return (
    <div className="App">
      <button type="button" onClick={moveObj}>
        Move Cube
      </button>
      <header className="App-header">
        <Spline scene="https://prod.spline.design/1cPjZAqFuy5do8-7/scene.splinecode" onMouseDown={onMouseDown} onLoad={onMyLoad} />
        {/*<Spline scene="https://prod.spline.design/bTahNGeomvWcSoxS/scene.splinecode" onMouseDown={onMouseDown} onLoad={onMyLoad} />*/}
      </header>

    </div>
  );
}

export default App;

