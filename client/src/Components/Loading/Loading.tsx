import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataSelector } from '../../Services/slice/data';
import { getData } from '../../Services/WebSocet';
import styles from "./Loading.module.css";

function Loading() {

  return (
    <div className={styles.Loading}>
      <p className={styles.Loading_text}>Загрузка...</p>
    </div>
  );
}

export default Loading;
