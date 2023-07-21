import { SortIcon } from "@/assets/icons";
import React, { useState } from "react";
import Modal from "./Modal";
import SortBy from "./SortBy";

function SmallSort() {
  const [showSort, setShowSort] = useState(false);

  return (
    <>
      <button onClick={() => setShowSort(!showSort)}>
        <SortIcon />
      </button>
      {showSort && (
        <Modal setShowSort={setShowSort}>
          <div className="w-36">
            <div className="title">Sort by</div>
            <SortBy />
          </div>
        </Modal>
      )}
    </>
  );
}

export default SmallSort;
