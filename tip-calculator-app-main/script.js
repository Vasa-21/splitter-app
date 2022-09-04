(function(){

    "use strict"
    //vairables
    const bill = document.getElementById("bill");
    const People= document.getElementById("people");

    let billAmt
    let noPeople

    bill.oninput=getbill;
    People.oninput=getpeople;

    function getbill()
    { 
        resetEnable();
        billAmt= parseFloat(bill.value);
    }

    function getpeople()
    {
        resetEnable();
        noPeople=parseFloat(People.value);
    }

    let totAmt
    let tipAmt

    const tip=document.getElementById("tip")
    const tot=document.getElementById("tot")
    const custom=document.getElementById("custom")
    const reset =document.querySelector("#reset")
    const error=document.querySelector('.people-error')
    const people=document.querySelector('#people')

    document.getElementById("5per").onclick=function(){checkzero(5)}
    document.getElementById("10per").onclick=function(){checkzero(10)}
    document.getElementById("15per").onclick=function(){checkzero(15)}
    document.getElementById("25per").onclick=function(){checkzero(25)}
    document.getElementById("50per").onclick=function(){checkzero(50)}
    
    custom.oninput=function(){checkzero(custom.value)}
    custom.onclick=function(){checkzero(custom.value)}

    reset.onclick=reset_do;

    function checkzero(x)
    {
        resetEnable();

        if(billAmt==undefined||billAmt==0||isNaN(billAmt)){billAmt=0;}

        if(noPeople==undefined||noPeople==0||isNaN(noPeople))
        {
            error.innerHTML="Can't be zero";

            tip.innerHTML="$0.00";
            tot.innerHTML="$0.00";

            people.className="input-left";

        }
        else
        {
            error.innerHTML="";

            tipAmt=(((billAmt*x)/100)/noPeople);
            totAmt=(billAmt/noPeople)+tipAmt;
            
            tip.innerHTML=`$${tipAmt.toFixed(2)}`;
            tot.innerHTML=`$${totAmt.toFixed(2)}`;

            people.className="";

        }
    }

    function resetEnable()
    {
        reset.className="reset-enable";
        reset.disabled=false;
    }

    function reset_do()
    {
        tip.innerHTML="$0.00";
        tot.innerHTML="$0.00";
        bill.value="";
        People.value="";
        reset.className="reset";
        reset.disabled=true;
        custom.value="";
        billAmt=0;
        noPeople=0;
        document.querySelector('.people-error').innerHTML="";
        document.querySelector('#people').className="";
    }
})()