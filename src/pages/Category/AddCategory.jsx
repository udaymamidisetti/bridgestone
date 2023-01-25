import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import Button from "../../common/Button";
import Cancel from "../../common/Cancel";
import data from "../../common/AdminInfo";
import { useDispatch } from "react-redux";
import {
  addCategoryRequest,
  updateCategoryRequest,
} from "../../redux/action/categoryAction";

const AddCategory = ({ close, edit }) => {
  const [formData, setFormData] = useState({
    image: "",
    name: edit && edit?.name,
  });
  const dispatch = useDispatch();
  // Add Category
  const addUpdateCategory = (e, currentAction) => {
    e.preventDefault();
    switch (currentAction) {
      case "add":
        dispatch(
          addCategoryRequest(formData, data, () => {
            handleClose();
          })
        );
        break;
      case "update":
        dispatch(
          updateCategoryRequest(formData, data, edit._id, () => {
            handleClose();
          })
        );
        break;
        default:
    }
  };

  const handleClose = () => {
    close(false);
    setFormData({
      image: "",
      name: "",
    });
  };

  return (
    <>
      <section
        className="lg:w-1/2 md:w-1/3 w-80 sm:w-2/3  sm:mx-0 "
        onSubmit={(e) =>
          edit ? addUpdateCategory(e, "update") : addUpdateCategory(e, "add")
        }
      >
        {/* Top */}
        <div className="bg-gray-100 flex items-center justify-between text-sm tracking-wider font-semibold rounded-t-md py-1.5 px-3">
          <span className="">{edit ? "Update" : "Add New"} Category</span>

          <IoIosClose
            onClick={handleClose}
            className="text-slate-800 cursor-pointer text-3xl"
          />
        </div>

        {/* Form */}
        <form className="bg-white p-3 md:p-4 flex flex-col md:grid  gap-4">
          {/* Category Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="categoryName" className="text-xs">
              Category Name <span className="text-red-500">*</span>
            </label>
            <input
              id="categoryName"
              name="categoryName"
              type="text"
              required
              defaultValue={edit ? edit.name : formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="bg-transparent border-indigo-400 tracking-widest  text-sm rounded-sm shadow-md outline-none py-1.5 px-2 border"
            />
          </div>

          {/*Image */}
          <div className="flex flex-col gap-2">
            <label htmlFor="Image" className="text-xs">
              Image <span className="text-red-500">*</span>
            </label>
            <input
              id="Image"
              name="Image"
              type="file"
              required
              accept="image/*"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files[0] })
              }
              className="bg-transparent border-indigo-400 tracking-widest  text-xs rounded-sm shadow-md outline-none py-1.5 px-2 border"
            />
          </div>
          <div className="flex mt-4 gap-5">
            <button type="submit">
              <Button button={edit ? "Update" : "Add"} />
            </button>
            <span onClick={handleClose}>
              <Cancel />
            </span>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddCategory;
