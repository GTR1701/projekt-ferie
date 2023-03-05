import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function AuthCheck(props) {
  const { username } = useContext(UserContext);

  return username
    ? props.children
    : props.fallback || (
        <Link className="btn btn-google musisz" href="/Enter">
          Musisz być zalogowany
        </Link>
      );
}
