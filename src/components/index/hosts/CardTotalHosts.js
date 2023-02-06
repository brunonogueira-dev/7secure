import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {GetHosts} from "../../../slices/HostsSlice";
import {Card, Spinner} from "react-bootstrap";

const CardTotalHosts = ({data, loading}) => {
    return (
        <div className="col-12 col-lg-4">
            <Card bg={"dark"} text={"white"}>
                <Card.Header>
                    <Card.Title>Total Hosts</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="col">
                        {loading === true ?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner> :
                            <h1>{data !== null && data.length}</h1>
                        }
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
export default CardTotalHosts;