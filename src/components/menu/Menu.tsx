import { Link } from "react-router-dom";
import "./menu.css";
import { menu } from "../../data";

const Menu = () => {
    return (
        <div className="menu">
            {menu.map((item) => (
                <div className="menu__item" key={item.id}>
                    <span className="menu__title">{item.title}</span>
                    {item.listItems.map((listItem) => (
                        <Link
                            to={listItem.url}
                            className="menu__listItem"
                            key={listItem.id}
                        >
                            <img src={listItem.icon} alt="" />
                            <span className="menu__listItemTitle">
                                {listItem.title}
                            </span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Menu;
