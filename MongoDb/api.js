/* function getAnimaldata(){
    //alert('Hello');
    fetch('https://fakerapi.it/api/v1/persons')
    .then(function(response ){
        response.json()
        .then(function(finalData)
    {
        console.log(finalData);
    })
    })
    
} */

async function getAnimaldata(){
    //alert('Hello');
    const res = await fetch('https://fakerapi.it/api/v1/persons')
    const finalData = await res.json();
    console.log(finalData);
    
}

