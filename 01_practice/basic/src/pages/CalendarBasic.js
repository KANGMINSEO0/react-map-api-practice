import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
// import moment from 'moment';
import * as moment from 'moment-timezone';
import 'react-calendar/dist/Calendar.css'   // css import
import styles from './CalendarBasic.module.css';

function CalendarBasic() {
    const [date, setDate] = useState(new Date());
    console.log(`현재 날짜와 시간: ${moment().format('YYYY년 MM월 DD일')}`);
    console.log(`Date : ${date}`);
    const formattedDate = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`;
    console.log(formattedDate);
    const [count, setCount] = useState(0);
    const [bookTime, setBookTime] = useState('');

    useEffect(() => {
        return () => {
            console.log('clean-up...')
        }
    })

    const onClickPlus = () => {
        setCount(count + 1);
    }

    const onClickMinus = () => {
        const count2 = (count > 0)? count - 1 : 0;
        setCount(count2); 
    }
    console.log(`입력하신 인원은 ${count}명 입니다.`);

    return (
        <div className={styles.calendarBox}>
            <Calendar className={styles.calendar} onChange={setDate} value={date} 
                formatDay={(locale, date) => moment(date).format("DD")} 
                calendarType='gregory' prev2Label={null} next2Label={null}
                showNeighboringMonth={false}/>
            {/* <p>
                <span className='bold'>Selected Date : </span>{' '}
                {date.toDateString()}
            </p> */}
            <div className={styles.line}>
                <hr/>
            </div>
            <div className={styles.numberText}>
                <p>인원</p>
            </div>
            <div className={styles.countBox}>
                <button id={styles.countButton} onClick={onClickMinus}>-</button>
                <div>
                    <p>&nbsp;{count}&nbsp;</p>
                </div>
                <button id={styles.countButton} onClick={onClickPlus}>+</button>
            </div>
            <div  className={styles.timeBox}>
                <button className={styles.timeButton}>오후 6:00</button>
                <button className={styles.timeButton}>오후 6:30</button>
                <button className={styles.timeButton}>오후 7:00</button>
                <button className={styles.timeButton}>오후 7:30</button>
                <button className={styles.timeButton}>오후 8:00</button>
            </div>
            <button className={styles.closeButton}>닫기</button>
            {/* <div>{formattedDate}</div> */}
            {/* <div className="text-gray-500 mt-4">{moment(date).format('YYYY년 MM월 DD일')}</div> */}
        </div>
    );
}

export default CalendarBasic;