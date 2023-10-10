const calculateFormel = document.getElementById("calculateForm");


const calculatemarks = (event)=>{
    event.preventDefault();
    const maxcgpa = 118;
    const formdata = new FormData(calculateFormel);

    const data = {};

    formdata.forEach((value,key)=>{
        data[key]=value;
    });

    const totalcgpa = (data.sem1)*19 + (data.sem2)*18 + (data.sem3)*21 + (data.sem4)*23 + (data.sem5)*19 + (data.sem6)*18;

    const cgpa = parseFloat(`${totalcgpa/118}`).toFixed(2);
    // console.log(cgpa);
    const resultel = document.createElement("p");
    resultel.innerText=`You have got ${cgpa}/10`;
    calculateFormel.after(resultel);
    resultel.className="result";
};