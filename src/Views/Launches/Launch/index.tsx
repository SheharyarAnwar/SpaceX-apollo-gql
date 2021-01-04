import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { useLaunchQuery } from "./../../../generated/graphql";
import Modal from "../../../Components/Modal/index";
const Index = () => {
  const { flight_number }: { flight_number: string } = useParams();
  console.log(useParams());
  const { data, loading, error } = useLaunchQuery({
    variables: { id: flight_number },
  });
  error && console.log(error.message);
  const modalProps = data && {
    details: data!.launch!.details,
    rocketName: data!.launch!.rocket!.rocket_name,
    articleLink: data!.launch!.links!.article_link,
    videoLink: data!.launch!.links!.video_link,
  };
  const errorProps = error && {
    details: error?.message,
    rocketName: "",
    articleLink: "",
    videoLink: "",
  };
  data && console.log(data);
  return (
    <>
      {loading ? (
        <CircularProgress style={{ margin: "auto" }} />
      ) : (
        <Modal {...modalProps} {...errorProps} />
      )}
    </>
  );
};

export default Index;
