const card = [{
   Name : `DSlar Camera`,
   description : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, sint!`,
   price : ` RS :90,000`

},

{
  Name : `DSlar Camera`,
  description : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, sint!`,
  price : ` RS :90,000`

},

{
  Name : `DSlar Camera`,
  description : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, sint!`,
  price : ` RS :90,000`

}
]

let cards = document.getElementById(`card`);


for(let i=0; i<card.length; i++){cards.innerHTML+=
    `<div class="card" style="width: 18rem;">
    <img src="dslar img.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">DSlar Camera</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Order Now</a>
    </div>
  </div>`
}