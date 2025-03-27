let mydata=localStorage.getItem('contactData')
console.log(mydata);

if(mydata){
    mydata=JSON.parse(mydata)
}
else{
    mydata=[]
}


function redender(data){
    let clust='';
    data.forEach(element => {
        clust +=`  <div class="mydata">
        <p>${element.name}</p>
         <p>${element.email}</p>
          <p>${element.message}</p>
   
    </div>`
        
    });
    document.querySelector(".mydata").innerHTML=clust;
}
redender(mydata)