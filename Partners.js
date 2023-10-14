import "./Partners.css";

export default ({ partnerList, close }) => {
  return (
    <div className="Partners" onClick={close}>
      {partnerList?.length && (
        <ul className="list">
          {partnerList.map((e, i) => (
            <li className="item" key={i}>
              {e["Partner_name"]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
