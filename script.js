 
let main_div = document.querySelector("#main_div");
let search_out = '',card_out='';
let full_data=[];


document.addEventListener('load',display_items());
  
  function display_items() {

    if(typeof document.hidden !== "undefined") {
	
        
        let centerDom = document.getElementsByClassName('center') 
        let domSwing = document.getElementById('swinging')
        domShadow = document.getElementById('shadow');
        
            if (document.hidden) {
                domSwing.style.animationPlayState = "paused";
                domShadow.style.animationPlayState = "paused";
            } else {
                domSwing.style.animationPlayState = "running";
                domShadow.style.animationPlayState = "running";
            }
        
             
            setTimeout(() => {
               centerDom.remove()
             }, 3000 )
    }
  
        

  

    let title_div=document.createElement('div');
    title_div.setAttribute('id','title');
    title_div.classList='justify-content-center text-center ';
    main_div.appendChild(title_div);

    let h1= document.createElement('h1');
    h1.innerHTML = "Make up Shops";
    title_div.appendChild(h1);

    let div_detail = document.createElement('div');
    div_detail.classList='justify-content-center text-center grid ';
    div_detail.setAttribute('class','card-box mb-3');
    div_detail.setAttribute('id','card');
    main_div.appendChild(div_detail);
    search();
}

var card = document.getElementById("card");

async function search()
{
    try
    {
        let res = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
        let data = await res.json();
 
        full_data = data;
        items_display(full_data);
    }
    catch(error)
    {
        console.log(error);
    }
   
}


// let aa = document.querySelector('.rating')

// let stars = document.createElement('div'*5);
// document.querySelector(".star-container").addEventListener("click", starRating);


// function starRating(e) {
//   stars.forEach((star) => star.classList.remove("star__checked"));
//   const i = [...stars].indexOf(e.target);
 
//   if (i > -1) {
//     stars[i].classList.add("star__checked");
//     rating.textContent = `${stars.length - i}/5`;
//   } else {
//     rating.textContent = `${0}/5`;
//   }
// }


function items_display(data)
{
    if(data.length>0)
    {
        data.forEach((x)=>{

          
            card_out += `<div class="card m-3 text-center p-3 ">
                            <img class="card-img-top" src="${x.image_link}" alt="Product Image" height="250" width="250">
                            <div class="card-body">
                                <h5 id="product_name" class="card-title">Product: ${x.name}</h5>
                                <h5 id="brand">Brand: ${x.brand}</h5>
                                <h5 id="price">Price:  ${x.price} $</h5>
                                <h5 id="product_link"><a href='${x.product_link}' target="_blank">Click here for product Link</a></h5>
                                <h5 id="rating">Rating:  </h5>
                                <p id="description"><span style="font-weight: bold;"> Description:</span> ${x.description}</p>
                            </div>
                        </div>`            
        });
    }
    else
    {
        card_out = `<div class="card mt-5 error"><h5>No Shops found </h5></div>`
    }
    card.innerHTML = card_out;
}