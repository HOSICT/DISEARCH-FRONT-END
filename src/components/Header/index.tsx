import { useUserGuildsStore } from "@/stores/userGuildsStore";
import { useUserInfoStore } from "@/stores/userInfo";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router-dom";

const loginURL = `https://discord.com/api/oauth2/authorize?scope=identify+email+guilds+guilds.join&response_type=code&client_id=${import.meta.env.VITE_DISCORD_CLIENT_ID}&redirect_uri=http://localhost:5173/OAuth2`;

const Header = () => {
  const { userInfo } = useUserInfoStore();
  const { userGuildsInfo } = useUserGuildsStore();
  return (
    <header className=" bg-[#313338] w-full h-[120px]">
      <div className="flex items-center justify-between w-full h-[90px] px-5">
        <div>
          <h1
            className="text-white text-[30px]"
            onClick={() => {
              console.log(userInfo);
              console.log(userGuildsInfo);
            }}
          >
            DISEARCH
          </h1>
        </div>
        <form className="relative lg:w-[440px]">
          <div className="flex h-8">
            <FcSearch className="absolute top-1/2 left-2 -translate-y-1/2 z-10" size={20} />
            <input type="text" className="relative  w-full h-full rounded-l-xl text-black pl-10 outline-none"></input>
            <button className="bg-black text-white  h-full rounded-l-none rounded-r-xl w-1/6 text-center">검색</button>
          </div>
        </form>
        <div className="">
          <Link to={loginURL} className="flex sm:text-base text-sm cursor-pointer">
            <img src="/discord.png" alt="디스코드로고" width={70} />
            <span className="text-center h-[50px] leading-[50px]">로그인</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
