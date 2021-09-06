const apiKey:string = process.env.API_KEY;
const baseUrl: string = `http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=/${apiKey}&large_area=Z011`

export const fetchAll = async() => {
    const data = await fetch(`${baseUrl}`)
    .then(res => res.json())
    .catch(() => null)

    return data
}