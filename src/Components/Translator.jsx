import React, { useState } from "react";
import { Jumbotron, Container, Button } from "reactstrap";
import { useTranslation } from "react-i18next";

function Translator() {
  const { t, i18n } = useTranslation();

  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">{t("welcome1")}</h1>
        <p className="lead">{t("welcome2")}</p>
        <Button
          color="success"
          onClick={() =>
            i18n.language === "en"
              ? i18n.changeLanguage("te")
              : i18n.changeLanguage("en")
          }
        >
          {" "}
          changeLanguage
        </Button>
      </Container>
    </Jumbotron>
  );
}

export default Translator;
