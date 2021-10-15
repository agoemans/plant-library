//todo toggle between production and dev
const url = "http://localhost:3000";

let requestOptions: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '',
    mode: 'cors'
};

export const getCompanions = async () => {
    const companions = await fetch(`${url}/api/companions`);

    return companions.text();
};

export const getCropRotationList = async () => {
    const crops = await fetch(`${url}/api/rotation`);

    return crops.text();
};

export const getCalendarItems = async () => {
    const calendarItems = await fetch(`${url}/api/calendar`);

    return calendarItems.text();
};