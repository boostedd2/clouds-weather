import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [fullTime, setFullTime] = useState('')

  let date, hour, minute, dateTime, amPm
  
  const months = { 
    1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 
    5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 
    9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'
  }

  const civilianHour = n => n > 12 ? n-12 : n
  const civilianMinute = n => n < 10 ? "0" + n : n
  
  useEffect(() => {
    const interval = setInterval(() => {
      var today = new Date()

      amPm = today.getHours() >= 12 ? "PM" : "AM"
  
      date = months[(today.getMonth()+1)]+'. '+today.getDate()+', '+today.getFullYear()
      hour = civilianHour(today.getHours())
      minute = civilianMinute(today.getMinutes())
      
      dateTime = `${hour}:${minute} ${amPm} | ${date}`
      setFullTime(dateTime)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  
    return(
      <div>{fullTime}</div>
    )
}

export default Clock;