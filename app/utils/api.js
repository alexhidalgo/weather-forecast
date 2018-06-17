const APPID = '77b2d9c4cfc4b84e249851826525279a'
export async function fetchCity (city) {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},us&mode=json&APPID=${APPID}`)
  console.log(response.json())
}
