"use client";
import { PuffLoader, GridLoader } from "react-spinners";
type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      {/* <GridLoader size={20} color="red" /> */}
      <PuffLoader size={100} color="red" />
    </div>
  );
};

export default Loader;
