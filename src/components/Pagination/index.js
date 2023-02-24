import {
  NextPrev,
  PageContainer,
  PageCounter,
} from "../../styles/components/pagination";

export default function Pagination({
  pageNumber = 0,
  previousClick,
  nextClick,
}) {
  return (
    <PageContainer>
      <NextPrev variant="prev" onClick={previousClick}>
        «
      </NextPrev>
      <PageCounter>Página {pageNumber}</PageCounter>
      <NextPrev variant="next" onClick={nextClick}>
        »
      </NextPrev>
    </PageContainer>
  );
}
