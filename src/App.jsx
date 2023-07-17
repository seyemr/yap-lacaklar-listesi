import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { listeyeEkle, isaretle, temizle } from './actions';

const App = (props) => {
  const [text, setText] = useState('');

  return (
    <div className="App form-group form-control py-5 ">
      <h1 className='text-primary'>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input className='text-dark bg-white border border-dark  rounded' placeholder="listeye ekle" value={text} onChange={(e) => setText(e.target.value)} />
        <button className='btn btn-danger text-white' onClick={() => {
          setText('');
          props.listeyeEkle(text);
        }}>
          Ekle
        </button>
      </div>
      <div className="liste">
        {props.liste.map((item) => (
          <div onClick={() => props.isaretle(item.id)} key={item.id} className={item.tamamlandi ? 'yapildi' : ''}>
            {item.baslik}
          </div>
        ))}
      </div>
      <button className="temizle btn btn-warning" onClick={()=> props.temizle()}>Tamamlananları Temizle</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    liste: state.liste,
  };
};

export default connect(mapStateToProps, { listeyeEkle, isaretle, temizle })(App);
