import ListHosts from "../../components/hosts/ListHosts";
import CreateHosts from "../../components/hosts/CreateHosts";
import {useState} from "react";

const PageHosts = () => {



    return (
        <>
            <div className="container mt-4">
                <div className="col-12 table-scroll">
                    <ListHosts />
                </div>
            </div>
        </>
    )
}

export default PageHosts;