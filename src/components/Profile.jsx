import s from "../components/Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.content__info}>
        <div className={s.content__img}>
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
            alt="imageContent"
          />
        </div>
        <div className={s.content__avatar}>
          <img
            src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
            alt="avatar"
          />
          <div className="content__infoUser">
            <h3>Aleksandr.G</h3>
            <p>Date of Birth: 23 august</p>
            <p>City: Lysva</p>
            <p>Edugation: PGTU</p>
          </div>
        </div>
        <div className={s.post__user}>
          My Post
          <div>
            New post
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
