export const getListProducts = async () =>{
    const results = await fetch("http://localhost:3001/data")
    return results.json()
}