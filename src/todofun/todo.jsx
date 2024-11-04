import axios from "axios";
import { useEffect, useState } from "react";

function Hello() {
  var [a1, seta1] = useState([]);

  function hellodatata() {
    axios.get("http://localhost:3000/posts").then((val) => {
      console.log(val.data);
      seta1(val.data);
    });
  }

  useEffect(() => {
    hellodatata();
  }, []);

  var add = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3000/posts",
        { title: e.target[0].value },
        {
          headers: {
            "Content-Type": "application/json",
            // 'Authorization': 'Bearer your_token_here', // Replace with your token
          },
        }
      )
      .then((val) => {
        console.log(val);

        hellodatata();
      });
  };

  var del = (value, index) => {
    axios.delete("http://localhost:3000/posts/" + value.id).then((val) => {
      console.log(val);
      hellodatata();
    });
  };

  var edit = (val, ind) => {
    var p = prompt("enter val" + val.title);

    axios
      .patch(
        "http://localhost:3000/posts/" + val.id,
        { title: p },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((val) => {
        console.log(val);
        hellodatata();
      });
  };

  var d = a1.map((val, ind) => {
    return (
      <div key={ind}>
        <li>
          {val.title}
          <button
            onClick={() => {
              del(val, ind);
            }}
          >
            delete
          </button>
          <button
            onClick={() => {
              edit(val, ind);
            }}
          >
            edit
          </button>
        </li>
      </div>
    );
  });

  return (
    <>
      <h1>hello guys </h1>

      <form action="" onSubmit={add}>
        <input type="text" />
        <input type="submit" value="add" />
      </form>

      <ul>{d}</ul>
    </>
  );
}

export default Hello;
