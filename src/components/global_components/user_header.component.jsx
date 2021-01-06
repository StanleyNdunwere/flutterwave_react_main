import React, { useContext } from "react";
import UserContext from "../../context/user.context";

export default function UserHeader(props) {
  const [state, dispatch] = useContext(UserContext);
  return (
    <>
      <h3 className="font-nunito text-4xl font-bold py-1">
        Hello {state.username},
      </h3>
      <div className="flex flex-row  items-center">
        {props.userType === "merchant" && (
          <>
            <span className="font-bold font-nunito text-xl mr-4">
              Choose Your Rider:
            </span>
            <select
              name="riderId"
              id="riderId"
              className="py-2 px-5 outline-none border-yellow-700 border-2 rounded-xl"
            >
              <option value=""></option>
              <option value="riderId"> Rider 1</option>
              <option value="riderId">Rider 1</option>
              <option value="riderId">Rider 1</option>
              <option value="riderId">Rider 1</option>
            </select>
          </>
        )}
      </div>
    </>
  );
}
