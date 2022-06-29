 const workers = [
    {
    no: 1,
    firstName:"Thompson",
    lastName:"Anthony",
    age:32,
    sex:"Male",
    position:"Head of Finance Department",
    date_of_Employment: '17/07/2014',
    },

    {
    no: 2,
    firstName:"Johnson",
    lastName:"Mary",
    age:23,
    sex:"Female",
    position:"Software Engineer",
    date_of_Employment: '05/03/2019',
    },

    {
    no: 3,
    firstName:"Chisom",
    lastName:"Onyeka",
    age:28,
    sex:"Female",
    position:"Human Resource Manager",
    date_of_Employment: '21/06/2016',
    },

    {
    no: 4,
    firstName:"Jide",
    lastName:"Olabisi",
    age:29,
    sex:"Male",
    position:"Assitant Head(Software Department)",
    date_of_Employment:'05/06/2016',
    },

    {
    no: 5,
    firstName:"Williams",
    lastName:"Ajayi",
    age:30,
    sex:"Male",
    position:"Head of Software Department",
    date_of_Employment: '06/09/2015',
    },

    {
    no: 6,
    firstName:"Nancy",
    lastName:"Chukwuemeka",
    age:27,
    sex:"Female",
    position:"Secretary",
    date_of_Employment: '23/08/2016',
    },

    {
    no: 7,
    firstName:"Nicholas",
    lastName:"Uchemba",
    age:26,
    sex:"Male",
    position:"Software Engineer",
    date_of_Employment:'22/02/2020',
    },

    {
    no: 8,
    firstName:"Ahmed",
    lastName:"Olayinka",
    age:24,
    sex:",ale",
    position:"Graphic Designer",
    date_of_Employment: '15/08/2020',
    },

    {
    no: 9,
    firstName:"Halima",
    lastName:"Mohammed",
    age:26,
    sex:"Female",
    position:"Senior Finance Manager",
    date_of_Employment:'30/05/2018',
    },

    {
    no: 10,
    firstName:"Richard",
    lastName:"Adeyemi",
    age:41,
    sex:"Male",
    position:"C.E.O",
    date_of_Employment: '17/11/2010',
    },
]

console.log(workers);

buildTable(workers)

function buildTable(data){
    let table = document.getElementById('myTable')

    for (let i = 0; i < data.length; i++){
        let row = `<tr>
                        <td>${data[i].no}</td>
                        <td>${data[i].firstName}</td>
                        <td>${data[i].lastName}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].sex}</td>
                        <td>${data[i].position}</td>
                        <td>${data[i].date_of_Employment}</td>
                   </tr>`
            table.innerHTML += row 
    }
}