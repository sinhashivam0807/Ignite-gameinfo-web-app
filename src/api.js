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
const popular_games=`games?key=72cdfee883ab4982954f39e1b0035d86&date=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games=`games?key=72cdfee883ab4982954f39e1b0035d86&date=${currentDate},${nextYear}&ordering=-added&page_size=10`
const newGames=`games?key=72cdfee883ab4982954f39e1b0035d86&date=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL=()=> `${base_url}${popular_games}`
export const upcomingGamesURL=()=> `${base_url}${upcoming_games}`
export const newGamesURL=()=> `${base_url}${newGames}`

//Game Details
export const gameDetailsURL=(game_id)=>`${base_url}games/${game_id}?key=72cdfee883ab4982954f39e1b0035d86`
//Screenshots
export const gameScreenshotURL=(game_id)=>`${base_url}games/${game_id}/screenshots?key=72cdfee883ab4982954f39e1b0035d86`
