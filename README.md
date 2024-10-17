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
