function btnClick(){
    document.getElementById('title').innerHTML = 'Button clicked...'
}

function convertUsd(){
    let usd = document.getElementById('usd').value;
    let inr = (usd*258.42).toFixed(2)
    document.getElementById('inr').innerHTML = inr;
}
