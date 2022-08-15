const api_key=process.env.REACT_APP_RAWG_API_KEY
const base_url="https://api.rawg.io/api/"

//Month
const getCurrentMonth=()=>{
    const month=new Date().getMonth()+1;
    if(month<10){
        return `0${month}`
    }
    else{
        return month
    }
};

//Day
const getCurrentDay=()=>{
    const day=new Date().getDay();
    if(day<10){
        return `0${day}`
    }
    else{
        return day
    }
};

//year
const currentYear=new Date().getFullYear();
const currentMonth=getCurrentMonth();
const currentDay=getCurrentDay();
const currentDate=`${currentYear}-${currentMonth}-${currentDay}`
const lastYear=`${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear=`${currentYear+1}-${currentMonth}-${currentDay}`

//popular games
const popular_games=`games?key=api_key&date=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGamesUrl=()=> `${base_url}${popular_games}`

