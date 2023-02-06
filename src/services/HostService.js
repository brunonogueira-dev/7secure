import {api, requestConfig} from "../utils/config";

const getByIdHost = async (data) => {
    const config = requestConfig("GET", null);
    try{
        const res = await fetch(api + `/host/${data}`, config)
            .then(res => res.json())
            .catch((e)=> e);

        return res;
    }catch (e){
        console.log(e)
    }
}

const updateHost = async (data) => {
    const config = requestConfig("PUT", data);
    try{
        const res = await fetch(api + `/host/${data.id}`, config)
            .then(res => res.json())
            .catch((e)=> e);

        return res;
    }catch (e){
        console.log(e)
    }
}

const patchHost = async (data) => {
    const config = requestConfig("PATCH", data);
    try{
        const res = await fetch(api + `/host/${data.id}`, config)
            .then(res => res.json())
            .catch((e)=> e);

        return res;
    }catch (e){
        console.log(e)
    }
}

const deletehHost = async (data) => {
    const config = requestConfig("DELETE", null);
    try{
        const res = await fetch(api + `/host/${data}`, config)
            .then(res => res.json())
            .catch((e)=> e);

        return res;
    }catch (e){
        console.log(e)
    }
}
const HostService = {
    getByIdHost,
    updateHost,
    patchHost,
    deletehHost
}

export default HostService;