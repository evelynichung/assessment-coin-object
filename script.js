let coin = {
  state: 0,

  flip: function () {
    /* 1. Randomly set your coin object's "state" property to be either
           0 or 1: use "this.state" to access the "state" property on this object.*/

    this.state = Math.floor(Math.random() * 2 + 0);
  },

  toString: function () {
    /* 2. Return the string "Heads" or "Tails", depending on whether
             "this.state" is 0 or 1. */

    // if and then statement - assign Heads = 0 & Tails = 1

    if (this.state === 0) {
      console.log("Heads");
      document.write("Heads");
    } else if (this.state === 1) {
      console.log("Tails");
      document.write("Tails");
    }
  },

  toHTML: function () {
    let image = document.createElement("img");
    image.style.width = "200px";
    image.style.height = "200px";

    /* 3. Set the properties of this image element to show either face-up
             or face-down, depending on whether this.state is 0 or 1.*/

    // if and then statement - displays picture of Heads or Tails

    if (this.state === 0) {
      image.src = "./images/quarter-head.jpg";
      document.body.append(image);
    } else if (this.state === 1) {
      image.src = "./images/quarter-tails.jpg";
      document.body.append(image);
    }

    return image;
  },
};

coin.flip();
console.log(coin.state);
coin.toString();
coin.toHTML();

// Write a function called display20Flips that uses a loop to flip the coin 20 times.
// Each time the coin flips, display the result of each flip as a string on the page
// (make use of your toString() method)

let coinFlips = document.createElement("coinFlips");
// let coinHead = document.createElement("head");
// let coinTails = document.createElement("tails");

function display20Flips() {
  // Loop - display list of results on page
  for (i = 0; i < 20; i = i + 1) {
    coin.flip();
    coin.toString();
  }
}
display20Flips();

// Write a function called display20Images, use a loop to flip the coin 20 times.
// Display the result of each flip as an HTML IMG element on the page
// (make use of your toHTML() method).

function display20Images() {
  // Loop - display list of results on page
  for (j = 0; j < 20; j = j + 1) {
    coin.flip();
    coin.toHTML();
  }
}

display20Images();
