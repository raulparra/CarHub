

export async function fetchCars () {

    const headers = {
		'X-RapidAPI-Key': '9d38aa02d5msh91ddad80a8bfd7fp167ee7jsn03f47c32dfd0',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    try{

        const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers,});
    
        const result = await response.json();
        return result;

    }catch (error){

        console.log(error)
    }
}