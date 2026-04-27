const namebox = document.getElementById('name');
const agebox = document.getElementById('age');
const jobbox = document.getElementById('job');
const driversbox = document.getElementById('driversLicense');

let henkilot = [
  {
      name: "Merja Meikäläinen",
      age: 20,
      job: "Opiskelija",
      driversLicense: true
  },
  {
      name: "Teppo Teikäläinen",
      age: 25,
      job: "Sähköteknikko",
      driversLicense: true
  },
  {
    name: "Helena Heikäläinen",
    age: 30,
    job: "ohjelmistosuunnittelija",
    driversLicense: false
  },
  {
    name: "Semir Sikäläinen",
    age: 18,
    job: "opiskelija",
    driversLicense: true
  },
  {
    name: "Tomas Täkäläinen",
    age: 22,
    job: "linja-autonkuljettaja",
    driversLicense: true
  },
]

const rivit = document.getElementById('rivit');

function lisaaRivi() {
  if (agebox.value < 0){
    alert('Iän pitää olla positiivinen luku');
    return -1;
  }
  let newTyyppi = {};
  newTyyppi.name = namebox.value;
  newTyyppi.age = agebox.value;
  newTyyppi.job = jobbox.value;
  newTyyppi.driversLicense = driversbox.checked;
  henkilot.push(newTyyppi);
  luoRivit();
}

function luoRivit() {
  rivit.innerText = '';
  for (var tieto of henkilot){
    let rivi = document.createElement('tr');
    let name = document.createElement('td');
    name.innerHTML = tieto.name;
    rivi.append(name);
    let age = document.createElement('td');
    age.innerHTML = tieto.age;
    if (tieto.age > 17){
      age.innerHTML += '🍺';
    }
    rivi.append(age);
    let job = document.createElement('td');
    job.innerHTML = tieto.job;
    if (tieto.job == 'Opiskelija'){
      job.innerHTML += '🎓';
    }
    rivi.append(job);
    let driversLicense = document.createElement('td');
    driversLicense.innerHTML = tieto.driversLicense;
    rivi.append(driversLicense);
    rivit.append(rivi);
  }
}

luoRivit();
