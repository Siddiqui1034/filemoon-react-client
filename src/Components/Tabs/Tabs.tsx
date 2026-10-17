import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import History from "../History/History";
import MyFiles from "../MyFiles/MyFiles";
import Settings from "../Settings/Settings";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsConfig = [
    {
      name: "dashboard",
      component: Dashboard,
      icon: <i className="ri-dashboard-horizontal-line"></i>,
    },
    {
      name: "my-files",
      component: MyFiles,
      icon: <i className="ri-folder-open-fill"></i>,
    },
    {
      name: "history",
      component: History,
      icon: <i className="ri-history-line"></i>,
    },
    {
      name: "settings",
      component: Settings,
      icon: <i className="ri-settings-2-line"></i>,
    },
  ];
  const ActiveTabComponent = tabsConfig[activeTab].component;
  console.log(ActiveTabComponent);
  return (
    <div className="space-y-4">
      {tabsConfig.map((tab, index) => (
        <div
          key={index}
          className="bg-purple-700 hover:bg-purple-600 hover:scale-103 rounded-sm px-4 py-2 capitalize text-white  text-center font-medium text-md space-x-1"
        >
          <span>{tab.icon}</span>
          <span>{tab.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
