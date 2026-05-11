const namebox = document.getElementById('name');
const agebox = document.getElementById('age');
const jobbox = document.getElementById('job');
const driversbox = document.getElementById('driversLicense');

class Person {
  constructor(name, age, job, driversLicense){
    this.name = name;
    this.age = age;
    this.job = job;
    this.driversLicense = driversLicense;
  }
  isUnderage(){
    return this.age < 18;
  }
  isStudent(){
    return this.job == "Opiskelija";
  }
}

let people = [
  new Person("Merja Meikäläinen",20,"Opiskelija",true),
  new Person("Teppo Teikäläinen",25,"Sähköteknikko",true),
  new Person("Helena Heikäläinen",30,"ohjelmistosuunnittelija",false),
  new Person("Semir Sikäläinen",18,"opiskelija",true),
  new Person("Tomas Täkäläinen",22,"linja-autonkuljettaja",true)
]

const rivit = document.getElementById('rivit');

function lisaaRivi() {
  if (agebox.value < 0){
    alert('Iän pitää olla positiivinen luku');
    return -1;
  }
  people.push(new Person(namebox.value, agebox.value, jobbox.value, driversbox.checked));
  luoRivit();
}

function luoRivit() {
  rivit.innerText = '';
  for (var tieto of people){
    let rivi = document.createElement('tr');
    let name = document.createElement('td');
    name.innerHTML = tieto.name;
    rivi.append(name);
    let age = document.createElement('td');
    age.innerHTML = tieto.age;
    if (!tieto.isUnderage()){
      age.innerHTML += '🍺';
    }
    rivi.append(age);
    let job = document.createElement('td');
    job.innerHTML = tieto.job;
    if (tieto.isStudent()){
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
