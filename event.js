function fetchdata(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'eventbrite-com.p.rapidapi.com',
            'X-RapidAPI-Key': '5767edf29emsh7af85cad24fd077p154852jsn2e7d5a71b4f6'
        }
    };
    
    fetch('https://eventbrite-com.p.rapidapi.com/event/117496833191', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}