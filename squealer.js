var devs =["Pablo Pineda", "Walther Graciano", "Julian Noziglia", "Emmanuel Zarzosa", "Ezequiel Zink", "Fernando Gutierrez", "Ivan Müller", "Miguel Ramos", "Lucas Fiorini", "Rodrigo Salvay"];

function squealer(){
	if (devs.length==0) {
		devs.push("Pablo Pineda", "Walther Graciano", "Julian Noziglia", "Emmanuel Zarzosa", "Ezequiel Zink", "Fernando Gutierrez", "Ivan Müller", "Miguel Ramos", "Lucas Fiorini", "Rodrigo Salvay");
	}
	var num = Math.floor(Math.random()*devs.length)
	var name = devs[num];
	devs.splice(num, 1);
	console.log(name); 
}