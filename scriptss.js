//DSCR function

// let printrepayment = document.getElementById ('repayment');
let amount = document.getElementById("amount").value;
let tenor = document.getElementById("tenor").value;
let existing = document.getElementById("existing_obligation").value;
let salary = document.getElementById("salary").value;
let emptymessage = document.getElementById("empty");
let emptyymessage = document.getElementById("emptyy");
let submitt = document.getElementById("cli");
let rep = document.getElementById("repayment");
let DSCR = document.getElementById("DSCR");
var customer_bvn = document.getElementById("BVN").value;
let prin = document.getElementById("printname");
let obligation = 0;
let loan = 0;
let totalPercentage = document.getElementById("total_p");
let frm = document.getElementById("frm");
let frm2 = document.getElementById("frm2");
let check = document.querySelector("#check svg");
let close = document.querySelector("#close svg");
let comm = document.getElementById("comm");
let secondcomment = document.getElementById("second-comment");


// INPUT BVN LISTED IN JSON DATA BELOW
// 
function displayEmployee() {
  var customer_bvn = document.getElementById("BVN").value;
  console.log(customer_bvn);
  const employeeData = employee.find(({ BVN }) => BVN === customer_bvn);
 
  console.log(employeeData);

  document.getElementById("printname").innerHTML =
    "WELCOME," + " " + employeeData.NAME;

  obligation = employeeData.EXIS.toFixed(2);
  loan = employeeData.SAL.toFixed(2);

  event.preventDefault();
}
frm.addEventListener("input", displayEmployee);


// FETCHES SALARY AND EXISTING LOAN FROM JSON DATA
function dispEmployee() {
  var customer_bvn = document.getElementById("BVN").value;
  console.log(customer_bvn);
  const employeeData = employee.find(({ BVN }) => BVN === customer_bvn);
  
  console.log(employeeData);
  document.getElementById("salary").value = "N" + employeeData.SAL.toFixed(2);

  document.getElementById("existing_obligation").value =
    "N" + employeeData.EXIS.toFixed(2);
  let repay =
    (1.14 * document.getElementById("amount").value) /
    document.getElementById("tenor").value;
  rep.textContent = "N" + repay.toFixed(2);

  let total = Number(repay) + Number(obligation);
  let re = (total / Number(loan)) * 100;
  red = re.toFixed(2) + "%";
  let dv = (DSCR.textContent = red);

  if (frm2.classList.contains("display-none")) {
    frm2.classList.remove("display-none");
    frm.classList.add("display-none");
  }

  //   display check and congratulations
  //   alert(dv.replaceAll("%", ));
  if (re <= 66) {
    check.style.display = "block";
    comm.textContent =
      "Congratulations" +
      " " +
      employeeData.NAME +
      "your request has been submitted for approval";
  } else {
    close.style.display = "block";
    secondcomment.textContent =
      "Dear" +
      " " +
      employeeData.NAME +
      "you are not eligible for the requested amount";
  }

  event.preventDefault();
}

submitt.addEventListener("click", dispEmployee);

// console.log (repay)
//Repayment= (x*y)/z
// else {
//let repayment = (amount*tenor);
//print_repayment.textContent = repayment;
//}

//}

//refresh function
//const reset= () =>
//{
// alert ('Hello');

let employee = [
  {
    SERIAL_NUMBER: 1,
    NUBAN: "0500223465",
    NAME: "ABC LTD",
    SAL: 2000000.0,
    EXIS: 20000.0,
    FACILITY_TYPE: "Morabaha",
    BVN: "22113344556",
  },

  {
    SERIAL_NUMBER: 18,
    NUBAN: "0503003940",
    NAME: "AKOREDE INVESTMENT",
    SAL: 3585974.99,
    EXIS: 50000.0,
    FACILITY_TYPE: "Morabaha",
    BVN: "22444444444",
  },
  {
    SERIAL_NUMBER: 19,
    NUBAN: "0505506054",
    NAME: "ADEBOLA ODUBIYI ",
    SAL: 187347.63,
    EXIS: 35000.0,
    FACILITY_TYPE: "Morabaha",
    BVN: "22777788889",
  },
];
// console.log(employee);
// console.log(employee[0]);

//   const displayEmployee = (values) =>
// {
//     employee.forEach(element=>{

//       //  const Serial= element.children[1].innerHTML.toUpperCase();
//       //  const iden = element.children[2].innerHTML.toUpperCase();
//        // const SAL = element.children[3].innerHTML.toUpperCase();
//       //  const FACILITY  = element.children[3].innerHTML.toUpperCase();
//         const BVN = element.BVN
//         console.log(BVN)

//       //   if(BVN.includes(values)){
//       //    document.getElementById('salary').value= "SAL"
//       //   }
//     })
// }
