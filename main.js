function loadJSON(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
loadJSON("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  description(data.description);
  achievements(data.achievements);
  skills(data.skills);
})
var right=document.querySelector(".content");
function description(dsc){
  console.log(dsc.info);
  var h3=document.createElement("h3");
  h3.textContent="Description";
  right.appendChild(h3);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=dsc.info;
  right.appendChild(p);
}
function achievements(ach){
  var h3=document.createElement("h3");
  h3.textContent="Achievements";
  right.appendChild(h3);
  var hr=document.createElement("hr");
  right.appendChild(hr);

  var ul=document.createElement("ul");
  right.appendChild(ul);
  for(var i=ach.length-1;i>=0;i--){
    console.log(ach[i].Title);
    var li=document.createElement("li");
    li.textContent=ach[i].Title;
    ul.appendChild(li);

    var p=document.createElement("p");
    p.textContent=ach[i].Year;
    li.appendChild(p);

    var p1=document.createElement("p");
    p1.textContent=ach[i].Opponent;
    li.appendChild(p1);
  }
}
function skills(skl){
  var h3=document.createElement("h3");
  h3.textContent="Skills";
  right.appendChild(h3);
  var hr=document.createElement("hr");
  right.appendChild(hr);

  var table=document.createElement("table");
  table.border="1";
  right.appendChild(table);
  let row="";
  for(var i=0;i<skl.length;i++){
    row+="<tr><td>"+skl[i].name+"</td><td>"+skl[i].info+"</td></tr>";
  }
  table.innerHTML=row;
}
