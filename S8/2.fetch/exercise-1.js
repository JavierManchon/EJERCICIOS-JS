const getData = async () => {
    try {let response = await fetch("https://api.agify.io?name=michael");
        let data = await response.json();
        return data;
    } catch(error) {
        console.error("Ha habido un error", error);
    }
}

const loggingData = async () => {
    let data = await getData();
    console.log(data);
}

loggingData();