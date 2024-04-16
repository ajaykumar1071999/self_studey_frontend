import React from "react";
import { useNavigation } from "react-router-dom";
function UsersList() {
  const navigation = useNavigation();
  console.log('navigation',navigation)
  return <div>UsersList</div>;
}

export default UsersList;
