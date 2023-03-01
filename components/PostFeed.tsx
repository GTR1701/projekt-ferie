import Link from "next/link";

export default function PostFeed({ posts, admin }) {
  return posts
    ? posts.map((post) => (
        <PostItem post={post} key={posts.nrTelefonu} admin={admin} />
      ))
    : null;
}

function PostItem({ post, admin = false }) {
  const przyj = new Date(post.dataPrzyjazdu).toString();
  const wyj = new Date(post.dataWyjazdu).toString();
  return (
    <div className="card">
      <div className="tabela">
        <h1>Imię i nazwisko: {post.imięINazwisko}</h1>
        <h1>Data przyjazdu: {przyj.slice(4, 15)}</h1>
        <h1>Data wyjazdu: {wyj.slice(4, 15)}</h1>
        <h1>Ilość osób: {post.ilośćOsób}</h1>
        <h1>Ilość nocy: {post.ilośćNocy}</h1>
        <h1>Pokój/Pakiet: {post.pokojPakiet}</h1>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h1>Dane kontaktowe</h1>
        <span></span>
        <h1>Mail: {post.eMail}</h1>
        <h1>Ulica: {post.Ulica}</h1>
        <h1>
          Miasto: {post.kodPocztowy} {post.miasto}
        </h1>
        <span></span>
        <h1>Nr. telefonu: {post.nrTelefonu}</h1>
      </div>

      <footer>
        <span></span>
        <span className="push-left"></span>
      </footer>
    </div>
  );
}
