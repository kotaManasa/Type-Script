class students {
    studentid:number;
    studentname:string;
    studentmarks:number;

    constructor(studentid:number=10,studentname:string="Kothi",studentmarks:number=60)
    {
       this.studentid=studentid;
       this.studentname=studentname;
       this.studentmarks=studentmarks;
    }
    getResults()
    {
        if(this.studentmarks>=35)
            {
                return "pass";
            }else
            {
                return "fail";
            }
    }   
}

var s2 = new students(1,'tanu',70);
console.log(s2.studentid);
console.log(s2.studentname);
console.log(s2.studentmarks);
console.log(s2.getResults());

var s3 = new students();
console.log(s3.studentid);
console.log(s3.studentname);
console.log(s3.studentmarks);
console.log(s3.getResults());





// class Product {
//     name: string;
//     price: number;
//     constructor(name: string, price: number) {
//       this.name = name;
//       this.price = price;
//     }
//   }
  
//   const espresso = new Product('Espresso', 399);



