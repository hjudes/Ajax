document.querySelector('#boton').addEventListener('click', llenardatos);

function llenardatos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://restcountries.eu/rest/v2/all', true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if (this.readyState==4 && this.status==200){
            let datos = JSON.parse(this.responseText);   
            let res = document.querySelector('tbody');

            for(let item of datos){ 
                res.innerHTML += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.capital}</td>
                    </tr>
                    `
            }
        }
    }
    
}
