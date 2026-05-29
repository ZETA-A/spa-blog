/**
 * 날씨 정보를 가져오는 함수
 * @returns {emoji: string, temp: string} 해당 날씨 이모지와 온도 정보가 담긴 객체
 */
async function fetchWeather() {
    try {
        const url = 'https://wttr.in/seoul.json?format=1';
        const response = await fetch(url);
        const data = await response.text();
        let split = data.split(' ');
        const obj = {
            emoji: split[0],
            temp: split[2].replace('\n', '').replace('+', ''),
        };
        console.log(obj);
        return obj;
    } catch (error) {
        console.error('날씨 정보를 가져오는 중 오류 발생:', error);
        return {
            emoji: '🚫',
            temp: 'N/A',
        };
    }
}
