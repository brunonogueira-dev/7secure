import {useEffect, useState} from "react";
import {Button, Modal, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {GetPackages} from "../../slices/PackagesSlice";

const ViewPackagesUpgradable = ({dataHost}) => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const [indexArr, setIndexArr] = useState([]);

    const {getPackages: getData} = useSelector((state) => state.packages);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if(show){
            dispatch(GetPackages());
        }else{
            setIndexArr( []);
            setNewData([])
        }
    }, [show]);

    useEffect(() => {
        if(getData !== null){
            dataHost.packages_upgradable.map((arr) => {
                getData.map((packages) => {
                    if(arr === packages.id ){
                            setIndexArr(packages.id)
                            setNewData(prevState => [...prevState, packages]);
                    }
                })
            })
        }


    }, [getData])

    console.log(indexArr)
    return (
        <>
            <Button variant="primary btn-sm" onClick={handleShow}>
                View Pack. Upgradable
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Packages Upgradable</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="col">
                        <Table striped bordered hover size="sm">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Version</th>
                            </tr>
                            </thead>
                            <tbody>
                            {newData && newData.length > 0 && newData.map((item)=> (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.version}</td>
                                </tr>
                            ))}

                            </tbody>
                        </Table>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ViewPackagesUpgradable;