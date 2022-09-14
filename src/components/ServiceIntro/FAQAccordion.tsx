import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import COLOR from "constants/color";

const FAQAccordion = () => {
  return (
    <>
      <Accordion style={{ maxWidth: "50rem", width: "100%", margin: "0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ fill: COLOR.white }} />}
          aria-controls="faq-content-1"
          id="faq-header-1"
          style={{
            background: COLOR.bg.primary,
            color: COLOR.white,
            padding: "0.3rem 2rem",
          }}
        >
          <Typography>
            현재 보유하고 있는 피스 포인트 양은 어디서 확인할 수 있나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            background: COLOR.bg.secondary,
            color: COLOR.white,
            padding: "1rem 2rem",
          }}
        >
          <Typography>
            나의 섬 페이지 &gt; 상점 목록에서 피스 포인트에서 확인할 수
            있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ maxWidth: "50rem", width: "100%", margin: "0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ fill: COLOR.white }} />}
          aria-controls="faq-content-2"
          id="faq-header-2"
          style={{
            background: COLOR.bg.primary,
            color: COLOR.white,
            padding: "0.3rem 2rem",
          }}
        >
          <Typography>
            챌린지 제안으로 하여금 챌린지는 어떻게 열리나요?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            background: COLOR.bg.secondary,
            color: COLOR.white,
            padding: "1rem 2rem",
          }}
        >
          <Typography>
            많은 사람들의 좋아요를 받은 챌린지 제안은 PeacePiece팀이 검토하여
            챌린지를 열게 됩니다. 많은 제안과 관심 부탁드립니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ maxWidth: "50rem", width: "100%", margin: "0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ fill: COLOR.white }} />}
          aria-controls="faq-content-3"
          id="faq-header-3"
          style={{
            background: COLOR.bg.primary,
            color: COLOR.white,
            padding: "0.3rem 2rem",
          }}
        >
          <Typography>
            나의 섬에 더 많은 아이템과 캐릭터를 배치하고 싶어요!
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            background: COLOR.bg.secondary,
            color: COLOR.white,
            padding: "1rem 2rem",
          }}
        >
          <Typography>
            PeacePiece팀이 열심히 다음 업데이트를 준비하고 있어요. 🐥
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FAQAccordion;
