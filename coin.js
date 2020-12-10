console.log("hallo!");

let coin = {
  state: 0,

  flip: function () {
    if (Math.floor(Math.random() * 2) == 0) {
      this.state = 1;
    } else {
      this.state = 0;
    }
  },

  toString: function () {
    if (this.state == 0) {
      return "heads";
    } else {
      return "tails";
    }
  },

  toHTML: function () {
    let image = document.createElement("img");
    if (this.state == 0) {
      console.log("heads");
      image.src = "./assets/images/heads.jpg";
    } else {
      image.src = "./assets/images/tails.jpg";
    }

    console.log("tails");
    return image;
  },
};


function display20Flips() {
  for (let i = 1; i <= 20; i++) {
    coin.flip();
    coin.toString()

    document.body.append(coin.toString());

  }
}

function display20Images() {
  for (let i = 1; i <= 20; i++) {
    coin.flip();
    document.body.append(coin.toHTML());
  }
}

display20Flips();
display20Images();


