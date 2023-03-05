export default function PostFeed({ posts, admin }) {
  return posts
    ? posts.map((post) => <PostItem post={post} key={posts.id} admin={admin} />)
    : null;
}

function PostItem({ post, admin = false }) {
  const przyj = new Date(post.dataPrzyjazdu).toString();
  const wyj = new Date(post.dataWyjazdu).toString();
  return (
    <div className="card">
      <div className="tabela">
        <p>
          <b>Imię i nazwisko: </b>
          {post.imięINazwisko}
        </p>

        <p>
          <b>Data przyjazdu:</b> {przyj.slice(4, 15)}
        </p>
        <p>
          <b>Data wyjazdu:</b> {wyj.slice(4, 15)}
        </p>
        <p>
          <b>Ilość osób:</b> {post.ilośćOsób}
        </p>
        <p>
          <b>Ilość nocy:</b> {post.ilośćNocy}
        </p>
        <p>
          <b>Pokój/Pakiet:</b> {post.pokojPakiet}
        </p>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h1>Dane kontaktowe</h1>
        <span></span>
        <p>
          <b>Mail:</b> {post.eMail}
        </p>
        <p>
          <b>Ulica:</b> {post.Ulica}
        </p>
        <p>
          <b>Miasto:</b> {post.kodPocztowy} {post.miasto}
        </p>
        <span></span>
        <p>
          <b>Nr. telefonu:</b> {post.nrTelefonu}
        </p>
      </div>
    </div>
  );
}
