function highlight() {
    //Write your code here
	let list = document.querySelectorAll('strong');
	list.forEach((element,index)=>{
		element.style.color = 'green';
	});
}


function return_normal() {
    //Write your code here
	let list = document.querySelectorAll('strong');
	list.forEach((element,index)=>{
		element.style.color = 'black';
	});
    
}
