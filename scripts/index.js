const getdata = async () =>{
    try{
        let query
         document.getElementById("query").addEventListener('keypress',function(e){
            if(e.key === 'Enter') {
            //   document.getElementById('query').value;
            query = document.getElementById('query').value;
            }
        });
        
        let url = `https://masai-mock-api.herokuapp.com/hotels/search?city={query}`;
        

        let reso = await fetch(url);
        let vat = await reso.json();
        console.log(vat); 
        append(vat.data)

    } catch(err){
     console.log(err);
    }

}
getdata();

function append(data){
    const div = document.getElementById("hotels_list")
    div.innerHTML = null;

    let card = document.createElement("div");
    card.setAttribute("id","hotel")
    

    let image = document.createElement("img");
    image.src = data.image;

    let title = document.createElement("h3");
    title.textContent = data.title;

    let price = document.createElement("h3");
    price.textContent = data.price;

    let rating = document.createElement("h3")
    rating.textContent = data.rating;

    let status = document.createElement("h4")
    status.textContent = data.status;

    let btn = document.createElement("button")
    btn.setAttribute("class","book");
    btn.addEventListener("click", function(){
        addtocheck();
    })
    card.append(image,title,price,rating,status,btn);

    div.append(card);

}

