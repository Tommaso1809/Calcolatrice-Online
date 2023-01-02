function stampaAschermo(num){
	document.calcolatrice.schermo.value = document.calcolatrice.schermo.value+num
}
function calcola(){
	var numeri = document.calcolatrice.schermo.value;
	if(numeri){
		document.calcolatrice.schermo.value = eval(numeri)
	}
}
function reset(){
	 document.calcolatrice.schermo.value = '';
}
function cancella(){
	var numeri = document.calcolatrice.schermo.value;
	document.calcolatrice.schermo.value = numeri.substring(0,numeri.length-1);
}