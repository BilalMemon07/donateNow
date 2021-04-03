import React from 'react';
import '../App.scss'
class TabNav extends React.Component {
    render() {
        return (
            <div style={{ width: '100%',height:'100%' }}>
                <ul className="nav nav-tabs"  style={{ display1:'flex',justifyContent:'space-around' ,color:'#3b0e8a'}}>
                    {
                        this.props.tabs.map(tab => {
                            const active = (tab === this.props.selected ? 'active ' : '');
                            return (
                             
                                    <li className="nav-item" key={tab} >
                                        <a className={"nav-link " + active} onClick={() => this.props.setSelected(tab)}>
                                            {tab}
                                        </a>
                                    </li>
                            
                            );
                        })
                    }
                </ul>
                { this.props.children}
            </div>
        );
    }
}
export default TabNav;