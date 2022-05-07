import './App.css';
import { useState,useEffect } from 'react';
//import {button} from "./button.jsx"

function App() {
  const [matkul, setMatkul] = useState ([
    {matakuliah: '', indeks:'4', sks:''},
  ])
  const [sumSks, setSks] = useState(0);
  const [sumNilai, setNilai] = useState(0);
  const [sumIpk, setIpk] = useState(0);

  let handleChange = (i) => (e) => {
    let newFormMatkul = [...matkul];
    newFormMatkul[i][e.target.name] = e.target.value;
    setMatkul(newFormMatkul);
  }

  let addMatkul = () => {
    setMatkul([...matkul, { matakuliah: '', indeks: '', sks:'' }])
  }

  let removeMatkul = (i) => {
    let newFormMatkul = [...matkul];
    newFormMatkul.splice(i, 1);
    setMatkul(newFormMatkul)
  }

//let handleSubmit = (event) => {
//event.preventDefault();
//}

  useEffect(() => {
    console.log("matkul", matkul);
    setNilai(matkul.reduce((a, v) =>(a = a + v.indeks * v.sks),0));
    setSks(matkul.reduce((a, v) =>(a = a + parseFloat(v.sks)),0));
  },[matkul]);

  useEffect(() => {
    console.log("sumNilai", sumNilai);
    console.log("sumSks", sumSks);
    console.log("IPK",(sumNilai/sumSks).toFixed(2));
    setIpk((sumNilai/sumSks).toFixed(2));
  },[sumNilai, sumSks]);

  //const addMatkul = (matakuliah) => {
  //  setMatkul([... matkul, {matakuliah}])
  //}

  //const matkulSubmit = (e) => {
  //  e.preventDefault();
  //  console.log(matkul);
  //  addMatkul(matkul);
  //}
  //const addMatkul = () => {
    //setMatkul([... matkul, {
      //id: item.length,
      //value: item.matkul
    //}])
  //}
     
  //function eventCreateMatkul(matkul) {
    //setMatkul.push(matkul);
    //console.log(matkul);
  //}

  return(
  <body>
  <head>
    <meta name="viewport" content="with=device-width, initial-scale=1.0"></meta>
    <title>IP Calculator</title>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Montserrat:wght@400;700&display=swap" rel="stylesheet"></link>
  </head>
  <section className='header'>
    <nav>
      <a>IP Calculator</a>
      <div class="nav-link">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="#home">IP Calc</a></li>
          <li><a href="#subjects">Subjects</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    </nav>
  </section>
  <section id="home">
  <div className='text-box'>
      <h1>IP Calculator</h1>
      <p>Website ini dibuat dengan memasukkan input indeks berdasarkan mata kuliah dengan beban SKS yang berbeda. 
        Fungsi website ini adalah sebagai acuan untuk para pengguna dalam menentukan target IPK kedepannya.</p>
      <a href="#home">IP Calculator</a>
      <a href="#subjects">Subjects</a>
  </div>
  </section>
    <div className="deskripsitabel">
    <h1>IP Calculator</h1>
      <table>
        <thead>
          <tr>
            <td rowSpan="2">Mata Kuliah</td>
            <td rowSpan="2">Indeks</td>
            <td rowSpan="2">SKS</td>
            <td rowSpan="2">Nilai x SKS</td>
          </tr>
        </thead>
        <tbody>
        {matkul.map((item,index) => (
        <tr>
          <td> 
            <input 
              name = 'matakuliah'
              type='text'
              value={item.matakuliah}
              onChange={handleChange(index)}
            />
           </td>                                    
          <td>
          <select 
              name = 'indeks'
              type='text'
              value={item.indeks}
              onChange={handleChange(index)}>
              <option value={4}>A</option>
              <option value={3.5}>AB</option>
              <option value={3}>B</option>
              <option value={2.5}>BC</option>
              <option value={2}>C</option>
              <option value={1}>D</option>
              <option value={0}>E</option>
            </select>
          </td>
          <td>
          <input 
              name = 'sks'
              type='number'
              value={item.sks}
              onChange={handleChange(index)}
            />
          </td>
          <td>{item.indeks * item.sks}</td>
        </tr>
        ))
        }
        </tbody>
      </table>
      <div>
        <p> total nilai = {sumNilai} </p>
        <p> IPK = {sumIpk} </p>
      </div>
      <input 
        className={'btn2'}
        type = "submit"
        value = "Add"
        onClick = {addMatkul} />
      <button 
        className={'btn1'}
        type="button"
        onClick={() => removeMatkul(matkul)}>
      Remove 
      </button>
    </div>
    <section id="subjects">
    <div className="subjects"> 
    <h1>Mata Kuliah Pilihan Dalam</h1>
     <img src={require('./tk2.png')} height={300} width={1100} className='centerImage'/>
     <img src={require('./tk3.png')} height={300} width={1100} className='centerImage'/>
     <img src={require('./tk4.png')} height={300} width={1100} className='centerImage'/>
    </div>
    <div className="subjects">
    <h1>Mata Kuliah Pilihan Luar</h1>  
     <img src={require('./pildal.png')} height={500} width={800} className='centerImage'/>
    </div>
    </section>
    
    <section id="about">
    <div className='about'>
      <h1>About</h1>
      <img src={require('./icul.png')} className='cardname'/>
      <p>Halo, website ini dibuat sebagai hasil dari tugas besar LTKA yang dibuat oleh <b>Husnul Azizah Nurrahmah(18118024)</b>. Selamat menggunakan fitur ini! </p>
    </div>
    </section>
  </body>
  )
}
  

export default App;
