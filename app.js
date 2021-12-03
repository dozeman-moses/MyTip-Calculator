let percentBtns = document.querySelectorAll('.percent-btn');
let tipAmount = document.querySelector('.tip-amount');
let tipTotal = document.querySelector('.tip-total');

tipAmount.textContent = '$' + 0;
tipTotal.textContent = '$' + 0;

percentBtns.forEach((pBtn) => {
    pBtn.addEventListener('click', (e) => {
        let billValue = document.getElementById('bill-input').value;
        let numValue = document.getElementById('num-people').value;
        const tipPercent = e.currentTarget.classList;
        let percentage;
        let total;


        //Tip Calculation
        if (tipPercent.contains('tip-5')) {
            percentage = 0.05 * billValue * numValue;
            total = 0.05 * billValue * numValue + Number(billValue);
        } else if (tipPercent.contains('tip-10')) {
            percentage = 0.10 * billValue * numValue;
            total = 0.10 * billValue * numValue + Number(billValue);
        } else if (tipPercent.contains('tip-15')) {
            percentage = 0.15 * billValue * numValue;
            total = 0.15 * billValue * numValue + Number(billValue);
        } else if (tipPercent.contains('tip-25')) {
            percentage = 0.25 * billValue * numValue;
            total = 0.25 * billValue * numValue + Number(billValue);
        } else {
            percentage = 0.5 * billValue * numValue;
            total = 0.5 * billValue * numValue + Number(billValue);
        }


        tipAmount.textContent = '$' + percentage;
        tipTotal.textContent = '$' + total;
    })
})

//Reset btn Event Listener
document.getElementById('btn-reset').addEventListener('click', () => {
    document.getElementById('bill-input').value = "";
    document.getElementById('num-people').value = "";
    tipAmount.textContent = '$' + 0;
    tipTotal.textContent = '$' + 0;
})




