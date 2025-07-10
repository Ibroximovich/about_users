import { use, useState } from "react"
import { Logo1, Logo2, Logo3, Logo4 } from "./assets/images";

function App() {
 const students = [
  {id:1, nickname:"Motti", selary:10000000, firstName:"Muhriddin", lastName:"Jamolov"},
  {id:2, nickname:"Nimadir", selary:20000000, firstName:"Sug'diyona", lastName:"Tursunaliyeva"},
  {id:3, nickname:"Coder", selary:12000000, firstName:"Azamat", lastName:"Xudoyberdiyev"},
  {id:4, nickname:"Boss", selary:15000000, firstName:"Dilnoza", lastName:"Karimova"},
  {id:5, nickname:"Shox", selary:18000000, firstName:"Shoxruh", lastName:"Qodirov"},
  {id:6, nickname:"Lola", selary:9500000, firstName:"Lola", lastName:"Islomova"},
  {id:7, nickname:"Alik", selary:11000000, firstName:"Alisher", lastName:"Rustamov"},
  {id:8, nickname:"Queen", selary:16000000, firstName:"Malika", lastName:"Yo‘ldosheva"},
  {id:9, nickname:"Sam", selary:9800000, firstName:"Samariddin", lastName:"Ergashev"},
  {id:10, nickname:"Usta", selary:12500000, firstName:"Umar", lastName:"Soliyev"},
  {id:11, nickname:"Aniq", selary:10300000, firstName:"Anvar", lastName:"Aliyev"},
  {id:12, nickname:"Spark", selary:13000000, firstName:"Nodira", lastName:"Mamatova"},
  {id:13, nickname:"Rex", selary:11800000, firstName:"Bekzod", lastName:"Nazarov"},
  {id:14, nickname:"Soft", selary:14000000, firstName:"Madina", lastName:"To‘laganova"},
  {id:15, nickname:"CoderX", selary:20000000, firstName:"Sardor", lastName:"Qurbonov"},
  {id:16, nickname:"Doct0r", selary:17000000, firstName:"Dilshod", lastName:"Valiyev"},
  {id:17, nickname:"Moon", selary:11300000, firstName:"Zarina", lastName:"Hamroyeva"},
  {id:18, nickname:"King", selary:14500000, firstName:"Islom", lastName:"Bekchanov"},
  {id:19, nickname:"Star", selary:9500000, firstName:"Rayhona", lastName:"Niyozova"},
  {id:20, nickname:"Flash", selary:10900000, firstName:"Sherzod", lastName:"Shomurodov"},
  {id:21, nickname:"Iron", selary:15800000, firstName:"Rustam", lastName:"Qodirov"},
  {id:22, nickname:"Sky", selary:10200000, firstName:"Asal", lastName:"Ziyayeva"},
  {id:23, nickname:"Neo", selary:11200000, firstName:"Aziza", lastName:"Sattorova"},
  {id:24, nickname:"Xan", selary:9900000, firstName:"Jahongir", lastName:"Normurodov"},
  {id:25, nickname:"Mix", selary:9300000, firstName:"Dilshoda", lastName:"Xoldorova"},
  {id:26, nickname:"Doc", selary:11900000, firstName:"Farrux", lastName:"Eshmatov"},
  {id:27, nickname:"Zuzu", selary:9800000, firstName:"Zubayda", lastName:"G‘aniyeva"},
  {id:28, nickname:"Turbo", selary:15000000, firstName:"Shuhrat", lastName:"Nasrullayev"},
  {id:29, nickname:"Fast", selary:8700000, firstName:"Komila", lastName:"Tojiboyeva"},
  {id:30, nickname:"NeoX", selary:13200000, firstName:"Javlon", lastName:"G‘ulomov"},
  {id:31, nickname:"Brain", selary:14900000, firstName:"Muxlisa", lastName:"Shirinova"},
  {id:32, nickname:"Bolt", selary:9500000, firstName:"Yusuf", lastName:"Husanov"}
];

const [users, setUsers] = useState(students)
const [oldusers, setoldUsers] = useState(students)

function fn(evt){
  let name =evt.target.value  
  
  if(name == ""){
    setUsers([...oldusers])
  }
  else {
     let user = users.filter(item => item.firstName.trim().toLowerCase().includes(name.toLowerCase().trim()))
    setUsers([...user]) 
   }
  
}
function sortCorrect(){
   let arr = users.sort((a,b) => a.selary - b.selary)
   setUsers([...arr])
}
function CreateFn(){
  let firstname = prompt("Yangi ism kiriting")
  let lastname = prompt("Yangi Familya  kiriting")
  let nicName = prompt("Yangi nicName kiriting")
  let selary = Number(prompt("Yangi oylik kiriting"))
   let obj = {
      id:oldusers.length,
      nickname:nicName,
      selary:selary,
      firstName:firstname,
      lastName:lastname
   }
   if(!obj.nickname || !obj.selary  || !obj.firstName || !obj.lastName){
      alert("Malumotlarni to'liq kiriting")
      return
   }
   else{
      setUsers([...oldusers,obj])

   }

}
function sortReverse(){
  let arr = users.sort((a,b) => b.selary - a.selary)
   setUsers([...arr])

}
function deleteFn(ind){
   users.splice(ind,1)
   setUsers([...users])
}
function UpdateFn(ind,id){
   let firstname = prompt("Yangi ism kiriting")
  let lastname = prompt("Yangi Familya  kiriting")
  let nicName = prompt("Yangi nicName kiriting")
  let selary = Number(prompt("Yangi oylik kiriting"))
   console.log(users[ind]);
   
  
    users[ind] = {
      id:id,
      nickname:nicName,
      selary:selary,
      firstName:firstname,
      lastName:lastname
   }
   
  if(!users[ind].nickname || !users[ind].selary  || !users[ind].firstName || !users[ind].lastName){
      alert("Malumotlarni to'liq kiriting")
        return
    }
      else{
        setUsers([...users])
   }

   
}
    return (
    <>
    <h2 className="text-[45px] md:text-[50px] text-center text-white mt-[20px]">Information about users</h2>
    <div className="flex flex-col mt-[50px] gap-[20px] text-center">
      <div className="flex justify-between items-center gap-[6px] md:gap-[20px] pl-[10px] pr-[20px] xl:px-[100px]">
        <input onInput={fn} className="  p-2 outline-none rounded-md text-white border-[1px] border-white w-[200px] md:w-[300px] placeholder:text-white" type="text" placeholder="Search name" name="name" autoComplete="off" />
        <img className="md:w-[30px] md:h-[30px]" onClick={sortCorrect} src={Logo1} alt="logo" width={20} height={20} />
        <img  className="md:w-[30px] md:h-[30px]" onClick={sortReverse} src={Logo2} alt="logo" width={20} height={20} />
        <button onClick={CreateFn} className="py-2 w-[150px] md:w-[200px] text-[14px] md:text-[20px] font-semibold bg-green-800 text-white rounded-md ">Create</button>
      </div>
      <div className="flex justify-between pr-[60px] md:pr-[100px]">
        <strong className="block w-[100px] mx-auto text-center text-[16px] md:text-[20px] text-white font-semibold">Ism</strong>
        <strong className="block w-[100px] mx-auto text-start text-[16px] md:text-[20px] text-white font-semibold">Familya</strong>
        <strong className="block w-[100px] mx-auto text-start text-[16px] md:text-[20px] text-white font-semibold">nickName</strong>
        <strong className="block  mx-auto text-center text-[16px] md:text-[20px] text-white font-semibold"> maosh</strong>
      </div>
     {users.map((item,ind) => 
      <div className="flex justify-between md:justify-center items-center  md:pl-[0px] w-full   md:gap-[20px] mx-auto border-[1px] border-white rounded-md">
        <p   className="text-[12px]  md:text-[20px] text-white font-semibold p-2 md:p-4 text-center w-[70px] md:w-[100px] mx-auto">{item.firstName}</p>
        <p   className="text-[12px]  md:text-[20px] text-white font-semibold p-2 md:p-4 text-center w-[70px] md:w-[100px] mx-auto">{item.lastName}</p>
        <p   className="text-[12px]  md:text-[20px] text-white font-semibold p-2 md:p-4 text-center w-[70px] md:w-[100px] mx-auto">{item.nickname}</p>
        <div  className="text-[12px]  md:text-[20px] text-white font-semibold p-2 md:p-4 text-center min-w-[100px] md:min-w-[200px] mx-auto flex items-center gap-[10px] md:gap-[20px]">
          <span>{item.selary}</span>
         <img onClick={() => deleteFn(ind)}  className="md:w-[20px] md:h-[20px]" src= {Logo3} alt="logo" width={15} height={15} />
         <img onClick={() => UpdateFn(ind,item.id)}  className="md:w-[20px] md:h-[20px]" src= {Logo4} alt="logo" width={15} height={15} />
          
        </div>
      </div>)}
    </div>
    </>
  )
}

export default App
