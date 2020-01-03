const Log = (data) => {
    let { name, id } = data;
    console.log(`Person name is ${name} and id is ${id}`)
}

const logger = ({name,id}) =>{
    console.log(`Person name is ${name} and id is ${id}`)
}

const a = {
    name: 'Bharath Kumar S',
    id: 60108696,
    mobile: 9003045843,
    mail: 'bharathkumarkarthick@gmail.com'
}

Log(a);
logger(a);