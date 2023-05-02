"use client";
import { PuffLoader } from "react-spinners";
type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <PuffLoader size={100} color="red" />
    </div>
  );
};

export default Loader;
