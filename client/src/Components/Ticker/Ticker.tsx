import styles from "./Ticker.module.css";
import { Instrument } from '../../Utils/Enums'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataSelector } from "../../Services/slice/data";

//Функциональный комонент, который отрисовывает Тикер
function Ticker() {

  const dispatch = useDispatch();
  //Получаем данные из redux
  const { data1, connectionLoading, connectionError, connectionSuccess, dataSuccess } = useSelector(dataSelector);

  //Создаем state для изменения и валидации input
  const [count, setCount] = useState("");
  const [optionValue, setoptionValue] = useState("CHY/RUB");

  //Фукция валидации и записи числа в input
  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    isNumeric(e.target.value)
    //проверка на то, чтобы строкаа была числом и регулировка ее длины
    if ((isNumeric(e.target.value) || e.target.value === "") && e.target.value.length < 8) {
      setCount(e.target.value)
    }
  }

  //проверка является ли строка числом
  function isNumeric(value: string) {
    return /^-?\d+$/.test(value);
  }

  function handleChangeOption(e: any) {
    // console.log(e.target.value)
    if (e.target.value === "CHY/RUB") {
      setoptionValue("CHY/RUB")
    } else if (e.target.value === "EUR/RUB") {
      setoptionValue("EUR/RUB")
    } else if (e.target.value === "USD/RUB") {
      setoptionValue("USD/RUB")
    } else if (e.target.value === "TRY/RUB") {
      setoptionValue("TRY/RUB")
    } else if (e.target.value === "BYN/RUB") {
      setoptionValue("BYN/RUB")
    } else {
    }
  }
console.log(data1)

  return (
    <div className={`${styles.Ticker}`}>
      <div className={`${styles.Ticker_header}`}>
        {/* Выпадюющий список для выбора актива */}
        <select onChange={e => handleChangeOption(e)} value={optionValue}
          className={`${styles.Ticker_header_option}`}>
          <option>CHY/RUB</option>
          <option>EUR/RUB</option>
          <option>USD/RUB</option>
          <option>TRY/RUB</option>
          <option>BYN/RUB</option>
        </select>
        <input value={count} onChange={e => handleChangeInput(e)}
          className={`${styles.Ticker_header_input}`}></input>
        <div className={`${styles.Ticker_header_amount}`}></div>
      </div>
      <div className={`${styles.Ticker_bottom}`}>
        <div className={`${styles.Ticker_bottom_box} ${styles.Ticker_bottom_sell}`}>
          <p className={`${styles.Ticker_bottom_price_sell} ${styles.Ticker_bottom_price}`}>
            {/* Курс выбранного актива, умножанный на количество */}
            {data1 && data1.rateSell[optionValue] * Number(count)}
          </p>
          <button className={`${styles.Ticker_bottom_button} ${styles.Ticker_bottom_button_sell}`}>
            <p className={`${styles.Ticker_bottom_button_text}`}>SELL</p>
          </button>
        </div>
        <div className={`${styles.Ticker_bottom_box} ${styles.Ticker_bottom_buy}`}>
          <p className={`${styles.Ticker_bottom_price_buy} ${styles.Ticker_bottom_price}`}>
            {/* Курс выбранного актива, умножанный на количество */}
            {data1 && data1.rateBuy[optionValue] * Number(count)}
          </p>
          <button className={`${styles.Ticker_bottom_button} ${styles.Ticker_bottom_button_buy}`}>
            <p className={`${styles.Ticker_bottom_button_text}`}>BUY</p>
          </button>
        </div>

      </div>
    </div>
  );
}


export default Ticker;
