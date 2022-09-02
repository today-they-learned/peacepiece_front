import React, { useRef } from "react";
import { useAddArticle } from "hooks/queries/article";
import { useState } from "react";

const NotFound = () => {
  const formData = new FormData();
  const imageRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState();
  const { mutate: addArticle } = useAddArticle();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    formData.append("content", "테스트");
    formData.append("challenge_id", "1");
    console.log(formData);
    addArticle(formData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("images", e.target.files[0]);
    console.log(formData);
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
