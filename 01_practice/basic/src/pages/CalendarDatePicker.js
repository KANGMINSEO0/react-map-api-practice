import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
// import { ko } from 'date-fns/esm/locale';
import ko from 'date-fns/locale/ko'
import 'react-datepicker/dist/react-datepicker.css';
import styles from './CalendarDatePicker.module.css';

registerLocale('ko', ko);

function CalendarDatePicker() {

    const dateNow = new Date();
    const today = dateNow.toISOString().slice(0, 10);
    const [startDate, setStartDate] = useState(dateNow);

    return (
        <div className={styles.datePickerBox}>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy-MM-dd"
                inputProps={{ min: today}}
                inputLa
                locale='ko'
                />
        </div>
   
    );
}

export default CalendarDatePicker;