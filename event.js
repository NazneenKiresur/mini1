async function fetchEvents() {
  const data = await fetch("https://events-api.qwertyreboot.repl.co/event/all");
  const events = await data.json();
  console.log(events);

  displayEvents();

}


    function displayEvents(data){
      const main = document.getElementById("flexible");

      const el = document.createElement('div');
      const eventname=document.createElement('h2');
      const image = document.createElement('img');
      const text = document.createElement('p');
      
      eventname.innerHTML=`${data.title}`;
     
      image.src = `${data.image}`;
      text.innerHTML = `${data.startDate}`;
      el.appendChild(eventname);
      el.appendChild(image);
      el.appendChild(text);
      main.appendChild(el);
    }


function linking(){
  window.location.href="./register.html"
}


