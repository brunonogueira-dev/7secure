import {Card, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {GetHosts} from "../../../slices/HostsSlice";

const CardTotalsPackageUpgradable = ({data, loading}) => {

    const [upgradable, setUpgradable] = useState(null);

    let total = 0;

    useEffect(() => {
        if (data !== null) {
            data.map((item) => {
                total = total += item.packages_upgradable.length

            })
            setUpgradable(total)
        }
    }, [data]);


    return (
        <div className={"col-12 col-lg-4"}>
            <Card bg={upgradable > 0 ? "danger" : "light"} text={upgradable <= 0 ? 'dark' : 'white'}>
                <Card.Header>
                    <Card.Title>Package Upgradable</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="col">
                        {upgradable === null || loading ?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner> :
                            <h1>{upgradable}</h1>
                        }
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
export default CardTotalsPackageUpgradable;