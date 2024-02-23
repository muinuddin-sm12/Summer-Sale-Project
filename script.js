const allCard = document.getElementsByClassName('card')
let titleCount = 1;
let totalPrice = 0;
for(const card of allCard){
    card.addEventListener('click', function(e){
        const cardTitle = e.target.parentNode.childNodes[3].childNodes[3].innerText;
        const cardPrice = parseFloat(card.querySelector('span').innerText.split(' ')[1]);
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = `${titleCount}. ${cardTitle}`;
        titleContainer.appendChild(p)
        titleCount++;
        // set total price
        totalPrice = totalPrice + cardPrice;
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
    })
}
document.getElementById('apply-btn').addEventListener('click', function(){
    const couponElement = document.getElementById('input-field').value;
    if(totalPrice>=200){
        if(couponElement === 'SELL200'){
            const discountElement = document.getElementById('discountPrice');
            const discountAmount = totalPrice*0.2;
            discountElement.innerText = discountAmount.toFixed(2);

            const totalElement = document.getElementById('total');
            const total = totalPrice - discountAmount;
            totalElement.innerText = total.toFixed(2);

            document.getElementById('input-field').value = '';
        }else{
            alert('Invalid coupon code!')
            document.getElementById('input-field').value = '';
        }
    }else{
        alert('Please purchase 200 or above!')
        document.getElementById('input-field').value = '';
    }
})