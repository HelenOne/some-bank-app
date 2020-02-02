import React from 'react';
import '../App.css';
import '../styles/Profilebar.css';

type MenuDescription = {
    key: string;
    icon: React.ReactNode;
    label: string;
}[];

const menuDescription: MenuDescription = [
    // {
    //     key: "username",
    //     icon: <svg width="28" height="28"><circle r="14" cx="14" cy="14" fill="#E11513" /></svg>,
    //     label: "User Name"
    // },
    {
        key: "profile",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" /></svg>,
        label: "Profile"
    },
    {
        key: "messages",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" /></svg>,
        label: "Messages"
    },
    {
        key: "settings",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" /></svg>,
        label: "Settings"
    },
    {
        key: "logout",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" /></svg>,
        label: "Logout"
    }
]

export class Profilebar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isHidden: true
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className={this.state.isHidden ? 'overlap transparent' : 'overlap nontransparent'}></div>
                <div className={this.state.isHidden ? 'profilebar hidden' : 'profilebar visible'}>
                    <div className="username" onClick={() => {
                        this.setState({ isHidden: !this.state.isHidden })
                    }}>
                        <div className="avatar"> U </div>
                        <span>User Name</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path xmlns="http://www.w3.org/2000/svg" d="M7 10l5 5 5-5H7z" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8l-4 4z" /></svg>
                    </div>
                    <div className="line"></div>
                    <ul>
                        {
                            menuDescription.map((menuElement, index) => {
                                return <li key={index}> {menuElement.icon} {menuElement.label} </li>
                            })
                        }
                    </ul>
                </div>
            </React.Fragment>
            
        )
    }
}