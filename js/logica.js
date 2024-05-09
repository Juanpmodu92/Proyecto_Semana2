function arrobj() {


    let alumnos_matriculados = [
                               {"rut" : "1-9","nombre" : "Pedro","apellido" : "Pérez","cod_curso" : "AE600","descripcion" : "Algoritmos y Estructura de datos"},
                               {"rut" : "2-7","nombre" : "Juan","apellido" : "Jara","cod_curso" : "BD253","descripcion" : "Bases de Datos" },
                               {"rut" : "1-9","nombre" : "Juan","apellido" : "Jara","cod_curso" : "AE600","descripcion" : "Algoritmos y Estructura de datos"},
                               {"rut" : "3-5","nombre" : "Diego","apellido" : "Díaz","cod_curso" : "BD253","descripcion" : "Bases de Datos" },
                               {"rut" : "4-4","nombre" : "Maria","apellido" : "Martinez","cod_curso" : "BD253","descripcion" : "Bases de Datos" }
                               ]
                     
    console.log(alumnos_matriculados)
    console.log(alumnos_matriculados[0].rut)
    console.log(alumnos_matriculados[1].rut)
    console.log(alumnos_matriculados[2].rut)
    console.log(alumnos_matriculados[3].rut)
    console.log(alumnos_matriculados[4].rut)

    let alumnos_matriculados2 = [
                                {
                                  "rut" : ["1-9","2-7","3-5","4-4"],
                                  "nombre" : ["Pedro","Juan","Juan","Diego","Maria"],
                                  "apellido" : ["Pérez","Jara","Jara","Díaz","Martinez"],
                                  "cod_curso" : ["AE600","BD253","AE600","BD253","BD253"],
                                  "descripcion" : ["Algoritmos y Estructura de datos","Bases de Datos","Algoritmos y Estructura de datos","Bases de Datos","Bases de Datos"]
                                }
                                ]

    console.log(alumnos_matriculados2)
    console.log(alumnos_matriculados2[0].nombre[0])
    console.log(alumnos_matriculados2[0].nombre[1])  
    console.log(alumnos_matriculados2[0].nombre[2]) 
    console.log(alumnos_matriculados2[0].nombre[3]) 
    console.log(alumnos_matriculados2[0].nombre[4])                          
    console.log(alumnos_matriculados2)
    console.log(alumnos_matriculados2[0].apellido[0])
    console.log(alumnos_matriculados2[0].apellido[1])
    console.log(alumnos_matriculados2[0].apellido[2])
    console.log(alumnos_matriculados2[0].apellido[3])
    console.log(alumnos_matriculados2[0].apellido[4])
    console.log(alumnos_matriculados2)
    console.log(alumnos_matriculados2[0].cod_curso[0])
    console.log(alumnos_matriculados2[0].cod_curso[1])  
    console.log(alumnos_matriculados2[0].cod_curso[2])
    console.log(alumnos_matriculados2[0].cod_curso[3])
    console.log(alumnos_matriculados2[0].cod_curso[4])      
    console.log(alumnos_matriculados2)
    console.log(alumnos_matriculados2[0].descripcion[0])
    console.log(alumnos_matriculados2[0].descripcion[1]) 
    console.log(alumnos_matriculados2[0].descripcion[2])
    console.log(alumnos_matriculados2[0].descripcion[3])
    console.log(alumnos_matriculados2[0].descripcion[4])                                   
                               

    let alumno = [
                 {"rut" : "1-9","nombre" : "Pedro","apellido" : "Pérez"},
                 {"rut" : "2-7","nombre" : "Juan","apellido" : "Jara"},
                 {"rut" : "3-5","nombre" : "Diego","apellido" : "Díaz"},
                 {"rut" : "4-4","nombre" : "Maria","apellido" : "Martinez"}
                 ]

    console.log(alumno)
    console.log(alumno[0].rut)
    console.log(alumno[1].rut)
    console.log(alumno[2].rut)
    console.log(alumno[3].rut)

    let alumno2 = [
                  {
                    "rut" : ["1-9","2-7","3-5","4-4"],
                    "nombre" : ["Pedro","Juan","Diego","Maria"],
                    "apellido" : ["Pérez","Jara","Díaz","Martinez"]
                  }
                  ] 
     
    console.log(alumno2)
    console.log(alumno2[0].nombre[0])
    console.log(alumno2[0].nombre[1]) 
    console.log(alumno2[0].nombre[2])
    console.log(alumno2[0].nombre[3])
    console.log(alumno2)
    console.log(alumno2[0].apellido[0])
    console.log(alumno2[0].apellido[1])    
    console.log(alumno2[0].apellido[2])
    console.log(alumno2[0].apellido[3])          

    let matricula = [
                      {"rut" : "1-9","cod_curse" : "AE600"},
                      {"rut" : "2-7","cod_curse" : "BD253"},
                      {"rut" : "2-7","cod_curse" : "AE600"},
                      {"rut" : "3-5","cod_curse" : "BD253"},
                      {"rut" : "4-4","cod_curse" : "BD253"}    
                    ]

    console.log(matricula)   
    console.log(matricula[0].rut) 
    console.log(matricula[1].rut)
    console.log(matricula[2].rut)
    console.log(matricula[3].rut)
    console.log(matricula[4].rut)

    let matricula2 =[
                       {
                        "rut" : ["1-9","2-7"],
                        "cod_curse" :["AE600","BD253","AE600","BD253","BD253"]
                    }    
                    ]

    console.log(matricula2)   
    console.log(matricula2[0].cod_curse[0]) 
    console.log(matricula2[0].cod_curse[1]) 
    console.log(matricula2[0].cod_curse[2])     
    console.log(matricula2[0].cod_curse[3])
    console.log(matricula2[0].cod_curse[4])      

    let cursos = [
                    {"cod_curso" : "AE600","descripcion" : "Algoritmos y Estructura de datos"},
                    {"cod_curso" : "BD253","descripcion" : "Bases de Datos"}
                ]
    
    console.log(cursos)   
    console.log(cursos[0].cod_curso) 
    console.log(cursos[1].cod_curso)    
          
    let cursos2 = [
                     {
                      "cod_curso" : ["AE600","BD253"], 
                      "descripcion" :["Algoritmos y Estructura de datos", "Bases de Datos"]
                     }
                   ]

    console.log(cursos2)   
    console.log(cursos2[0].descripcion[0]) 
    console.log(cursos2[0].descripcion[1])          


}
