'use strict';
const inp = document.querySelectorAll('.controls input');

function handleUpdate(){
    const sufix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+sufix);
}

inp.forEach(input => input.addEventListener('change',handleUpdate));
inp.forEach(input => input.addEventListener('mousemove', handleUpdate));
