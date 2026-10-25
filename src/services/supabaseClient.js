const baseUrl = 'https://pntezrlzpnvbmxjltaqr.supabase.co/rest/v1/users'
const apiKey = 'sb_publishable_1YnOAlXkaINLpwxGrT8QNg_-ssIpzlT';

export default async function request(path='/', method ="GET", data = null){

    const options = {
        headers: {
            'apikey': apiKey,
            'Authorization': `Bearer ${apiKey}`,
        }
    };

    if ( method !== "GET" ){
        options.method = method
    }

    if (data){
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    const response = await fetch(`${url}${path}`, options);

    if (!response){
        throw new Error(`Error: ${response.status}`)
    }

    if ([201, 204].includes(response.status)){
        return null;
    }

    return response.json();
}