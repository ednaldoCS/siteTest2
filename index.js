const iframe =document.getElementById('area-iframe')

let documents=document.querySelectorAll('.item-to-hidden')
let container= document.querySelector('.container')

function mint(){
	documents.forEach((e)=>{
		e.style.display='none'
	})

	container.style.overflow='hidden'
	iframe.style.display='block'


}

let util1=document.getElementById('utility1');
let util2=document.getElementById('utility2')
let btnNext=document.getElementById('next-utility')
let btnPrev=document.getElementById('prev-utility')

btnNext.addEventListener('click',()=>{
	util1.style.display='none'
	util2.style.display='block'
	btnNext.style.display='none'
	btnPrev.style.display='block'
})



btnPrev.addEventListener('click',()=>{
	util1.style.display='block'
	util2.style.display='none'
	btnNext.style.display='block'
	btnPrev.style.display='none'
})