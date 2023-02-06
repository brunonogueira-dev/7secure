import {Button, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {GetHosts} from "../../slices/HostsSlice";
import {deleteHost} from "../../slices/HostSlice";
import UpdateHost from "../host/UpdateHost";

const ListHosts = ({search}) => {

    const dispatch = useDispatch();

    const {getHosts: newData, success} = useSelector((state) => state.hosts);

    const handleDelete = (e, id) =>{
        e.preventDefault();
        if (window.confirm("Deseja deletar o host: " + id)) {
         dispatch(deleteHost(id));
        }
    }

    useEffect(() => {
        dispatch(GetHosts());
    }, [dispatch]);

    return (
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>#</th>
                <th>Hostname</th>
                <th>IPv4</th>
                <th>IPv6</th>
                <th>MAC Address</th>
                <th>Packages</th>
                <th>Pack. Hold</th>
                <th>Pack. Upgradable</th>
                <th colSpan={2}>Ações</th>
            </tr>
            </thead>
            <tbody>
            {newData && newData !== null && newData.map((data)=>(
                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.hostname}</td>
                    <td>{data.ipv4}</td>
                    <td>{data.ipv6}</td>
                    <td>{data.macaddress}</td>
                    <td>{data.packages.length}</td>
                    <td>{data.packages_hold.length}</td>
                    <td>{data.packages_upgradable.length}</td>
                    <td><UpdateHost id={data.id} /></td>
                    <td><Button variant="danger btn-sm" onClick={(e) => {handleDelete(e, data.id)}}>Deletar</Button></td>
                </tr>
            ))}

            </tbody>
        </Table>
    );
}

export default ListHosts;