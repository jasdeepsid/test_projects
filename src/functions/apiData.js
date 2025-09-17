async function fetchData(url) {
    try {
     const response = await fetch(url);
     const data =response.json();
     return data;


    }catch(error){
    throw new Error(`There was a networking error: ${error}`);

    }
}

module.exports = { fetchData };