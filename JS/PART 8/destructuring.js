let names = ["ashish", "bruce", "peter", "steve"];
let [winner, runnerup, secondrunnerup, ...others] = names;

let studentsdata = {
  name: "ashish",
  course: "b-tech",
  branch: "cse",
  mobileno: 6261542999,
  universityno: 2201930100020,
};

let { branch: subject, universityno: rollno , city ="default"} = studentsdata;

