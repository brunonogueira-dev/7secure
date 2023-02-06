import {api, requestConfig} from "../utils/config";

const GetAllHosts = async () => {
    const config = requestConfig("GET", null);

    try {
        const res = await fetch(api + "/hosts/", config)
            .then(res => res.json())
            .catch((e) => e);
        return res;
    }catch (e) {
        console.log(e)
    }
}

const CreateHosts = async (data) => {
    const config = requestConfig("POST", data);

    try {
        const res = await fetch(api + "/hosts/", config)
            .then(res => res.json())
            .catch((e) => e);
        return res;
    }catch (e) {
        console.log(e)
    }
}

const HostsService = {
    GetAllHosts,
    CreateHosts
}

export default HostsService;