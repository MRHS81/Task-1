import { useState } from "react";
import { allData } from "../../data/data";

function CardsList() {
  const [data, setData] = useState(allData);

  return (
    <div className="cards-list">
      {data.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CardsList;

function CardItem({ item }) {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__title">
          <span className="badge badge--primary">
            {item.id.toLocaleString("fa-IR")}
          </span>
          <p>آپلود مستندات</p>
        </div>
        <span className="card__date">
          {new Date(item.createdAt).toLocaleDateString("fa-IR")}
        </span>
      </div>
      <div className="card__body">
        <div className="card__detail">
          <div className="card__text">
            <p>درخواست عضویت</p>
            <span className="request-id">شناسه درخواست ۱۲۳۴۵۶#</span>
          </div>
          <div className="card__avatar">
            <div className="avatar__image">
              <img src={item.userImage} alt="avatar" />
            </div>
            <p className="avatar__name">{item.userName}</p>
          </div>
        </div>
        <button className="btn btn--primary">مشاهده درخواست</button>
      </div>
    </div>
  );
}
