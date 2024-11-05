const perfil = "administrador"
function identificar(perfil) {
    if (perfil == "administrador") {
        console.log("Usted tiene todos los privilegios de uso del sistema");
        
        
    } else if (perfil == "asistente") {
        console.log("Usted solo tiene permisos de registar, consultar y modificar datos");
        
    } else if (perfil == "invitado") {
        console.log("Usted solo tiene permisos para consultar datos");
        
        
    } else if (perfil == "") {
        console.log("deve especificar el perfil del usuario");
        
        
    } else if (perfil != "") {
        console.log("deve especificar un perfil valido");
        
        
    }

}
console.log(identificar(perfil));
