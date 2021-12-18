import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({
   _id,
   name,
   qualities,
   profession,
   completedMeetings,
   rate,
   onDelete,
   bookmark,
   onToggleBookMark
}) => {
   return (
      <tr key={_id}>
         <td>{name}</td>
         <td>
            {qualities.map((qual) => (
               <Qualitie {...qual} key={qual._id} />
            ))}
         </td>
         <td>{profession.name}</td>
         <td>{completedMeetings}</td>
         <td>{rate} /5</td>
         <td>
            <BookMark status={bookmark} onClick={() => onToggleBookMark(_id)} />
         </td>
         <td>
            <button className="btn btn-danger" onClick={() => onDelete(_id)}>
               delete
            </button>
         </td>
      </tr>
   );
};
User.propTypes = {
   _id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   qualities: PropTypes.array.isRequired,
   profession: PropTypes.objectOf(PropTypes.string).isRequired,
   completedMeetings: PropTypes.number.isRequired,
   rate: PropTypes.number.isRequired,
   onDelete: PropTypes.func.isRequired,
   bookmark: PropTypes.bool.isRequired,
   onToggleBookMark: PropTypes.func.isRequired
};

export default User;
