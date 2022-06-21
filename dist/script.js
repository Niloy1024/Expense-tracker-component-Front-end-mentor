const node = document.querySelector('.barchart')

const isCurrentDay = (dayName = 'Friday') => {
  const today = new Date().getDay();
  const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  return daysOfWeek[today] === dayName;
}


const formatMoneyToDollars = (amt) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "USD" }).format(
    amt
  );


fetch('./data.json').then(x=>x.json()).then(x=>{
    for(let i = 0;i<x.length;i++)
    {
        node.innerHTML +=`
        <div class="">
            <button 
              class="peer " 
            >
              <div 
                class="${
                   isCurrentDay(x[i].day ) === true ? "bg-accent2" : "bg-accent1"
                }" style="height: ${x[i].amount  * 3}px;min-width:28px; border-radius:.2rem"
                >
              </div>          
            <p class="text-xs">
              ${ x[i].day }
            </p>
          </button>
          <p 
                class=" text-xs opacity-0 
                peer-hover:opacity-100 "
                style="transform:translet(0px,${x[i].amount}px)" 
          >
                  ${formatMoneyToDollars(
                   x[i].amount
                  )}
          </p>
        </div>
      `;
    }
    console.log(new Date().getDay())
});