import {Modal, Button} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createHosts} from "../../slices/HostsSlice";

const CreateHosts = ({childUpdateList}) => {

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const [hostname, setHostname] = useState("");
    const [ipv4, setIpv4] = useState("");
    const [ipv6, setIpv6] = useState("");
    const [macaddress, setMacAddress] = useState("");
    const [description, setDescription] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        const host = {
            hostname,
            description,
            macaddress,
            ipv4,
            ipv6,
            created_at: new Date(),
            updated_at:  new Date(),
            packages: [],
            packages_upgradable: [],
            packages_hold: []
        }
        dispatch(createHosts(host));
        childUpdateList(true);
        setShow(false);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Novo Hosts
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Novo Host</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="hostname" className="form-label">Hostname</label>
                            <input type="text" className="form-control" id="hostname"
                                   onChange={(e) => setHostname(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ipv4" className="form-label">Ipv4</label>
                            <input type="text" className="form-control" id="ipv4"
                                   onChange={(e) => setIpv4(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ipv6" className="form-label">Ipv6</label>
                            <input type="text" className="form-control" id="ipv6"
                                   onChange={(e) => setIpv6(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="MACAddress" className="form-label">MAC Address</label>
                            <input type="text" className="form-control" id="MACAddress"
                                   onChange={(e) => setMacAddress(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="MACAddress" className="form-label">Description</label>
                            <input type="text" className="form-control" id="MACAddress"
                                   onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default CreateHosts;