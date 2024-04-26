import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Marketing QA
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal menu-lg px-1">
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link href={"/adbuild"}>Ad Build QA</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
