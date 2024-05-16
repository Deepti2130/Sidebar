const cl= console.log;


const togglebtn  = [...document.querySelectorAll(".togglebtn")];
const showsidebar  = document.getElementById("showsidebar");
const backdrop = document.getElementById("backdrop");

const onShowSidebar =()=>{
	showsidebar.classList.toggle("active")
	backdrop.classList.toggle("active")
}


togglebtn.forEach(btn => {
	btn.addEventListener("click", onShowSidebar)
	
})