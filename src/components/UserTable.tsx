import React from "react";
import _ from "lodash";
import { FaEdit } from "react-icons/fa";
import TippyWrapper from "./common/TippyWrapper";
import { MdDelete } from "react-icons/md";
import { IUser } from "../interfaces";

const UserTable = ({ user, goToEdit, handleDelete }: any) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table stripped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {_.map(user, (val: Partial<IUser>) => {
              return (
                <tr key={val.id}>
                  <td>{val.firstName}</td>
                  <td>{val.lastName}</td>
                  <td>{val.email}</td>
                  <td>
                    <img src={val.image} alt={`${val.firstName} logo`}></img>
                  </td>
                  <td className="hand">
                    <FaEdit onClick={() => goToEdit(val.id)} />
                  </td>
                  <td className="hand">
                    <TippyWrapper
                      htmlContent={<MdDelete />}
                      ActionConfirmed={() => handleDelete(val.id)}
                      inplaceConfirm={true}
                      message={`Are you sure?`}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
