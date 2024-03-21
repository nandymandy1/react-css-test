import FolderIcon from "@assets/images/folder.png";
import LockIcon from "@assets/images/lock.webp";
import StarIcon from "@assets/images/star.png";
import AddIcon from "@assets/svgs/addIcon.svg";
import ClockIcon from "@assets/svgs/clock.svg";
import DrawerIcon from "@assets/svgs/drawer.svg";
import TemplateIcon from "@assets/svgs/file.svg";
import Gear from "@assets/svgs/gear.svg";
import Logo from "@assets/svgs/logo.svg";
import SearchIcon from "@assets/svgs/search.svg";
import userImage from "@assets/svgs/user-img.svg";
import clsx from "clsx";

const AddButton = ({ onClick = () => {} }) => (
  <button
    onClick={onClick}
    className="sidebar-item-action-button flex items-center justify-center p-0"
  >
    <img src={AddIcon} className="sidebar-item-action-button-icon" />
  </button>
);

const SidebarItem = ({
  icon,
  text,
  bold = false,
  hasAddAction = false,
  onClickAdd = () => {},
}) => {
  return (
    <>
      <div className="flex items-center justify-between sidebar-item">
        <div className="gap-xs flex items-center">
          <img src={icon} className="sidebar-item-icon" />
          <h3
            className={clsx(
              {
                "sidebar-item-label-reg font-bold": !bold,
                "sidebar-item-label-bold font-bolder": bold,
              },
              "line-clamp-1"
            )}
          >
            {text}
          </h3>
        </div>
        {hasAddAction && <AddButton onClick={onClickAdd} />}
      </div>
    </>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper h-screen flex flex-col">
      <div className="flex sidebar-brand">
        <img src={Logo} className="sidebar-logo" />
      </div>
      <div className="flex flex-col flex-1 sidebar-action">
        <SidebarItem icon={TemplateIcon} text="My Templates" bold />
        <SidebarItem icon={SearchIcon} text="Search" bold />
        <SidebarItem icon={StarIcon} text="Software Engineer" />
        <SidebarItem icon={StarIcon} text="Computer hardware engineer" />
        <SidebarItem icon={StarIcon} text="Network Engineer" />
        <SidebarItem icon={StarIcon} text="Technical Support" />
        <SidebarItem icon={StarIcon} text="Network administrator" />
        <SidebarItem icon={StarIcon} text="Management" />
        <SidebarItem icon={StarIcon} text="Data analysis" />
        <SidebarItem icon={StarIcon} text="Computer technician" />
        <SidebarItem icon={ClockIcon} text="Past search 1" />
        <SidebarItem icon={ClockIcon} text="Past search 2" />
        <SidebarItem icon={ClockIcon} text="Computers and information" />
        <SidebarItem icon={ClockIcon} text="Database Administrator" />
        <SidebarItem icon={ClockIcon} text="Computer security" />
        <SidebarItem icon={ClockIcon} text="Computer Systems Analyst" />
        <SidebarItem icon={DrawerIcon} text="My boards" bold hasAddAction />
        <SidebarItem icon={FolderIcon} text="Board 1" />
        <SidebarItem icon={FolderIcon} text="Board 2" />
        <SidebarItem icon={FolderIcon} text="Board 3" />
        <SidebarItem icon={LockIcon} text="Board agent 1" />
        <SidebarItem icon={LockIcon} text="Board agent 2" />
        <SidebarItem icon={LockIcon} text="Board agent 3" />
      </div>
      <div className="accounts-section flex items-center justify-between p-md">
        <div className="account-holder flex items-center">
          <img src={userImage} className="account-holder-image" />
          <h4 className="account-holder-name">Peter Lion</h4>
        </div>
        <img src={Gear} alt="" className="gear-icon" />
      </div>
    </div>
  );
};

export default Sidebar;
