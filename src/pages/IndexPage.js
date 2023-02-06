import CardTotalHosts from "../components/index/hosts/CardTotalHosts";
import CardTotalsPackageUpgradable from "../components/index/hosts/CardTotalsPackageUpgradable";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {GetHosts} from "../slices/HostsSlice";
import CardHostsLastUpdated from "../components/index/hosts/CardHostsLastUpdated";
import CardChartHostsPackagesUpgradables from "../components/index/hosts/CardChartHostsPackagesUpgradables";

const IndexPage = () => {

    const dispatch = useDispatch();

    const {getHosts, loading} = useSelector((state) => state.hosts);

    useEffect(() => {
        dispatch(GetHosts())
    }, [dispatch])
    return (
        <>
            <div className="container mt-4">
                <div className="row g-4">
                    <CardTotalHosts data={getHosts} loading={loading}/>
                    <CardHostsLastUpdated data={getHosts} loading={loading}/>
                    <CardTotalsPackageUpgradable data={getHosts} loading={loading}/>
                    <CardChartHostsPackagesUpgradables data={getHosts} loading={loading}/>
                </div>
            </div>
        </>
    )
}

export default IndexPage;