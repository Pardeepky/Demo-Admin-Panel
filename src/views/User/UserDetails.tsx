import React from "react";
import { Provider } from "react-redux";
import UserForm from "../../containers/reduxForm/UserForm";
import store from "../../containers/reduxForm/redux_form";
import { getDataById, postData } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { showToast } from "../../common/Util";
import { useEffect } from "react";
import { useState } from "react";
import { errorLog, infoLog } from "../../common/Log";

const CrudForm = () => {
  const [user, setUser] = useState<any>("");
  const [editMode, setEditMode] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (data: any) => {
    try {
      let resp = await postData(data);
      if (resp.status === 200) {
        infoLog(resp.data);
        navigate("/user");
        if (editMode === true) {
          showToast("User Edited Succesfully");
        } else {
          showToast("User Added Succesfully");
        }
      }
    } catch (error: any) {
      showToast(error.message);
    } finally {
      setEditMode(false);
    }
  };

  const fetchUserById = async () => {
    try {
      let { id } = params;
      let resp = await getDataById(id);
      if (resp.status === 200) {
        infoLog(resp.data);
        setUser(resp.data.data);
      }
    } catch (error: any) {
      errorLog(error);
      showToast("Something went wrong");
    }
  };

  useEffect(() => {
    if (params.id) {
      setEditMode(true);
      fetchUserById();
    }
  }, []);

  return (
    <>
      <div className="wrapper">
        <Provider store={store}>
          <div style={{ padding: 15 }}>
            <h2 className="h2_user">Add User</h2>
            <UserForm user={user} onSubmit={handleSubmit} />
          </div>
        </Provider>
      </div>
    </>
  );
};

export default CrudForm;
