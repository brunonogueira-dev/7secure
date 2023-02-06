import ListHosts from "../../components/hosts/ListHosts";
import CreateHosts from "../../components/hosts/CreateHosts";
import {useState} from "react";
import ListPackages from "../../components/packages/ListPackages";

const PagePackages = () => {



    return (
        <>
            <div className="container mt-4">
                <div className="col-12 table-scroll">
                    <ListPackages />
                </div>
            </div>
        </>
    )
}

export default PagePackages;