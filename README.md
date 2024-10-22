# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




components ->

will create a reusable  ui ;

functional -> ui create 
class ->  fun 

react 16.2 -> hooks ->

fun-->  fun & ui 


-----------------&-------------------

functional component -> 


normal js fun 
function hello(){

    return "hello"
}
--->converting to component->

1.name should in capital letter 
2.com should return jsx 

function Hello(){

    return (

     <div>
        <h1>chaitanya</h1>
     </div>
    )
}


task -> 

restaurant page -> using components (nested components )

display all the fakestore api data ;

es6 - array iteration methods  -> display cheyagalama ?


props ->

it is an object used to share the properties(dta) from parent to child com;


normal props ->

var h="chai"

<Dummy a={h}/>


var Dummy = (props) => {

    var {a}=props;

  console.log(props, "second");

  return (
    <>
      <h1>hello this is {a}</h1>
    </>
  );
};



children props ->

data , component, html element 
 
<Dummy>
{"hello"}
</Dummy>
var Dummy = (props) => {

{
    childer:"hello"
}

  console.log(props, "second");

  return (
    <>
      <h1>hello this is {props.children}</h1>
    </>
  );
};


task ->

1.take 5 objects in fake store api
parent compoenet 
var f=[5 objcts]

send it to child compoenent -> render 

2.take 5 objects in fake store api
parent compoenet 
var f=[5 objcts]
take extra component in parent and dispaly all 5 objects data and send taht componet to child component as children props 

3.take a folder with 5 to 6 images in that and render that images into dom -- (modules)




................... images ---------------->


images -> 


absolute path ;

js value 

module -> 

public -> imges -> use chesukodam 
................................................


1. external module  system in styling -->

by using module key word in file name ->

filename.module.css

rule -> only classes are being used (exported )

when we are importing we need to import with the reference variable . 

go to jj.jsx for reference ;

.......................................................

task ->

1.restuarant page :

4 -
1. navbar 
2. carosul 
3. menu 
4. maps -> iframes .
5.footer 

2. create the fakestore api - cards using bootstrap 


........................................................

class components ->

   

class com ->  logic/ func create 
functions com -> ui part


then 16.2 react --> hooks 


func com-> fun /+ ui 
class -> func creat 


class ->  
1. for understanding of basics .
2. legacy projects .

js class syntax 
class classname{

  constructor(){


  }

  remaining methods -> 
}

react class components syntax ->

class Classcompoennetname extends component {

predefined method which is used to render jsx ->

render(){


  return (

    <>
    ...jsx
    </>
  )


}

 }

 ............

 task ->
 task ->

1.restuarant page :

4 -
1. navbar 
2. carosul 
3. menu 
4. maps -> iframes .
5.footer 

2. create the fakestore api - cards using bootstrap 

create in class components 
.............................................
