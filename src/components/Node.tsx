import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import colors from "../constants/colors";
import Status from "./Status";
import { Block, Node as NodeType } from "../types/Node";
import Loader from "./Loader";

type Props = {
  node: NodeType;
  expanded: boolean;
  toggleNodeExpanded: (node: NodeType) => void;
};

const AccordionRoot = styled(Accordion)({
  margin: "16px 0",
  boxShadow: "0px 3px 6px 1px rgba(0,0,0,0.15)",

  "&:before": {
    backgroundColor: "unset",
  },
});

const AccordionSummaryContainer = styled(AccordionSummary)({
  padding: "0 24px",
  "& .MuiAccordionSummary-content": {
    margin: "10px 0 !important", // Avoid change of sizing on expanded
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: colors.faded,
  },
});

const BoxSummaryContent = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingRight: 20,
});

const TypographyHeading = styled(Typography)({
  fontSize: 17,
  display: "block",
  color: colors.text,
  lineHeight: 1.5,
});

const TypographySecondaryHeading = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: colors.faded,
  lineHeight: 2,
}));

const BoxBlockContent = styled(Box)(() => ({
  background: "rgba(0, 0, 0, 0.12)",
  borderRadius: "2px",
  display: "flex",
  padding: "8px 8px 4px 8px",
  marginBottom: "4px",
}));

const BoxBlockAttributes = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

const TypographyAttributeData = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: "#263238",
  letterSpacing: "0.25px",
}));

const TypographyAttributeIndex = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "1.5px",
  color: "#304FFE",
}));

const Node: React.FC<Props> = ({ node, expanded, toggleNodeExpanded }) => {
  return (
    <AccordionRoot
      elevation={3}
      expanded={expanded}
      onChange={() => toggleNodeExpanded(node)}
    >
      <AccordionSummaryContainer expandIcon={<ExpandMoreIcon />}>
        <BoxSummaryContent>
          <Box>
            <TypographyHeading variant="h5">
              {node.name || "Unknown"}
            </TypographyHeading>
            <TypographySecondaryHeading variant="subtitle1">
              {node.url}
            </TypographySecondaryHeading>
          </Box>
          <Status
            loading={node.loading}
            isError={node.isError}
            online={node.online}
          />
        </BoxSummaryContent>
      </AccordionSummaryContainer>
      <AccordionDetails>
        {node.loading ? (
          <Loader />
        ) : (
          <>
            {node.block && node.block.length ? (
              node.block.map((b: Block, idx: number) => (
                <BoxBlockContent key={idx}>
                  <BoxBlockAttributes>
                    <TypographyAttributeIndex>
                      {("00" + b.attributes.index).slice(-3)}
                    </TypographyAttributeIndex>
                    <TypographyAttributeData>
                      {b.attributes.data}
                    </TypographyAttributeData>
                  </BoxBlockAttributes>
                </BoxBlockContent>
              ))
            ) : (
              <BoxBlockContent>No block found</BoxBlockContent>
            )}
          </>
        )}
      </AccordionDetails>
    </AccordionRoot>
  );
};

export default Node;
