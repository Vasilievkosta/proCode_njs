const init = async () => {	
	const res = await fetch('/data');
	if (res.ok) {
		let json = await res.json();		
		return json;
	}
	else {
		console.log("Ошибка HTTP: " + res.status);
	}
}
let arr = init();

let ul = document.querySelector('.list');

window.setTimeout(function() {
	arr.then(cars => {
	for (let car of cars) {
		let li = document.createElement('li');
		li.classList.add('item');
		let a = document.createElement('a');
		a.classList.add('link');
		a.setAttribute('href', `/car/${car.id}`);
		let h2 = document.createElement('h2');
		h2.classList.add('brand');
		let img = document.createElement('img');
		img.classList.add('image');		
		img.setAttribute('src', `images/${car.id}.png`);
		let p = document.createElement('p');
		
		h2.innerHTML = car.brand;
		p.innerHTML = car.content;
		a.appendChild(h2);
		a.appendChild(img);
		a.appendChild(p);
		
		li.appendChild(a);		
		
		ul.appendChild(li);
	}
});
document.querySelector('.spinner').classList.add('spinner__none');
}, 1500);

// setTimeout вставлен для показа задержки загрузки




