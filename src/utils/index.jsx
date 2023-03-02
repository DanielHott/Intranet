export const consultSorted = (link) => {
    const url = `https://api.sorteador.com.br/api/search/detail/${link}`
    try {
    const request = fetch(url, {
        method: 'GET',
          headers: {'Content-Type': 'application/json'},
        })
    const result = request.then((response) => response.json())
    return result;
    }    catch(err) {
        return err
    }
}