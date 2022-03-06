import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import CampaignIcon from '@mui/icons-material/Campaign';
import TerrainIcon from '@mui/icons-material/Terrain';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export  default  function Nav() {
    return (

    <nav className="sidebar close">
        <div className="menu-bar">
            <div className="menu">
                <ul className="menu-links">
                    <li className="nav-link">
                        <a href="#">
                            <NetworkCheckIcon />
                            <span className="text nav-text">Dashboard</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <KeyIcon />
                            <span className="text nav-text">Dashboard</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <PersonIcon  />
                            <span className="text nav-text">Dashboard</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <CampaignIcon />
                            <span className="text nav-text">Dashboard</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <TerrainIcon />
                            <span className="text nav-text">Revenue</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <CompareArrowsIcon />
                            <span className="text nav-text">Notifications</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <SettingsIcon />
                            <span className="text nav-text">Analytics</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            < FavoriteIcon />
                            <span className="text nav-text">Likes</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <AccessTimeIcon />
                            <span className="text nav-text">Wallets</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <RemoveRedEyeIcon />
                            <span className="text nav-text">Wallets</span>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    )
}