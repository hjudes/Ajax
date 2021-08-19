document.querySelector('button').addEventListener('click', mostradatos);

function mostradatos(){
    const xhttp = new XMLHttpRequest(); 
    xhttp.open('GET', 'archivo.txt', true); 
    xhttp.send(); 

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){          
            document.querySelector('h5').innerHTML = this.responseText;
        }                        
    }
}