//funcao poupar tempo de escrever document.queryselector
const c = (el) => document.querySelector(el);
const ca = (el) => document.querySelectorAll(el);
let modalQt = 1;


pizzaJson.map((item, index) => {
    //selecionando o modelo da pizza e preenchendo com elas na tela
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    modalQt = 1;

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        

        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        c('.pizzaInfo--size.selected').classList.remove('selected');
        ca('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if(sizeIndex == 2){
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        c('.pizzaInfo--qt').innerHTML = modalQt;



        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => c('.pizzaWindowArea').style.opacity = 1, 150);
    })

    c('.pizza-area').append(pizzaItem);
});