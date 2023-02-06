import {Button, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getByIdHost, updateHost} from "../../slices/HostSlice";
import {createHosts} from "../../slices/HostsSlice";
import data from "bootstrap/js/src/dom/data";

const UpdateHost = ({id, childUpdateList}) => {

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const [hostname, setHostname] = useState("");
    const [description, setDescription] = useState("");
    const [macaddress, setMacaddress] = useState("");
    const [ipv4, setIpv4] = useState("");
    const [ipv6, setIpv6] = useState("");
    const [created_at, setCreated_at] = useState("");
    const [packages, setPackages] = useState("");
    const [packagesUpgradable, setPackagesUpgradable] = useState("");
    const [packagesHold, setPackagesHold] = useState("");

    const handleSubmit = () => {
        const host = {
            id,
            hostname,
            description,
            macaddress,
            ipv4,
            ipv6,
            created_at,
            updated_at: new Date().toISOString(),
            packages,
            packages_upgradable: packagesUpgradable,
            packages_hold: packagesHold
        }
        dispatch(updateHost(host));
        childUpdateList(true);
        setShow(false);
    }

    const {getHost: getData} = useSelector((state) => state.host);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        if(show){
            dispatch(getByIdHost(id));
        }
    },[show])

    useEffect(() =>{
        if(getData !== null){
            setHostname(getData.hostname);
            setDescription(getData.description);
            setMacaddress(getData.macaddress);
            setIpv4(getData.ipv4);
            setIpv6(getData.ipv6);
            setCreated_at(getData.created_at);
            setPackages(getData.packages);
            setPackagesHold(getData.packages_hold)
            setPackagesUpgradable(getData.packages_upgradable)
        }
    }, [getData])
    return (
        <>
            <Button variant="warning btn-sm" onClick={handleShow}>
                Alterar
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="hostname" className="form-label">Hostname</label>
                            <input type="text" className="form-control" id="hostname"
                                   onChange={(e) => setHostname(e.target.value)} value={hostname || "Carregando..."}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ipv4" className="form-label">Ipv4</label>
                            <input type="text" className="form-control" id="ipv4"
                                   onChange={(e) => setIpv4(e.target.value)} value={ipv4 || "Carregando..."}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ipv6" className="form-label">Ipv6</label>
                            <input type="text" className="form-control" id="ipv6"
                                   onChange={(e) => setIpv6(e.target.value)} value={ipv6}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="MACAddress" className="form-label">MAC Address</label>
                            <input type="text" className="form-control" id="MACAddress"
                                   onChange={(e) => setMacaddress(e.target.value)} value={macaddress || "Carregando..."}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="MACAddress" className="form-label">Description</label>
                            <input type="text" className="form-control" id="MACAddress"
                                   onChange={(e) => setDescription(e.target.value)} value={description}/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>Atualizar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default UpdateHost;