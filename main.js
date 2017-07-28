// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let total = 0;
  let avg = 0;
  for ( let i = 0; i < data.length; i++){
    total = total + data[i].price;
  }

  console.log(avg = total/data.length);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let rng = [];
  for (let i = 0; i < data.length; i++){
    if (data[i].price >= 14 && data[i].price <= 18 && data[i].currency_code === "USD"){
      rng.push(data[i].title)
    }
  }
  console.log(rng);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let itemGbp;
  for (let i = 0; i < data.length; i++){
    if (data[i].currency_code === "GBP"){
      itemGbp = data[i].title;
    }
  }
  console.log(itemGbp);
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let with_wood = [];
  for (let i = 0; i < data.length; i++){
    for (let a =0; a < data[i].materials.length; a++){
      if (data[i].materials[a] === "wood"){
        with_wood.push(data[i].title);
      }
    }
  }
  console.log(with_wood);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  let lots_of_parts = [];
  for (let i = 0; i < data.length; i++){
    if (data[i].materials.length >= 8){
      lots_of_parts.push({
        title: data[i].title,
        quantity: data[i].quantity,
        materials: data[i].materials});
    }
  }
  console.log(lots_of_parts[0]);
  console.log(lots_of_parts[0].materials);
  console.log(lots_of_parts[1]);
  console.log(lots_of_parts[1].materials);
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let self_made = 0;
  for (let i = 0; i < data.length; i++){
    if (data[i].who_made === "i_did"){
      self_made = self_made + 1;
    }
  }
  console.log(self_made + " items were made by their sellers");
}
