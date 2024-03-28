


const author = document.getElementById("author");

const quote=document.getElementById("quote");

const newquote=document.getElementById("newquote");

 let realData="";

  const getNewData = async ()=>{

    const randomnum=Math.floor(Math.random()*10);
 // console.log(randomnum);


    console.log(realData[randomnum].text);
    console.log(realData[randomnum].author);


    quote.innerText=`${realData[randomnum].text}`;
    author.innerText=`${realData[randomnum].author}`;
   

  
}


const getQuote = async () =>{

    const api="https://type.fit/api/quotes";

    try {

        let data = await fetch(api);

       realData= await data.json();

        // console.log(realData[2].text);
        // console.log(realData[2].author);

      
        
        // function called
        getNewData();



    } catch (error) {
        
    }
};

newquote.addEventListener("click" , getNewData );


getQuote();


