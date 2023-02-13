import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataSelector } from '../../Services/slice/data';
import { getData } from '../../Services/WebSocet';
import styles from "./Error.module.css";

function Error() {

  return (
    <div className={styles.Error}>
      <p className={styles.Error_text}>Ошибка</p>
    </div>
  );
}

export default Error;
