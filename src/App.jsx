//外部資源 node_modules
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Modal } from 'bootstrap'

//內部資源 src 裡面的
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const { VITE_APP_DAVID } = import.meta.env;

function App() {
  const [products, setProducts] = useState([]);
  const modalRef = useRef(null);
  const customerModal = useRef(null);


  //axios要放在useEffect裡 axios是非同步的    
  //方法1
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://livejs-api.hexschool.io/api/livejs/v1/customer/marcochiu/products');
        //console.log(response.data.products);
        setProducts(response.data.products);

        //console.log(VITE_APP_DAVID);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  //方法2 
  // useEffect(() => {
  //   axios.get('https://livejs-api.hexschool.io/api/livejs/v1/customer/marcochiu/products')
  //     .then(response => {  //       
  //       setProducts(response.data.products);   
  //     })
  //     .catch(error => console.error(error));
  // }, []); 

  useEffect(() => {
    customerModal.current = new Modal(modalRef.current);//初始化modal
  }, []);

  const modalOpen = () => {
    customerModal.current.show();
  }

  const modalClose = () => {
    customerModal.current.hide();
  }

  return (
    <>
      <div>

        <h2>.env {VITE_APP_DAVID} </h2>

        <h2>React 呼叫Bootstrap Modal</h2>
        <div>
          <button type="button" className="btn btn-primary" onClick={modalOpen} >
            bootstrap Modal demo
          </button>
          <div className="modal fade" ref={modalRef} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">標題</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-start">
                  <div>1.修改class變className </div>
                  <div>2.main.jsx import 'bootstrap' </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={modalClose}>關閉</button>
                  <button type="button" className="btn btn-primary">存檔</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2>產品列表</h2>
        { /*  
        左 && 右：左真 → 回右，左假 → 回左  
        左 || 右：左真 → 回左，左假 → 回右 
        products沒筆數 Loading...出現
        */}
        {products.length === 0 && <p>Loading…</p>}
        {products.map(p => (
          <div key={p.id} style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
            <h2>{p.title}</h2>
            <img src={p.images} alt={p.title} style={{ width: "200px", height: "auto" }} />
            <p>分類：{p.category}</p>
            <p>{p.description}</p>
            <p>原價：{p.originPrice}</p>
            <p>售價：<strong>{p.price}</strong></p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
