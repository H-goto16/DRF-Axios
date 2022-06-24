import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

type Data = {
  name: string;
  price: number
}
export const App = () => {
  const [inputValue, setInputvalue] = useState("");
  const [text, setText] = useState<any>([]);

  type Text = {
    inputValue :string;
  }

  const urlAPI = "http://localhost:8000/products/products/";
  const [datas, setDatas] = useState([]);
  console.log(axios.defaults.baseURL)
  useEffect( () => {
    axios.get(urlAPI).then((res)=> {
      setDatas(res.data);
    })
  },[])
  console.log(datas)

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    console.log(e.target.value)
    setInputvalue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newText :any = {
      inputValue:inputValue,
    };
    setInputvalue("")
    setText([newText,...text])
    console.log(text)
  }

  return (
    <main className="container">
      <p className="title">簡易掲示板</p> 
      <p className="text">こちらは簡易掲示板のサイトとなります。ログインを行うことで投稿名が自動的に入力されます。登録していない場合はAnonumousUserと表示されます。</p>
      <p><a href="" className="link">サインアップ</a></p>
      <p><a href="" className="link">ログイン</a></p>
      <form onSubmit={(e) => {handleSubmit(e)}} action="" method="post">
        <textarea name="comment"onChange={(e) => handleChange(e)} className="form-control">
        </textarea>
        <input type="submit" value="送信" className="comit" />
      </form>
      <div>

        {datas.map((data: Data) => (
          <div className='dis'>{data.name} : {data.price}</div>
          ))}
      </div>
      &nbsp;
    </main>
    
    );}
export default App;