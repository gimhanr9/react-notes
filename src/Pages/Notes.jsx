import { useEffect } from "react";

function Notes() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div></div>;
}

export default Notes;
