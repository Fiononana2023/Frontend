import { Link } from "react-router-dom";

function Footers() {
  return (
    <div className="mt-auto rounded-xl mb-8">
      <div className="flex justify-center w-full">
        <div className="bg-[url('/images/blue.png')] bg-no-repeat bg-local mx-64 mb-10 px-28 rounded-lg w-100lvw">
          <div>
            <h2 className="text-white  my-4 text-xl font-semibold text-center">
              Sing un and get started with Trello today. A world of productive
              teamwork awaits !
            </h2>
            <input className="rounded-md mx-4 px-6 py-2" placeholder="Email" />
            <button className="bg-sky-400 rounded-md mb-12 px-6 py-2 text-white">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center font-mono">
        <p>Trello also works great on your smaller screen</p>
        <Link to={"https://developer.apple.com/app-store-connect/"}>
          <img src="/images/a3a.png" className="h-10 mx-6" />
        </Link>

        <Link to={"https://play.google.com/store/games?hl=fr"}>
          <img src="/images/p1a.png" className="h-10" />
        </Link>
      </div>
      <div className="flex justify-center mt-6">
        <select
          name="languages"
          className=" border-zinc-200 border-2 text-gray-500"
        >
          <option value="FR">French (FR)</option>
          <option value="US">Englesh (US)</option>
          <option value="JP">Japonese (Jap)</option>
          <option value="RU">Russe (RU)</option>
          <option value="GR">Germany (GR)</option>
        </select>
      </div>

      <div className="flex flex-row justify-center mt-3">
        <a className="mx-3 underline text-slate-400">Templates</a>
        <a className="mx-3 underline text-slate-400">Pricing</a>
        <a className="mx-3 underline text-slate-400">Apps</a>
        <a className="mx-3 underline text-slate-400">Jobs</a>
        <a className="mx-3 underline text-slate-400">Blogs</a>
        <a className="mx-3 underline text-slate-400">Developers</a>
        <a className="mx-3 underline text-slate-400">About</a>
        <a className="mx-3 underline text-slate-400">Help</a>
        <a className="mx-3 underline text-slate-400">Legal</a>
        <a className="mx-3 underline text-slate-400">Cookies settings</a>
        <a className="mx-3 underline text-slate-400">Privacy</a>
      </div>

      <div className="flex justify-center my-4 ">
        <img src="/images/1Atlassian.jpg" className="h-6" />
      </div>
      <span className="text-gray-500">
        © {new Date().getFullYear()} . All Rights Reserved.
      </span>
    </div>
  );
}

export default Footers;
