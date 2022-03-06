import './App.css';
import BasicTable from "./componensts/Table";
import  SimpleCard from './componensts/Card';
import CheckIcon from "@mui/icons-material/Check";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import HelpIcon from "@mui/icons-material/Help";
import AnaliticChart from "./componensts/AnaliticChart";
import  Nav from './componensts/Nav'

function App() {

    const cardData = [
        {title: 'SIGNUPS', value: '25', icon: CheckIcon, valueColor: 'lightseagreen'},
        {title: 'PROFIT', value: '$1000', icon: TrendingUpIcon, valueColor: '#056480'},
        {title: 'COMMISSIONS', value: '$350', icon: LooksOneIcon, valueColor: '#ffc361'},
        {title: 'RENDING COMMISSIONS', value: '$300', icon: HelpIcon, valueColor: 'lightseagreen'}
    ];

  return (
    <div className="App">
        <Nav />
        <div className='mainContent'>
            <div className='cardsRow'>
                {cardData.map(({title, value, icon, valueColor}) => {
                    return <SimpleCard key={title} title={title} value={value} icon={icon} valueColor={valueColor}/>
                })}
            </div>
            <AnaliticChart />
            <div className='tablesRow'>
                <BasicTable />
                <BasicTable />
                <BasicTable />
            </div>
        </div>
    </div>
  );
}

export default App;
