"use client";
import {
  getCategoriesData,
  selectCategories,
} from "@/lib/features/category/categorySlice";
import {
  getProductsData,
  selectproducts,
} from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ICategory } from "@/type/type";
import React, { useEffect, useState } from "react";

const Products = () => {
  const products = useAppSelector(selectproducts);
  const categories = useAppSelector(selectCategories);
  const [selected, setSelect] = useState<ICategory>({} as ICategory);
  const [done, setDone] =  useState<boolean>(false)
  console.log(products, categories);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductsData());
    dispatch(getCategoriesData());
  }, []);

  return (
    <div>
      <div>
        <label
          id="listbox-label"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Categories ...
        </label>
        <div className="relative mt-2">
          <button
            type="button"
            className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            onClick={()=>setDone(!done)}
          >
            <span className="flex items-center">
              <img
                src={selected.image}
                alt=""
                className="size-5 shrink-0 rounded-full"
              />
              <span className="ml-3 block truncate">{selected.name}</span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <svg
                className="size-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          <ul
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
            style={done?{display:""}:{display:"none"}}
          >
            {categories.map((elm) => {
              return (
                <li
                  key={elm.id}
                  className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                  id="listbox-option-0"
                  role="option"
                  onClick={() => {setSelect(elm);setDone(false)}}
                >
                  <div className="flex items-center">
                    <img
                      src={elm.image}
                      alt=""
                      className="size-5 shrink-0 rounded-full"
                    />
                    <span className="ml-3 block truncate font-normal">
                      {elm.name}
                    </span>
                  </div>

                  {selected.id == elm.id ? (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                      <svg
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        data-slot="icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ) : (
                    <></>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
