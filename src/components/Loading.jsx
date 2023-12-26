import LoadingItem from "../assets/styledComponent/LoadingItem";

const Loading = () => {
  return (
    <LoadingItem>
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingItem>
  );
};

export default Loading;
