const students = {
  name: "ashish",
  age: 45,
  math: 95,
  english: 75,
  science: 85,
  getavg() {
    let avg = (this.math + this.english + this.science) / 3;
    console.log(avg);
  },
};
students.getavg();