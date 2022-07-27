// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",myfun)
function myfun(){
    event.preventDefault();
   var avtar= document.querySelector("#image").value
   var nam = document.querySelector("#name").value
   var batch =document.querySelector("#batch").value
   var dsa =document.querySelector("#dsa").value
   var comu =document.querySelector("#cs").value
   var coding =document.querySelector("#coding").value
  
   var tr1 =document.createElement("tr")

   var td1 =document.createElement("td")
   var image = document.createElement("img")
   image.src=avtar
   td1.append(image)
  
   var td2 =document.createElement("td")
   td2.innerText=nam;

   var td3 =document.createElement("td")
   td3.innerText=batch;

   var td4 =document.createElement("td")
   td4.innerText=dsa;

   var td5 =document.createElement("td")
   td5.innerText=comu;
   var td6 =document.createElement("td")
   td6.innerText=coding;

   var td7 =document.createElement("td")
   var p =((Number(dsa)+Number(comu)+Number(coding))/30)*100
   td7.innerText= p
  
   var td8 =document.createElement("td")
   if(p>=50){
       td8.innerText="regular"
       td8.style.backgroundColor="green"


   }
   else{
       td8.innerText="async"
       td8.style.backgroundColor="red"

   }
   
tr1.append(td1,td2,td3,td4,td5,td6,td7,td8) 
document.querySelector("tbody").append(tr1)
}