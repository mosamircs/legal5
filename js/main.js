/*
////// i messed with this file :( /////////////
*/
//////////////////////main variables//////////////////////////////////
const form = document.getElementById('form');

const next = document.getElementById('next-1');
const prev = document.getElementById('prev-1');

const divButChose = document.getElementById('but-chose');
const proBar = document.getElementById('pro-bar');

const layer = document.getElementsByClassName('layer');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

const partCompDel = document.getElementById('partCompDel');
const allCompOption = document.getElementById('allCompOption');
const partName = document.getElementById('partName');
const mangPart = document.getElementsByClassName('mangPart');
const mangBlock = document.getElementsByClassName('mangBlock');
const h6part = document.getElementsByClassName('h6part');
const partComp = document.getElementsByTagName('label');
const mangers = document.getElementsByClassName('mang');
// const selectMang = document.getElementsByClassName('selectMang');

///////// show layers 
let currLayer = 0;
showLayer(currLayer);

function showLayer(curr){
    layer[curr].style.display = 'block';
    // console.log(layer.length - 1)
    if(curr == 0){
        divButChose.style.display = 'none';
        proBar.style.display = 'none';
    } else{
        divButChose.style.display = 'block';
        proBar.style.display = 'block';
    }
    
    if(curr == 2 && checkbox2.checked){
        document.getElementById('valueCor').innerHTML = 'قيمه السهم';
        // console.log('jjf')
    }else{
        document.getElementById('valueCor').innerHTML = 'قيمه الحصه';
    }

    if(curr == 2 && checkbox3.checked){
        document.getElementById('soloComp').style.display = 'block';
        // console.log('jjf')
    }else{
        document.getElementById('soloComp').style.display = 'none';
        
    }

    if(curr == 3 && checkbox2.checked){
        allCompOption.innerHTML = 'اختر عدد المساهمين'         
        disOpt1();
            document.querySelectorAll("#specificSizeSelect option").forEach(opt => {
                if (opt.value == "2") {
                     opt.disabled = true;
                }
            });
                
    } else{
        allCompOption.innerHTML = 'اختر عدد المديرين'
        EnableOpt1();
        document.querySelectorAll("#specificSizeSelect option").forEach(opt => {
            if (opt.value == "2") {
                opt.disabled = false;
            }
        });
       
    }
    if((curr == 3 && checkbox5.checked) || (curr == 3 && checkbox6.checked) || (curr == 3 && checkbox1.checked)){
        disOpt1();
    }else{
        EnableOpt1();
    }

    if((curr == 3 && checkbox3.checked) || (curr == 3 && checkbox4.checked) ){
        oneComp();
        document.getElementById('soloComp').style.display = 'block';
    }else{
        document.getElementById('specificSizeSelect').style.display = 'block';
        [...$('.oneComp')].forEach(e =>{
        e.style.display='none';
       });
       document.getElementById('soloComp').style.display = 'none';
    }

    if(curr == 4 && checkbox2.checked){
        partName.innerHTML = 'ادخل اسماء المساهمين';
            
    }else{
        partName.innerHTML = 'ادخل اسماء المديرين';
           
    }
    if (curr == (layer.length - 1)) {
        document.getElementById("next-1").innerHTML = "حفظ";
      } else {
        document.getElementById("next-1").innerHTML = "التالى";
      }
    // if (curr == (layer.length - 1)){
    // layer[curr].style.display = 'flex';

    //     divButChose.style.display = 'none';
    //     proBar.style.display = 'none';
    // }  
    //update progress bar 
    update();
}
// console.log('hi djks')
//////// change layers
function changeLayer(curr){
    // console.log(curr);
    //hold for validation
    if (curr == 1 && !validateForm()) return false;
    layer[currLayer].style.display = "none";
    currLayer = currLayer + curr;
    // console.log(currLayer);
        if (currLayer >= layer.length) {
            form.submit();
            return false;
        }
    showLayer(currLayer);
    if(currLayer == 4){
        getFormData();
    }
    // console.log('fhjf');
}


/////////// form validation

const userName = document.getElementById('username');
const userEmail = document.getElementById('email');
const userPhone = document.getElementById('phone');
const errorUserName = document.getElementById('error-userName');
const errorUserEmail = document.getElementById('error-email');  
const errorUserPhone = document.getElementById('error-phone');  
let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let phonePattern = /1?-?\.?\(?\d{3}[\-\)\.\s]?\d{3}[\-\.\s]?\d{4}/;
let inputVal = document.getElementsByTagName('input');
let inputTxt = document.getElementsByClassName('lay2');
let inputTxt2 = document.getElementsByClassName('lay3');


function validateForm() {
    let valid = true;
    if(currLayer == 0)
    {
        //user name
       if(userName.value == ''){
       //user name
           errorUserName.innerHTML="يجب ادخال اسم المستخدم ";
           errorUserName.style.display="block";
           errorUserName.style.fontSize="14px";
           errorUserName.style.color="red";
           userName.style.border = "1px solid red";
       } else{
           // if(isNaN(userName.value)) {
                   errorUserName.innerHTML="";
                   userName.style.border = "1px solid green";
                   valid = true;
           }
   
       //user email
       if(userEmail.value == ''){
           errorUserEmail.innerHTML="يجب ادخال البريد الالكترونى";
           errorUserEmail.style.display="block";
           errorUserEmail.style.fontSize="14px";
           errorUserEmail.style.color="red";
           userEmail.style.border = "1px solid red";
       } else{
           if(emailPattern.test(userEmail.value)){
               
               //user email
                   errorUserEmail.innerHTML="";
                   userEmail.style.border = "1px solid green";
               valid = true;
           }else{
               
               //user email
                   errorUserEmail.innerHTML="البريد الالكترونى غير صالح";
                   errorUserEmail.style.display="block";
                   errorUserEmail.style.fontSize="14px";
                   errorUserEmail.style.color="red";
                   userEmail.style.border = "1px solid red";
                   valid = false;               
               }
             }
       
       //user phone
       if(userPhone.value == ''){
           errorUserPhone.innerHTML="يجب ادخال رقم الهاتف";
           errorUserPhone.style.display="block";
           errorUserPhone.style.fontSize="14px";
           errorUserPhone.style.color="red";
           userPhone.style.border = "1px solid red";
       // console.log('hjekh')
       valid = false;
       } else{
           if(phonePattern.test(userPhone.value)){
               //user phone
                   errorUserPhone.innerHTML="";
                   userPhone.style.border = "1px solid green";
               valid = true;
           }else{
                   //user phone
                   errorUserPhone.innerHTML="رقم الهاتف يجب الا يقل عن 11 رقم ولا يحتوى على رموز";
                   errorUserPhone.style.display="block";
                   errorUserPhone.style.fontSize="14px";
                   errorUserPhone.style.color="red";
                   userPhone.style.border = "1px solid red";
                   valid = false;
               }
             }
       
   }
if(currLayer == 1){
    // console.log('dfghjk')
    for(let i=0; i<inputVal.length; i++){
        if(inputVal[i]['type'] == ['radio']){
            if(inputVal[i]['checked'] != true){
                if($('.form-check-input:checked').length == 0)
                {
                    inputVal[i].style.border = '1px solid red';
                // console.log(radioBtn[i])
                    valid = false;
                }
            } else {
                inputVal[i].style.border = '1px solid #000086';
                valid = true;
            }
        }
    }
}
if(currLayer == 2){
    let passLay2 = [];
     for(let i=0; i<inputTxt.length; i++){
        //  console.log(inputTxt[i].value)
        if(inputTxt[i].value == ''){
            inputTxt[i].style.border = '1px solid red';
            // valid = false;
            passLay2.push(false);
        } else {
            inputTxt[i].style.border = '1px solid #000086';
            // valid = true;
            passLay2.push(true);
                // console.log('dfdg')
        }
    }
    passLay2.forEach((value)=>{
        if(value == false){
            valid = false;
        }
        // } else{
        //     valid = true;
        // }
    })
    // console.log(pass);
 }
 if(currLayer == 3){
   let passLay3 = [];
    for(let i=0; i < inputTxt2.length; i++){
       // console.log(inputTxt[i])
         if(inputTxt2[i].value == ''){
             inputTxt2[i].style.border = '1px solid red';
                // console.log(radioBtn[i])
            //    valid = false;
            passLay3.push(false);
           } else {
               inputTxt2[i].style.border = '1px solid #000086';
            //    valid = true;
            passLay3.push(true);
               // console.log('dfdg')
      }
   }
   passLay3.forEach((value)=>{
    if(value == false){
        valid = false;
    }
    else{
        valid = true;
    }
})
}

if(currLayer == 4){
    // let passlay42 = [];
    const inputAdd = document.getElementById('autocompleteinput');
    
if(inputAdd.value == ''){
   //    console.log($('#inputtextAdd'))
   inputAdd.style.border = '1px solid red';
   valid = false;
    
} else{
    if(!validateCard()){
        valid = false;
        console.log('invalid')
    } else{

        inputAdd.style.border = '1px solid #000086';
        valid = true;
    }
   }

   
}
    if (valid) {
    //document.getElementsByClassName("step")[currentTab].className += " finish";
     //user name
     errorUserName.innerHTML="";
     userName.style.border = "1px solid green";
 //user email
     errorUserEmail.innerHTML="";
     userEmail.style.border = "1px solid green";
 //user phone
     errorUserPhone.innerHTML="";
     userPhone.style.border = "1px solid green";
    }
    // console.log(valid)
    return valid; // return the valid status

}
//////////////////////validate card
function validateCard(){
    let passLay4 = [];
    var validate = true;
    let cardInputs = document.querySelectorAll('input[data-id]');
    let divDataId = document.querySelectorAll('[id^=card_]');
    // console.log(divDataId)
    // let checkboxInput = divDataId.querySelectorAll('input[type="checkbox"]');
    // console.log(divDataId)
    // console.log(inputAdd);
    let disNone = $('.id.d-flex');
   [...cardInputs].forEach(e=>{
    //   console.log(e);
    if(e.value == ''){
        // console.log(e);
        e.style.border = '1px solid red';
    // valid = false;
    [...disNone].forEach(e=>{
        e.style.border = '1px solid red';
        // console.log(e)
    });
    passLay4.push(false);
    } else{
        e.style.border = '1px solid #000086';
        // valid = true;
        [...disNone].forEach(e=>{
            e.style.border = '1px solid #000086';
            // console.log(e)
        });
        passLay4.push(true);
    }
    
   }); 
   [...divDataId].forEach(e=>{
       let checkboxInput = e.querySelectorAll('input[type="checkbox"]');
    //    console.log(checkboxInput);
       if(checkboxInput.length == 3){
        [...checkboxInput].forEach(e=>{
            if($('.form-check-input:checked').length == 0){
                e.style.border = '1px solid red';
                     passLay4.push(false);
            } else{
             e.style.border = '1px solid #000086';
             passLay4.push(true);
            }
        })
    }
   })
        passLay4.forEach((value)=>{
            if(value == false){
               validate = false;
        }
    });
    // console.log(passLay4)
    return validate;
}
////////////////////////////////////////
// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      });
    });
  }
  setInputFilter(document.getElementById("inputtext3"), function(value) {
    return /^-?\d*[.,%]?\d*$/.test(value); });
  setInputFilter(document.getElementById("inputtext4"), function(value) {
    return /^-?\d*[.,%]?\d*$/.test(value); });
//   setInputFilter(document.getElementById("inputtext6"), function(value) {
//     return /^-?\d*[.,%]?\d*$/.test(value); });

/////////change progress bar
  
  function update(){
    circles.forEach((circles , cirIndx)=>{
        if(cirIndx < currLayer){
            circles.classList.add('active');
        } else{
            circles.classList.remove('active')
        }
    });
    const actives = document.querySelectorAll('.active');

    progress.style.width =( (actives.length - 1) / (circles.length - 1) ) * 100 + '%';
}

//////////////////////render country & flags plugin//////////////
     const input = document.querySelector("#phone");
        window.intlTelInput(input,({
      // options here
      
    // initialCountry:"egypt"
    // initialCountry: "Eg",
    }));
    $(document).ready(function() {
        $('.iti__flag-container').click(function() { 
          var countryCode = $('.iti__selected-flag').attr('title');
          var countryCode = countryCode.replace(/[^0-9]/g,'')
          $('#phone').val("");
          $('#phone').val("+"+countryCode+" "+ $('#phone').val());
       });
    });


/////////////////////////comp-types---section-1/////////////////////////////////
////////chose between comp-types
let areaMoney = document.getElementById('choice-Money')
let areaPeolple = document.getElementById('choice-people');
let btnMoney = document.getElementById('btn-money');
let btnPeople = document.getElementById('btn-people');

btnMoney.addEventListener('click',()=>{
    // console.log('cjfh')
    if(areaMoney.style.display === 'none'){
        areaMoney.style.display = 'block';
        areaPeolple.style.display = 'none';
        btnMoney.classList.replace('notseleted','selected');
        btnPeople.classList.replace('selected','notseleted');
        btnPeople.classList.add('text-align');
        // console.log('hhhg');
    }
});
btnPeople.addEventListener('click',()=>{
    if(areaPeolple.style.display === 'none'){
        areaPeolple.style.display = 'block';
        areaMoney.style.display = 'none';
        btnPeople.classList.replace('notseleted','selected');
        btnMoney.classList.replace('selected','notseleted');
        btnMoney.classList.add('set-position');
    }
});
////////hide and show download info btn
let checkbox1 = document.getElementById('exampleRadios1');
let downBtn1 = document.getElementById('down-1');
let checkbox2 = document.getElementById('exampleRadios2');
let downBtn2 = document.getElementById('down-2');
let checkbox3 = document.getElementById('exampleRadios3');
let downBtn3 = document.getElementById('down-3');
let checkbox4 = document.getElementById('exampleRadios4');
let downBtn4 = document.getElementById('down-4');
let checkbox5 = document.getElementById('exampleRadios5');
let downBtn5 = document.getElementById('down-5');
let checkbox6 = document.getElementById('exampleRadios6');
let downBtn6 = document.getElementById('down-6');


// let changeOptin = false;
function checkboxSelection(){
    // e.preventDefault();
    //check 1
    if (checkbox1.checked){
        downBtn1.style.display = 'inline-block';
        downBtn2.style.display = 'none';
        downBtn3.style.display = 'none';
        // disOpt1();
    }
    //check 2
    else if (checkbox2.checked){
        // return true;
        downBtn1.style.display = 'none';
        downBtn2.style.display = 'inline-block';
        downBtn3.style.display = 'none';
    }
    //check 3
    else if (checkbox3.checked){
        downBtn1.style.display = 'none';
        downBtn2.style.display = 'none';
        downBtn3.style.display = 'inline-block';
        // oneComp();
        // document.getElementById('soloComp').style.display = 'block';
    }
    //check 4
    else if (checkbox4.checked){
        downBtn5.style.display = 'none';
        downBtn6.style.display = 'none';
        downBtn4.style.display = 'inline-block';
        // oneComp();
    }
    //check 5
    else if (checkbox5.checked){
        downBtn4.style.display = 'none';
        downBtn6.style.display = 'none';
        downBtn5.style.display = 'inline-block';
        // disOpt1();
    }
    //check 6
    else if (checkbox6.checked){
        downBtn4.style.display = 'none';
        downBtn5.style.display = 'none';
        downBtn6.style.display = 'inline-block';
        // disOpt1();
    }

}
function oneComp(){
    document.getElementById('specificSizeSelect').style.display = 'none';
    [...$('.oneComp')].forEach(e =>{
        e.style.display='block';
    })
}
function disOpt1(){
    document.querySelectorAll("#specificSizeSelect option").forEach(opt => {
        if (opt.value == "1") {
            opt.disabled = true;
            // console.log('fhfh')
        }
      });
}
function EnableOpt1(){
    document.querySelectorAll("#specificSizeSelect option").forEach(opt => {
        if (opt.value == "1") {
            opt.disabled = false;
        }
      });
}
///////////////////////////////comp-info---section-2/////////////////////////////////
const btnAdd = document.querySelector('#btn-add-sug');
        const parentForm = document.querySelector('#parent-el');
        // console.log(parentDiv)
        btnAdd.addEventListener('click',(e)=>{
            e.preventDefault();
            let i = parentForm.getElementsByTagName('div').length;
            // console.log(i)
                if(i < 6){
                    const newform = document.createElement('div');
                    newform.setAttribute('dir','rtl');
                    newform.classList.add('row', 'g-3', 'justify-content-evenly' ,'pt-3','sug1');
                        newform.innerHTML = `<div class="col-md-4">
                        <label for="inputtext1" class="form-label">اقتراح جديد</label>
                        <input type="text" class="form-control" id="inputtext1" name="company_name[]"  required>
                                </div>
                                <div class="col-md-4">
                                <label for="inputtext2" class="form-label">اقتراح جديد</label>
                                <input type="text" class="form-control" id="inputtext2" name="company_name[]"  required>
                                  </div>
                                <div class="col-md-4 align-self-end text-center" >
                                    <button class="btn btn-outline-danger" id="btn-delete-sug" type="button" onclick="deleted1()">حذف اقتراحات</button>
                                </div>`;
                    parentForm.appendChild(newform);            
                    } else if(i < 9){
                    const newform = document.createElement('div');
                    newform.setAttribute('dir','rtl');
                    
                    newform.classList.add('row', 'g-3', 'justify-content-evenly' ,'pt-3','sug2');
                   
                        newform.innerHTML = `<div class="col-md-4">
                        <label for="inputtext1" class="form-label">اقتراح جديد</label>
                        <input type="text" class="form-control" id="inputtext1" name="company_name[]"  required>
                                </div>
                                <div class="col-md-4">
                                <label for="inputtext2" class="form-label">اقتراح جديد</label>
                                <input type="text" class="form-control" id="inputtext2" name="company_name[]"  required>
                                  </div>
                                <div class="col-md-4 align-self-end text-center" >
                                    <button class="btn btn-outline-danger" id="btn-delete-sug"  type="button" onclick="deleted2()">حذف اقتراحات</button>
                                </div>`;

                    parentForm.appendChild(newform);   
                }  else if (i == 9){
                    btnAdd.disabled = true;
                } else {
                    btnAdd.disabled = false;
                }
            });
            function deleted1(){
                const parentDiv = document.querySelector('.sug1');
                let j = parentDiv.getElementsByTagName('div').length;
                if(j == 3){
                    parentDiv.removeChild(parentDiv.getElementsByTagName('div')[1]);
                } else{

                    parentDiv.remove();
                }
            }
            function deleted2(){
                const parentDiv = document.querySelector('.sug2');
                let j = parentDiv.getElementsByTagName('div').length;
                if(j == 3){
                    parentDiv.removeChild(parentDiv.getElementsByTagName('div')[1]);
                } else{

                    parentDiv.remove();
                }
            }
        
///////////////////////////part-info---section-3//////////////////////////////////////
const select = document.querySelector('#specificSizeSelect');
const parentCountEl = document.getElementById('part-form');
let labelNameValue, labelNationValue, labelrangeValue, btnDelete;

          for(let i=1; i<= 50; i++){
            const newOption = document.createElement('option');
            const optionText = document.createTextNode(i);
            // set option text
            newOption.appendChild(optionText);
            // and option value
            newOption.setAttribute('value',i);
            select.appendChild(newOption);
        }
        
        select.addEventListener('change',(e)=>{
            e.preventDefault();
            // console.log('here');
            parentCountEl.innerHTML = '';
            if(checkbox2.checked){
                labelNameValue = 'اسم المساهم';
                labelNationValue = 'جنسيه المساهم';
                labelrangeValue = 'نسبه المساهم';
                btnDelete = 'حذف المساهم'
               
            } else{
                labelNameValue = 'اسم المدير';
                labelNationValue = 'جنسيه المدير';
                labelrangeValue = 'نسبه المدير';
                btnDelete = 'حذف المدير'

            }
            for(let j=1; j <= select.value; j++){
                        const newEl = document.createElement('div');
                        newEl.classList.add('row','g-3','justify-content-between','pt-3','mangData');
                        newEl.setAttribute('dir','rtl');
                        newEl.innerHTML = `<div class="col-md-3">
                        <label for="inputtext1" class="form-label mangPart" id="mangName">${labelNameValue}</label>
                        <input type="text" class="form-control lay3 mangInfo" id="name" name="shareholder_name[]">
                      </div>
                      <div class="col-md-3">
                        <label for="inputtext1" class="form-label mangPart">${labelNationValue}</label>
                        <input type="text" class="form-control lay3 mangInfo" id="nation" name="shareholder_nationality[]">
                      </div>
                      <div class="col-md-3">
                        <label for="inputtext1" class="form-label mangPart">${labelrangeValue}</label>
                          <input type="text" class="form-control lay3 inputtext6" name="shareholder_percentage[]"  placeholder="%">
                      </div>
                          <div class="col-md-6 mb-3">
                              <label for="formFileMultiple" class="form-label">اضافه البطاقه الشخصية</label>
                              <input class="form-control lay3 mangInfo" name="personal_id[]" type="file" id="id" accept="image/png, image/gif, image/jpeg">
                            </div>
                          <div class="col-md-3 x-last align-self-center d-flex justify-content-end">
                          <button class="btn btn-outline-danger" type="reset" id="partCompDel" onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)">${btnDelete}</button>
                          </div>
                          <hr>`;
                            parentCountEl.appendChild(newEl);
                            // parentCountEl.appendChild(newEl);
                            [...inputType6].forEach(inputt6=>{
                                // console.log(inputt6)
                                setInputFilter(inputt6, function(value){
                                    return /^-?\d*[.,%]?\d*$/.test(value) ;
                                });
                            })   
                        }
                });

const inputType6 = document.getElementsByClassName("inputtext6");

///////////////get participants data from layer--3//////
const divs = document.getElementsByClassName('mangData');
let arrayEle = [];
let arrayNames = [];
function getFormData(){
    let i;
    
    for( i=0; i < divs.length; i++){
        const inputs = divs[i].getElementsByClassName('mangInfo');
        // for( j=0; j< inputs.length ; j++){
            const objectEle = {};
            const reader  = new FileReader();

            objectEle['name'] = inputs[0].value;
            objectEle['nationality'] = inputs[1].value;
            objectEle['idPath'] = inputs[2].files[0];
            objectEle['prev'] = '';

            if (objectEle['idPath']) {
              reader.readAsDataURL(objectEle['idPath']);
            }
            reader.onloadend = function () {
              arrayEle.forEach((e)=>{
                // e.idPath
                objectEle['prev'] = reader.result;
              })
            }
            // arrayEle.pop();
            // arrayNames = [];
            arrayEle.push(objectEle);
            arrayNames.push(objectEle.name);
        // }
    }
    // console.log(arrayEle);
    // console.log(arrayNames);
  }        
  function previewFile() {
    const preview = document.querySelector('.image');
    const file    = document.querySelector('input[type=file]').files[0];
    const reader  = new FileReader();
  
    reader.onloadend = function () {
      arrayEle.forEach((e)=>{
        // e.idPath
        preview.src = reader.result;
      })
    }
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }
        
////////////////////////mang-info---section-4/////////////////////////////

function locatModal(){
    // loaction.href ='';
    location.href = "#myModal";
}
const btnAddMang = document.getElementById('btn-add-mang');
const parentCard = document.getElementById('card-newAdd');
let x = 0 , i = 0 , z = 0 , y = 0;

let displayٍSelect , lname , lnation , h6Name;
btnAddMang.addEventListener('click',(e)=>{
    e.preventDefault();
    if(checkbox2.checked){
        displayٍSelect = 'block';
        lname = 'اسم المساهم'; 
        lnation ='جنسيه المساهم'; 
        h6Name ='صلاحيات المساهم';
    }
    else{
        displayٍSelect = 'none';
        lname = 'اسم المدير'; 
        lnation ='جنسيه المدير'; 
        h6Name ='صلاحيات المدير';
    }
if(parentCard.getElementsByTagName('div').length == 0 ){
    if(arrayNames.includes(autocompleteinput.value)){
        // console.log('in');
        arrayEle.forEach((e)=>{
            if(e.name == autocompleteinput.value)
            { 
                  const newCard = document.createElement('div');
                  newCard.classList.add('col-xl-4','col-md-6','pt-3');
                  newCard.innerHTML= `<div class="card">
                  <div class="card-header">
              <div class="close">
                  <img src="images/svgexport-6 (16) 1.svg" alt="" 
                  onclick="this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode)">
              </div>
              <div class="mt-3 mb-3 " dir="rtl" style="display:${displayٍSelect};"> 
                  <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                  <select class="form-select" name = "mangager_type" id="specificSizeSelect">
                      <option selected readonly>برجاء تحديد التصنيف</option>
                      <option value = "ceo">رئيس مجلس الاداره</option>
                      <option value = "director_member">عضو مجلس اداره</option> 
                      <option name = "director_manager">عضو منتدب</option> 
                  </select>
              </div>
              <div class="row">
                  <div class="col-6">
                      <div class=" g-3 justify-content-around" dir="rtl">
                          <div class="">
                            <label for="inputtext1" class="form-label mang">${lname}</label>
                            <input type="text" class="form-control" id="inputtext1" value="${e.name}" name = "manager_name[]" readonly>
                          </div>
                          <div class="">
                              <label for="inputtext2" class="form-label mang">${lnation}</label>
                              <input type="text" class="form-control" id="inputtext2" value="${e.nationality}" name = "manager_nationality[]" readonly>
                          </div>
                      </div>
                  </div>
                  <div class="col-6 align-self-center" style="padding-top: 33px;">
                      <div class="id"><img src="${e.prev}" alt="" width="100%" id="imagePrev_${i}" class="imgId"></div>
                  </div>
              </div>
          </div>
          <div class="card-body" id='card_${x}'>
              <h6 class="h6part">${h6Name}</h6>
              <div class="form-check">
              <label class="form-check-label" for="flexCheckDefault1">
              صلاحية التوقيع امام البنوك وفتح حسابات بنكية والتعامل على حساب الشركة
              </label>
              <input class="form-check-input" type="checkbox" value="1" name = "perm1[]">
                </div>
                <div class="form-check">
                <label class="form-check-label" for="flexCheckChecked2">
                صلاحية توقيع العقود بالنيابه عن الشركة
                </label>
                <input class="form-check-input" type="checkbox" value="1" name = "perm2[]">
                </div>
                <div class="form-check">
                <label class="form-check-label" for="flexCheckChecked3">
                صلاحية التعامل امام الجهات الحكوميه بالنيابه عن الشركة
                </label>
                <input class="form-check-input" type="checkbox" value="1" name = "perm3[]">
                </div>
          </div>
          <div class="card-footer align-self-center" style="display:none;">
              <div class="buttons">
                  <button class="btn save" type="button">حفظ</button>
                  <button class="btn edit" type="button">تعديل</button>
              </div>
          </div></div>`
        parentCard.appendChild(newCard)
        // console.log('dcds')
        }
    });
}else{
      if(autocompleteinput.value !== ''){
        //   console.log(autocompleteinput.value)
        const newCard = document.createElement('div');
        newCard.classList.add('col-xl-4','col-md-6','pt-3');
        newCard.innerHTML= `<div class="card">
        <div class="card-header">
    <div class="close">
        <img src="images/svgexport-6 (16) 1.svg" alt="" 
        onclick="this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode)">
    </div>
    <div class="mt-3 mb-3" dir="rtl"  style="display:${displayٍSelect};"> 
        <label class="visually-hidden" for="specificSizeSelect">Preference</label>
        <select class="form-select" name = "mangager_type" id="specificSizeSelect">
            <option selected readonly>برجاء تحديد التصنيف</option>
            <option value = "ceo">رئيس مجلس الاداره</option>
            <option value = "director_member">عضو مجلس اداره</option> 
            <option name = "director_manager">عضو منتدب</option> 
        </select>
    </div>
    <div class="row">
        <div class="col-6">
            <div class=" g-3 justify-content-around" dir="rtl">
                <div class="">
                  <label for="input1" class="form-label mang">${lname}</label>
                  <input type="text" class="form-control" id="input1" value="${autocompleteinput.value}"  name = "manager_name[]" data-id="input_${x}">
                </div>
                <div class="">
                    <label for="inputtext2" class="form-label mang">${lnation}</label>
                    <input type="text" class="form-control" id="inputtext2" name = "manager_nationality[]" data-id="input_${x}">
                </div>
            </div>
        </div>
        <div class="col-6 align-self-center" style="padding-top: 33px;">
        <div class="id dispBlo" style="display: none;"><img src="" class="imageUpload imgId" id="img_prev_${i}"></div>
        <div class="id d-flex justify-content-center align-items-center">
            <div class="form-group">
            <div class="form-line">
                <div class="btn-file align-items-center">
                <input type="file" id="event_image" accept="image/png, image/gif, image/jpeg" name="source" name = "personal_id[]" value="" onchange="onFileSelected(event,${i})" data-id="input_${x}">
                    <div class=" change-file-ico">
                       <img src="images/upload.svg" width="25%" class="disNone">
                       </div>
                    <div class="full-width">
                        <p id="wowonder-movie-name" class="disNone">اضافه البطاقه الشخصيه</p>
                    </div>
                </div>
            </div>
            </div>
        </div>

        </div>
    </div>
    </div>
    <div class="card-body" id='card_${x}'>
    <h6 class="h6part">${h6Name}</h6>
    <div class="form-check">
    <label class="form-check-label" for="flexCheckDefault1">
    صلاحية التوقيع امام البنوك وفتح حسابات بنكية والتعامل على حساب الشركة
    </label>
    <input class="form-check-input" type="checkbox" value="1" name = "perm1[]">
      </div>
      <div class="form-check">
      <label class="form-check-label" for="flexCheckChecked2">
      صلاحية توقيع العقود بالنيابه عن الشركة
      </label>
      <input class="form-check-input" type="checkbox" value="1" name = "perm2[]">
      </div>
      <div class="form-check">
      <label class="form-check-label" for="flexCheckChecked3">
      صلاحية التعامل امام الجهات الحكوميه بالنيابه عن الشركة
      </label>
      <input class="form-check-input" type="checkbox" value="1" name = "perm3[]">
      </div>
    </div>
    <div class="card-footer align-self-center" style="display:none;">
    <div class="buttons">
        <button class="btn save" type="button">حفظ</button>
        <button class="btn edit" type="button">تعديل</button>
    </div>
    </div>
    </div>`
    parentCard.appendChild(newCard);
} 
else{
        //   console.log('null')
        const newCard = document.createElement('div');
        newCard.classList.add('col-xl-4','col-md-6','pt-3');
        newCard.innerHTML= `<div class="card">
        <div class="card-header">
    <div class="close">
        <img src="images/svgexport-6 (16) 1.svg" alt="" 
        onclick="this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode)">
    </div>
    <div class="mt-3 mb-3" dir="rtl" style="display:${displayٍSelect};"> 
        <label class="visually-hidden" for="specificSizeSelect">Preference</label>
        <select class="form-select" name = "mangager_type" id="specificSizeSelect">
            <option selected readonly>برجاء تحديد التصنيف</option>
            <option value = "ceo">رئيس مجلس الاداره</option>
            <option value = "director_member">عضو مجلس اداره</option> 
            <option name = "director_manager">عضو منتدب</option> 
        </select>
    </div>
    <div class="row">
        <div class="col-6">
            <div class=" g-3 justify-content-around" dir="rtl">
                <div class="">
                  <label for="inputtext1" class="form-label mang">${lname}</label>
                  <input type="text" class="form-control" id="inputtext1" value="${autocompleteinput.value}"  name = "manager_name[]" data-id="input_${y}">
                </div>
                <div class="">
                    <label for="inputtext2" class="form-label mang">${lnation}</label>
                    <input type="text" class="form-control" id="inputtext2"   name = "manager_nationality[]" data-id="input_${y}">
                </div>
            </div>
        </div>
        <div class="col-6 align-self-center" style="padding-top: 33px;">
        <div class="id dispBlo" style="display: none;"><img src="" class="imageUpload imgId" id="img_prev_${i}"></div>
            <div class="id d-flex justify-content-center align-items-center">
            <div class="form-group">
            <div class="form-line">
                <div class="btn-file align-items-center">
                <input type="file" id="event_image" accept="image/png, image/gif, image/jpeg" name="source" value="" data-id="input_${y}" onchange="onFileSelected(event, ${i})">
                    <div class=" change-file-ico">
                       <img src="images/upload.svg" width="25%">
                    </div>
                    <div class="full-width">
                        <p id="wowonder-movie-name">اضافه البطاقه الشخصيه</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    <div class="card-body" id='card_${x}'>
    <h6 class="h6part">${h6Name}</h6>
    <div class="form-check">
    <label class="form-check-label" for="flexCheckDefault1">
    صلاحية التوقيع امام البنوك وفتح حسابات بنكية والتعامل على حساب الشركة
    </label>
    <input class="form-check-input" type="checkbox">
      </div>
      <div class="form-check">
      <label class="form-check-label" for="flexCheckChecked2">
      صلاحية توقيع العقود بالنيابه عن الشركة
      </label>
      <input class="form-check-input" type="checkbox">
      </div>
      <div class="form-check">
      <label class="form-check-label" for="flexCheckChecked3">
      صلاحية التعامل امام الجهات الحكوميه بالنيابه عن الشركة
      </label>
      <input class="form-check-input" type="checkbox">
      </div>
    </div>
    <div class="card-footer align-self-center" style="display:none;">
    <div class="buttons">
        <button class="btn save" type="button">حفظ</button>
        <button class="btn edit" type="button">تعديل</button>
    </div>
    </div>
    </div>`
    parentCard.appendChild(newCard)
    y++;
      }
    }
} else{
    if(!validateCard()){
    console.log('invalid')
    }
   else{
    console.log('valid')
    if(arrayNames.includes(autocompleteinput.value)){
        // console.log('in');
        arrayEle.forEach((e)=>{
            if(e.name == autocompleteinput.value)
            { 
                  const newCard = document.createElement('div');
                  newCard.classList.add('col-xl-4','col-md-6','pt-3');
                  newCard.innerHTML= `<div class="card">
                  <div class="card-header">
              <div class="close">
                  <img src="images/svgexport-6 (16) 1.svg" alt="" 
                  onclick="this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode)">
              </div>
              <div class="mt-3 mb-3" dir="rtl" style="display:${displayٍSelect};"> 
                  <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                  <select class="form-select" name = "mangager_type" id="specificSizeSelect">
                      <option selected readonly>برجاء تحديد التصنيف</option>
                      <option value = "ceo">رئيس مجلس الاداره</option>
                      <option value = "director_member">عضو مجلس اداره</option> 
                      <option name = "director_manager">عضو منتدب</option> 
                  </select>
              </div>
              <div class="row">
                  <div class="col-6">
                      <div class=" g-3 justify-content-around" dir="rtl">
                          <div class="">
                            <label for="inputtext1" class="form-label mang">${lname}</label>
                            <input type="text" class="form-control" id="inputtext1" value="${e.name}" name = "manager_name[]" readonly>
                          </div>
                          <div class="">
                              <label for="inputtext2" class="form-label mang">${lnation}</label>
                              <input type="text" class="form-control" id="inputtext2" value="${e.nationality}" name = "manager_nationality[]" readonly>
                          </div>
                      </div>
                  </div>
                  <div class="col-6 align-self-center" style="padding-top: 33px;">
                      <div class="id"><img src="${e.prev}" alt="" width="100%" id="imagePrev_${i}" class="imgId"></div>
                  </div>
              </div>
          </div>
          <div class="card-body" id='card_${x}'>
              <h6 class="h6part">${h6Name}</h6>
              <div class="form-check">
              <label class="form-check-label" for="flexCheckDefault1">
              صلاحية التوقيع امام البنوك وفتح حسابات بنكية والتعامل على حساب الشركة
              </label>
              <input class="form-check-input" type="checkbox" value="" name = "perm1[]">
                </div>
                <div class="form-check">
                <label class="form-check-label" for="flexCheckChecked2">
                صلاحية توقيع العقود بالنيابه عن الشركة
                </label>
                <input class="form-check-input" type="checkbox" value="" name = "perm2[]">
                </div>
                <div class="form-check">
                <label class="form-check-label" for="flexCheckChecked3">
                صلاحية التعامل امام الجهات الحكوميه بالنيابه عن الشركة
                </label>
                <input class="form-check-input" type="checkbox" value="" name = "perm3[]">
                </div>
          </div>
          <div class="card-footer align-self-center" style="display:none;">
              <div class="buttons">
                  <button class="btn save" type="button">حفظ</button>
                  <button class="btn edit" type="button">تعديل</button>
              </div>
          </div></div>`
        parentCard.appendChild(newCard)
        // console.log('dcds')
        }
    });
}else{
      if(autocompleteinput.value !== ''){
        //   console.log(autocompleteinput.value)
        const newCard = document.createElement('div');
        newCard.classList.add('col-xl-4','col-md-6','pt-3');
        newCard.innerHTML= `<div class="card">
        <div class="card-header">
    <div class="close">
        <img src="images/svgexport-6 (16) 1.svg" alt="" 
        onclick="this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode)">
    </div>
    <div class="mt-3 mb-3 " dir="rtl" style="display:${displayٍSelect};"> 
        <label class="visually-hidden" for="specificSizeSelect">Preference</label>
        <select class="form-select" name = "mangager_type" id="specificSizeSelect">
            <option selected readonly>برجاء تحديد التصنيف</option>
            <option value = "ceo">رئيس مجلس الاداره</option>
            <option value = "director_member">عضو مجلس اداره</option> 
            <option name = "director_manager">عضو منتدب</option> 
        </select>
    </div>
    <div class="row">
        <div class="col-6">
            <div class=" g-3 justify-content-around" dir="rtl">
                <div class="">
                  <label for="input1" class="form-label mang">${lname}</label>
                  <input type="text" class="form-control" id="input1" value="${autocompleteinput.value}"  name = "manager_name[]" data-id="input_${x}">
                </div>
                <div class="">
                    <label for="inputtext2" class="form-label mang">${lnation}</label>
                    <input type="text" class="form-control" id="inputtext2" name = "manager_nationality[]" data-id="input_${x}">
                </div>
            </div>
        </div>
        <div class="col-6 align-self-center" style="padding-top: 33px;">
        <div class="id dispBlo" style="display: none;"><img src="" class="imageUpload imgId" id="img_prev_${i}"></div>
        <div class="id d-flex justify-content-center align-items-center">
            <div class="form-group">
            <div class="form-line">
                <div class="btn-file align-items-center">
                <input type="file" id="event_image" accept="image/png, image/gif, image/jpeg" name="source" value="" onchange="onFileSelected(event,${i})" data-id="input_${x}">
                    <div class=" change-file-ico">
                       <img src="images/upload.svg" width="25%" class="disNone">
                       </div>
                    <div class="full-width">
                        <p id="wowonder-movie-name" class="disNone">اضافه البطاقه الشخصيه</p>
                    </div>
                </div>
            </div>
            </div>
        </div>

        </div>
    </div>
    </div>
    <div class="card-body" id='card_${x}'>
    <h6 class="h6part">${h6Name}</h6>
    <div class="form-check">
    <label class="form-check-label" for="flexCheckDefault1">
    صلاحية التوقيع امام البنوك وفتح حسابات بنكية والتعامل على حساب الشركة
    </label>
    <input class="form-check-input" type="checkbox" >
      </div>
      <div class="form-check">
      <label class="form-check-label" for="flexCheckChecked2">
      صلاحية توقيع العقود بالنيابه عن الشركة
      </label>
      <input class="form-check-input" type="checkbox" >
      </div>
      <div class="form-check">
      <label class="form-check-label" for="flexCheckChecked3">
      صلاحية التعامل امام الجهات الحكوميه بالنيابه عن الشركة
      </label>
      <input class="form-check-input" type="checkbox" >
      </div>
    </div>
    <div class="card-footer align-self-center" style="display:none;">
    <div class="buttons">
        <button class="btn save" type="button">حفظ</button>
        <button class="btn edit" type="button">تعديل</button>
    </div>
    </div>
    </div>`
    parentCard.appendChild(newCard);
} 
else{
        //   console.log('null')
        const newCard = document.createElement('div');
        newCard.classList.add('col-xl-4','col-md-6','pt-3');
        newCard.innerHTML= `<div class="card">
        <div class="card-header">
    <div class="close">
        <img src="images/svgexport-6 (16) 1.svg" alt="" 
        onclick="this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode)">
    </div>
    <div class="mt-3 mb-3" dir="rtl" style="display:${displayٍSelect};"> 
        <label class="visually-hidden" for="specificSizeSelect">Preference</label>
        <select class="form-select" name = "mangager_type" id="specificSizeSelect">
            <option selected readonly>برجاء تحديد التصنيف</option>
            <option value = "ceo">رئيس مجلس الاداره</option>
            <option value = "director_member">عضو مجلس اداره</option> 
            <option name = "director_manager">عضو منتدب</option> 
        </select>
    </div>
    <div class="row">
        <div class="col-6">
            <div class=" g-3 justify-content-around" dir="rtl">
                <div class="">
                  <label for="inputtext1" class="form-label mang">${lname}</label>
                  <input type="text" class="form-control" id="inputtext1" value="${autocompleteinput.value}"  name = "manager_name[]" data-id="input_${y}">
                </div>
                <div class="">
                    <label for="inputtext2" class="form-label mang">${lnation}</label>
                    <input type="text" class="form-control" id="inputtext2"   name = "manager_nationality[]" data-id="input_${y}">
                </div>
            </div>
        </div>
        <div class="col-6 align-self-center" style="padding-top: 33px;">
        <div class="id dispBlo" style="display: none;"><img src="" class="imageUpload imgId" id="img_prev_${i}"></div>
            <div class="id d-flex justify-content-center align-items-center">
            <div class="form-group">
            <div class="form-line">
                <div class="btn-file align-items-center">
                <input type="file" id="event_image" accept="image/png, image/gif, image/jpeg" name="source" value="" data-id="input_${y}" onchange="onFileSelected(event, ${i})">
                    <div class=" change-file-ico">
                       <img src="images/upload.svg" width="25%">
                    </div>
                    <div class="full-width">
                        <p id="wowonder-movie-name">اضافه البطاقه الشخصيه</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    <div class="card-body" id='card_${x}'>
    <h6 class="h6part">${h6Name}</h6>
    <div class="form-check">
    <label class="form-check-label" for="flexCheckDefault1">
    صلاحية التوقيع امام البنوك وفتح حسابات بنكية والتعامل على حساب الشركة
    </label>
    <input class="form-check-input" type="checkbox">
      </div>
      <div class="form-check">
      <label class="form-check-label" for="flexCheckChecked2">
      صلاحية توقيع العقود بالنيابه عن الشركة
      </label>
      <input class="form-check-input" type="checkbox">
      </div>
      <div class="form-check">
      <label class="form-check-label" for="flexCheckChecked3">
      صلاحية التعامل امام الجهات الحكوميه بالنيابه عن الشركة
      </label>
      <input class="form-check-input" type="checkbox">
      </div>
    </div>
    <div class="card-footer align-self-center" style="display:none;">
    <div class="buttons">
        <button class="btn save" type="button">حفظ</button>
        <button class="btn edit" type="button">تعديل</button>
    </div>
    </div>
    </div>`
    parentCard.appendChild(newCard)
    y++;
      }
   }
   
}
}
    
   x++ ; i++; z++; y++;
});
////////////////////////////////////
function onFileSelected(event,i) {
    let disNone = $('.id.d-flex');
    let disblock = $('.dispBlo');
    [...disNone].forEach(e=>{
        e.classList.add('displayNone');
        // console.log(e)
    });
    [...disblock].forEach(e=>{
        e.classList.add('displayBlock');
    })
    let selectedFile = event.target.files[0];
    let reader = new FileReader();
  
    let imgtag = document.getElementById("img_prev_"+i);
    // console.log("img_prev_"+i)
    // [...imgtag].forEach(e=>{
        imgtag.title = selectedFile.name;
    // })
  
    reader.onload = function(event) {
        // [...imgtag].forEach(e=>{
            imgtag.src=event.target.result;
        // })
    //   imgtag.src = 
    };
  
    reader.readAsDataURL(selectedFile);
  }
///////////////////auto-complete function/////////////////////////////////
function autoComplete(inputname,namesArr){
    let currentFocus;
  inputname.addEventListener("input", function(e) {
      let a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute('dir','rtl');
      a.classList.add("autocomplete-items",'col-6');
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < namesArr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (namesArr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + namesArr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += namesArr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + namesArr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inputname.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inputname.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inputname) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
const autocompleteinput = document.getElementById('autocompleteinput');
$('#autocompleteinput').on('focus', function(e){
    e.preventDefault();
    // console.log(autoComplete(autocompleteinput,arrayNames));
    autoComplete(autocompleteinput,arrayNames);
});
// autoComplete.addEventListener('focus',(e)=>{
//     e.preventDefault();
//     autoComplete(autocompleteinput,arrayNames);
// })
///////////////////////calender--section-5/////////////////////////////////

$(function() {

    // rome(inline_cal, { time: false });  
      rome(inline_cal, {time: false, inputFormat: 'MMMM DD, YYYY'}).on('data', function (value) {
        result.value = value;
      });
  
    });
    //////////////////file uploda area


///////////////////function file image preview









// sherholder[0][name]

// sherholder[0][personal_id]
// sherholder[0][nation]

// sherholder[1][name]
// sherholder[1][personal_id]
// sherholder[1][nation]
// [
//     0=.[
//         name=>|mohamed,
//          pesonalid=> filwobject
//          nation=.egy
//     ],
//     1=.[
//         name=>|mohamed,
//          pesonalid=> filwobject
//          nation=.egy
//     ]
// ]
