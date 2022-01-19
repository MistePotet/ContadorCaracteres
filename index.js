/*
    Desarrolla una función en la que se pida al usuario que 
    ingrese una frase y la web responda con la cantidad de 
    caracteres que se han escrito y las veces que se repite 
    cada uno de los que forman la frase.
*/

function contarCaracteres(string) {
    
    string = string.toLowerCase()
    
    string = string.replace(" ", "");
    final = {} 
    
    for(let elemento in string){ 
      
        if(string[elemento] in final) { 
          
            final[string[elemento]] = final[string[elemento]] + 1
      
        } else { 
          
            final[string[elemento]] = 1
      }
  }
    
    tmp = ``
    
    Object.keys(final).forEach(function(letra){
      
        tmp += `La cantidad de ${letra} es: ${final[letra]} \n`
    
    })
    
    return tmp
  
}
  
let frase = prompt("Escribe una frase")
alert(contarCaracteres(frase) + 'Y el número de caracteres es de: ' + frase.length)