import React, { useState, useEffect } from "react";
import { deleteUser, getData, userLogin } from "../../services/api";
import Loader from "../../components/common/Loader";
import { customDelay, showToast } from "../../common/Util";
import { useNavigate } from "react-router-dom";
import { errorLog } from "../../common/Log";
import _ from "lodash";
import PaginatedItems from "../../components/common/Pagination";

const User = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [User, setUser] = useState<any>([]);
  const [pageData, SetPageData] = useState({
    pageNumber: 0,
    pageSize: 10,
    total: 0,
  });
  const navigate = useNavigate();

  const fetchUser = async (pageNumber: number, per_page: number) => {
    try {
      setLoading(true);
      const user = await getData(pageNumber, per_page);
      await customDelay(2000);
      if (user.status === 200) {
        SetPageData({
          ...pageData,
          pageNumber: Math.ceil(user.data.skip/pageData.pageSize),
          total: user.data.total,
        });
        // if (user.data.data.length === 0 && pageData.pageNumber >= 1) {
        //   fetchUser(--pageData.pageNumber, pageData.pageSize);
        // } else {
          setUser(user.data.users);
        // }
      } else {
        throw new Error(user.errors);
      }
    } catch (error: any) {
      errorLog(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(pageData.pageNumber, pageData.pageSize);
  }, []);

  const handleAdd = () => {
    navigate("/user/add");
  };

  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      let resp = await deleteUser(id);
      if (resp.status === 200) {
        let newData = _.remove(User, (obj: any) => obj.id !== id);
        let resp2 = fetchUser(pageData.pageNumber, pageData.pageSize);
        setUser(resp2);
        // SetPageData({
        //   ...pageData,
        //   total: newData.length,
        // });
        showToast("User deleted succesfully");
      }
    } catch (error: any) {
      errorLog(error);
      showToast("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  const goToEdit = async (id: string) => {
    navigate(`/user/${id}`);
  };

  return (
    <>
      <div className="wrapper">
        <button className="btn btn-warning" onClick={handleAdd}>
          Add
        </button>
        {loading ? (
          <div className="loader">
            <Loader />
          </div>
        ) : (
          <PaginatedItems
            itemsPerPage={pageData.pageSize}
            items={User}
            goToEdit={goToEdit}
            handleDelete={handleDelete}
            total={pageData.total}
            fetchUser={fetchUser}
            pageNumber={pageData.pageNumber}
          />
        )}
      </div>
    </>
  );
};

export default User;
