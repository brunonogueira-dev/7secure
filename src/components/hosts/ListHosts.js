import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {GetHosts} from "../../slices/HostsSlice";

const ListHosts = ({search}) => {

    const dispatch = useDispatch();

    const {getHosts: newData, success} = useSelector((state) => state.hosts);

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
                <th>Description</th>
                <th>Packages</th>
                <th>Pack. Hold</th>
                <th>Pack. Upgradable</th>
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
                    <td>{data.description}</td>
                    <td>{data.packages.length}</td>
                    <td>{data.packages_hold.length}</td>
                    <td>{data.packages_upgradable.length}</td>
                </tr>
            ))}

            </tbody>
        </Table>
    );
}

export default ListHosts;