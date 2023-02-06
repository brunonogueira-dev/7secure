import {api, requestConfig} from "../utils/config";

const GetAllPackages = async () => {
    const config = requestConfig("GET", null);
    try {
        const res = await fetch(api + "/packages/", config)
            .then(res => res.json())
            .catch((e) => e);
        return res;
    }catch (e){
        console.log(e)
    }
}

const CreatePackages = async (data) => {
    const config = requestConfig("POST", data);

    try {
        const res = await fetch(api + "/packages/", config)
            .then(res => res.json())
            .catch((e) => e);
        return res;
    }catch (e) {
        console.log(e)
    }
}

const PackagesService = {
    GetAllPackages,
    CreatePackages
}

export default PackagesService;