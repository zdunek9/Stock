import React from "react";
import styled from "styled-components";

const PagButton = styled.button``;
function PageButton({ page, pg, setPage, isPreviousData }) {
  return (
    <PagButton onClick={() => setPage(pg)} disabled={isPreviousData}>
      {page === pg ? (
        <p style={{ color: "black",fontWeight:"600" }}>{pg}</p>
      ) : (
        <p style={{ color: "gray" }}>{pg}</p>
      )}
    </PagButton>
  );
}

export default PageButton;
