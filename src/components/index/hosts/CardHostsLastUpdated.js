import {Card, Spinner} from "react-bootstrap";
import {useState} from "react";

const CardHostsLastUpdated = ({data, loading}) => {

    const [maxDate, setMaxDate] = useState(new Date("1900/02/01").getTime());

    const [arr, setArr] = useState({});

    if (data !== null && !loading) {
        data.map((item, key) => {
                if (new Date(item.updated_at).getTime() > maxDate) {
                    setMaxDate(new Date(item.updated_at).getTime());
                    setArr(item);
                }
            }
        )
    }

    return (
        <div className={"col-12 col-lg-4"}>
            <Card bg={"dark"} text={"white"}>
                <Card.Header>
                    <Card.Title>Last Host Updated</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="col">
                        {loading === true ?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner> :
                            <h1>{arr !== null && arr.hostname}</h1>
                        }
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardHostsLastUpdated;