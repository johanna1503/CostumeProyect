

function leerClientes(){
    $.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',

        type:"GET",
        dataType:"JSON",

        success: function(usuarios){
            let cs=usuarios.items;
            $("#listaDeClientes").empty();
            for (i=0;i<cs.length;i++){
                $("#listaDeClientes").append("<h2>"+cs[i].name+"</h2>");
                $("#listaDeClientes").append("<button  onclick= 'borrarClientes("+cs[i].id+")'>Borrar</button>");
                $("#listaDeClientes").append("<button id=buttoncliente"+i+" onclick= 'detalleClientes("+cs[i].id+")'>Detalle</button>");
                /*$("#listaDeClientes").append("<h2>"+cs[i].id+" <b>"+cs[i].name+"</b> "+cs[i].email+" "+cs[i].age+"</h2>");*/
                
            }

        },
        
        error : function(status){
            alert ('Ha sucedido un problema');
        }
        
        
    }); 
}

function guardarClientes(){
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let emailCliente=$("#emailCliente").val();
    let edad=$("#edad").val();
    
    let data={
        id:idCliente, 
        name:nombre, 
        email:emailCliente, 
        age:edad
    };
    let dataEnviar= JSON.stringify(data);
    console.log(dataEnviar);

    $.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type:"POST",
        dataType:"JSON",
        data:dataEnviar,
        contentType:'application/json',
        success: function(clientes){
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edad").val("");
        },
        error : function(xhr, status){
         //   alert ('Ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }

        
    });

}

function editarClientes(){
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let emailCliente=$("#emailCliente").val();
    let edad=$("#edad").val();
    
    let data={
        id:idCliente, 
        name:nombre, 
        email:emailCliente, 
        age:edad
    };
    let dataEnviar= JSON.stringify(data);
    $.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type:"PUT",
        //dataType:"JSON",
        data:dataEnviar,
        contentType:'application/json',
        success: function(clientes){
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edad").val("");
        },
        error : function(xhr, status){
         //   alert ('Ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }
        
    });

}


function borrarClientes(idCliente){
    let data={
        id:idCliente, 
    };
    let dataEnviar= JSON.stringify(data);
    console.log(dataEnviar);
    $.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type:"DELETE",
       // dataType:"json",
        data:dataEnviar,
        contentType:'application/json',
        success: function(clientes){
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edad").val("");
        },
        error : function(status){
            alert ('Ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }
        
    });

}

function detalleClientes(idCliente){
    let data={
        id:idCliente, 
    };
    let dataEnviar= JSON.stringify(data);
    console.log(dataEnviar);
    $.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type:"GET",
       // dataType:"json",
        data:dataEnviar,
        contentType:'application/json',
        success: function(clientes){
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edad").val("");
        },
       complete: function(){

    
        }
        
    });

}











/*Función DISFRAZ*/


function leerDisfraz(){
    $.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/costume/costume',

        type:"GET",
        dataType:"JSON",

        success: function(disfraz){
            let ds=disfraz.items;
            $("#listaDeDisfraces").empty();
            for (i=0;i<ds.length;i++){
                $("#listaDeDisfraces").append("<h2>"+ds[i].id+" <b>"+ds[i].name+"</b> "+ds[i].brand+" "+ds[i].model+"</h2>");
                $("#listaDeDisfraces").append("<button  onclick= 'borrarDisfraz("+ds[i].id+")'>Borrar</button><br>");
            }

        },
        
        error : function(status){
            alert ('Ha sucedido un problema');
        }
        
        
    }); 
}

function guardarDisfraz(){
    let idDisfraz=$("#idDisfraz").val();
    let marca=$("#marcaDisfraz").val();
    let modelo=$("#modeloDisfraz").val();
    let categoriaId=$("#categoriaId").val();
    let nombreDisfraz=$("#nombreDisfraz").val();

    let data={
        id:idDisfraz, 
        brand:marca, 
        model:modelo,
        categoryId:categoriaId,
        name:nombreDisfraz 
    };

    let dataEnviar= JSON.stringify(data);
    console.log(dataEnviar);

    $.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/costume/costume',
        type:"POST",
        dataType:"JSON",
        data:dataEnviar,
        contentType:'application/json',
        success: function(disfraz){
            $("#idDisfraz").val("");
            $("#marcaDisfraz").val("");
            $("#modeloDisfraz").val("");
            $('#categoriaId').val("");
            $("#nombreDisfraz").val("");
        },
        error : function(xhr, status){
         //   alert ('Ha sucedido un problema');
        },
        complete: function(){
            leerDisfraz();
        }

        
    });

}

function editarDisfraz(){
    let idDisfraz=$("#idDisfraz").val();
    let marca=$("#marcaDisfraz").val();
    let modelo=$("#modeloDisfraz").val();
    let categoriaId=$("#categoriaId").val();
    let nombreDisfraz=$("#nombreDisfraz").val();
    
    let data={
        id:idDisfraz, 
        brand:marca, 
        model:modelo,
        categoryId:categoriaId,
        name:nombreDisfraz 
    };
    let dataEnviar= JSON.stringify(data);
    $.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/costume/costume',
        type:"PUT",
        //dataType:"JSON",
        data:dataEnviar,
        contentType:'application/json',
        success: function(clientes){
            $("#idDisfraz").val("");
            $("#marcaDisfraz").val("");
            $("#modeloDisfraz").val("");
            $('#categoriaId').val("");
            $("#nombreDisfraz").val("");
        },
        error : function(xhr, status){
         //   alert ('Ha sucedido un problema');
        },
        complete: function(){
            leerDisfraz();
        }
        
    });

}


function borrarDisfraz(idDisfraz){
    let data={
        id:idDisfraz, 
    };
    let dataEnviar= JSON.stringify(data);
    console.log(dataEnviar);
    $.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/costume/costume',
        type:"DELETE",
       // dataType:"json",
        data:dataEnviar,
        contentType:'application/json',
        success: function(clientes){
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edad").val("");
        },
        error : function(status){
            alert ('Ha sucedido un problema');
        },
        complete: function(){
            leerDisfraz();
        }
        
    });

}



/*Función Mensaje*/

function leerMensajes(){
    $.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',

        type:"GET",
        dataType:"JSON",

        success: function(mensajes){
            let ms=mensajes.items;
            $("#listaDeMensajes").empty();
            for (i=0;i<ms.length;i++){

                $("#listaDeMensajes").append("<h2>"+ms[i].id+" <b>"+ms[i].messagetext+"</h2>");
                $("#listaDeMensajes").append("<button  onclick= 'borrarClientes("+cs[i].id+")'>Borrar</button><br>");
            }

        },
        
        error : function(status){
            alert ('Ha sucedido un problema');
        }
        
        
    }); 
}

function guardarMensajes(){
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let emailCliente=$("#emailCliente").val();
    let edad=$("#edad").val();
    
    let data={
        id:idCliente, 
        name:nombre, 
        email:emailCliente, 
        age:edad
    };
    let dataEnviar= JSON.stringify(data);
    console.log(dataEnviar);

    $.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type:"POST",
        dataType:"JSON",
        data:dataEnviar,
        contentType:'application/json',
        success: function(clientes){
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edad").val("");
        },
        error : function(xhr, status){
         //   alert ('Ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }

        
    });

}

function editarClientes(){
    let idCliente=$("#idCliente").val();
    let nombre=$("#nombreCliente").val();
    let emailCliente=$("#emailCliente").val();
    let edad=$("#edad").val();
    
    let data={
        id:idCliente, 
        name:nombre, 
        email:emailCliente, 
        age:edad
    };
    let dataEnviar= JSON.stringify(data);
    $.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type:"PUT",
        //dataType:"JSON",
        data:dataEnviar,
        contentType:'application/json',
        success: function(clientes){
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edad").val("");
        },
        error : function(xhr, status){
         //   alert ('Ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }
        
    });

}


function borrarClientes(idCliente){
    let data={
        id:idCliente, 
    };
    let dataEnviar= JSON.stringify(data);
    console.log(dataEnviar);
    $.ajax({
        url: 'https://gf050f9f478c3c3-proyecdisfraz1.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
        type:"DELETE",
       // dataType:"json",
        data:dataEnviar,
        contentType:'application/json',
        success: function(clientes){
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#emailCliente").val("");
            $("#edad").val("");
        },
        error : function(status){
            alert ('Ha sucedido un problema');
        },
        complete: function(){
            leerClientes();
        }
        
    });

}
