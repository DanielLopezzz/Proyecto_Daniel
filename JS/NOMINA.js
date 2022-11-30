let smlv=parseFloat(prompt("Ingrese salario mínimo legal vigente 2022"));
let subtte=parseFloat(prompt("Ingrese subsidio de transporte 2022"));
function liquidar (){
    let n1=document.getElementById("salario").value;
    let n2=document.getElementById("dias").value;
    sueldo=parseInt(n1)/30*parseInt(n2);
    document.getElementById("basico").value=sueldo.toFixed(0);

    if (n1>=2*smlv){
        subsidiot=0;
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }else{
        subsidiot=subtte/30* parseInt(n2);
        document.getElementById("subsidio").value=subsidiot.toFixed(0);
    }
    let nhrn=document.getElementById("hrn").value;
    let vhrn=n1/240*nhrn*1.35;
    document.getElementById("totrecn").value=vhrn.toFixed(0);
    
    document.getElementById("totaldev").value=(parseFloat(document.getElementById('basico').value)+parseFloat(document.getElementById('subsidio').value)+parseFloat(document.getElementById('bonif').value)+parseFloat(document.getElementById('totrecn').value)|| 0).toFixed(0);

    let totaldevo=document.getElementById("totaldev").value;
    // LIQUIDACIÓN Y DEDUCCIONES
    // EPS Y PENSIÓN
    let eps00=(totaldevo-subsidiot)*0.04;
    let pens00=(totaldevo-subsidiot)*0.04;
    document.getElementById("eps").value=eps00.toFixed(0);
    document.getElementById("pension").value=pens00.toFixed(0);
    
    //FONDO DE SOLIDARIDAD

    if (n1>=4*smlv){
        let fondo=totaldevo*0.01;
        document.getElementById("fondos").value=fondo.toFixed(0);
    }else{
        document.getElementById("fondos").value=fondo.toFixed(0);
    }
    //PRESTAMO
    let prestam=document.getElementById("pretam").value;
    //DEDUCCIONES
    document.getElementById("totaldedu").value=(parseFloat(document.getElementById('fondos').value)+parseFloat(document.getElementById('prestam').value)+parseFloat(document.getElementById('eps').value)+parseFloat(document.getElementById('pension').value)|| 0).toFixed(0);

    let totalddc=document.getElementById("totaldedu").value
    let vneto=totaldevo-totalddc;   
    
    //Total Neto pagado
    document.getElementById("neto").value=vneto.toFixed(0);
}
