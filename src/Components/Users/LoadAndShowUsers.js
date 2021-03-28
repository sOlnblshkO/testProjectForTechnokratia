import React, { useState, useEffect } from 'react'
import './SingleUser.css'
import './Users.css'
import config from '../../AppConfiguration.json'
import 'moment/locale/ru'
import moment from 'moment'
import DropDownItems from './ActionsDropDownItems'
import ShowModal from './ShowModal'

function LoadUsers() {
  const [data, setData] = useState([]);
  const [active, setModalActive] = useState(false);
  const [selectedUser, setUser] = useState();

  const getData = () => {
    fetch(config.server)
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])

  function showModal(user) {
    console.log("I`m trying to show");
    setModalActive(true);
    setUser(user);
    
  }

  return (
    <div className="fullInfo">
      <ShowModal  user={selectedUser} active={active} setActive ={setModalActive} />
      {
        data.map((item) => {
          return item.status === config.type || config.type === config.all ?
            <div key={item.id} className="card" onClick={() => showModal(item)}>
              <img src={item.avatar} alt="error"></img>
              <ul className='name-ul'>
                <li>{item.fname}</li>
                <li className='name'> {item.name.charAt(0)}.</li>
                <li className='mname'> {item.mname.charAt(0)}.</li>
              </ul>
              <ul>
                <li className="balance">Баланс: {Intl.NumberFormat('ru-RU').format(Math.round(item.balance * 100) / 100)}</li>
              </ul>
              <ul className='lastChangeAndAction'>
                <li className='action' onClick={e => e.stopPropagation()}>
                  <DropDownItems title={
                    item.status === 0
                      ? "Подписка активна"
                      : item.status === 1
                        ? "Заблокирован"
                        : "Приостановлен"
                  } user={item} />
                </li>
                <li className='lastChange'>Последнее изменение: {moment(item.lastUpdatedAt).locale('ru').fromNow()}</li>

              </ul>
            </div>
            : <div key={item.id}> </div>
        }
        )
      }
    </div>
    
  );
}


export default LoadUsers;