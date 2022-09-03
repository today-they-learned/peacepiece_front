import { useRef, useState } from "react";
import { useAddArticle } from "hooks/queries/article";

const NotFound = () => {
  const formData = new FormData();
  const imageRef = useRef<HTMLInputElement>(null);
  // 이미지 파일들 담아둘 리스트
  const [imageList, setimageList] = useState([]);

  // api 호출코드 (mutate에 formdata 넣어서 보내면 됨, mutate: 함수이름지정)
  const { mutate: addArticle } = useAddArticle();

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
      <div style={{ marginBottom: "3rem" }} />
    </>
  );
};

export default NotFound;
