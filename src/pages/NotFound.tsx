import { useRef, useState } from "react";
import {
  useAddArticle,
  // useArticleData,
  useDeleteArticle,
  useUpdateArticle,
} from "hooks/queries/article";
import NoticeTab from "components/Tooltip/NoticeTooltip/NoticeTab";
import NoticeTooltip from "components/Tooltip/NoticeTooltip/NoticeTooltip";

const NotFound = () => {
  const formData = new FormData();
  const imageRef = useRef<HTMLInputElement>(null);
  // 이미지 파일들 담아둘 리스트
  const [imageList, setimageList] = useState([]);

  // api
  // const { data } = useArticleData(16);
  const { mutate: addArticle } = useAddArticle();
  const { mutate: updateArticle } = useUpdateArticle(14);
  const { mutate: deleteArticle } = useDeleteArticle(14);

  // form 제출
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formData.append("content", "테스트123!");
    // 이미지들을 fordata 에 images[0]file: 파일 형식으로 append
    [...imageList].forEach((image, index) => {
      formData.append(`images[${index}]file`, image);
    });

    // api호출
    addArticle(formData);
  };

  // 이미지 추가할때마다 이미지 리스트에서 삭제
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setimageList([...imageList, e.target.files[0]]);
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const updateData = new FormData();
    updateData.append("content", "ㄹㅇㅋㅋ");
    updateArticle(updateData);
  };

  return (
    <>
      404 NotFound
      <form onSubmit={handleSubmit}>
        <button type="submit">submit</button>
        <button onClick={() => imageRef.current.click()} type="button">
          이미지 등록
        </button>
        <input
          type="file"
          accept="image/*"
          ref={imageRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </form>
      <div>
        <form onSubmit={handleUpdate}>
          <div>수정테스트</div>
          <button type="submit"> 수정버튼 </button>
        </form>
      </div>
      <button onClick={() => deleteArticle()}>삭제버튼</button>
      <div style={{ marginBottom: "3rem" }} />
      <NoticeTooltip />
    </>
  );
};

export default NotFound;
