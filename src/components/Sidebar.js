import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
    const title = "dashz.";
    const stylePad = {
        marginLeft: "15px",
    }
    return (
        <div>
            <div id="sidebar">
            <h1>{title}</h1>
                <ul className="content-item" id="content">
                <FontAwesomeIcon icon={ faHouse }/> 
                <span style={stylePad}>Home</span>
                </ul>
                <ul className="content-item" id="content">
                <FontAwesomeIcon icon={faChartSimple} />
                <span style={stylePad}>codeforces</span>
                </ul>
                <ul className="content-item" id="content">
                <FontAwesomeIcon icon={faGithub} />
                <span style={stylePad}>github</span>
                </ul>
                {/* /* <ul className="content-item" id="content">
                    codechef
                </ul> */}
            </div>
        </div>
    );
}

export default Sidebar;