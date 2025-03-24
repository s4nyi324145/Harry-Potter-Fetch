window.addEventListener('DOMContentLoaded', getHarryPotter);

async function getHarryPotter(){
    const response = await fetch('https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json');
    
    //console.log(response)
    const data = await response.json();


    displayHarryPotter(data);
}

function displayHarryPotter(data){
    console.log(data)
}

