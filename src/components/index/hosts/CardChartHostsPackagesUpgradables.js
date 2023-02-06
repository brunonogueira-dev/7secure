import {Card, Spinner} from "react-bootstrap";
import {Bar} from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {useEffect, useState} from "react";

const CardChartHostsPackagesUpgradables = ({loading, data}) => {

    const [idHost, setIdHost] = useState([])
    const [host, setHost] = useState([]);
    const [packege, setPackege] = useState([]);

    useEffect(() => {
        if (data !== null) {
            data.map((item) => {
                if (!idHost.includes(item.id)) {
                    setIdHost(prevState => [...prevState, item.id])
                    setHost(prevState => [...prevState, item.hostname]);
                    setPackege(prevState => [...prevState, item.packages_upgradable.length]);
                }
            })
        }
    }, [data])

    const state = {
        labels: host,
        datasets: [
            {
                label: 'Number of upgradeable packages',
                backgroundColor: 'rgba(0,0,0,0.10)',
                borderColor: 'rgba(254,254,254,1)',
                borderWidth: 1,
                data: packege
            }
        ]
    }

    return (
        <div className={"col-12"}>
            <Card bg={"dark"} text={"white"}>
                <Card.Header>
                    <Card.Title>Host with packages upgradable</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="col">
                        {loading === true || host === null ?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner> :
                            <>
                                <Bar data={state}/>
                            </>
                        }
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardChartHostsPackagesUpgradables;