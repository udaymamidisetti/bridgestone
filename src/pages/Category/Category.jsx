import React, { useEffect, useState } from "react";
import Button from "../../common/Button";
import Heading2 from "../../common/Heading2";
import HOC from "../../layout/Hoc";
import AddCategory from "./AddCategory";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../common/Loader";
import { Link } from "react-router-dom";
import NoData from "../../common/NoData";
import {
  getCategories,
  removeCategory,
} from "../../redux/action/categoryAction";
import Baseurl from "../../common/Baseurl";
import { BiTrash, BiEdit } from "react-icons/bi";
import Modal from "../../common/Modal";

const Category = () => {
  const [popup, setPopup] = useState(false);

  const [edit, setEdit] = useState();

  const [isDelete, setDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();

  const dispatch = useDispatch();

  const category = useSelector((state) => state.categoryReducer.category);

  const { loading } = useSelector((state) => state.categoryReducer);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  // Close Popup
  const close = (event) => {
    setPopup(event);
  };

  //deleteuser
  const handleDeleteUser = () => {
    dispatch(removeCategory({ deleteId, callback: () => setDelete(false) }));
  };
  const handleConfirmDelete = (id) => {
    setDeleteId(id);
    setDelete(true);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="p-2 md:p-5">
            {/* Top */}
            <div className="flex  items-center justify-between">
              <Heading2 heading={"Category"} />
              <span
                onClick={() => {
                  setPopup(true);
                  setEdit();
                }}
              >
                <Button button={"Add New"} />
              </span>
            </div>

            {/*Form */}
            {category?.length <= 0 ? (
              <NoData data={category} />
            ) : (
              <div className="overflow-x-auto">
                <table className="my-6 md:my-10 min-w-full text-full text-left whitespace-no-wrap">
                  <thead>
                    <tr className="bg-gray-100">
                      <th>Name</th>
                      <th>Image</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category?.map((item, i) => {
                      return (
                        <>
                          <tr key={i}>
                            <td>
                              <Link to={`/category/${item._id}`}>
                                {item.name}
                              </Link>
                            </td>
                            <td>
                              <img
                                src={`${Baseurl()}${item.image}`}
                                alt={item.name}
                                className="h-60 w-70 "
                              />
                            </td>
                            <td className="px-4 py-10 h-full flex gap-3 items-center text-xl ">
                              <BiTrash
                                onClick={() => handleConfirmDelete(item._id)}
                                className="cursor-pointer text-red-600"
                              />
                              <BiEdit
                                onClick={() => {
                                  setPopup(true);
                                  setEdit(item);
                                }}
                                className="cursor-pointer text-sky-600"
                              />
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          {/* Add Category */}
          <section
            className={`absolute top-0 ${
              popup ? "flex" : "hidden"
            }  justify-center items-center left-0 h-screen w-full bg-[rgb(0,0,0,0.7)]`}
          >
            <AddCategory close={close} edit={edit} />
          </section>
          {isDelete && (
            <Modal
              handleDeleteCategory={handleDeleteUser}
              setDelete={setDelete}
            />
          )}
        </>
      )}
    </>
  );
};

export default HOC(Category);
