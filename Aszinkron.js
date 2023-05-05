class Aszinkron {
  constructor() {}

  adatBetolt(vegpont, callbackFv) {
    fetch(vegpont, {
      method: "get",
      headers: {
        "Content-Type": "application.json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        callbackFv(data);
      })
      .catch((error) => console.log(error));
  }

  adatTorol(vegpont, id) {
    vegpont = vegpont + "/" + id;

    fetch(vegpont, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
}

export default Aszinkron;
