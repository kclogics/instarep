import React ,{ createRef ,useState } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import './Stories.css'

const Item1 = props => {
  const ref = React.useRef(null)  
  React.useEffect(() => {
    if (props.focused) {
      ref.current.focus()
    }
  })
  return (
  <li className="xpoints1" ref={ref}>
    <span className="xpoints1text">{props.index}</span>
    {/* <span  style={{color: [props.color1]}} className="xpoints1text">{props.index}</span> */}
    {/* <span style={{color: [props.colored]}} className="xpoints1text">{props.index}</span> */}
    {/* <span className="xpoints1text">{props.index}</span> */}
    </li>
  )
}

const Item2 = props => {
  const ref = React.useRef(null)  
  React.useEffect(() => {
    if (props.focused) {
      ref.current.focus()
    }
  })
  return (
  <li className="xpoints2" ref={ref}>
    <span className="xpoints2text">{props.index}</span>
    </li>
  )
}

var deviceWidth = window.innerWidth;
var deviceHeight = window.innerHeight;
console.log(deviceWidth,deviceHeight)

function App() {
var b = 20;
var m = 40;
var x = null;
var y = (m * x) + b;
console.log(y)
  return (
    <div className="App">
      <div className="axis">
        <Add1 />
        <Add2 />
         <div>
        </div>
        </div>
    </div>
  );
}

const Add1 = props => {
  var points = new Array(100);
  for (var i = 0; i < 5; i++) {
      points[i] = i + 1; //This populates the array.  +1 is necessary because arrays are 0 index based and you want to store 1-100 in it, NOT 0-99.
  }
  for (var i = 0; i < points.length; i++) {
    //  console.log(points[i]); //This prints the values that you stored in the array
  }
  const [items, setItems] = React.useState(points)
  const [focusedIndex, _setFocusedIndex] = React.useState(false)
  const setFocusedIndex = index => {
    if (index < 0) {
      index = 0
    }
    if (index > items.length - 1) {
      index = items.length - 1
    }
    _setFocusedIndex(index)
  }
  const onFocus = event => {
    let index = 0
    let el = event.target.previousSibling
    while (el) {
      index++
      el = el.previousSibling
    }
    setFocusedIndex(index)
  }
  const onBlur = event => {
    setFocusedIndex(false)
  }
  const onKeyUp = event => {
    const keyCode = event.keyCode
    if (keyCode === 8 /* delete */) {
      const newItems = items.slice()
      newItems.splice(focusedIndex, 1)
      setItems(newItems)
      setFocusedIndex(focusedIndex)
    }
  }
   const pickColor = index => {
     if(index === 1) {
       return "red"
     } else {
      return "yellow"
     }
   }
  return <ul className="xaxis1" onFocus={onFocus} onBlur={onBlur} onKeyUp={onKeyUp} >
       {items.map((item, index, something) => <Item1 colored="red" color1={[pickColor(index)]} index={index} something={something} focused={index === focusedIndex}/>)}
       <span style={{left: '50%'}} className="yaxisContainer"></span>
    </ul>  
}

const Add2 = props => {
  let isDown = false;
let startX;
let scrollLeft;
  var points = new Array(100);
  for (var i = 0; i < 5; i++) {
      points[i] = i + 1; //This populates the array.  +1 is necessary because arrays are 0 index based and you want to store 1-100 in it, NOT 0-99.
  }
  for (var i = 0; i < points.length; i++) {
      // console.log(points[i]); //This prints the values that you stored in the array
  }
  const [items, setItems] = React.useState(points)
  const [focusedIndex, _setFocusedIndex] = React.useState(false)
  const setFocusedIndex = index => {
    if (index < 0) {
      index = 0
    }
    if (index > items.length - 1) {
      index = items.length - 1
    }
    _setFocusedIndex(index)
  }
  const onClick = event => {
    const newItems = items.slice()
    newItems.push('item')
    setItems(newItems)
  }
  const onFocus = event => {
    let index = 0
    let el = event.target.previousSibling
    while (el) {
      index++
      el = el.previousSibling
    }
    setFocusedIndex(index)
  }
  const onBlur = event => {
    setFocusedIndex(false)
  }
  const onKeyUp = event => {
    const keyCode = event.keyCode
    if (keyCode === 8 /* delete */) {
      const newItems = items.slice()
      newItems.splice(focusedIndex, 1)
      setItems(newItems)
      setFocusedIndex(focusedIndex)
    }
  }
 const onDrag = event => {
  console.log("dragged")
 }
 const onMouseDown = event => {
  //  alert("mousedown")
 }
 const onMouseMove = event => {
  //  alert("onMouseMove")
 }
 function handleClickLink(event) {
  const block = event.target.dataset.block;
  document.getElementById(block).scrollIntoView({ behavior: 'smooth'});
}
document.querySelectorAll('.xaxisContainer').forEach((elem) => {
  elem.addEventListener('click', handleClickLink);
});
  return (
      <div>
       <ul className="xaxis2" onFocus={onFocus} onBlur={onBlur} onKeyUp={onKeyUp}>
       {items.map((item, index, something) => <Item2 index={index} something={something} focused={index === focusedIndex}/>)}   
       </ul>  
       <div  className="xaxisContainer1">
       <div className="topGridItem">menu</div>
       <div className="topGridItem">instagram</div>
       <div className="topGridItem">send</div>
       </div>  
       <div className="xaxisContainer2" id="block" onMouseDown={onMouseDown} onMouseMove={onMouseMove}>
       <InstaStories />
       </div>
       <div  className="xaxisContainer1">
       </div>
       </div>
  )
}

class Hello extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
          <div 
              className="Helloanimated" 
              style={{backgroundColor: this.props.color}}>
              <h1 className="title is-1">Hello, {this.props.color}!</h1>
          </div>
      );
  }
}
class App1 extends React.Component {
  constructor(props) {
  super(props);
  // This binding is necessary to make `this` work in the callback
  this.scrollToNode = this.scrollToNode.bind(this);
}
  scrollToNode(node) {
      node.scrollIntoView({ behavior: "smooth"});  
  }
  // ref must be set on a non-react element 
  // to make scrollIntoView work 
render() {
  return (
    <div className="App">
              <div>
                  <span className="button1" 
                      onClick={() => this.scrollToNode(this.red)}>
                          Go to red</span>
        <span className="button2" 
                      onClick={() => this.scrollToNode(this.green)}>
              Go to green</span>
        <span className="button3" 
                      onClick={() => this.scrollToNode(this.yellow)}>
                          Go to yellow</span>
              </div>
              <div className="container1" ref={(node) => this.red = node}>
                  <Hello color="red" />
              </div>
      <div ref={(node) => this.green = node}>
                  <Hello color="green" />
              </div>
              <div ref={(node) => this.yellow = node}>
                  <Hello color="yellow" />
              </div>
              <span className="button1" 
                      onClick={() => this.scrollToNode(this.red)}>
                          Go to red</span>    
    </div>
  );
}
}

var scrollDiv = createRef();
var scrollWidth = createRef();
 
let isDown = false;
let startX;
let scrollLeft;
const InstaStories = () => { 
  const [count, setCount] = useState(0);
  function ScrollSmoothHandler() {
    scrollDiv.current.scrollIntoView({ behavior: "smooth" })
    // console.log(scrollDiv.current.scrollWidth)
    // console.log(scrollWidth.current.scrollWidth)
    // console.log(lastItem.current.scrollWidth)
    setCount(count+ 100)
  };
  // const onClick = ()=> {
  //   alert("hello u clicked it")
  // }
  const onMouseUp = ()=> {
    isDown = false;
  }
  const onMouseDown = (e) => {
    isDown = true;
    startX = e.pageX - scrollWidth.current.offsetLeft;
    scrollLeft = scrollWidth.current.scrollLeft;
  }
  const onMouseleave = (props) => {
    isDown = false;
  }
  const onMouseMove = (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollWidth.current.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    scrollWidth.current.scrollLeft = scrollLeft - walk;
    console.log(walk);
      console.log("scroll",scrollLeft)
  }
  return (    
  <main class="grid-item main">
    <div className="items" ref={scrollWidth}  onMouseUp={onMouseUp} onMouseDown={onMouseDown} onMouseleave={onMouseleave} onMouseMove={onMouseMove}>
    <div style={{left: 1+ "px"}} className="element" ref={scrollDiv}></div>
      <div  class="item item1"></div>
      <div class="item item2"></div>
      <div class="item item3"></div>
      <div class="item item4"></div>
      <div class="item item5"></div>
      <div class="item item6"></div>
      <div class="item item7"></div>
      <div class="item item8"></div>
      <div class="item item9"></div>
      <div class="item item10"></div>
      <div class="item item11"></div>
      <div class="item item12"></div>
      <div class="item item13"></div>
      <div class="item item14"></div>
      <div class="item item15"></div>
      <div class="item item16"></div>
      <div class="item item17"></div>
      <div class="item item18"></div>
      <div class="item item19"></div>
      <div class="item item20"></div>
      <Button onClick={ScrollSmoothHandler} variant="contained">|--</Button>
    </div>
  </main>
  );
}
 
export default App;
