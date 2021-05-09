console.log('Client side Javascript file is loading');



const weatherForm=document.querySelector('form')
const search =document.querySelector('input')
const messageOne=document.querySelector('#message-1');
const messageTwo=document.querySelector('#message-2');

weatherForm.addEventListener('submit',(e)=>{
    //below method on event prevents default behaviour of refreshing the page
    e.preventDefault();
    messageOne.textContent="Loading...";
    messageTwo.textContent="";
    //get the location
    const address=search.value;
    fetch('http://localhost:3000/weather?address='+address).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                messageOne.textContent=data.error;
                messageTwo.textContent="";
            }
            else{
                messageOne.textContent=data.location;
                messageTwo.textContent=data.forecast;
               
            }
        })
    })
})