'use-strict';

document.addEventListener('DOMContentLoaded', ()=>{
    
    console.log('hello world');

    const customer = document.getElementById('customer'),
        freelancer = document.getElementById('freelancer'),
        blockCustomer=document.getElementById('block-customer'),
        blockFreelancer=document.getElementById('block-freelancer'),
        blockChoice=document.getElementById('block-choice'),
        btnExit=document.getElementById('btn-exit'),
        formCustomer=document.getElementById('form-customer');

    const orders=[];

    customer.addEventListener('click',()=>{
        blockCustomer.style.display='block';
        blockChoice.style.display='none';
        btnExit.style.display='block';
    });

    freelancer.addEventListener('click',()=>{
        blockFreelancer.style.display='block';
        blockChoice.style.display='none';
        btnExit.style.display='block';
    });

    btnExit.addEventListener('click', ()=>{
        blockCustomer.style.display='none';
        blockFreelancer.style.display='none';
        blockChoice.style.display='block';
        btnExit.style.display='none';
    })

    formCustomer.addEventListener('submit',(event)=>{
        event.preventDefault();

        const obj={};
        var formData=[];
        for(const el of formCustomer.elements){
            formData.push(el);
        }
        
        const objSend=formData.filter(elem=>
            (elem.tagName==='INPUT'&& elem.type!=='radio')
                || (elem.type==='radio' && elem.checked ) 
                || (elem.tagName==='TEXTAREA')
        )

        objSend.forEach(element => {
            obj[element.name]=element.value;
        });


    
        const as=document.getElementById("form-customer");
        document.getElementById('form-customer').reset();


        orders.push(obj);
        console.log(orders);
    })
});


//reset form for saving
//iterate with filter