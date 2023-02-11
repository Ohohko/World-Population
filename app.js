btnAfrica = document.querySelector("#btn_africa");
btnAfrica.onclick = function () {
  regionAfrica();
};
btnAmerica = document.querySelector("#btn_america");
btnAmerica.onclick = function () {
  regionAmerica();
};
btnAsia = document.querySelector("#btn_asia");
btnAsia.onclick = function () {
  regionAsia();
};
btnEurope = document.querySelector("#btn_euro");
btnEurope.onclick = function () {
  regionEurope();
};
btnOceania = document.querySelector("#btn_oceania");
btnOceania.onclick = function () {
    regionOceania();
};



async function regionAfrica() {
  document.getElementById('spinner').style.display = 'block';
  axios
  .get('https://restcountries.com/v3.1/region/afr')
  .then(response => {
    let result = document.getElementById('result');
    result.innerHTML = '';
    document.getElementById('spinner').style.display = 'none';
    let buttons = response.data.map(item => {
      let button = document.createElement('button');
      button.innerHTML = item.name.common;
      return button
    });
    buttons.forEach(button => {
      clickCountry = button.addEventListener("click", function() {
        this.innerHTML = button.innerHTML
        console.log(button.innerHTML)

      });
      result.appendChild(button);
    });
    
  })
  .catch(error => {
    console.error(error);
  });
}





//axios https request function for api 2 cities and population
function clickCountry() {
axios.get('https://countriesnow.space/api/v0.1/countries/population/cities')
  .then(function (response) {
    let allData = response.data.data;
    const cities = allData.map( (x) => x.country
    )
    console.log(cities);
    const population = allData.map( (x) => x.populationCounts)
    console.log(population);
    
  })
  .catch(function (error) {
    // Handle any errors that occurred during the request
    console.error(error);
  });
}

clickCountry()



function regionAmerica() {
  axios
  .get('https://restcountries.com/v3.1/region/ame')
  .then(response => {
    let result = document.getElementById('result');
    result.innerHTML = '';
    let buttons = response.data.map(item => {
      let button = document.createElement('button');
      button.innerHTML = item.name.common;
      return button;
    });
    buttons.forEach(button => result.appendChild(button));
     console.log(buttons);
  })
  .catch(error => {
    console.error(error);
  });

}

function regionAsia() {
  axios
  .get('https://restcountries.com/v3.1/region/asi')
  .then(response => {
    let result = document.getElementById('result');
    result.innerHTML = '';
    let buttons = response.data.map(item => {
      let button = document.createElement('button');
      button.innerHTML = item.name.common;
      return button;
    });
    buttons.forEach(button => result.appendChild(button));
     console.log(buttons);
  })
  .catch(error => {
    console.error(error);
  });

 
}

function regionEurope() {
  axios
  .get('https://restcountries.com/v3.1/region/euro')
  .then(response => {
    let result = document.getElementById('result');
    result.innerHTML = '';
    let buttons = response.data.map(item => {
      let button = document.createElement('button');
      button.innerHTML = item.name.common;
      return button;
    });
    buttons.forEach(button => result.appendChild(button));
     console.log(buttons);
  })
  .catch(error => {
    console.error(error);
  });

}

function regionOceania() {
  axios
  .get('https://restcountries.com/v3.1/region/oce')
  .then(response => {
    let result = document.getElementById('result');
    result.innerHTML = '';
    let buttons = response.data.map(item => {
      let button = document.createElement('button');
      button.innerHTML = item.name.common;
      return button;
    });
    buttons.forEach(button => result.appendChild(button));
     console.log(buttons);
  })
  .catch(error => {
    console.error(error);
  });

}

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['cities','cities','country','country'],
    datasets: [{
      label: 'Population',
      data: [122222,22224,4447,1558874],
      borderWidth: 5
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});