import { AnalyticsDashboard, LineChart, PieChart , GeoChart } from "react-analytics-charts";

export  default  function AnaliticChart({ clientId = '1237' }) {
    return (
        <div className='charts'>
            <div style={{width: '700px', background: 'grey', textAlign: 'center'}}>
                <h2>Medias Staats</h2>
                <AnalyticsDashboard
                    authOptions={{ clientId }}
                    renderCharts={(gapi, viewId) => {
                        return (
                            <LineChart
                                gapi={gapi}
                                query={{
                                    ids: viewId,
                                    "start-date": "14daysAgo",
                                    "end-date": "today",
                                    metrics: "ga:sessions",
                                    dimensions: "ga:date",
                                }}
                                container="sessions-by-date-chart"
                                options={{
                                    title: `Sessions (14 Days)`,
                                }}
                            />
                        );
                    }}
                />
            </div>
            <div style={{width: '300px', background: '#4b4949', textAlign: 'center'}}>
                <h2>Active Medias</h2>
                <AnalyticsDashboard
                    authOptions={{ clientId }}
                    renderCharts={(gapi, viewId) => {
                        return (
                            <PieChart
                                gapi={gapi}
                                query={{
                                    ids: viewId,
                                    "start-date": "30daysAgo",
                                    "end-date": "today",
                                    metrics: "ga:sessions,ga:users,ga:pageviews",
                                    dimensions: "ga:deviceCategory",
                                }}
                                container="traffic-by-device-category-chart"
                                options={{
                                    title: "Traffic By Device Category (30 Days)",
                                }}
                            />
                        );
                    }}
                />
            </div>
            <div style={{background: 'grey', width: '400px', textAlign: 'center'}}>
                <h2>Geographic Data</h2>
                <AnalyticsDashboard
                    authOptions={{ clientId }}
                    renderCharts={(gapi, viewId) => {
                        return (
                            <GeoChart
                                gapi={gapi}
                                query={{
                                    metrics: "ga:sessions,ga:pageviews",
                                    dimensions: "ga:country",
                                    "start-date": `28daysAgo`,
                                    "end-date": "today",
                                    ids: viewId,
                                }}
                                container="traffic-geo-chart"
                            />
                        );
                    }}
                />
            </div>
        </div>
    )
}

