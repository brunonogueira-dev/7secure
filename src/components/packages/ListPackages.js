import {Button, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteHost} from "../../slices/HostSlice";
import UpdateHost from "../host/UpdateHost";
import CreateHosts from "./CreateHosts";
import {GetPackages} from "../../slices/PackagesSlice";
import ViewPackagesUpgradable from "./ViewPackagesUpgradable";

const ListPackages = () => {

    const dispatch = useDispatch();

    const {getPackages: getData, success} = useSelector((state) => state.packages);



    const [res, setRes] = useState(false);
    const [response, setResponse] = useState(false);

    const childUpdateList = (res) => {
        setRes(res)
    }

    const handleDelete = async (e, id) =>{
        e.preventDefault();
        if (window.confirm("Deseja deletar o host: " + id)) {
         await dispatch(deleteHost(id));
        }
        setRes(true);
    }

    useEffect(() => {
        if(res){
            setResponse(true)
            setRes(false);
        }
    }, [res])
    useEffect(() => {
        dispatch(GetPackages());
        setResponse(false);
        }, [response]
    )

    useEffect(() => {
        dispatch(GetPackages());
    }, [dispatch]);

    return (
        <>
            <div className="col-12 mb-4">
                <div className="row justify-content-end">
                    <div className="col-auto">
                        <CreateHosts childUpdateList={childUpdateList}/>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Version</th>
                        <th colSpan={3}>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getData && getData !== null && getData.map((data)=>(
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.version}</td>
                            <td><UpdateHost id={data.id} childUpdateList={childUpdateList}/></td>
                            <td><Button variant="danger btn-sm" onClick={(e) => {handleDelete(e, data.id)}}>Deletar</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
    </>

    );
}

export default ListPackages;