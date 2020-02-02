import React from "react";
import "../styles/Sidebar.css";
import "../App.css";
import { Profilebar } from "./Profilebar";

type MenuDescription = {
  categoryName: string | undefined;
  items: {
    key: string;
    icon: React.ReactNode;
    label: string;
  }[];
}[];

const menuDescription: MenuDescription = [
  {
    categoryName: undefined,
    items: [
      {
        key: "inbox",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" />
          </svg>
        ),
        label: "Inbox"
      },
      {
        key: "inbox",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" />
          </svg>
        ),
        label: "Inbox"
      },
      {
        key: "inbox",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" />
          </svg>
        ),
        label: "Inbox"
      }
    ]
  },
  {
    categoryName: "Services",
    items: [
      {
        key: "inbox",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" />
          </svg>
        ),
        label: "Inbox"
      },
      {
        key: "inbox",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" />
          </svg>
        ),
        label: "Inbox"
      },
      {
        key: "inbox",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" />
          </svg>
        ),
        label: "Inbox"
      }
    ]
  },
  {
    categoryName: "Invetments",
    items: [
      {
        key: "inbox",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" />
          </svg>
        ),
        label: "Inbox"
      },
      {
        key: "inbox",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" />
          </svg>
        ),
        label: "Inbox"
      },
      {
        key: "inbox",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z" />
          </svg>
        ),
        label: "Inbox"
      }
    ]
  }
];

export class Sidebar extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="logo">
          <svg
            id="symbol"
            xmlns="http://www.w3.org/2000/svg"
            width="63.16"
            height="31.562"
            viewBox="0 0 63.16 31.562"
          >
            <path
              id="Path"
              d="M47.342,0H15.781L0,15.781,15.781,31.562H47.342L63.16,15.781Z"
              transform="translate(0)"
              fill="#fff"
            />
            <path
              id="Path-2"
              data-name="Path"
              d="M15.818,15.781,0,0V31.562Z"
              transform="translate(47.342)"
              fill="#e11513"
            />
            <path
              id="Path-3"
              data-name="Path"
              d="M15.781,15.781,31.562,0H0Z"
              transform="translate(15.781)"
              fill="#e11513"
            />
            <path
              id="Path-4"
              data-name="Path"
              d="M0,15.781,15.781,31.562V0Z"
              transform="translate(0)"
              fill="#e11513"
            />
            <path
              id="Path-5"
              data-name="Path"
              d="M15.781,0,0,15.781H31.562Z"
              transform="translate(15.781 15.781)"
              fill="#e11513"
            />
          </svg>

          <svg
            id="text"
            xmlns="http://www.w3.org/2000/svg"
            width="86.993"
            height="15.671"
            viewBox="0 0 86.993 15.671"
          >
            <path
              id="Path"
              d="M9.784,8.64H3.261v6.438H0V0H3.261V6.184H9.784V0h3.261V15.078H9.784Z"
              transform="translate(0 0.296)"
            />
            <path
              id="Path-2"
              data-name="Path"
              d="M5.972,15.628C2.711,15.628.042,14.315,0,10.715H3.261A2.453,2.453,0,0,0,6.014,13.3c1.313,0,2.838-.678,2.838-2.16,0-1.186-1.016-1.525-2.711-2.033l-1.1-.3C2.668,8.132.3,7.2.3,4.489.3,1.144,3.431,0,6.268,0c2.922,0,5.464,1.016,5.506,4.362H8.513A2.2,2.2,0,0,0,6.056,2.2c-1.228,0-2.414.635-2.414,1.991,0,1.1,1.016,1.44,3.134,2.118l1.271.381c2.584.8,4.235,1.694,4.235,4.235C12.282,14.315,8.936,15.628,5.972,15.628Z"
              transform="translate(14.908 0.042)"
            />
            <path
              id="Shape"
              d="M5.972,15.051H.042L0,.015H5.252c.233-.01.468-.015.7-.015A13.316,13.316,0,0,1,8.216.184c2.046.476,3.219,1.8,3.219,3.642,0,1.75-.984,2.858-3.007,3.388,2.361.443,3.558,1.669,3.558,3.642a3.578,3.578,0,0,1-2.023,3.383A8.927,8.927,0,0,1,5.972,15.051ZM3.134,8.444v4.4H5.549c1.291,0,3.007-.228,3.007-2.2a1.93,1.93,0,0,0-.831-1.8,3.767,3.767,0,0,0-2.006-.4ZM3.176,2.26V6.284H5.252c1.254,0,2.922-.211,2.922-2.033,0-1.645-1.474-1.991-2.71-1.991Z"
              transform="translate(29.012 0.281)"
            />
            <path
              id="Path-3"
              data-name="Path"
              d="M7.031,15.671C2.16,15.671,0,12.579,0,7.962S2.414,0,7.2,0c3.007,0,5.929,1.355,6.014,4.744H9.826A2.409,2.409,0,0,0,7.2,2.456c-2.965,0-3.854,3.176-3.854,5.591s.889,5.209,3.727,5.209a2.6,2.6,0,0,0,2.8-2.329h3.388C12.918,14.4,10.165,15.671,7.031,15.671Z"
              transform="translate(42.48 0)"
            />
            <path
              id="Path-4"
              data-name="Path"
              d="M5.76,15.332C2.033,15.332,0,13.256,0,9.572V0H1.44V9.064a5.835,5.835,0,0,0,.678,3.388A4.311,4.311,0,0,0,5.8,14.188,4.2,4.2,0,0,0,9.784,11.9a6.42,6.42,0,0,0,.381-2.838V0H11.6V9.529C11.52,13.129,9.36,15.332,5.76,15.332Z"
              transform="translate(61.793 0.296)"
            />
            <path
              id="Shape-2"
              data-name="Shape"
              d="M10.715,15.12H8.851L1.44,6.9,8.174,0H10l-6.9,6.818,7.622,8.3Zm-9.36-.042H0V0H1.355V15.077Z"
              transform="translate(76.278 0.296)"
            />
          </svg>
        </div>
        <div className="menu">
          <ul className="navMenu">
            {menuDescription.map(menuBlock => {
              return (
                <ul>
                  {menuBlock.categoryName !== undefined && (
                    <div className="category-name">
                      {menuBlock.categoryName}
                    </div>
                  )}
                  {menuBlock.items.map((menuElement, index) => {
                    return (
                      <li key={index}>
                        {menuElement.icon} {menuElement.label}
                      </li>
                    );
                  })}
                </ul>
              );
            })

            // menuDescription.map((menuElement, index) => {
            //     return <li key={index}> {menuElement.label} </li>
            // })

            // <li> <img src={require(<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z"/></svg>)}/> Inbox</li>
            }
          </ul>
          <Profilebar />
        </div>
      </div>
    );
  }
}
