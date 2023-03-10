import {Button, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {GetHosts} from "../../slices/HostsSlice";
import {deleteHost} from "../../slices/HostSlice";
import UpdateHost from "../host/UpdateHost";
import CreateHosts from "./CreateHosts";
import ViewPackagesUpgradable from "../packages/ViewPackagesUpgradable";

const ListHosts = () => {

    const dispatch = useDispatch();

    const {getHosts: newData, success} = useSelector((state) => state.hosts);

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
        dispatch(GetHosts());
        setResponse(false);
        }, [response]
    )

    useEffect(() => {
        dispatch(GetHosts());
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
                        <th>Hostname</th>
                        <th>IPv4</th>
                        <th>MAC Address</th>
                        <th>Packages</th>
                        <th>Pack. Hold</th>
                        <th>Pack. Upgradable</th>
                        <th colSpan={3}>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {newData && newData !== null && newData.map((data)=>(
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.hostname}</td>
                            <td>{data.ipv4}</td>
                            <td>{data.macaddress}</td>
                            <td>{data.packages.length}</td>
                            <td>{data.packages_hold.length}</td>
                            <td>{data.packages_upgradable.length}</td>
                            <td><UpdateHost id={data.id} childUpdateList={childUpdateList}/></td>
                            <td><ViewPackagesUpgradable dataHost={data}/></td>
                            <td><Button variant="danger btn-sm" onClick={(e) => {handleDelete(e, data.id)}}>Deletar</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
    </>

    );
}

export default ListHosts;