const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const box3 = document.getElementById('box-3');
const total = document.getElementById('total');
const radioButtonsNodes = document.querySelectorAll('.radioBtn');
const sizeColorsDivsNodes = document.querySelectorAll('.dropdown-container');
const boxesChildNode = document.querySelectorAll('.box');

console.log("total: ", total);
total.innerHTML = "__0000"


box1.addEventListener('click', () => {
    const radiobtn = radioButtonsNodes[0]; 
    const sizeBoxController = sizeColorsDivsNodes[0]; 
    updatefunction(boxesChildNode, radiobtn, sizeBoxController, box1);

});

box2.addEventListener('click', () => {
    const radiobtn = radioButtonsNodes[1]; 
    const sizeBoxController = sizeColorsDivsNodes[1]; 
    updatefunction(boxesChildNode, radiobtn, sizeBoxController, box2);
});

box3.addEventListener('click', () => {
    const radiobtn = radioButtonsNodes[2]; 
    const sizeBoxController = sizeColorsDivsNodes[2]; 
    updatefunction(boxesChildNode, radiobtn, sizeBoxController, box3);
});

const updatefunction = (nodes, radiobtn, sizeBoxController, box) => {

    
    for (let i = 0; i < nodes.length; i++) {
       
        radioButtonsNodes[i].classList.remove('active-outline');
    radioButtonsNodes[i].children[0].classList.remove('active-bg');
    nodes[i].classList.remove('active-box-style')
    nodes[i].children[1].style.display = 'none';
    }

     const totalValue = box.children[0].children[0].children[1].children[1].innerHTML;
    total.innerHTML = totalValue;
   
    radiobtn.classList.add('active-outline');
    radiobtn.children[0].classList.add('active-bg');
    box.classList.add('active-box-style');
    sizeBoxController.style.display = "block";

}
