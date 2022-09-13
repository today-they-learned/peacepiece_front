import { FlexBox } from "components/common";
import { useUser } from "hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ServiceIntro = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);
  return <FlexBox center>서비스 소개</FlexBox>;
};

export default ServiceIntro;
