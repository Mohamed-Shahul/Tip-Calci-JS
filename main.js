let bill=0;
let person=1;
let percentage=15;

// Calculating The Value

let calculatingTip=()=>{
    let totalTip=bill*(percentage/100)
    let tipPerson=(totalTip/person).toFixed(2)

    document.getElementById('personTip').innerHTML='$' +" "+ tipPerson
    document.getElementById('totalTip').innerHTML='$' +" "+ totalTip.toFixed(2);
}

let handleBill=(event)=>{
    bill=event.target.value;
    calculatingTip();
}

let handlePerson=(event)=>{
    person=event.target.value;
    calculatingTip();
}

let handleCustom=(event)=>{
    percentage=event.target.value;
    calculatingTip();
}

let resetAllTip=()=>{
     bill=0;
     person=1;
     percentage=15;

    //Reset the all values
    document.getElementById('billInput').value=bill
    document.getElementById('personInput').value=person
    document.getElementById('CustomInput').value=null;

     let selectedTipButtons=document.getElementsByClassName('selectedTipButton')[0]
     selectedTipButtons?.classList.remove('selectedTipButton')

    let resetClassTip=document.getElementsByClassName('tipButton')
    for(i=0;i<resetClassTip.length;i++){
        if(resetClassTip[i].innerHTML== '15%'){
            resetClassTip[i].className='selectedTipButton'
        }
    }
    calculatingTip();
}

// Remove selected tip percentage in selecting the custom Percentage

let removeSelectedPercentage=()=>{
    let selectedTipButn=document.getElementsByClassName('selectedTipButton')[0]
    selectedTipButn?.classList.remove('selectedTipButton')
}

// Handle Tip Buttons Selected Class

let handleTipButnClass=(event)=>{
    let clickedTipButton=event.target
    percentage=clickedTipButton.dataset.percent

    let selectedTipButn=document.getElementsByClassName('selectedTipButton')[0]
    selectedTipButn?.classList.remove('selectedTipButton')
    clickedTipButton.classList.add('selectedTipButton')

    //Reset the custom Percentage Tip
    document.getElementById('CustomInput').value=null;
    calculatingTip();
}

// Create a Tip Buttons

let tipArray=[5,10,15,25,50]

let createTipButtons=(tipArray)=>{
    let tipBox=document.getElementsByClassName('tipButnBox')[0];

    for(i=0;i<tipArray.length;i++){

        let tipButn=document.createElement('button')
        if(i==2){
            tipButn.setAttribute('class','selectedTipButton tipButton')
        }
        else{
            tipButn.setAttribute('class','tipButton')
        }
        tipButn.setAttribute('data-percent',tipArray[i])
        tipButn.innerHTML=tipArray[i]+'%'
        tipButn.addEventListener('click',handleTipButnClass)
        tipBox.append(tipButn)
    }
}
createTipButtons(tipArray);
calculatingTip();