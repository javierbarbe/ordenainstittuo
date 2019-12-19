var caracteres= 'ª!"·$%&/()=?¿;:_[]{─\|@#~½¬{[}Ç.'
var letras= 'abcdefghijklmnñopqrstuvwxyz';
var numeros= '0123456789';
var letras_may='ABCDEFGHIJKLMNÑOPQRSTUVWZYZ'
function comp_contras(){
var contra  = document.getElementById('contrasenia').value; 
var contraComp = 1;
 if(contra.length>=8){
    // alert('El nombre tiene 8 caracteres de longitud');
     comp_caracteres ();
 } else {
     alert('la contraseña no es > =8');
     contraComp=0;
 }
 return nombreComp;
}

 function comp_caracteres (){
     var contrasenia2 = document.getElementById('contrasenia').value;
     var carpos;  
     var contraComp = 1;  //empiezo ok
     alert(contrasenia2+' comprobando caracteres');
     var i;
     for (i = 0; i < contrasenia2.length; i++) {
        carpos = usuario.charAt(i);
      alert(carpos);
        if(letras.indexOf(carpos,0) == -1 || letras_may.indexOf(carpos,0) == -1 || numeros.indexOf(carpos,0)==-1 || caracteres.indexOf(carpos,0)==-1)
        {  
                //no es un número
                alert('necesario mayuscula, numero letra y signo');
                contraComp = 0;
                document.getElementById('contrasenia').value="";
                document.getElementById('contrasenia').focus();
            
          
    }
    return usuarioComp;
}
 }