
    let importe = 200;
    let errores = [];
    let tarjetaAlert= document.getElementById("alertTotal")
    let selectInputs = document.querySelectorAll("input")
    let total= 0;
    function cambiar(){

        (total==0)?  borrar(): tarjetaAlert.style.display ='none'

        
    }

    function calcular(){
       
        if(document.getElementById("cantidad").value=='' || document.getElementById("cantidad").value==0){
            document.getElementById("cantidad").value = 1
        } 
        if(document.getElementById("apellido").value.length==0){
            
            errores.push('apellido') 
        } 
        if(document.getElementById("nombre").value.length==0){
            
            errores.push('nombre') 
        } 
        if(document.getElementById("correo").value.length==0){
            
            errores.push('correo') 
        } 
        
        if(errores.length==''){
            cantidad = document.getElementById("cantidad").value
            select =  document.getElementById("categoria").value
            total=traerTotal(cantidad,select);
            tarjetaAlert.style.display ='block'
            document.getElementById("total").innerHTML = total
            
        }else{
            alert(`Faltan los datos de ${errores}`)
            document.getElementById(`${errores[0]}`).focus()
        }

        errores = []

  
    }
    
    function traerTotal(cantidad,categoria){

        switch (categoria) {
            case 'estudiante':
                return (importe * 0.8)*cantidad;
                break;
            case 'trainee':
                return (importe * 0.5)*cantidad;
                break;
            case 'junior':
               return (importe * 0.15)*cantidad;
                break;
    
        }
    }

    function borrar(){
        tarjetaAlert.style.display ='none'
        selectInputs.forEach((item)=>{
            item.value = ''
        })

        document.getElementById("nombre").focus()
        return;
        
    }