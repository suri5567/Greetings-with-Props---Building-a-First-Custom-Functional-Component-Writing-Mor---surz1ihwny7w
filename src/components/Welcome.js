import Rect from 'react'


const Welcome = ()=>{
   render(){
      return(
          <div>
              <h1> Hey ! {props.name}</h1>
             <h2>Welcome to Newton School.</h2>
        </div>  
      )
   }

}

export default Welcome;
