x1=0;
x2=0;
punto=0;
sig=0;
x3=0;
x4=0;
soluciuon=0;
solucion2=0;
x=0;
op=0;
solucionfinal=0;
digitos=0;
function numero(x){
  if(x1==0 || sig==1){
  pantalla.innerHTML=x;
  x1=x;
    if(x=="."){
      pantalla.innerHTML="0.";
      x1=x;
      punto=1;
    }
    sig=0;
  }
  else{
      if(x=="." && punto==0){
        pantalla.innerHTML+=".";
        x1+=x;
        punto=1;
      }
      else if(x=="." && punto==1){
      }
      else{
      pantalla.innerHTML+=x;
      x1+=x;
      }
    }
    // punto=0;
  } 

function operacion(o){
  igual();
  sig=1;
  x2=x1;
  op=o;
  punto=0;

}

function igual(){
  if(op==0){
  pantalla.innerHTML=x1;
  }
  else{
  solucion = x2+op+x1;
  solucionfinal=eval(solucion);
  pantalla.innerHTML=solucionfinal;
  x1=solucionfinal;
  punto=0;
  op=0;
  }
}

function borrartodo(){
  x1=0;
  x2=0;
  punto=0;
  sig=0;
  x3=0;
  x4=0;
  op=0;
  solucion=0;
  solucionfinal=0;
  pantalla.innerHTML=0;
}

function borrarparcial(){
  x1=0;
  pantalla.innerHTML=0;
  punto=0;
}

function retroceso(){
  digitos=x1.length;
  mirarpunto=x1.substr(digitos-1,1)
  x1=x1.substr(0,digitos-1);
  
  if(x1==""){
    x1=0;
  }
  if(mirarpunto=="."){
    punto=0;
  }

  pantalla.innerHTML=x1;
}

function opuesto(){
  x1=x1*-1;
  pantalla.innerHTML=x1;
}
