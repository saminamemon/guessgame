#! /usr/bin/env node
// import inquirer from "inquirer";
// import chalk from "chalk";
// import chalkAnimation from "chalk-animation";
// const sleep = () => {
//     return new Promise((res) => {
//         setTimeout(res, 3000)
//     })
// }
// async function welcome() {
//     let rainbowTitle = chalkAnimation.pulse(" Welcome to Samina Guess Game");
//     await sleep();
//     rainbowTitle.stop();
//     console.log(chalk.red`   
//     .d88b. 888  888 .d88b. .d8888b .d8888b  .d88b.  8888b. 88888b.d88b.  .d88b.  
//     d88P"88b888  888d8P  Y8b88K     88K     d88P"88b    "88b888 "888 "88bd8P  Y8b 
//     888  888888  88888888888"Y8888b."Y8888b.888  888.d888888888  888  88888888888 
//     Y88b 888Y88b 888Y8b.         X88     X88Y88b 888888  888888  888  888Y8b.     
//      "Y88888 "Y88888 "Y8888  88888P' 88888P' "Y88888"Y888888888  888  888 "Y8888  
//          888                                     888                              
//     Y8b d88P                                Y8b d88P                              
//      "Y88P"                                  "Y88P"
//     `);
// }
// await welcome()
// let numberGame : number= Math.floor(Math.random()*10);
// // console.log (chalk.red(numberGame));
// function guess(input:number) {
//     if (numberGame === input) {
//       console.log(chalk.red ("congratulaton!you win")); 
//     } else {
//         console.log(chalk.blue ("sorry! try again" ));
//     }
// } 
// const userInput = await inquirer.prompt([{
//     name:'userInput' ,type: 'number', message: 'please enter a number'
// }])
// guess(userInput.userInputs)
// expict casting data type
//expictly define karrhy hain
//.lenght num kay andar nh hote
// (<string>) generic
// let num:number =1;
//data type ko unknown m convert karna hoga
//enum extracted data store kartay hain
//enum indexs ka conflict
//enum other m hota h ts m supported h
// function buildName(firstName:string,lastName:"khan") : string
// if(lastName)
// return firstName +"" +lastName;
// else
// return firstName;
// }
// let result1 = buildName("Bob",undefined);
//undefined ki wja sy default value dy dega
//rest operator functions m any waly argument ko 
//array consider krta h
// function buildName(firstName:string,...restofName: string[]){
//     return firstName +"" + restofName.join("")
// }
// var employeeName = buildName("ariba","memon","q","a")
// console.log is also a rest parameter
//functions ki type define karsaakty hain
// function myCallBack(text:string){
//     console.log("inside" + text)
// }
// type fn=(text: string) =>void;
// function callingFunction(initialText:string,callback:fn){
//     callback
// }
//overloads ik functions bana kr parameter pas krna
//overloads m functions banaya value nh di sirf nam saray overloads ka same hoga
// function add(arg1:any,any2:any): any{
//     return arg1 +arg2
// }
//  tuples array ki tarha likhtay hain
//data type define kartay hain
//else ky andar jo value define hoge 
//scquence same hona chhaye
//jitny element mangay hain utny hi desakty hain
//extra cheez allow nh h
//jitny elements chahien add karsakty hain
// tuple m specific use karsakty hain
//clases template h nakhsha hai
//obj uska instance hain
//oop 
//clases
// apna code likha clases define krta h
//clases pe mehnat kartay hain concept h oop
//obj
//obj pass kartay rahengy
//absctraction
// obj oriented ka part nh h
//jis ny design ka nakhsha soucha hoga woh absctraction pe hoga
//code m logic istamal hoge 
//incapculation
//kuch properties expose kardi kuch hide
//new ko 100 br call karsakty hain
// class Point{
//     x:number;
//     y:number;
// }
// const pt = new Point();
// pt.x =0;
// pt.y=0;
// class Point{
//     x=0;
//     y=0;
// }
// const pt = new Point();
// console.log(`${pt.x},${pt.y}`)
// class BadGreeter{
//     name:string
// }
// initializer nh h
// class GoodGreeter{
//     name:string;
//     constructor(){
//         this.name ="Hello"
//     }
// }
//constructor sbsy phely chalta h assume karta h
//obj banta h sbsy phely constructor call hota h
//this 
//class ik template h refrence this m chupa howa hoga
//this my by default obj rakha howa h
// class OkGreeter{
//     name!: string;
// }
//name initilized howa h for ! mark typescript error nh dega
//request nh krega ky lazmi value deni h(!)
//readonly ts pe h js m nh h isko sirf read karsakty hain
//jb bhi koi value property di h name 
//iski value ko change nh karsakty 
//constant hi khelaya change nh karsakty
//constrauctor m default value ly sakty hain
//3 types ky constructor
//num string any
//paramter sy farq h 
//overloading 
// class Base{
//     k=4
// }
// class Derived extends Base{
//     constructor(){
//         super()
//         console.log(this.k);
//     }
// }
//'super' must be called before accessing 'this' in the constructor of a derived class
//child class m jo this hena ap call nh karsakty jb tak ap super call na karein
//super pheli line m call karsakty hain
//inheritance
//base class ko extend karsakty hain
//scaale ik method hai
// class Point{
//     x=10;
//     y=10;
// scale(n:number):void{
//     this.x *=n;
//     this.y *=n;
// }
// }
//6 chapters 
// incapsulation
// bahr sy koi cheez access na karsakein code ko
//data andar bahar nikalta h
//bahr ky code ko accesskrna h tu get and set karna h
//get janii h value
//set value set krni h
//private lgany sy property class ky bahar acess nh hosskti
//set wala method length ki property ko set krega
//get /set hum is lenght ki property ko change nh karsakty
//parameter m aur chezain bhi ly sakty hain like key
//variable acess karrhy hain
//ap get set ky throw kartay hain jo ky ik method h 
// class C{
//     _length=0;
//     get lenght(){
//         return this._length
//     }
// set length(value){
//     this._length = value;
// }
// // }
// // const a = new C()
// // a.lenght=0
// //get size agr kisi method sy phely get likha hoga yeh value return karrta hoga
// //set size 
// //true pe 1 false pe 0
// // type GreetFunction = (a: string) => void;
// // // function greeter(fn: GreetFunction) 
// // let tuple =["vvjhgvjkhvgb"]
// // tuple.push(true)
// // tuple.push('ygujhg')
// let array =[1,2,34,5]
// let arr1:(number|string)[]
// let arr2:number[]
// let arr3 :number| string[]
// let arr4=[124313,"jhedh",false]
// array.push(65875)
// console.log(array)
// arr1=[43446578687,"bjkhkjh"]
// arr1[0]=8929083
// function construct(fname: string, ...restofnames: string[]) {
//     return fname + " ," + restofnames.join(" ")
// }
// let buildingmaterial = construct("sand", "iron", "labour", "blocks", "machines")
// console.log(buildingmaterial);screenX
// instanceof object is class ka instant h ya nh
//  fresh obj m extra element pass nh krtay
// h1 = new Animal("ariba",11)
//2 properties nh di hain issi liye error arha h
// a1 = new Human("zeeshan")
// fresh obj m extra properties ADD nh karsakty
//clases ky case m ts method ko consider nh karti
//animal m eat ka method h robot m nh h
//property waly case m error ayega
// get set 2 method jisky throw varibale change hota rhy
// class C{
//     _length=0;
//     get lenght(){
//         return this._length
//     }
// set length(value){
//     this._length = value;
// }
// // }
//interface ik asi class hjiski koi implementation nh h
//Pingable asi class h jiski koi implementation nh h
// interface Pakistani {
//     pakistani(): void
// }
// class lecture implements Pakistani{
//     pakistani() {
//         console.log("lecture")
//     }
// }
// class newlecture implements Pakistani{
//     Saudia1=() {
//         console.log("the new lecture")
//     }
// }
//acces modifier
//over writing 2 diff class m hote h
//overwriting ik hi class m hote h
//? hata dein tu overwriting ki jaga over loading hoga
//member visiblity
//public har ik acess krsakta
//protected woh aur child class 
//static course ka nam static h  direct call karwasakty hain
// class Person{
//    static id:number =0;
//    personId:number
//     constructor(){
//         this.personId =++Person.id;
//     }
// }
// const d = new Person()
// console.log(d.personId)
// const e = new Person()
// console.log(e.personId)
// const t = new Person()
// console.log(t.personId)
class Box {
    contents;
    constructor(value) {
        this.contents = value;
    }
}
const b = new Box("ariba!");
const b1 = new Box(1);
export {};
