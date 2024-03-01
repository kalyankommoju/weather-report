const form=document.getElementById("form");
const input=document.getElementById("input");
const info=document.getElementById("cities");
const apikey="2bbb67f94f1389f9879195def4903d5f"

form.addEventListener("submit",e =>{
    e.preventDefault();
    info.textContent="";
    const inputValue=input.value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apikey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        const { main, name } = data;
        const para=document.createElement("div");
        para.innerHTML=`<p>City:${name}</p>
        <div>Temperature:${Math.round(main.temp)}<sup>0</sup>C</div>`;
        info.appendChild(para);
    })
    .catch(()=>{
        alert("Enter proper city name")
    });
    form.reset();

});