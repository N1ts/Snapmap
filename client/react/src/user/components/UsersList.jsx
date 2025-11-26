import "./UsersList.css";
import UserItem from "./UserItem";
import Users from "../pages/Users";

const UsersList = ({ items }) => {
  console.log(items);

  // Check if the items array is empty
  if (!items || items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  // If it's not empty, render the list
  return (
    <ul className="users-list">
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
